import { Client, Databases, ID } from "appwrite";

const PROJECT_ID = process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID ?? "";
const DATABASE_ID = process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID ?? "";
const COLLECTION_ID = process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_ID ?? ""!;

if (!DATABASE_ID || !COLLECTION_ID || !PROJECT_ID) {
  console.error("Missing Appwrite environment variables");
}

const client = new Client()
  .setEndpoint("https://fra.cloud.appwrite.io/v1")
  .setProject(PROJECT_ID);

export const database = new Databases(client);
const newId = ID.unique();

type Todo = {
  id: string;
  name: string;
  dmg: string;
};

export const getItems = async (): Promise<Todo[] | undefined> => {
  try {
    const result = await database.listDocuments(DATABASE_ID, COLLECTION_ID);
    const todos = result.documents.map((doc) => ({
      id: doc.$id,
      name: doc.name,
      dmg: doc.dmg,
    }));

    return todos;
  } catch (error) {
    console.log(error);
  }
};

export const addTodo = async (name: string, dmg: string) => {
  try {
    await database.createDocument(DATABASE_ID, COLLECTION_ID, newId, {
      id: newId,
      name: name,
      dmg: dmg,
    });
  } catch (error) {
    console.log(error);
  }
};
