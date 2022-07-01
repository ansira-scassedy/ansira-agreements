import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type TokenManagerMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type EventLogMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type AgreementMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type DocumentMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type AppRegistryMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class TokenManager {
  readonly id: string;
  readonly token?: string | null;
  readonly refeshToken?: string | null;
  readonly dateCreated?: string | null;
  readonly appregistryID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<TokenManager, TokenManagerMetaData>);
  static copyOf(source: TokenManager, mutator: (draft: MutableModel<TokenManager, TokenManagerMetaData>) => MutableModel<TokenManager, TokenManagerMetaData> | void): TokenManager;
}

export declare class EventLog {
  readonly id: string;
  readonly Event?: string | null;
  readonly Request?: string | null;
  readonly Response?: string | null;
  readonly description?: string | null;
  readonly appregistryID: string;
  readonly agreementID: string;
  readonly documentID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<EventLog, EventLogMetaData>);
  static copyOf(source: EventLog, mutator: (draft: MutableModel<EventLog, EventLogMetaData>) => MutableModel<EventLog, EventLogMetaData> | void): EventLog;
}

export declare class Agreement {
  readonly id: string;
  readonly vendorId?: string | null;
  readonly status?: string | null;
  readonly EventLogs?: (EventLog | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Agreement, AgreementMetaData>);
  static copyOf(source: Agreement, mutator: (draft: MutableModel<Agreement, AgreementMetaData>) => MutableModel<Agreement, AgreementMetaData> | void): Agreement;
}

export declare class Document {
  readonly id: string;
  readonly vendorId?: string | null;
  readonly path?: string | null;
  readonly status?: string | null;
  readonly appregistryID: string;
  readonly Agreement?: Agreement | null;
  readonly EventLogs?: (EventLog | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly documentAgreementId?: string | null;
  constructor(init: ModelInit<Document, DocumentMetaData>);
  static copyOf(source: Document, mutator: (draft: MutableModel<Document, DocumentMetaData>) => MutableModel<Document, DocumentMetaData> | void): Document;
}

export declare class AppRegistry {
  readonly id: string;
  readonly name?: string | null;
  readonly description?: string | null;
  readonly isActive?: boolean | null;
  readonly createdBy?: string | null;
  readonly Documents?: (TokenManager | null)[] | null;
  readonly EventLogs?: (TokenManager | null)[] | null;
  readonly apiKey?: string | null;
  readonly webhookURI?: string | null;
  readonly TokenManagers?: (TokenManager | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<AppRegistry, AppRegistryMetaData>);
  static copyOf(source: AppRegistry, mutator: (draft: MutableModel<AppRegistry, AppRegistryMetaData>) => MutableModel<AppRegistry, AppRegistryMetaData> | void): AppRegistry;
}