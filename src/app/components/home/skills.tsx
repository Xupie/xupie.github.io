import SkillCard from "../skillcard";

export default function Skills() {
  const skill = [
    { image: "/skill/javascript.svg", label: "JavaScript" },
    { image: "/skill/nodejs.svg", label: "Node.js" },
    { image: "/skill/php.svg", label: "PHP" },
    { image: "/skill/mysql.svg", label: "MySQL" },
    { image: "/skill/csharp.svg", label: "C#" },
    { image: "/skill/java.svg", label: "Java" },
    { image: "/skill/docker.svg", label: "Docker" },
  ];

  return (
    <section>
      <h1
        id="skills"
        className="text-center text-4xl font-sans font-semibold my-4"
      >
        Skills
      </h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
        {skill.map((s) => (
          <SkillCard
            key={s.label}
            img_src={s.image}
            img_alt={s.label}
            label={s.label}
          />
        ))}
      </div>
    </section>
  );
}
