import {
  AdminInitiateAuthCommand,
  AuthFlowType,
} from "@aws-sdk/client-cognito-identity-provider";
import { COGNITO_CLIENT_ID, COGNITO_USER_POOL_ID } from "../../constants";
import { cognitoClient } from "../../instances/aws";

export const adminInitiateAuthWithRefreshTokenService = (
  refreshToken: string
) => {
  const command = new AdminInitiateAuthCommand({
    ClientId: COGNITO_CLIENT_ID,
    UserPoolId: COGNITO_USER_POOL_ID,
    AuthFlow: AuthFlowType.REFRESH_TOKEN_AUTH,
    AuthParameters: { REFRESH_TOKEN: refreshToken },
  });

  return cognitoClient.send(command);
};
