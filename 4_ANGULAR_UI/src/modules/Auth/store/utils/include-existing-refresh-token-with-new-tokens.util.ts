export const includeExistingRefreshTokenWithNewTokens = (
  existingRefreshToken: string,
  newTokens: any
) => {
  return { RefreshToken: existingRefreshToken, ...newTokens };
};
