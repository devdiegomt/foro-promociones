interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

const Badge: React.FC<BadgeProps> = ({ className, children }) => {
  return <span className={`${className} flex flex-row items-center px-2 border rounded-2xl cursor-default`}>{children}</span>;
};

export default Badge;
