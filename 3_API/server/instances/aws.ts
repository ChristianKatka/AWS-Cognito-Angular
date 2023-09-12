import { DynamoDBClient } from "@aws-sdk/client-dynamodb";

export const docClient = new DynamoDBClient({
  region: "eu-west-1",
});
