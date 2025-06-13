"use client";

import { useState, useEffect } from "react";
import { getItems, addTodo, database } from "../lib/appwrite";
import { CgRemoveR } from "react-icons/cg";
import Image from "next/image";

const DATABASE_ID = process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID ?? "";
const COLLECTION_ID = process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_ID ?? "";

if (!DATABASE_ID || !COLLECTION_ID) {
  console.error("Missing Appwrite environment variables");
}

type Todo = {
  id: string;
  name: string;
};

export default function TodoList() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState("");

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

  const generateTodo = async () => {
    if (!newTodo.trim()) return;
    try {
      await addTodo(newTodo);
      setNewTodo("");
      await fetchTodos();
    } catch (err) {
      console.error("Error adding todo", err);
    }
  };

  const deleteTodo = async (id: string) => {
    try {
      await database.deleteDocument(DATABASE_ID, COLLECTION_ID, id);
      fetchTodos();
    } catch (err) {
      console.error("Error deleting todo", err);
    }
  };

  return (
    <main className="p-4 max-w-xl mx-auto">
      <div className="flex gap-2 items-center justify-center pb-2 ">
        <Image src={"/todoList.png"} alt="todo" width={50} height={30} />
        <h1 className="group text-2xl">To-Do List</h1>
      </div>
      <div className="flex mb-4 gap-2">
        <input
          className="rounded-full border px-3 flex-1"
          placeholder="New task"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button
          onClick={generateTodo}
          className="group relative z-10 w-fit cursor-pointer overflow-hidden rounded-full bg-violet-50 px-7 py-3 text-black"
        >
          Add
        </button>
      </div>
      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="flex justify-between items-center border-b py-2 text-white"
          >
            {todo.name}
            <button onClick={() => deleteTodo(todo.id)}>
              <CgRemoveR />
            </button>
          </li>
        ))}
      </ul>
    </main>
  );
}
