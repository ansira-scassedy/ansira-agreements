/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateEventLog = /* GraphQL */ `
  subscription OnCreateEventLog {
    onCreateEventLog {
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
export const onUpdateEventLog = /* GraphQL */ `
  subscription OnUpdateEventLog {
    onUpdateEventLog {
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
export const onDeleteEventLog = /* GraphQL */ `
  subscription OnDeleteEventLog {
    onDeleteEventLog {
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
export const onCreateAgreement = /* GraphQL */ `
  subscription OnCreateAgreement {
    onCreateAgreement {
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
export const onUpdateAgreement = /* GraphQL */ `
  subscription OnUpdateAgreement {
    onUpdateAgreement {
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
export const onDeleteAgreement = /* GraphQL */ `
  subscription OnDeleteAgreement {
    onDeleteAgreement {
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
export const onCreateDocument = /* GraphQL */ `
  subscription OnCreateDocument {
    onCreateDocument {
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
export const onUpdateDocument = /* GraphQL */ `
  subscription OnUpdateDocument {
    onUpdateDocument {
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
export const onDeleteDocument = /* GraphQL */ `
  subscription OnDeleteDocument {
    onDeleteDocument {
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
export const onCreateAppRegistry = /* GraphQL */ `
  subscription OnCreateAppRegistry {
    onCreateAppRegistry {
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
export const onUpdateAppRegistry = /* GraphQL */ `
  subscription OnUpdateAppRegistry {
    onUpdateAppRegistry {
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
export const onDeleteAppRegistry = /* GraphQL */ `
  subscription OnDeleteAppRegistry {
    onDeleteAppRegistry {
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
