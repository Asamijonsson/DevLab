import Hero from "@/components/Hero";
import TodoList from "@/components/TodoList";

export default function page() {
  return (
    <div className="grid items-center justify-items-center min-h-screen p-8 pt-0 pb-20 gap-16 sm:p-20 sm:pt-0">
      <main>
        <Hero />
        <TodoList />
      </main>
    </div>
  );
}
