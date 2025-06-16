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
  dmg: number;
};

export default function TodoAdmin() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [name, setName] = useState("");
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [dmgInput, setDmgInput] = useState("");
  const [dmg, setDmg] = useState<number | null>(null);

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
    if (!name.trim()) return;
    try {
      await addTodo(name, dmg ?? 0);
      setName("");
      setDmg(0);
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
    <div>
      <div className="flex mb-4 gap-2">
        <input
          className="rounded-full border px-3 flex-1"
          placeholder="New magic"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="rounded-full border max-w-25 border-white px-3 flex-1 text-neutral-400"
          placeholder="Set Damage"
          value={dmg ?? 0}
          onChange={(e) => {
            const val = e.target.value;

            // Allow empty, integers, decimals (like ".", "0.", "0.1", "1.2")
            if (/^\d*\.?\d*$/.test(val)) {
              setDmgInput(val);

              // Only update dmg if it's a valid number
              const parsed = Number(val);
              setDmg(!isNaN(parsed) && val !== "" ? parsed : null);
            }
          }}
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
      <ul className="mb-4">
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
