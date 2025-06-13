import About from "@/components/About";
import Hero from "@/components/Hero";
import TodoList from "@/components/Todo/TodoList";

export default function page() {
  return (
    <div className="flex flex-col w-full pt-0 pb-20 gap-16 sm:pt-0">
      <Hero />
      <main className="max-w-4xl mx-auto">
        <About />
        <TodoList />
      </main>
    </div>
  );
}
