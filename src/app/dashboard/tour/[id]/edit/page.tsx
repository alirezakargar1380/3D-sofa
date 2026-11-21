import { _tours } from 'src/_mock/_tour';

import { TourEditView } from 'src/sections/tour/view';

// ----------------------------------------------------------------------

export const metadata = {
  title: 'Dashboard: Tour Edit',
};

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function TourEditPage({ params }: Props) {
  const { id } = await params;

  return <TourEditView id={id} />;
}

export async function generateStaticParams() {
  return _tours.map((tour) => ({
    id: tour.id,
  }));
}
