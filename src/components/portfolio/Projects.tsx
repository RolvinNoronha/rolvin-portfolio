import { Section } from "../ui/section";
import { Card } from "../ui/card";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { LuGithub } from "react-icons/lu";
import socialMedia from "../../assets/social-media.png";
import fileStorage from "../../assets/file-storage.png";
import chatApp from "../../assets/chat-app.png";

const projects = [
  {
    title: "File Uploader",
    description:
      "An application allowing users to upload, view, download, and delete files.",
    image: fileStorage,
    technologies: ["React", "TypeScript", "Java", "Spring Boot", "Postgres"],
    // liveUrl: "https://weather-dash.com",
    githubUrl: "https://github.com/RolvinNoronha/file-uploader",
    featured: true,
  },
  {
    title: "Chat App",
    description:
      "An application allowing users to chat in real-time using WebSocket connections within chat rooms",
    image: chatApp,
    technologies: ["React", "TypeScript", "Go", "Gin Framework"],
    // liveUrl: "https://taskflow.app",
    githubUrl: "https://github.com/RolvinNoronha/chat-app",
    featured: true,
  },
  {
    title: "Social Media App",
    description:
      "An application where a users are able to upload image, like, comment and interact with other users, including following other users and engaging with their posts.",
    image: socialMedia,
    technologies: ["React", "TypeScript", "Next.js", "Firebase"],
    // liveUrl: "https://demo-ecommerce.com",
    githubUrl: "https://github.com/RolvinNoronha/SocialMediaApp",
    featured: true,
  },
  {
    title: "Portfolio Website",
    description:
      "Personal portfolio website showcasing projects, skills, and experience with modern design and smooth animations.",
    image:
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop",
    technologies: ["React", "Tailwind CSS", "Framer Motion"],
    liveUrl: "https://sarahjohnson.dev",
    githubUrl: "https://github.com/sarahjohnson/portfolio",
    featured: false,
  },
];

export const Projects = () => {
  const featuredProjects = projects.filter((p) => p.featured);
  // const otherProjects = projects.filter((p) => !p.featured);

  return (
    <Section id="projects" className="bg-gray-50">
      <div className="text-center mb-12 animate-fade-in-down">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Featured Projects
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          A showcase of my recent work and personal projects
        </p>
      </div>

      {/* Featured Projects */}
      <div className="grid lg:grid-cols-2 gap-8 mb-12">
        {featuredProjects.map((project, index) => (
          <Card
            key={index}
            className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-smooth animate-scale-in hover-lift"
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <div className="relative overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover group-hover:scale-105 transition-smooth"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-smooth"></div>
              <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-smooth">
                <div className="flex gap-2">
                  {/* <Button size="sm" variant="secondary" asChild>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <LuExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </a>
                  </Button> */}
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-white/30 text-white hover:bg-white/10"
                    asChild
                  >
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <LuGithub className="w-4 h-4 mr-2" />
                      Code
                    </a>
                  </Button>
                </div>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {project.title}
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
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
          </Card>
        ))}
      </div>

      {/* Other Projects */}
      {/* <div>
        <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
          Other Projects
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          {otherProjects.map((project, index) => (
            <Card
              key={index}
              className="p-6 hover-lift transition-smooth border-0 shadow-md hover:shadow-lg animate-fade-in-up"
              style={{ animationDelay: `${(index + 2) * 0.2}s` }}
            >
              <div className="flex justify-between items-start mb-4">
                <h4 className="text-lg font-semibold text-gray-900">
                  {project.title}
                </h4>
                <div className="flex gap-2">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-primary transition-smooth"
                  >
                    <LuExternalLink className="w-5 h-5" />
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-primary transition-smooth"
                  >
                    <LuGithub className="w-5 h-5" />
                  </a>
                </div>
              </div>
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <Badge key={techIndex} variant="outline" className="text-xs">
                    {tech}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div> */}
    </Section>
  );
};
