import { LuGithub, LuLinkedin, LuMail, LuDownload } from "react-icons/lu";
import { Button } from "../ui/button";
import { GitHub, LinkedIn, MailTo, Resume } from "../../lib/utils";
import profileImage from "../../assets/profile.jpeg";

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center gradient-hero relative overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
        <div className="animate-fade-in-down">
          <img
            src={profileImage}
            alt="Profile"
            className="w-48 h-48 md:w-56 md:h-56 rounded-full mx-auto mb-8 border-4 border-white/20 shadow-xl hover-glow transition-smooth"
          />
        </div>

        <div className="animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
            Rolvin Noronha
          </h1>
          <p className="text-xl md:text-2xl mb-4 text-white/90 font-light">
            Software Engineer
          </p>
          <p className="text-lg mb-8 text-white/80 max-w-2xl mx-auto leading-relaxed">
            Passionate about creating beautiful, functional web experiences. I
            transform ideas into elegant digital solutions with modern
            technologies.
          </p>
        </div>

        <div className="animate-scale-in flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <Button
            onClick={() => (window.location.href = Resume)}
            variant="secondary"
            size="lg"
            className="group hover-lift"
          >
            <LuDownload className="mr-2 h-5 w-5 group-hover:animate-bounce" />
            Resume
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-white/30 text-white hover:bg-white/10 hover-lift"
            onClick={() => (window.location.href = MailTo)}
          >
            <LuMail className="mr-2 h-5 w-5" />
            Get In Touch
          </Button>
        </div>

        <div className="animate-slide-in-left flex justify-center space-x-6">
          <a
            href={GitHub}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/80 hover:text-white transition-smooth hover-lift"
          >
            <LuGithub className="w-8 h-8" />
          </a>
          <a
            href={LinkedIn}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/80 hover:text-white transition-smooth hover-lift"
          >
            <LuLinkedin className="w-8 h-8" />
          </a>
          <a
            href={MailTo}
            className="text-white/80 hover:text-white transition-smooth hover-lift"
          >
            <LuMail className="w-8 h-8" />
          </a>
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full animate-float"></div>
      <div
        className="absolute bottom-20 right-10 w-32 h-32 bg-white/5 rounded-full animate-float"
        style={{ animationDelay: "1s" }}
      ></div>
      <div
        className="absolute top-1/2 left-20 w-12 h-12 bg-white/15 rounded-full animate-float"
        style={{ animationDelay: "2s" }}
      ></div>
    </section>
  );
};
