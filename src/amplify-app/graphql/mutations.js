/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createEventLog = /* GraphQL */ `
  mutation CreateEventLog(
    $input: CreateEventLogInput!
    $condition: ModelEventLogConditionInput
  ) {
    createEventLog(input: $input, condition: $condition) {
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
export const updateEventLog = /* GraphQL */ `
  mutation UpdateEventLog(
    $input: UpdateEventLogInput!
    $condition: ModelEventLogConditionInput
  ) {
    updateEventLog(input: $input, condition: $condition) {
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
export const deleteEventLog = /* GraphQL */ `
  mutation DeleteEventLog(
    $input: DeleteEventLogInput!
    $condition: ModelEventLogConditionInput
  ) {
    deleteEventLog(input: $input, condition: $condition) {
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
export const createAgreement = /* GraphQL */ `
  mutation CreateAgreement(
    $input: CreateAgreementInput!
    $condition: ModelAgreementConditionInput
  ) {
    createAgreement(input: $input, condition: $condition) {
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
export const updateAgreement = /* GraphQL */ `
  mutation UpdateAgreement(
    $input: UpdateAgreementInput!
    $condition: ModelAgreementConditionInput
  ) {
    updateAgreement(input: $input, condition: $condition) {
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
export const deleteAgreement = /* GraphQL */ `
  mutation DeleteAgreement(
    $input: DeleteAgreementInput!
    $condition: ModelAgreementConditionInput
  ) {
    deleteAgreement(input: $input, condition: $condition) {
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
export const createDocument = /* GraphQL */ `
  mutation CreateDocument(
    $input: CreateDocumentInput!
    $condition: ModelDocumentConditionInput
  ) {
    createDocument(input: $input, condition: $condition) {
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
export const updateDocument = /* GraphQL */ `
  mutation UpdateDocument(
    $input: UpdateDocumentInput!
    $condition: ModelDocumentConditionInput
  ) {
    updateDocument(input: $input, condition: $condition) {
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
export const deleteDocument = /* GraphQL */ `
  mutation DeleteDocument(
    $input: DeleteDocumentInput!
    $condition: ModelDocumentConditionInput
  ) {
    deleteDocument(input: $input, condition: $condition) {
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
export const createAppRegistry = /* GraphQL */ `
  mutation CreateAppRegistry(
    $input: CreateAppRegistryInput!
    $condition: ModelAppRegistryConditionInput
  ) {
    createAppRegistry(input: $input, condition: $condition) {
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
export const updateAppRegistry = /* GraphQL */ `
  mutation UpdateAppRegistry(
    $input: UpdateAppRegistryInput!
    $condition: ModelAppRegistryConditionInput
  ) {
    updateAppRegistry(input: $input, condition: $condition) {
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
export const deleteAppRegistry = /* GraphQL */ `
  mutation DeleteAppRegistry(
    $input: DeleteAppRegistryInput!
    $condition: ModelAppRegistryConditionInput
  ) {
    deleteAppRegistry(input: $input, condition: $condition) {
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
