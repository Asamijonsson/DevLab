"use client";

import { useState, useEffect } from "react";
import { getItems } from "../../lib/appwrite";
import {
  signInWithGoogle,
  subscribeToAuthStateChanges,
  signOutUser,
} from "../../lib/auth";
import { User } from "firebase/auth";
import Image from "next/image";
import TodoAdmin from "./TodoAdmin";
import TodoList from "./TodoList";

const DATABASE_ID = process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID ?? "";
const COLLECTION_ID = process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_ID ?? "";

if (!DATABASE_ID || !COLLECTION_ID) {
  console.error("Missing Appwrite environment variables");
}

type Todo = {
  id: string;
  name: string;
  dmg: number;
};

export default function TodoListWrapper() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = subscribeToAuthStateChanges(
      (firebaseUser: User | null) => {
        setUser(firebaseUser);
        if (!firebaseUser) {
          fetchTodos();
        }
      }
    );

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    try {
      const data = await getItems();
      setTodos(data ?? []);
    } catch (error) {
      console.log(error);
      setTodos([]);
    }
  };

  return (
    <div className="p-4 pt-50 w-full mx-auto">
      <div className="flex gap-2 items-center justify-center pb-2 ">
        <Image src={"/todoList.png"} alt="todo" width={50} height={30} />
        <h1 className="group text-2xl pr-0.5">Magic List</h1>
        {!user ? (
          <button
            className="group relative plz-10 w-fit cursor-pointer overflow-hidden rounded-full bg-violet-50 px-7 py-3 text-black"
            onClick={signInWithGoogle}
          >
            Generate Magic
          </button>
        ) : (
          <button
            className="group relative plz-10 w-fit cursor-pointer overflow-hidden rounded-full bg-violet-50 px-7 py-3 text-black"
            onClick={signOutUser}
          >
            Return
          </button>
        )}
      </div>

      {user ? <TodoAdmin /> : <TodoList todos={todos} />}
    </div>
  );
}
