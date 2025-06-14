"use client";

import { useState, useEffect } from "react";
import { getItems, addTodo, database } from "../../lib/appwrite";
import { CgRemoveR } from "react-icons/cg";

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

export default function TodoAdmin() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [name, setName] = useState("");
  const [dmg, setDmg] = useState("");

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
    if (!name.trim() || !dmg.trim()) return;
    try {
      await addTodo(name, dmg);
      setName("");
      setDmg("");
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
    <div className="p-4 max-w-xl mx-auto">
      <div className="flex mb-4 gap-2">
        <input
          className="rounded-full border px-3 flex-1"
          placeholder="New task"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="rounded-full border px-3 flex-1"
          placeholder="Set Damage"
          value={dmg}
          onChange={(e) => setDmg(e.target.value)}
        />
        <button
          onClick={generateTodo}
          className="group relative z-10 w-fit cursor-pointer overflow-hidden rounded-full bg-violet-50 px-7 py-3 text-black"
        >
          Add
        </button>
      </div>
      <div className="flex justify-between items-center underline">
        <p>Magic</p>
        <p className="pr-7">Damage</p>
      </div>
      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="flex justify-between items-start border-b py-2 text-white"
          >
            <p className="text-left">{todo.name}</p>
            <div className="flex items-center gap-4">
              <p>{todo.dmg}</p>

              <button onClick={() => deleteTodo(todo.id)}>
                <CgRemoveR />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
