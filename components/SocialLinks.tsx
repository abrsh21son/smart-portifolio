import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@radix-ui/react-tooltip";
import { Facebook, Github, Linkedin } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const socialData = [
  {
    title: "Github",
    icon: <Github className="w-5 h-5" />,
    link: "https://github.com/abrsh21son",
    color: "hover:bg-gradient-to-b from-purple-600 via-yellow-500 to-green-500 hover:text-white",
  },
  {
    title: "Facebook",
    icon: <Facebook className="w-5 h-5" />,
    link: "https://web.facebook.com/profile.php?id=61553464527833",
    color: "hover:bg-gradient-to-b from-purple-600 via-yellow-500 to-green-500 hover:text-white",
  },
  {
    title: "Linkedin",
    icon: <Linkedin className="w-5 h-5" />,
    link: "https://www.linkedin.com/in/abrsh21son/",
    color: "hover:bg-gradient-to-b from-purple-600 via-yellow-500 to-green-500 hover:text-white",
  },
];

function SocialLinks() {
  return (
    <TooltipProvider delayDuration={100}>
      <div className="flex gap-4 justify-center items-center ">
        {socialData.map((item) => (
          <Tooltip key={item.title}>
            <TooltipTrigger asChild>
              <motion.div
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Link
                  href={item.link}
                  target="_blank"
                  className={`
                    flex items-center justify-center 
                    w-14 h-14 rounded-full  
                    text-green-500 border border-green-600 
                    transition-all duration-300 
                    ${item.color}
                    hover:shadow-lg hover:border-transparent
                  `}
                >
                  {item.icon}
                </Link>
              </motion.div>
            </TooltipTrigger>
            <TooltipContent
              side="bottom"
              className={`
                px-2 py-1 rounded-md
                shadow-lg border border-gray-700
              `}
            >
              {item.title}
            </TooltipContent>
          </Tooltip>
        ))}
      </div>
    </TooltipProvider>
  );
}

export default SocialLinks;