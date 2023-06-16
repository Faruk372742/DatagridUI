import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
type PaginationProps = {
  maxPage: number;
  currentPage: number;
  increasePage: () => void;
  decreasePage: () => void;
};
export function Pagination({
  maxPage,
  currentPage,
  increasePage,
  decreasePage,
}: PaginationProps) {
  return (
    <div className="flex flex-row items-center justify-center">
      <div className="mr-3">
        <AiOutlineLeft //Left arrow and it decreases the current page
          color={currentPage === 1 ? "#C9C9C9" : "#744BFC"}
          className="w-5 h-5"
          onClick={decreasePage}
        />
      </div>
      <div className="w-7 h-8 bg-white items-center justify-center flex border-[1px] border-outerBorderGray mr-4 rounded">
        <p className="text-sm">{currentPage}</p>
      </div>
      <p className="text-[#C9C9C9] mr-3">of</p>
      <p className="text-lightPurple mr-3">{maxPage}</p>
      <AiOutlineRight //Right arrow and it increases the current page
        color={currentPage === maxPage ? "#C9C9C9" : "#744BFC"}
        className="w-5 h-5"
        onClick={increasePage}
      />
    </div>
  );
}
