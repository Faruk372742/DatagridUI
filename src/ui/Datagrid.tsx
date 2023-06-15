import { Rectangles } from "./Rectangles";

type DatagridProps = { rowAmount?: number };
export function Datagrid({ rowAmount = 5 }: DatagridProps) {
  const arr = new Array(rowAmount).fill(0);
  return (
    <div className="">
      {arr.map((element, index) => (
        <div className={"flex flex-row"} key={index}>
          <Rectangles
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
            text="Sosyal Medya Linki"
            columnNo={1}
            isBottomRow={index === arr.length - 1}
          />
          <Rectangles
            key={index.toString() + "rect2"}
            borderType={undefined}
            color={index % 2 === 1 || index === 0 ? "white" : "gray"}
            isHeader={index === 0}
            text="Sosyal Medya Adı"
            columnNo={2}
            isBottomRow={index === arr.length - 1}
          />
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
            text="Açıklama"
            columnNo={3}
            isBottomRow={index === arr.length - 1}
          />
        </div>
      ))}
    </div>
  );
}
