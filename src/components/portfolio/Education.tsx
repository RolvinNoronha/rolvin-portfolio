import { Section } from "../ui/section";
import { Card } from "../ui/card";
import { Badge } from "../ui/badge";
import { LuGraduationCap, LuCalendar } from "react-icons/lu";

const education = [
  {
    institution: "Manipal Institute of Technology",
    degree: "BTech Mechatronics",
    duration: "2020 - 2024",
    gpa: "8.10/10",
    description:
      "Specialized in Human-Computer Interaction and Software Engineering. Thesis on 'Improving User Experience in Web Applications through AI-Driven Design Patterns'.",
    coursework: [
      "Data Structures and Algorithms",
      "Microcontroller Programming using Assembly and C",
      "Database Systems with MYSQL",
      "Web Programming",
      "Machine Learning",
    ],
    achievements: [
      "Dean's List for 4 consecutive semesters",
      "Outstanding Graduate Student Award",
      "Published research in CHI Conference",
    ],
  },
];

// const certifications = [
//   {
//     name: "AWS Solutions Architect",
//     issuer: "Amazon Web Services",
//     date: "2023",
//     credentialId: "AWS-ASA-2023-001",
//   },
//   {
//     name: "Google Cloud Professional Developer",
//     issuer: "Google Cloud",
//     date: "2022",
//     credentialId: "GCP-PD-2022-001",
//   },
//   {
//     name: "Certified Kubernetes Application Developer",
//     issuer: "Cloud Native Computing Foundation",
//     date: "2022",
//     credentialId: "CKAD-2022-001",
//   },
// ];

export const Education = () => {
  return (
    <Section id="education">
      <div className="text-center mb-12 animate-fade-in-down">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Education
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Academic foundation and continuous learning journey
        </p>
      </div>

      {/* Education */}
      <div className="mb-16">
        <div className="space-y-8">
          {education.map((edu, index) => (
            <Card
              key={index}
              className="p-8 hover-lift transition-smooth border-0 shadow-md hover:shadow-lg animate-scale-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                <div className="flex items-start mb-4 lg:mb-0">
                  <div className="bg-primary/10 p-3 rounded-lg mr-4 flex-shrink-0">
                    <LuGraduationCap className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-1">
                      {edu.degree}
                    </h3>
                    <h4 className="text-xl text-primary font-semibold mb-2">
                      {edu.institution}
                    </h4>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-3 text-gray-600">
                      <div className="flex items-center">
                        <LuCalendar className="w-4 h-4 mr-2" />
                        {edu.duration}
                      </div>
                      <Badge variant="secondary" className="w-fit">
                        GPA: {edu.gpa}
                      </Badge>
                    </div>
                  </div>
                </div>
              </div>

              {/* <p className="text-gray-600 mb-6 leading-relaxed">
                {edu.description}
              </p> */}

              <div className="grid md:grid-cols-1 gap-6">
                <div>
                  <h5 className="text-sm font-semibold text-gray-900 mb-3 uppercase tracking-wide">
                    Relevant Coursework
                  </h5>
                  <div className="flex flex-wrap gap-2">
                    {edu.coursework.map((course, courseIndex) => (
                      <Badge
                        key={courseIndex}
                        variant="outline"
                        className="text-xs"
                      >
                        {course}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* <div>
                  <h5 className="text-sm font-semibold text-gray-900 mb-3 uppercase tracking-wide">
                    Achievements
                  </h5>
                  <ul className="space-y-1">
                    {edu.achievements.map((achievement, achievementIndex) => (
                      <li
                        key={achievementIndex}
                        className="flex items-start text-gray-600 text-sm"
                      >
                        <LuAward className="w-4 h-4 text-accent mr-2 mt-0.5 flex-shrink-0" />
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div> */}
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Certifications */}
      {/* <div>
        <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
          Professional Certifications
        </h3>
        <div className="grid md:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <Card
              key={index}
              className="p-6 text-center hover-lift transition-smooth border-0 shadow-md hover:shadow-lg animate-fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="bg-secondary/10 p-4 rounded-lg mb-4 mx-auto w-fit">
                <LuAward className="w-8 h-8 text-secondary" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                {cert.name}
              </h4>
              <p className="text-primary font-medium mb-1">{cert.issuer}</p>
              <p className="text-gray-600 text-sm mb-2">Issued: {cert.date}</p>
              <Badge variant="outline" className="text-xs">
                ID: {cert.credentialId}
              </Badge>
            </Card>
          ))}
        </div>
      </div> */}
    </Section>
  );
};
