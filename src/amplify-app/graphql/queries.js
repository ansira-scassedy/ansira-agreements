/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getEventLog = /* GraphQL */ `
  query GetEventLog($id: ID!) {
    getEventLog(id: $id) {
      id
      Event
      Request
      Response
      description
      appregistryID
      agreementID
      documentID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listEventLogs = /* GraphQL */ `
  query ListEventLogs(
    $filter: ModelEventLogFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEventLogs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        Event
        Request
        Response
        description
        appregistryID
        agreementID
        documentID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncEventLogs = /* GraphQL */ `
  query SyncEventLogs(
    $filter: ModelEventLogFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncEventLogs(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        Event
        Request
        Response
        description
        appregistryID
        agreementID
        documentID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getAgreement = /* GraphQL */ `
  query GetAgreement($id: ID!) {
    getAgreement(id: $id) {
      id
      vendorId
      status
      EventLogs {
        items {
          id
          Event
          Request
          Response
          description
          appregistryID
          agreementID
          documentID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listAgreements = /* GraphQL */ `
  query ListAgreements(
    $filter: ModelAgreementFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAgreements(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        vendorId
        status
        EventLogs {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncAgreements = /* GraphQL */ `
  query SyncAgreements(
    $filter: ModelAgreementFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncAgreements(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        vendorId
        status
        EventLogs {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getDocument = /* GraphQL */ `
  query GetDocument($id: ID!) {
    getDocument(id: $id) {
      id
      vendorId
      path
      status
      appregistryID
      Agreement {
        id
        vendorId
        status
        EventLogs {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      EventLogs {
        items {
          id
          Event
          Request
          Response
          description
          appregistryID
          agreementID
          documentID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      documentAgreementId
    }
  }
`;
export const listDocuments = /* GraphQL */ `
  query ListDocuments(
    $filter: ModelDocumentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDocuments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        vendorId
        path
        status
        appregistryID
        Agreement {
          id
          vendorId
          status
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        EventLogs {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        documentAgreementId
      }
      nextToken
      startedAt
    }
  }
`;
export const syncDocuments = /* GraphQL */ `
  query SyncDocuments(
    $filter: ModelDocumentFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncDocuments(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        vendorId
        path
        status
        appregistryID
        Agreement {
          id
          vendorId
          status
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        EventLogs {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        documentAgreementId
      }
      nextToken
      startedAt
    }
  }
`;
export const getAppRegistry = /* GraphQL */ `
  query GetAppRegistry($id: ID!) {
    getAppRegistry(id: $id) {
      id
      name
      description
      isActive
      createdBy
      Documents {
        items {
          id
          vendorId
          path
          status
          appregistryID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          documentAgreementId
        }
        nextToken
        startedAt
      }
      EventLogs {
        items {
          id
          Event
          Request
          Response
          description
          appregistryID
          agreementID
          documentID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listAppRegistries = /* GraphQL */ `
  query ListAppRegistries(
    $filter: ModelAppRegistryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAppRegistries(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        isActive
        createdBy
        Documents {
          nextToken
          startedAt
        }
        EventLogs {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncAppRegistries = /* GraphQL */ `
  query SyncAppRegistries(
    $filter: ModelAppRegistryFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncAppRegistries(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        description
        isActive
        createdBy
        Documents {
          nextToken
          startedAt
        }
        EventLogs {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
