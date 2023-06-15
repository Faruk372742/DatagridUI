import { Button } from "../ui/Button";
import { Datagrid } from "../ui/Datagrid";
import { Input } from "../ui/Input";

export function MainPage() {
  return (
    <div className="flex flex-col ml-4 mr-4">
      <div className="bg-bgGray w-full h-full px-12">
        <div className="flex flex-row items-center">
          <div className="w-96">
            <Input placeholder="Search objects..." isIconExist={true} />
          </div>
          <div className="mb-2.5 w-44 ml-auto mt-2">
            <Button
              bending="high"
              color="purple"
              isIconExist={true}
              size="xlarge"
            >
              Yeni Hesap Ekle
            </Button>
          </div>
        </div>
        <Datagrid rowAmount={10} />
      </div>
    </div>
  );
}
