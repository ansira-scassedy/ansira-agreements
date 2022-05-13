// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { EventLog, Agreement, Document, AppRegistry } = initSchema(schema);

export {
  EventLog,
  Agreement,
  Document,
  AppRegistry
};