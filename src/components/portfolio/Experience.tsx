import { Section } from "../ui/section";
import { Card } from "../ui/card";
import { Badge } from "../ui/badge";
import { LuCalendarDays, LuMapPin } from "react-icons/lu";

const experiences = [
  {
    company: "Gears of Future Advanced Electronics Pvt. Ltd.",
    position: "Software Engineer",
    location: "Bengaluru, Karnataka, India",
    duration: "July 2024 - Present",
    description:
      "Developed and deployed a SaaS platform for construction progress monitoring with a React Native app and web-based comparison tool, enabling 360° panoramic tracking across multiple sites.",
    technologies: [
      "React",
      "React Native",
      "Node.js",
      "TypeScript",
      "Firebase",
      "Google Cloud",
    ],
    achievements: [
      "Built a 360° construction progress tracking SaaS platform.",
      "Reduced on-site reporting by 40% with secure data sharing.",
      "Optimized invoice generation speed by 30%.",
      "Increased engagement with real-time data sync.",
      "Cut infrastructure costs by 18%.",
    ],
  },
  {
    company: "Gears of Future Advanced Electronics Pvt. Ltd.",
    position: "Software Engineer Intern",
    location: "Bengaluru, Karnataka, India",
    duration: "January 2024 - June 2024",
    description:
      "Developed a cross-platform desktop app to automate product price updates and competitor price tracking. Enhanced SEO performance through automated metadata management and increasing organic traffic.",
    technologies: ["React", "TypeScript", "Electron.js", "REST APIs"],
    achievements: [
      "Built a desktop app to automate product price updates via APIs and web crawlers.",
      "Increased product sales by 8% with real-time dynamic pricing.",
      "Improved SEO performance with centralized management of meta tags and descriptions.",
      "Boosted organic traffic by 22% through bulk SEO automation.",
    ],
  },
];

export const Experience = () => {
  return (
    <Section id="experience">
      <div className="text-center mb-12 animate-fade-in-down">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Professional Experience
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          A journey of growth, learning, and creating impactful digital
          solutions
        </p>
      </div>

      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <Card
            key={index}
            className="p-8 hover-lift transition-smooth border-0 shadow-md hover:shadow-lg animate-scale-in"
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
              <div className="mb-4 lg:mb-0">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {exp.position}
                </h3>
                <h4 className="text-xl text-primary font-semibold mb-3">
                  {exp.company}
                </h4>
                <div className="flex flex-col sm:flex-row sm:items-center gap-3 text-gray-600">
                  <div className="flex items-center">
                    <LuCalendarDays className="w-4 h-4 mr-2" />
                    {exp.duration}
                  </div>
                  <div className="flex items-center">
                    <LuMapPin className="w-4 h-4 mr-2" />
                    {exp.location}
                  </div>
                </div>
              </div>
            </div>

            <p className="text-gray-600 mb-6 leading-relaxed">
              {exp.description}
            </p>

            <div className="mb-6">
              <h5 className="text-sm font-semibold text-gray-900 mb-3 uppercase tracking-wide">
                Technologies Used
              </h5>
              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech, techIndex) => (
                  <Badge
                    key={techIndex}
                    variant="secondary"
                    className="bg-primary/10 text-primary hover:bg-primary/20"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>

            <div>
              <h5 className="text-sm font-semibold text-gray-900 mb-3 uppercase tracking-wide">
                Key Achievements
              </h5>
              <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                {exp.achievements.map((achievement, achievementIndex) => (
                  <li
                    key={achievementIndex}
                    className="flex items-start text-gray-600 text-sm"
                  >
                    <span className="text-primary mr-2">•</span>
                    {achievement}
                  </li>
                ))}
              </ul>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
};
