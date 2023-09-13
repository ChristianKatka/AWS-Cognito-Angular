import { PutCommand } from "@aws-sdk/lib-dynamodb";
import { NOTES_TABLE } from "../constants";
import { dynamoDBClient } from "../instances/aws";
import { Note } from "../models/note.model";

export const createNoteService = async (note: Note) => {
  const putCommand = new PutCommand({
    TableName: NOTES_TABLE,
    Item: note,
  });

  return await dynamoDBClient.send(putCommand);
};
