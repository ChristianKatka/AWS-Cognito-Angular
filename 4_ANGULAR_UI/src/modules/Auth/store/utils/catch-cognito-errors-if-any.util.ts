import { AuthActions } from '../actions';

export const catchCognitoErrorsIfAny = (response: any): any => {
  if (response.error && response.error.name === 'UserNotFoundException') {
    return AuthActions.Login.error({
      error: undefined,
      errorMessage: response.errorMessage,
    });
  }

  // error name NotAuthorizedException errorMessage is "Incorrect username or password."
  // sometimes errormessage Password attempts exceeded, but cognito api still allows call it again, need to figure out
  if (response.error && response.error.name === 'NotAuthorizedException') {
    return AuthActions.Login.error({
      error: undefined,
      errorMessage: response.errorMessage,
    });
  }

  return AuthActions.Login.success({
    response,
  });
};
