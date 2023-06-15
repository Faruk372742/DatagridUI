type RowSelectorProps = {
  rowAmount: number;
  increaseRowAmount: () => void;
  decreaseRowAmount: () => void;
};
export function RowSelector({
  rowAmount,
  increaseRowAmount,
  decreaseRowAmount,
}: RowSelectorProps) {
  return (
    <div className="flex flex-row items-center">
      <p className="text-lightPurple mr-6 font-medium">Show: </p>
      <div className="w-28 rounded-3xl bg-white border-[1px] border-lightPurple h-9 items-center flex pl-4">
        <p className="text-sm">{rowAmount - 1} rows</p>
        <div className="flex flex-col ml-auto mr-2">
          <img
            src={require("../assets/icons/upperArrowIcon.svg").default}
            alt="upperArrow"
            className="mb-1"
            onClick={increaseRowAmount}
          />
          <img
            src={require("../assets/icons/bottomArrowIcon.svg").default}
            alt="bottomArrowIcon"
            onClick={decreaseRowAmount}
          />
        </div>
      </div>
    </div>
  );
}
