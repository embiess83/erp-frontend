import { Helmet } from 'react-helmet-async';

import { CONFIG } from 'src/config-global';
import { ProductForm } from 'src/sections/product/form';

// ----------------------------------------------------------------------

export default function Page() {
  return (
    <>
      <Helmet>
        <title> {`Products - ${CONFIG.appName}`}</title>
      </Helmet>

      <ProductForm />
    </>
  );
}
