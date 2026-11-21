import { _orders } from 'src/_mock/_order';

import { OrderDetailsView } from 'src/sections/order/view';

// ----------------------------------------------------------------------

export const metadata = {
  title: 'Dashboard: Order Details',
};

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function OrderDetailsPage({ params }: Props) {
  const { id } = await params;

  return <OrderDetailsView id={id} />;
}

export async function generateStaticParams() {
  return _orders.map((order) => ({
    id: order.id,
  }));
}
