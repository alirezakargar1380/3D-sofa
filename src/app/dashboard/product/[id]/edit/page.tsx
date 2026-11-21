import axios, { endpoints } from 'src/utils/axios';

import { ProductEditView } from 'src/sections/product/view';

// ----------------------------------------------------------------------

export const metadata = {
  title: 'Dashboard: Product Edit',
};

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function ProductEditPage({ params }: Props) {
  const { id } = await params;

  return <ProductEditView id={id} />;
}

export async function generateStaticParams() {
  const res = await axios.get(endpoints.product.list);

  return res.data.products.map((product: { id: string }) => ({
    id: product.id,
  }));
}
