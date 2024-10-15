import { Helmet } from 'react-helmet-async';

import { CONFIG } from 'src/config-global';
import { ClientForm } from 'src/sections/client/form';

// ----------------------------------------------------------------------

export default function Page() {
  return (
    <>
      <Helmet>
        <title> {`Clients - ${CONFIG.appName}`}</title>
      </Helmet>

      <ClientForm />
    </>
  );
}