#!/usr/bin/env bash
set -e 

REGION="eu-west-1"
TEMPLATE_FILE="./cognito.yaml"
STACK_NAME="krisu-auth-app---user-pool"

aws cloudformation deploy \
  --stack-name "$STACK_NAME"  \
  --template-file "${TEMPLATE_FILE}" \
  --region "$REGION"
