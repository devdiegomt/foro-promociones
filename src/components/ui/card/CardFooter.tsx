const CardFooter: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ className = "", children }) => {
  return <div className={className}>{children}</div>;
};

export default CardFooter;
