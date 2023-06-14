import { BsArrowDown, BsArrowUp } from "react-icons/bs";

export type ColorType = "white" | "gray";
export type BorderType =
  | undefined
  | "top-left"
  | "top-right"
  | "bottom-left"
  | "bottom-right";
export type RectangleProps = {
  text: string;
  color: ColorType;
  isHeader: boolean;
  borderType: BorderType;
  columnNo: number;
  isBottomRow: boolean;
};
export function Rectangles({
  text,
  color,
  isHeader,
  borderType,
  columnNo,
  isBottomRow,
}: RectangleProps) {
  const borderRadiusStyle =
    isHeader && isBottomRow && columnNo !== 2
      ? columnNo === 1
        ? "rounded-tl-lg rounded-bl-lg"
        : "rounded-tr-lg rounded-br-lg"
      : borderType === "bottom-left"
      ? "rounded-bl-lg"
      : borderType === "bottom-right"
      ? "rounded-br-lg"
      : borderType === "top-left"
      ? "rounded-tl-lg"
      : borderType === "top-right"
      ? "rounded-tr-lg"
      : "";

  const borderStyle = columnNo <= 2 ? "border-r-[1.5px] border-borderGrey" : "";
  const bottomHeaderBorderStyle = isHeader
    ? "border-borderGrey border-b-[1.5px]"
    : "";
  const topHeaderBorderStyle = isHeader
    ? "border-borderGrey border-t-[1px]"
    : "";

  const sideBorderStyle =
    columnNo === 1
      ? "border-l-[1px] border-borderGrey"
      : columnNo === 3
      ? "border-r-[1px] border-borderGrey"
      : "";

  const bottomBorderStyle = isBottomRow
    ? "border-b-[1px] border-borderGrey"
    : "";

  const bgColor = color === "gray" ? "bg-bgGray" : "bg-white";

  const rectangleStyle = `h-16 w-full pl-4 pt-4 items-center  ${borderRadiusStyle}
   ${borderStyle} ${bgColor} ${bottomHeaderBorderStyle} ${topHeaderBorderStyle} ${sideBorderStyle} ${bottomBorderStyle}`;

  const textStyle = isHeader ? "font-bold" : "";
  return (
    <div className={rectangleStyle}>
      <div className="flex flex-row w-full">
        <p className={textStyle}>{text}</p>
        <div className="flex items-center ml-auto mr-2">
          {isHeader && columnNo === 1 && (
            <BsArrowUp color="#744BFC" fontWeight={1000} className="w-5 h-5" />
          )}
          {isHeader && columnNo === 2 && (
            <BsArrowDown color="#C0B8DC" className="w-5 h-5" />
          )}
        </div>
      </div>
    </div>
  );
}
