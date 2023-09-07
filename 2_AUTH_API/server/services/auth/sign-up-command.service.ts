import { SignUpCommand } from "@aws-sdk/client-cognito-identity-provider";
import { COGNITO_CLIENT_ID } from "../../constants";
import { cognitoClient } from "../../instances/aws";

export const signUpCommandService = (email: string, password: string) => {
  const signUpCommand = new SignUpCommand({
    ClientId: COGNITO_CLIENT_ID,
    Username: email,
    Password: password,
    UserAttributes: [{ Name: "email", Value: email }],
  });

  return cognitoClient.send(signUpCommand);
};
