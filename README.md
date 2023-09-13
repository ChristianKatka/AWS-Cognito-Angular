# AWS Cognito Angular

Simple app where users can authenticate with cognito then save notes to the dynamodb via authorized API

Utilize Angular along with an Auth API to manage user sign-in and sign-up processes using Cognito, and seamlessly access API with Cognito-based authorization

# Login using the auth API to obtain tokens that can be utilized for accessing authenticated API
![cognitoAuth](https://github.com/ChristianKatka/AWS-Cognito-Angular/assets/42738047/36b08fb3-691e-480b-8b0a-eec3498f7bb2)


# Slice of the state that contains tokens, which are both saved and synced in the local storage.
<img width="1728" alt="tokens state" src="https://github.com/ChristianKatka/AWS-Cognito-Angular/assets/42738047/a2a059e2-f9b0-4306-9fc9-dfea536fac8f">

# Tokens are saved to the local storage
<img width="1711" alt="tokens" src="https://github.com/ChristianKatka/AWS-Cognito-Angular/assets/42738047/6caf204b-92fa-4759-9fda-eddd679b9839">

# ngrx localstorage sync helps us achieve this easily
<img width="1450" alt="ngrx localstorage sync" src="https://github.com/ChristianKatka/AWS-Cognito-Angular/assets/42738047/96095321-ffd0-445d-b263-67d8802f4044">

# Login page
<img width="484" alt="login" src="https://github.com/ChristianKatka/AWS-Cognito-Angular/assets/42738047/7fad9ccb-df19-4773-a102-1bb833a9f5d3">

# Register Successfull page
<img width="483" alt="register success" src="https://github.com/ChristianKatka/AWS-Cognito-Angular/assets/42738047/24c4dcd7-1353-4ff1-a06d-22a1b6bb42b8">

# Home page
<img width="531" alt="home" src="https://github.com/ChristianKatka/AWS-Cognito-Angular/assets/42738047/1b34af55-ceee-49af-b345-1f3e64010eea">

