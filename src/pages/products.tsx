import { Helmet } from 'react-helmet-async';

import { CONFIG } from 'src/config-global';
import { ProductList } from 'src/sections/product/list/product-list';

// ----------------------------------------------------------------------

export default function Page() {
  return (
    <>
      <Helmet>
        <title> {`Products - ${CONFIG.appName}`}</title>
      </Helmet>

      <ProductList />
    </>
  );
}
