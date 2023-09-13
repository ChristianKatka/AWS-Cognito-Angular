import { DynamoDBClient } from "@aws-sdk/client-dynamodb";

export const dynamoDBClient = new DynamoDBClient({
  region: "eu-west-1",
});
