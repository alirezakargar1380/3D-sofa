import { useCallback } from 'react';

import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Badge from '@mui/material/Badge';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import Tooltip from '@mui/material/Tooltip';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Autocomplete from '@mui/material/Autocomplete';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import FormControlLabel from '@mui/material/FormControlLabel';

import Iconify from 'src/components/iconify';
import Scrollbar from 'src/components/scrollbar';

import { ITourGuide, ITourFilters, ITourFilterValue } from 'src/types/tour';

// ----------------------------------------------------------------------

type Props = {
  open: boolean;
  onOpen: VoidFunction;
  onClose: VoidFunction;
  //
  filters: ITourFilters;
  onFilters: (name: string, value: ITourFilterValue) => void;
  //
  canReset: boolean;
  onResetFilters: VoidFunction;
  //
  serviceOptions: string[];
  tourGuideOptions: ITourGuide[];
  destinationOptions: {
    code: string;
    label: string;
    phone: string;
    suggested?: boolean;
  }[];
  //
  dateError: boolean;
};

export default function TourFilters({
  open,
  onOpen,
  onClose,
  //
  filters,
  onFilters,
  //
  canReset,
  onResetFilters,
  //
  destinationOptions,
  tourGuideOptions,
  serviceOptions,
  //
  dateError,
}: Props) {
  const handleFilterServices = useCallback(
    (newValue: string) => {
      const checked = filters.services.includes(newValue)
        ? filters.services.filter((value) => value !== newValue)
        : [...filters.services, newValue];
      onFilters('services', checked);
    },
    [filters.services, onFilters]
  );

  const handleFilterStartDate = useCallback(
    (newValue: Date | null) => {
      onFilters('startDate', newValue);
    },
    [onFilters]
  );

  const handleFilterEndDate = useCallback(
    (newValue: Date | null) => {
      onFilters('endDate', newValue);
    },
    [onFilters]
  );

  const handleFilterDestination = useCallback(
    (newValue: string[]) => {
      onFilters('destination', newValue);
    },
    [onFilters]
  );

  const handleFilterTourGuide = useCallback(
    (newValue: ITourGuide[]) => {
      onFilters('tourGuides', newValue);
    },
    [onFilters]
  );

  const renderHead = (
    <Stack
      direction="row"
      sx={[{ py: 2, pr: 1, pl: 2.5 }, { alignItems: "center", justifyContent: "space-between" }]}
    >
      <Typography variant="h6" sx={{ flexGrow: 1 }}>
        Filters
      </Typography>

      <Tooltip title="Reset">
        <IconButton onClick={onResetFilters}>
          <Badge color="error" variant="dot" invisible={!canReset}>
            <Iconify icon="solar:restart-bold" />
          </Badge>
        </IconButton>
      </Tooltip>

      <IconButton onClick={onClose}>
        <Iconify icon="mingcute:close-line" />
      </IconButton>
    </Stack>
  );

  const renderDateRange = (
    <Stack>
      <Typography variant="subtitle2" sx={{ mb: 1.5 }}>
        Durations
      </Typography>
      <Stack spacing={2.5}>
        <DatePicker label="Start date" value={filters.startDate} onChange={handleFilterStartDate} />

        <DatePicker
          label="End date"
          value={filters.endDate}
          onChange={handleFilterEndDate}
          slotProps={{
            textField: {
              error: dateError,
              helperText: dateError && 'End date must be later than start date',
            },
          }}
        />
      </Stack>
    </Stack>
  );

  const renderDestination = (
    <Stack>
      <Typography variant="subtitle2" sx={{ mb: 1.5 }}>
        Destination
      </Typography>

      <Autocomplete
        multiple
        disableCloseOnSelect
        options={destinationOptions.map((option) => option.label)}
        getOptionLabel={(option) => option}
        value={filters.destination}
        onChange={(event, newValue) => handleFilterDestination(newValue)}
        renderInput={(params) => <TextField placeholder="Select Destination" {...params} />}
        renderOption={({ key, ...optionProps }, option) => {
          const { code, label, phone } = destinationOptions.filter(
            (country) => country.label === option
          )[0];

          if (!label) {
            return null;
          }

          return (
            <li {...optionProps} key={key}>
              <Iconify
                key={label}
                icon={`circle-flags:${code.toLowerCase()}`}
                width={28}
                sx={{ mr: 1 }}
              />
              {label} ({code}) +{phone}
            </li>
          );
        }}
        renderValue={(selected, getItemProps) =>
          selected.map((option, index) => {
            const { key, ...itemProps } = getItemProps({ index });

            return (
              <Chip
                key={key}
                {...itemProps}
                label={option}
                size="small"
                variant="soft"
              />
            );
          })
        }
      />
    </Stack>
  );

  const renderTourGuide = (
    <Stack>
      <Typography variant="subtitle2" sx={{ mb: 1.5 }}>
        Tour Guide
      </Typography>

      <Autocomplete
        multiple
        disableCloseOnSelect
        options={tourGuideOptions}
        value={filters.tourGuides}
        onChange={(event, newValue) => handleFilterTourGuide(newValue)}
        getOptionLabel={(option) => option.name}
        renderInput={(params) => <TextField placeholder="Select Tour Guides" {...params} />}
        renderOption={({ key, ...optionProps }, tourGuide) => (
          <li {...optionProps} key={key}>
            <Avatar
              key={tourGuide.id}
              alt={tourGuide.avatarUrl}
              src={tourGuide.avatarUrl}
              sx={{ width: 24, height: 24, flexShrink: 0, mr: 1 }}
            />

            {tourGuide.name}
          </li>
        )}
        renderValue={(selected, getItemProps) =>
          selected.map((tourGuide, index) => {
            const { key, ...itemProps } = getItemProps({ index });

            return (
              <Chip
                key={key}
                {...itemProps}
                size="small"
                variant="soft"
                label={tourGuide.name}
                avatar={<Avatar alt={tourGuide.name} src={tourGuide.avatarUrl} />}
              />
            );
          })
        }
      />
    </Stack>
  );

  const renderServices = (
    <Stack>
      <Typography variant="subtitle2" sx={{ mb: 1 }}>
        Services
      </Typography>
      {serviceOptions.map((option) => (
        <FormControlLabel
          key={option}
          control={
            <Checkbox
              checked={filters.services.includes(option)}
              onClick={() => handleFilterServices(option)}
            />
          }
          label={option}
        />
      ))}
    </Stack>
  );

  return (
    <>
      <Button
        disableRipple
        color="inherit"
        endIcon={
          <Badge color="error" variant="dot" invisible={!canReset}>
            <Iconify icon="ic:round-filter-list" />
          </Badge>
        }
        onClick={onOpen}
      >
        Filters
      </Button>

      <Drawer
        anchor="right"
        open={open}
        onClose={onClose}
        slotProps={{
          backdrop: { invisible: true }, paper: {
          sx: { width: 280 },
        }
        }}
      >
        {renderHead}

        <Divider />

        <Scrollbar sx={{ px: 2.5, py: 3 }}>
          <Stack spacing={3}>
            {renderDateRange}

            {renderDestination}

            {renderTourGuide}

            {renderServices}
          </Stack>
        </Scrollbar>
      </Drawer>
    </>
  );
}
