// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { TokenManager, EventLog, Agreement, Document, AppRegistry } = initSchema(schema);

export {
  TokenManager,
  EventLog,
  Agreement,
  Document,
  AppRegistry
};