import { cn } from "./app/cn";

interface ContainerProps extends React.AllHTMLAttributes<HTMLDivElement> {}

const Container = ({ className, ...props }: ContainerProps) => {
  return (
    <div
      className={cn("mx-auto w-full main:px-0 main:max-w-7xl", className)}
      {...props}
    ></div>
  );
};

export { Container };
