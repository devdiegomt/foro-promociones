import CardContent from "./CardContent";
import CardFooter from "./CardFooter";

const Component: React.FC<{ children: React.ReactNode; className: string }> = ({
  children,
  className = "",
}) => {
  return <div className={className}>{children}</div>;
};

export const Card = Object.assign(Component, {
  Content: CardContent,
  Footer: CardFooter,
});
