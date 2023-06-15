import { BorderType, ColorType } from "../ui/Rectangles";

export function RectangleStyles(
  color: ColorType,
  isHeader: boolean,
  borderType: BorderType,
  columnNo: number,
  isBottomRow: boolean
) {
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
  return {
    borderRadiusStyle,
    borderStyle,
    bottomHeaderBorderStyle,
    topHeaderBorderStyle,
    sideBorderStyle,
    bottomBorderStyle,
    bgColor,
  };
}
