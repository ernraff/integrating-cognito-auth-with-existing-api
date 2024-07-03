# AWS Cognito Integration with Restaurant API #

This project is an extension of the existing Restaurant API, designed to integrate user identity and access management using AWS Cognito. This README provides an overview of the planned implementation.

##Overview##
The Restaurant API allows users to interact with a database of restaurants, enabling functionalities such as searching for restaurants in New York City by cuisine or unique ID. This project aims to enhance the API by adding user authentication and authorization capabilities using AWS Cognito and AWS User Pools.

##Features##
* User Registration and Login
* Secure API Endpoints
* JWT Token-Based Authentication
* Role-Based Access Control

##Architecture

![image](https://github.com/ernraff/integrating-cognito-auth-with-existing-api/assets/103540977/85006382-baa4-49e3-9b52-b0a487fcba55)

The Restaurant API with Cognito integration will include the following components:
* AWS Cognito User Pool:  Manages user registration, authentication, and user data
* AWS Cognito Identity Pool: Provides temporary AWS credentials to access other AWS services

##Usage##
###User Registration###
Users can register through the Cognito User Pool.

###User Login###
Users can log in and obtain a JWT token for accessing secured endpoints.

###Secured Endpoints###
Update Lambda functions to authorize requests using JWT tokens.

