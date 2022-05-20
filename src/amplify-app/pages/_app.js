import '../styles/globals.css'

import Amplify, {AuthModeStrategyType} from 'aws-amplify';
import { Authenticator } from '@aws-amplify/ui-react';

import config from '../aws-exports';


Amplify.configure({
  ...config,
   ssr: true,
   DataStore: {
    authModeStrategyType: AuthModeStrategyType.MULTI_AUTH
  }
});

function AnsiraAgreementsAdmin({ Component, pageProps }) {
  return <Authenticator.Provider><Component {...pageProps} /></Authenticator.Provider>
}

export default AnsiraAgreementsAdmin
