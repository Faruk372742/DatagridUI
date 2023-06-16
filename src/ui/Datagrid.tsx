import { Rectangles } from "./Rectangles";

type DatagridProps = {
  arr: any[];
  isNamesSorted: boolean;
  isLinksSorted: boolean;
  sortLinks: () => void;
  sortNames: () => void;
  unsortLinks: () => void;
  unsortNames: () => void;
};
export function Datagrid({
  arr,
  isNamesSorted,
  isLinksSorted,
  sortLinks,
  sortNames,
  unsortLinks,
  unsortNames,
}: DatagridProps) {
  return (
    <div className="">
      {arr.map(
        (
          element,
          index //Fill datagrid with the saved items to the localstorage
        ) => (
          <div className={"flex flex-row"} key={index}>
            <div className="w-1/3">
              <Rectangles //I created datagrid by myself, each row includes 3 rectangles
                key={index.toString() + "rect1"}
                borderType={
                  index === 0
                    ? "top-left"
                    : index === arr.length - 1
                    ? "bottom-left"
                    : undefined
                }
                color={index % 2 === 1 || index === 0 ? "white" : "gray"}
                isHeader={index === 0}
                text={element.link}
                columnNo={1}
                isBottomRow={index === arr.length - 1}
                isNamesSorted={isNamesSorted}
                isLinksSorted={isLinksSorted}
                sortLinks={sortLinks}
                sortNames={sortNames}
                unsortLinks={unsortLinks}
                unsortNames={unsortNames}
              />
            </div>
            <div className="w-1/3">
              <Rectangles
                key={index.toString() + "rect2"}
                borderType={undefined}
                color={index % 2 === 1 || index === 0 ? "white" : "gray"}
                isHeader={index === 0}
                text={element.name}
                columnNo={2}
                isBottomRow={index === arr.length - 1}
                isNamesSorted={isNamesSorted}
                isLinksSorted={isLinksSorted}
                sortLinks={sortLinks}
                sortNames={sortNames}
                unsortLinks={unsortLinks}
                unsortNames={unsortNames}
              />
            </div>
            <div className="w-1/3">
              <Rectangles
                key={index.toString() + "rect3"}
                borderType={
                  index === 0
                    ? "top-right"
                    : index === arr.length - 1
                    ? "bottom-right"
                    : undefined
                }
                color={index % 2 === 1 || index === 0 ? "white" : "gray"}
                isHeader={index === 0}
                text={element.explanation}
                columnNo={3}
                isBottomRow={index === arr.length - 1}
                isNamesSorted={isNamesSorted}
                isLinksSorted={isLinksSorted}
                sortLinks={sortLinks}
                sortNames={sortNames}
                unsortLinks={unsortLinks}
                unsortNames={unsortNames}
              />
            </div>
          </div>
        )
      )}
    </div>
  );
}
