import { Client, Databases, ID } from "appwrite";

const PROJECT_ID = process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID;
const DATABASE_ID = process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID;
const COLLECTION_ID = process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_ID;

const client = new Client()
  .setEndpoint("https://fra.cloud.appwrite.io/v1")
  .setProject(PROJECT_ID);

export const database = new Databases(client);
const generatedId = ID.unique();

export const getItems = async () => {
  try {
    const result = await database.listDocuments(DATABASE_ID, COLLECTION_ID);
    return result.documents;
  } catch (error) {
    console.log(error);
  }
};

export const addTodo = async (name) => {
  try {
    await database.createDocument(DATABASE_ID, COLLECTION_ID, generatedId, {
      id: generatedId,
      name: name,
    });
  } catch (error) {
    console.log(error);
  }
};
