import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";
import * as cognito from "aws-cdk-lib/aws-cognito";
import { CognitoUserPoolsAuthorizer } from "aws-cdk-lib/aws-apigateway";

export class CognitoStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const pool = new cognito.UserPool(this, "Pool");
    userPoolName: "cdk-pool";
    pool.addClient("app-client", {
      oAuth: {
        flows: {
          authorizationCodeGrant: true,
        },
        scopes: [
          cognito.OAuthScope.OPENID,
          cognito.OAuthScope.EMAIL,
          cognito.OAuthScope.PHONE,
        ],
        callbackUrls: ["https://oauth.pstmn.io/v1/callback"],
        logoutUrls: ["https://oauth.pstmn.io/v1/callback"],
      },
      supportedIdentityProviders: [
        cognito.UserPoolClientIdentityProvider.FACEBOOK,
        cognito.UserPoolClientIdentityProvider.COGNITO,
      ],
    });

    const provider = new cognito.UserPoolIdentityProviderFacebook(
      this,
      "Facebook",
      {
        clientId: "facebook-id",
        clientSecret: "facebook-secret",
        userPool: pool,
      }
    );

    pool.addDomain("CognitoDomain", {
      cognitoDomain: {
        domainPrefix: "cdk-restaurant-auth",
      },
    });
  }
}
