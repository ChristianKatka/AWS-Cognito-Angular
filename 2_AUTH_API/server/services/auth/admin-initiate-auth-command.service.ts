import {
  AdminInitiateAuthCommand,
  AuthFlowType,
} from "@aws-sdk/client-cognito-identity-provider";
import { COGNITO_CLIENT_ID, COGNITO_USER_POOL_ID } from "../../constants";
import { cognitoClient } from "../../instances/aws";

export const adminInitiateAuthCommandService = (
  email: string,
  password: string
) => {
  const command = new AdminInitiateAuthCommand({
    ClientId: COGNITO_CLIENT_ID,
    UserPoolId: COGNITO_USER_POOL_ID,
    AuthFlow: AuthFlowType.ADMIN_USER_PASSWORD_AUTH,
    AuthParameters: { USERNAME: email, PASSWORD: password },
  });

  return cognitoClient.send(command);
};
