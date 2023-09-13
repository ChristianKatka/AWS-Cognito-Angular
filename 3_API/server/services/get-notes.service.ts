import { dynamoDBClient } from "../instances/aws";
import { ScanCommand } from "@aws-sdk/lib-dynamodb";
import { NOTES_TABLE } from "../constants";

export const getNotesService = async () => {
  const scanCommand = new ScanCommand({
    TableName: NOTES_TABLE,
  });

  return await dynamoDBClient.send(scanCommand).then((res) => res.Items);
};
