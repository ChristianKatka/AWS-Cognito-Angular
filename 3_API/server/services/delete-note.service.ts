import { DeleteCommand } from "@aws-sdk/lib-dynamodb";
import { NOTES_TABLE } from "../constants";
import { dynamoDBClient } from "../instances/aws";

export const deleteNoteService = async (id: string) => {
  const deleteCommand = new DeleteCommand({
    TableName: NOTES_TABLE,
    Key: {
      id,
    },
  });

  return await dynamoDBClient.send(deleteCommand);
};
