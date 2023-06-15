import { Button } from "../ui/Button";
import { Datagrid } from "../ui/Datagrid";
import { Input } from "../ui/Input";
import { useEffect, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { SideBar } from "../ui/SiderBar";
import { RowSelector } from "../ui/RowSelector";
import { CreateAccount } from "../ui/CreateAccount";

export function MainPage() {
  const [windowSize, setWindowSize] = useState([
    window.innerWidth,
    window.innerHeight,
  ]);
  const [rowCount, setRowCount] = useState(10);

  useEffect(() => {
    const handleWindowResize = () => {
      if (window.innerWidth >= 900) {
        setIsNavbarOpen(false);
      }
      setWindowSize([window.innerWidth, window.innerHeight]);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const [isCreateAccountOpen, setIsCreateAccountOpen] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [items, setItems] = useState([]);
  useEffect(() => {
    const fetchedItems = localStorage.getItem("items");
    if (fetchedItems != null) {
      setItems(JSON.parse(fetchedItems));
    }
  }, []);
  console.log(items);
  return (
    <div className="flex flex-col w-full h-full">
      {isNavbarOpen && (
        <SideBar onClick={() => setIsNavbarOpen(!isNavbarOpen)} />
      )}
      <div className="flex flex-row ml-[5%] my-8 items-center">
        <img
          src={require("../assets/icons/rastIcon.svg").default}
          alt="rastLogo"
        />
        {windowSize[0] >= 900 && (
          <>
            <p className="ml-[10%] mr-[6%]">Hakkımızda</p>
            <p className="mr-[6%]">Jüri - Yarışma Yazılımı</p>
            <p className="mr-[6%]">Word Ninja</p>
            <p className="mr-[15%]">Word Pyramids</p>
            <img
              src={require("../assets/icons/youtubeIcon.svg").default}
              alt="youtube"
              className="mr-2.5"
            />
            <img
              src={require("../assets/icons/instaIcon.svg").default}
              alt="insta"
              className="mr-2.5"
            />
            <img
              src={require("../assets/icons/beIcon.svg").default}
              alt="be"
              className="mr-2.5"
            />
            <img
              src={require("../assets/icons/linkIcon.svg").default}
              alt="linkedin"
              className="mr-2.5"
            />
          </>
        )}
        {windowSize[0] < 900 && (
          <div className="w-full flex justify-end items-center ml-0 mr-[5%]">
            <RxHamburgerMenu
              className="w-5 h-5"
              color="#744BFC"
              onClick={() => {
                if (!isCreateAccountOpen) {
                  setIsNavbarOpen(!isNavbarOpen);
                }
              }}
            />
          </div>
        )}
      </div>

      <div className="ml-6 mr-6 bg-bgGray px-12 rounded-md mb-4">
        <div className="flex flex-row items-center mt-4 mb-1">
          <div className="w-96">
            <Input
              placeholder="Search objects..."
              isIconExist={true}
              value={searchText}
              onChange={(e) => {
                if (!isCreateAccountOpen) {
                  setSearchText(e.target.value);
                }
              }}
            />
          </div>
          <div className="mb-2.5 w-44 ml-auto mt-2">
            <Button
              bending="high"
              color="purple"
              isIconExist={true}
              size="xlarge"
              onClick={() => setIsCreateAccountOpen(true)}
            >
              Yeni Hesap Ekle
            </Button>
          </div>
        </div>
        <div className="mb-4">
          <Datagrid rowAmount={rowCount} />
        </div>
        <div className="mb-4">
          <RowSelector
            rowAmount={rowCount}
            decreaseRowAmount={() => {
              if (rowCount >= 2) {
                setRowCount(rowCount - 1);
              }
            }}
            increaseRowAmount={() => {
              if (rowCount <= 9) {
                setRowCount(rowCount + 1);
              }
            }}
          />
        </div>
        {isCreateAccountOpen && (
          <div className="absolute left-1/2 -translate-x-2/4 top-32 drop-shadow-xl">
            <CreateAccount
              closeModal={() => setIsCreateAccountOpen(false)}
              addItem={(link, name, exp) => {
                localStorage.setItem(
                  "items",
                  JSON.stringify([
                    ...items,
                    { link: link, name: name, explanation: exp },
                  ])
                );
                setItems([
                  ...items,
                  { link: link, name: name, explanation: exp },
                ] as never);
                setIsCreateAccountOpen(false);
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
}
