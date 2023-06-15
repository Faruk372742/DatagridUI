import { ComponentPropsWithoutRef } from "react";
import { AiOutlinePlus } from "react-icons/ai";

type ButtonSize = "large" | "xlarge";
type ButtonBending = "low" | "high";
type ButtonColor = "purple" | "Gray";
interface ButtonProps extends ComponentPropsWithoutRef<"button"> {
  size: ButtonSize;
  bending: ButtonBending;
  color: ButtonColor;
  isIconExist: boolean;
}
export function Button({
  children,
  size,
  bending,
  color,
  isIconExist,
  ...props
}: ButtonProps) {
  const buttonColor =
    color === "Gray"
      ? "bg-buttonGray"
      : props.disabled
      ? "bg-disabledPurple"
      : "bg-lightPurple";
  const buttonRadius = bending === "low" ? "rounded-2xl" : "rounded-3xl";
  const buttonHeight = size === "large" ? "h-8" : "h-11";

  const buttonStyle = `w-full flex items-center justify-center ${buttonColor} ${buttonRadius} ${buttonHeight}`;
  const textStyle = color === "Gray" ? "text-lightPurple" : "text-white";

  return (
    <button className={buttonStyle} {...props}>
      {isIconExist && (
        <div className="mr-1.5">
          <AiOutlinePlus
            color={color === "Gray" ? "#744BFC" : "white"}
            fontWeight="bold"
            className="w-4.5 h-4.5"
          />
        </div>
      )}
      <p className={textStyle}>{children}</p>
    </button>
  );
}
