import { useState } from "react";

export default function TodoList({
  todos,
}: {
  todos: { id: string; name: string; dmg: number }[];
}) {
  const [sortType, setSortType] = useState("name");
  const [sortDirection, setSortDirection] = useState("asc");

  const sortedTodos = [...todos].sort((a, b) => {
    if (sortType === "name") {
      const result = a.name.localeCompare(b.name, "ja", {
        sensitivity: "base",
      });
      return sortDirection === "asc" ? result : -result;
    } else if (sortType === "dmg") {
      const result = a.dmg - b.dmg;
      return sortDirection === "asc" ? result : -result;
    }
    return 0;
  });
  return (
    <div className="overflow-x-hidden">
      <div className="flex justify-between items-center underline text-white mb-4 ">
        <p>Magic</p>
        <p>Damage</p>
      </div>
      <div className="flex justify-between gap-2 mb-4 text-sm">
        <button
          className={`flex px-2 py-1 rounded  ${
            sortType === "name"
              ? "bg-blue-500 text-white"
              : "bg-gray-700 text-white"
          }`}
          onClick={() => setSortType("name")}
        >
          Sort A-Z
        </button>
        <button
          onClick={() => {
            setSortType("dmg");
            setSortDirection(() =>
              sortType === "dmg" && sortDirection === "desc" ? "asc" : "desc"
            );
          }}
        >
          Sort by Damage
          {sortType === "dmg" && sortDirection === "desc" ? "↑" : "↓"}
        </button>
      </div>
      <ul>
        {sortedTodos.map((todo) => (
          <li
            key={todo.id}
            className="flex justify-between items-center border-b py-2 text-white w-full max-w-full overflow-hidden"
          >
            <p className="break-words max-w-[70%]">{todo.name}</p>
            <p className="text-right">{todo.dmg}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
