import { ThemeToggle } from "@/components/theme-toggle";

export default function Home() {
  return (
    <section className="py-24">
      <div className="container mx-auto">
        <ThemeToggle />
        <h1 className="text-3xl font-bold">Next TS Starter</h1>
      </div>
    </section>
  );
}
