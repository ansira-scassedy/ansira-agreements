export type AmplifyDependentResourcesAttributes = {
    "api": {
        "AnsiraAgreement": {
            "GraphQLAPIKeyOutput": "string",
            "GraphQLAPIIdOutput": "string",
            "GraphQLAPIEndpointOutput": "string"
        },
        "AgreementsDocument": {
            "RootUrl": "string",
            "ApiName": "string",
            "ApiId": "string"
        },
        "Documents": {
            "RootUrl": "string",
            "ApiName": "string",
            "ApiId": "string"
        },
        "Agreements": {
            "RootUrl": "string",
            "ApiName": "string",
            "ApiId": "string"
        },
        "AnsiraAgreementAPI": {
            "RootUrl": "string",
            "ApiName": "string",
            "ApiId": "string"
        }
    },
    "function": {
        "documentsAPI": {
            "Name": "string",
            "Arn": "string",
            "Region": "string",
            "LambdaExecutionRole": "string"
        },
        "APIDocuments": {
            "Name": "string",
            "Arn": "string",
            "Region": "string",
            "LambdaExecutionRole": "string"
        },
        "APIAgreements": {
            "Name": "string",
            "Arn": "string",
            "Region": "string",
            "LambdaExecutionRole": "string"
        },
        "APIAnsiraAgreements": {
            "Name": "string",
            "Arn": "string",
            "Region": "string",
            "LambdaExecutionRole": "string"
        }
    }
}