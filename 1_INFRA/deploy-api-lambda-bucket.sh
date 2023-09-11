#!/usr/bin/env bash
set -e 

REGION="eu-west-1"
TEMPLATE_FILE="./api-lambda-bucket.yaml"
STACK_NAME="krisu-auth-app---auth-api-lambda-bucket"

aws cloudformation deploy \
  --stack-name "$STACK_NAME"  \
  --template-file "${TEMPLATE_FILE}" \
  --region "$REGION"
