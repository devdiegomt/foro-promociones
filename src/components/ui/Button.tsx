import type { ButtonProps } from "../../types/atoms/button";

const Button: React.FC<ButtonProps> = ({
  key,
  type = "button",
  onClick,
  className,
  children,
  ...props
}) => {
  return (
    <button
      type={type}
      key={key}
      onClick={onClick}
      className={`${className} cursor-pointer`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
