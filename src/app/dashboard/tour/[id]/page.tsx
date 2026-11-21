import { _tours } from 'src/_mock/_tour';

import { TourDetailsView } from 'src/sections/tour/view';

// ----------------------------------------------------------------------

export const metadata = {
  title: 'Dashboard: Tour Details',
};

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function TourDetailsPage({ params }: Props) {
  const { id } = await params;

  return <TourDetailsView id={id} />;
}

export async function generateStaticParams() {
  return _tours.map((tour) => ({
    id: tour.id,
  }));
}
