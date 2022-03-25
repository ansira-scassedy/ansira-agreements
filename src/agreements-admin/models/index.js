// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Agreements, Documents, RegisteredApps } = initSchema(schema);

export {
  Agreements,
  Documents,
  RegisteredApps
};