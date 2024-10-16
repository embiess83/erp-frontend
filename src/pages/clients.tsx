import { Helmet } from 'react-helmet-async';

import { CONFIG } from 'src/config-global';
import { ClientList } from 'src/sections/client/list/client-list';

// ----------------------------------------------------------------------

export default function Page() {
  return (
    <>
      <Helmet>
        <title> {`Clients - ${CONFIG.appName}`}</title>
      </Helmet>

      <ClientList />
    </>
  );
}