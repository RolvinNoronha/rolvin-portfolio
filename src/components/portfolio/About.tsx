import { Section } from "../ui/section";
import { Card } from "../ui/card";
import { LuCode, LuZap, LuCloud, LuDatabase } from "react-icons/lu";

const skills = [
  {
    icon: LuCode,
    title: "Programming Languages",
    description: "Java, JavaScript/TypeScript, Go",
  },
  {
    icon: LuZap,
    title: "Frameworks & Libraries",
    description:
      "React Native, Spring Boot, Express.js, Next.js, Gin Framework, React Hook Form, Tanstack Query",
  },
  {
    icon: LuDatabase,
    title: "Databases & Tools",
    description: "MySQL, Postgres, Git & GitHub, Docker, Postman, Firebase",
  },
  {
    icon: LuCloud,
    title: "Cloud",
    description: "AWS, Google Cloud",
  },
];

export const About = () => {
  return (
    <Section id="about" className="bg-gray-50">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="animate-slide-in-left">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About Me
          </h2>
          <div className="space-y-4 text-gray-600 leading-relaxed">
            <p className="text-lg">
              I'm a passionate software engineer with 1+ years of experience
              creating software that make a difference. I specialize in modern
              web technologies and love bringing creative ideas to life through
              clean, efficient code.
            </p>
            <p>
              When I'm not coding, you'll find me exploring new design trends. I
              believe in continuous learning and staying ahead of the curve in
              this ever-evolving field.
            </p>
            <p>
              My approach combines technical expertise with creative
              problem-solving, ensuring that every project is not just
              functional, but also beautiful and user-friendly.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fade-in-up">
          {skills.map((skill, index) => (
            <Card
              key={index}
              className="p-6 hover-lift border-0 gradient-card shadow-md hover:shadow-lg transition-smooth"
            >
              <skill.icon className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {skill.title}
              </h3>
              <p className="text-gray-600 text-sm">{skill.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  );
};
