// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { AppTokens, AppRegistry, EventLog, Agreement, Document } = initSchema(schema);

export {
  AppTokens,
  AppRegistry,
  EventLog,
  Agreement,
  Document
};