import { AdminConfirmSignUpCommand } from "@aws-sdk/client-cognito-identity-provider";
import { COGNITO_USER_POOL_ID } from "../../constants";
import { cognitoClient } from "../../instances/aws";

export const adminConfirmSignUpCommandService = (email: string) => {
  const confirmSignUpCommand = new AdminConfirmSignUpCommand({
    UserPoolId: COGNITO_USER_POOL_ID,
    Username: email,
  });

  return cognitoClient.send(confirmSignUpCommand);
};
