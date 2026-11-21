import axios, { endpoints } from 'src/utils/axios';

import { ProductShopDetailsView } from 'src/sections/product/view';

// ----------------------------------------------------------------------

export const metadata = {
  title: 'Product: Details',
};

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function ProductShopDetailsPage({ params }: Props) {
  const { id } = await params;

  return <ProductShopDetailsView id={id} />;
}

export async function generateStaticParams() {
  const res = await axios.get(endpoints.product.list);

  return res.data.products.map((product: { id: string }) => ({
    id: product.id,
  }));
}
