import { ComponentPropsWithoutRef } from "react";

interface InputProps extends ComponentPropsWithoutRef<"input"> {
  isIconExist?: boolean;
  filterItems?: () => void;
}
export function Input({
  isIconExist = false,
  filterItems,
  ...props
}: InputProps) {
  const inputStyle =
    `w-full rounded-3xl h-11 border-[1px] border-inputBorderGray focus:outline-none py-4 pl-8` +
    (isIconExist ? " pr-14" : " pr-2");
  return (
    <div className="w-full flex flex-row">
      <input className={inputStyle} {...props} />
      {isIconExist && (
        <div className="flex justify-center" onClick={filterItems}>
          <div className="w-12 bg-lightPurple absolute h-11 rounded-r-3xl flex justify-center items-center mr-12">
            <img
              src={require("../assets/icons/searchIcon.svg").default}
              alt="mySvgImage"
              className="w-4.5 h-4.5 mr-1"
            />
          </div>
        </div>
      )}
    </div>
  );
}
