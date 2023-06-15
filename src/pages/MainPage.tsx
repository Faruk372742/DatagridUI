import { Button } from "../ui/Button";
import { Datagrid } from "../ui/Datagrid";

export function MainPage() {
  return (
    <div className="flex flex-col ml-4 mr-4">
      <div className="bg-bgGray w-full h-full px-12">
        <div className="mb-2.5 w-44 ml-auto mt-2">
          <Button bending="low" color="purple" isIconExist={true} size="large">
            Yeni Hesap Ekle
          </Button>
        </div>
        <Datagrid rowAmount={10} />
      </div>
    </div>
  );
}
