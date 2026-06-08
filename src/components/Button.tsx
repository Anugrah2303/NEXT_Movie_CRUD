import type { ButtonProps } from "@/types/types";

const Button = ({ type = "button", className = "", content, variant = "normal", onClick, Icon, options }: ButtonProps) => {
  return (
    <button type={type} onClick={onClick} className={`${className} transition-all duration-200 cursor-pointer rounded-full px-7 py-2 font-medium ${variant === "outline" ? "border-2 border-(--primary) text-(--primary) hover:bg-(--primary) hover:text-white active:bg-(--primary-hover)" : "bg-(--primary) text-white border-2 border-(--primary) hover:bg-(--primary-hover) active:bg-(--primary-hover)"} flex justify-center items-center gap-5`}>
       {
        Icon && <Icon {...options} />
       }
       {content}
    </button>
  );
};

export default Button;