import { Helmet } from 'react-helmet-async';

import { CONFIG } from 'src/config-global';
import { OrderList } from 'src/sections/order/list/order-list';

// ----------------------------------------------------------------------

export default function Page() {
  return (
    <>
      <Helmet>
        <title> {`Orders - ${CONFIG.appName}`}</title>
      </Helmet>

      <OrderList />
    </>
  );
}
