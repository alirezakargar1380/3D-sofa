import { _jobs } from 'src/_mock/_job';

import { JobEditView } from 'src/sections/job/view';

// ----------------------------------------------------------------------

export const metadata = {
  title: 'Dashboard: Job Edit',
};

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function JobEditPage({ params }: Props) {
  const { id } = await params;

  return <JobEditView id={id} />;
}

export async function generateStaticParams() {
  return _jobs.map((job) => ({
    id: job.id,
  }));
}
