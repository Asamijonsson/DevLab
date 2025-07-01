import About from "@/components/About";
import Hero from "@/components/Hero";
import TodoList from "@/components/Todo/TodoListWrapper";

export default function page() {
  return (
    <main className="flex flex-col w-full pt-[55px] pb-20 gap-16 sm:pt-[55px]">
      <Hero />
      <div className="max-w-4xl mx-auto">
        <About />
        <TodoList />
      </div>
    </main>
  );
}
