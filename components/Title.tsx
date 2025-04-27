import { cn } from "@/lib/utils";

interface props {
  children: React.ReactNode;
  className?: string;
}
function Title({ children, className }: props) {
  return (
    <h2
      className={cn(
        "text-xl font-bold text-lightColor mb-4 ml-20 p-5 ",
        className
      )}
    >
      {children}
    </h2>
  );
}

export default Title;
