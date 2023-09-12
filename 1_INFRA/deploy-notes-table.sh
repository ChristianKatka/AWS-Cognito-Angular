#!/usr/bin/env bash
set -e 

REGION="eu-west-1"
TEMPLATE_FILE="./notes-table.yaml"
STACK_NAME="krisu-auth-app---notes-table"

aws cloudformation deploy \
  --stack-name "$STACK_NAME"  \
  --template-file "${TEMPLATE_FILE}" \
  --region "$REGION"
