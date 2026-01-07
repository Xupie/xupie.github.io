import About from "./components/home/about";
import Projects from "./components/home/projects";
import Skills from "./components/home/skills";

export default function Home() {
  return (
    <main className="bg-surface mx-4 lg:max-w-6xl lg:mx-auto rounded-xl">
      <div className="mx-auto p-4 md:px-12">
        <About />
        <Skills />
        <Projects />
      </div>
    </main>
  );
}
