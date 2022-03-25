import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type AgreementsMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type DocumentsMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type RegisteredAppsMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Agreements {
  readonly id: string;
  readonly signer_name?: string;
  readonly signer_email?: string;
  readonly signed?: boolean;
  readonly signed_date?: string;
  readonly creater_email?: string;
  readonly notification_list?: string;
  readonly created?: string;
  readonly updated?: string;
  readonly document_id: string;
  readonly registered_app_id: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Agreements, AgreementsMetaData>);
  static copyOf(source: Agreements, mutator: (draft: MutableModel<Agreements, AgreementsMetaData>) => MutableModel<Agreements, AgreementsMetaData> | void): Agreements;
}

export declare class Documents {
  readonly id: string;
  readonly name?: string;
  readonly source_document?: string;
  readonly agreement_image?: string;
  readonly created_by?: string;
  readonly created?: string;
  readonly updated?: string;
  readonly registered_app_id: string;
  readonly Agreements?: (Agreements | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Documents, DocumentsMetaData>);
  static copyOf(source: Documents, mutator: (draft: MutableModel<Documents, DocumentsMetaData>) => MutableModel<Documents, DocumentsMetaData> | void): Documents;
}

export declare class RegisteredApps {
  readonly id: string;
  readonly name?: string;
  readonly api_key?: string;
  readonly created_by?: string;
  readonly created?: string;
  readonly Documents?: (Documents | null)[];
  readonly Agreements?: (Agreements | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<RegisteredApps, RegisteredAppsMetaData>);
  static copyOf(source: RegisteredApps, mutator: (draft: MutableModel<RegisteredApps, RegisteredAppsMetaData>) => MutableModel<RegisteredApps, RegisteredAppsMetaData> | void): RegisteredApps;
}