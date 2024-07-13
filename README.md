# AWS Cognito Integration with Restaurant API #

This project is an extension of the existing Restaurant API, designed to integrate user identity and access management using AWS Cognito. This README provides an overview of the planned implementation.

## Overview ##
The Restaurant API allows users to interact with a database of restaurants, enabling functionalities such as searching for restaurants in New York City by cuisine or unique ID. This project aims to use AWS Lambda authorizers with a third-party identity provider to secure the restaurant API. 

## Architecture ##

![image](https://github.com/user-attachments/assets/ebde087e-c54e-4ee5-8818-957b0a38b81d)

## Lambda Authorizer ##
Upon invocation, the Lambda authorizer performs the following procedure:

1. Receive the token event payload and isolate token string.
2. Verify the token with third-party identity provider.
3. Retrieve the scopes from the decoded token.
4. Iterate over the scopes present in the token and create identity and access management (IAM) policy statements based on entries in the permissions mapping document that contain the scope in question.
4. Create an IAM policy using the generated IAM policy statements. 
5. Return complete IAM policy to API Gateway.



