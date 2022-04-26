import '../styles/globals.css'

import Amplify, { API, graphqlOperation } from 'aws-amplify';
import awsconfig from '../aws-exports';
configure({awsconfig, ssr: true});

function AnsiraAgreementsAdmin({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default AnsiraAgreementsAdmin
