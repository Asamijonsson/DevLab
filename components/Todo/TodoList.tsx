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

const DATABASE_ID = process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID ?? "";
const COLLECTION_ID = process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_ID ?? "";

if (!DATABASE_ID || !COLLECTION_ID) {
  console.error("Missing Appwrite environment variables");
}

type Todo = {
  id: string;
  name: string;
  dmg: string;
};

export default function TodoList() {
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
    <div className="p-4 pt-50 max-w-xl mx-auto">
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

      {user ? (
        <TodoAdmin />
      ) : (
        <div>
          <div className="flex justify-between items-center underline text-white mb-4 ">
            <p className="flex">Magic</p>
            <p>Damage</p>
          </div>
          <ul>
            {todos.map((todo) => (
              <li
                key={todo.id}
                className="flex justify-between items-center border-b py-2 text-white"
              >
                <p className="flex">{todo.name}</p>
                <p>{todo.dmg}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
