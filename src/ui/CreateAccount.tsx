import { useMemo, useState } from "react";
import { Button } from "./Button";
import { Input } from "./Input";

type CreateAccountProps = {
  closeModal: () => void;
  addItem: (link: string, name: string, exp: string) => void;
};
export function CreateAccount({ closeModal, addItem }: CreateAccountProps) {
  const [link, setLink] = useState("");
  const [name, setName] = useState("");
  const [explanation, setExplanation] = useState("");
  const isButtonDisabled = useMemo(() => {
    const c1 = link.trim() === "";
    const c2 = name.trim() === "";
    const c3 = explanation.trim() === "";
    return c1 || c2 || c3;
  }, [link, name, explanation]);
  return (
    <div className="w-[29rem] h-[25rem] rounded-xl bg-white">
      <img
        src={require("../assets/icons/crossIcon.svg").default}
        alt="cross"
        className="ml-auto pt-4 mr-4"
        onClick={closeModal}
      />
      <div className="px-8">
        <p className="mb-1 font-medium">Sosyal Medya Linki</p>
        <div className="mb-6">
          <Input
            value={link}
            onChange={(e) => {
              setLink(e.target.value);
            }}
          />
        </div>
        <p className="mb-1 font-medium">Sosyal Medya Adı</p>
        <div className="mb-6">
          <Input
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <p className="mb-1 font-medium">Açıklama</p>
        <div className="mb-11">
          <Input
            value={explanation}
            onChange={(e) => {
              setExplanation(e.target.value);
            }}
          />
        </div>
        <div className="flex flex-row justify-end ml-auto">
          <div className="mr-4 w-20">
            <Button
              bending="low"
              color="Gray"
              isIconExist={false}
              size="large"
              onClick={closeModal}
            >
              Vazgeç
            </Button>
          </div>
          <div className="w-20">
            <Button
              bending="low"
              color="purple"
              isIconExist={false}
              size="large"
              disabled={isButtonDisabled}
              onClick={() => addItem(link, name, explanation)}
            >
              Kaydet
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
