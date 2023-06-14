import { Datagrid } from "../ui/Datagrid";

export function MainPage() {
  return (
    <div className="flex flex-col ml-4 mr-4">
      <div className="bg-bgGray w-full h-full p-4">
        <Datagrid rowAmount={10} />
      </div>
    </div>
  );
}
