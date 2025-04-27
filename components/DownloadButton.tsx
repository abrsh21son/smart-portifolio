import { Download } from "lucide-react";
const DownloadButton: React.FC = () => {
  return (
    <a
      href="/resume.pdf"
      download
      className="flex gap-3 justify-center rounded-full border border-lightColor/30 items-center text-lightColor  hover:text-black bg-transparent px-6 py-3  shadow-md hover:bg-hoverColor text-sm transition duration-300 ease-in-out transform hover:scale-105"
    >
      Download CV <Download className=" w-4 h-4" />
    </a>
  );
};

export default DownloadButton;
