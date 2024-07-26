# AWS Cognito Integration with Restaurant API #

This project is an extension of the existing Restaurant API, designed to integrate user identity and access management using AWS Cognito. This README provides an overview of the planned implementation.

## Overview ##
The Restaurant API allows users to interact with a database of restaurants, enabling functionalities such as searching for restaurants in New York City by cuisine or unique ID. This project aims to use AWS Cognito User Pool authorizers with a third-party identity provider to secure the restaurant API. 

## Architecture ##

![image](https://github.com/user-attachments/assets/383bc13b-5340-47b9-903a-a0691cfdb907)

##User Pool Configuration##

I wanted to allow federated sign in to my application through a third party identity provider.  For the purposes of this project, I went with Facebook as my third party IdP.  Cognito acts as a bridge between Facebook and my API.  Facebook passes a token to Amazon Cognito. Amazon Cognito reads the claims about the user in the token and maps them to a new user profile in your user pool directory.  Once logged into the user pool a user can request an access token which once received can be used to authorize calls to the API.    

I configured my Cognito User Pool in the AWS CDK.  Infrastructure code can be viewed in the file named cognito-stack.ts.  

##User##
Upon requesting an access token, the user is redirected to the Cognito hosted UI, where they have the option to sign in using Facebook.  After successful sign in, they are redirected to the specified callback URL, and receive a response with and authorization code grant containing the access token.  The user authenticated user can then use the token to make calls to the API.

##Testing##
Testing for token requests and API calls was performed using Postman.

## Setbacks
Due to some issues configuring an API Gateway Authorizer in the CDK as well as my OpenAPI Stack, I added a User Pool authorizer to my API through the API Gateway console.  

##Future Work##
Include user authorization within Lambda proxy based on custom scopes.




