'use client';

import { Amplify } from 'aws-amplify';
import { useMemo, useEffect, useReducer, useCallback } from 'react';
import {
  signIn,
  signUp,
  signOut,
  getCurrentUser,
  confirmSignUp,
  resetPassword,
  fetchUserAttributes,
  resendSignUpCode,
  confirmResetPassword,
} from 'aws-amplify/auth';

import { AMPLIFY_API } from 'src/config-global';

import { AuthContext } from './auth-context';
import type { AuthUserType, ActionMapType, AuthStateType } from '../../types';

// ----------------------------------------------------------------------

if (AMPLIFY_API.userPoolId && AMPLIFY_API.userPoolWebClientId) {
  Amplify.configure({
    Auth: {
      Cognito: {
        userPoolId: AMPLIFY_API.userPoolId,
        userPoolClientId: AMPLIFY_API.userPoolWebClientId,
      },
    },
  });
}

async function resolveCurrentUser(): Promise<AuthUserType> {
  const [currentUser, attributes] = await Promise.all([getCurrentUser(), fetchUserAttributes()]);

  return {
    ...currentUser,
    ...attributes,
    id: currentUser.userId,
    displayName:
      [attributes.given_name, attributes.family_name].filter(Boolean).join(' ') ||
      attributes.email ||
      currentUser.username,
    role: 'admin',
  };
}

// ----------------------------------------------------------------------

enum Types {
  INITIAL = 'INITIAL',
  LOGOUT = 'LOGOUT',
}

type Payload = {
  [Types.INITIAL]: {
    user: AuthUserType;
  };
  [Types.LOGOUT]: undefined;
};

type Action = ActionMapType<Payload>[keyof ActionMapType<Payload>];

const initialState: AuthStateType = {
  user: null,
  loading: true,
};

const reducer = (state: AuthStateType, action: Action) => {
  if (action.type === Types.INITIAL) {
    return {
      loading: false,
      user: action.payload.user,
    };
  }
  if (action.type === Types.LOGOUT) {
    return {
      ...state,
      user: null,
    };
  }
  return state;
};

// ----------------------------------------------------------------------

type Props = {
  children: React.ReactNode;
};

export function AuthProvider({ children }: Props) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const initialize = useCallback(async () => {
    try {
      const user = await resolveCurrentUser();
      dispatch({ type: Types.INITIAL, payload: { user } });
    } catch {
      dispatch({ type: Types.INITIAL, payload: { user: null } });
    }
  }, []);

  useEffect(() => {
    initialize();
  }, [initialize]);

  const login = useCallback(async (email: string, password: string) => {
    const result = await signIn({ username: email, password });

    if (!result.isSignedIn) {
      throw new Error(`Additional Amplify sign-in step required: ${result.nextStep.signInStep}`);
    }

    const user = await resolveCurrentUser();
    dispatch({ type: Types.INITIAL, payload: { user } });
  }, []);

  const register = useCallback(
    async (email: string, password: string, firstName: string, lastName: string) => {
      await signUp({
        username: email,
        password,
        options: {
          userAttributes: {
            email,
            given_name: firstName,
            family_name: lastName,
          },
        },
      });
    },
    []
  );

  const confirmRegister = useCallback(async (email: string, code: string) => {
    await confirmSignUp({ username: email, confirmationCode: code });
  }, []);

  const resendCodeRegister = useCallback(async (email: string) => {
    await resendSignUpCode({ username: email });
  }, []);

  const logout = useCallback(async () => {
    await signOut();
    dispatch({ type: Types.LOGOUT });
  }, []);

  const forgotPassword = useCallback(async (email: string) => {
    await resetPassword({ username: email });
  }, []);

  const newPassword = useCallback(async (email: string, code: string, password: string) => {
    await confirmResetPassword({
      username: email,
      confirmationCode: code,
      newPassword: password,
    });
  }, []);

  const checkAuthenticated = state.user ? 'authenticated' : 'unauthenticated';
  const status = state.loading ? 'loading' : checkAuthenticated;

  const memoizedValue = useMemo(
    () => ({
      user: state.user,
      method: 'amplify',
      loading: status === 'loading',
      authenticated: status === 'authenticated',
      unauthenticated: status === 'unauthenticated',
      login,
      logout,
      register,
      newPassword,
      forgotPassword,
      confirmRegister,
      resendCodeRegister,
    }),
    [
      status,
      state.user,
      login,
      logout,
      register,
      newPassword,
      forgotPassword,
      confirmRegister,
      resendCodeRegister,
    ]
  );

  return <AuthContext.Provider value={memoizedValue}>{children}</AuthContext.Provider>;
}
