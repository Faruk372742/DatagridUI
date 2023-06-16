import { BsArrowDown, BsArrowUp } from "react-icons/bs";
import { RectangleStyles } from "../utils/RectangleStyles";

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
  isNamesSorted: boolean;
  isLinksSorted: boolean;
  sortLinks: () => void;
  sortNames: () => void;
  unsortLinks: () => void;
  unsortNames: () => void;
};
export function Rectangles({
  text,
  color,
  isHeader,
  borderType,
  columnNo,
  isBottomRow,
  isNamesSorted,
  isLinksSorted,
  sortLinks,
  sortNames,
  unsortLinks,
  unsortNames,
}: RectangleProps) {
  const {
    borderRadiusStyle,
    borderStyle,
    bottomHeaderBorderStyle,
    topHeaderBorderStyle,
    sideBorderStyle,
    bottomBorderStyle,
    bgColor,
  } = RectangleStyles(color, isHeader, borderType, columnNo, isBottomRow);

  const rectangleStyle = `h-16 w-full pl-4 pt-4 items-center  ${borderRadiusStyle}
   ${borderStyle} ${bgColor} ${bottomHeaderBorderStyle} ${topHeaderBorderStyle} ${sideBorderStyle} ${bottomBorderStyle}`;

  const textStyle = isHeader ? "font-medium" : "";
  return (
    <div className={rectangleStyle}>
      <div className="flex flex-row w-full">
        <p className={textStyle}>{text}</p>
        <div className="flex items-center ml-auto mr-2">
          {isHeader &&
            columnNo === 1 &&
            (isLinksSorted ? (
              <BsArrowUp
                color="#744BFC"
                fontWeight={1000}
                className="w-5 h-5"
                onClick={unsortLinks}
              />
            ) : (
              <BsArrowDown
                color="#C0B8DC"
                className="w-5 h-5"
                onClick={sortLinks}
              />
            ))}
          {isHeader &&
            columnNo === 2 &&
            (isNamesSorted ? (
              <BsArrowUp
                color="#744BFC"
                fontWeight={1000}
                className="w-5 h-5"
                onClick={unsortNames}
              />
            ) : (
              <BsArrowDown
                color="#C0B8DC"
                className="w-5 h-5"
                onClick={sortNames}
              />
            ))}
        </div>
      </div>
    </div>
  );
}
