import { Helmet } from 'react-helmet-async';

import { CONFIG } from 'src/config-global';
import { OrderForm } from 'src/sections/order/form';

// ----------------------------------------------------------------------

export default function Page() {
  return (
    <>
      <Helmet>
        <title> {`Orders - ${CONFIG.appName}`}</title>
      </Helmet>

      <OrderForm />
    </>
  );
}
