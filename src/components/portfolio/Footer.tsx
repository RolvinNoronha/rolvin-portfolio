import { LuGithub, LuLinkedin, LuMail } from "react-icons/lu";
import { GitHub, LinkedIn, MailTo } from "../../lib/utils";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4">Let's Connect</h3>
          <p className="text-gray-400 mb-8 max-w-md mx-auto">
            I'm always open to discussing new opportunities, interesting
            projects, or just having a chat about technology.
          </p>

          <div className="flex justify-center space-x-6 mb-8">
            <a
              href={GitHub}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-smooth hover-lift"
            >
              <LuGithub className="w-6 h-6" />
            </a>
            <a
              href={LinkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-smooth hover-lift"
            >
              <LuLinkedin className="w-6 h-6" />
            </a>
            <a
              href={MailTo}
              className="text-gray-400 hover:text-white transition-smooth hover-lift"
            >
              <LuMail className="w-6 h-6" />
            </a>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <p className="text-gray-400 text-sm flex items-center justify-center">
              © 2025 Rolvin Noronha
              {/* Made with
              <LuHeart className="w-4 h-4 mx-1 text-red-500" />
              and lots of coffee. */}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
