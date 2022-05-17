import '../styles/globals.css'

import Amplify, {AuthModeStrategyType} from 'aws-amplify';

import config from '../aws-exports';


Amplify.configure({
  ...config,
   ssr: true,
   DataStore: {
    authModeStrategyType: AuthModeStrategyType.MULTI_AUTH
  }
});

function AnsiraAgreementsAdmin({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default AnsiraAgreementsAdmin
