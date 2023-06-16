import { Button } from "../ui/Button";
import { Datagrid } from "../ui/Datagrid";
import { Input } from "../ui/Input";
import { useEffect, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { SideBar } from "../ui/SiderBar";
import { RowSelector } from "../ui/RowSelector";
import { CreateAccount } from "../ui/CreateAccount";
import { Pagination } from "../ui/Pagination";
import { SortArray } from "../utils/SortArray";
import { SearchInTheArray } from "../utils/SearchInTheArray";

export function MainPage() {
  const [windowSize, setWindowSize] = useState([
    //Used to keep track of windowSize
    window.innerWidth,
    window.innerHeight,
  ]);
  const [rowCount, setRowCount] = useState(7); //Datagrid row amount

  useEffect(() => {
    //Use to adjust window size
    const handleWindowResize = () => {
      if (window.innerWidth >= 900) {
        //Responsive top bar
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
  const [currentPage, setCurrentPage] = useState(1);
  const [isLinksSorted, setIsLinksSorted] = useState(false);
  const [isNamesSorted, setIsNamesSorted] = useState(false);
  const [fixedItems, setFixedItems] = useState([]);
  useEffect(() => {
    //Items are fetched from local storage
    const fetchedItems = localStorage.getItem("items");
    if (fetchedItems != null) {
      setItems(JSON.parse(fetchedItems));
      setFixedItems(JSON.parse(fetchedItems));
    }
  }, []);
  const maxPage = Math.floor((items.length + rowCount - 2) / (rowCount - 1)); //Calculating total page amount
  let itemArr: { link: string; name: string; explanation: string }[] = [];
  const startItemIndex = (currentPage - 1) * (rowCount - 1);

  for (let i = startItemIndex; i < startItemIndex + rowCount - 1; i++) {
    //Items in the current page
    if (i >= items.length) {
      itemArr.push({ link: "", name: "", explanation: "" });
      continue;
    }
    itemArr.push(items[i]);
  }

  itemArr = SortArray({
    //Sort items according to their links or names
    arr: itemArr,
    isLinksSorted: isLinksSorted,
    isNamesSorted: isNamesSorted,
  });
  itemArr.unshift({
    link: "Sosyal Medya Linki",
    name: "Sosyal Medya Adı",
    explanation: "Açıklama",
  });

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
        {windowSize[0] >= 900 && ( //If window is enough large, make topbar in the normal way
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
        {windowSize[0] < 900 && ( //If window is small show Hamburger type topbar
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
        <div className="flex flex-row items-center mt-4 mb-1 flex-wrap">
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
              filterItems={() => {
                setCurrentPage(1);
                setItems(SearchInTheArray({ fixedItems, searchText }) as never);
              }}
            />
          </div>
          <div className="w-12 h-10 rounded-[29px] bg-white items-center flex justify-center ml-2.5">
            <img
              src={require("../assets/icons/insideOfFilterIcon.svg").default}
              alt="insideOfFilterIcon"
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
          <Datagrid
            arr={itemArr}
            isNamesSorted={isNamesSorted}
            isLinksSorted={isLinksSorted}
            sortLinks={() => {
              setIsLinksSorted(true);
            }}
            sortNames={() => {
              setIsNamesSorted(true);
            }}
            unsortLinks={() => {
              setIsLinksSorted(false);
            }}
            unsortNames={() => {
              setIsNamesSorted(false);
            }}
          />
        </div>

        <div className="flex flex-row mb-4">
          <RowSelector
            rowAmount={rowCount}
            decreaseRowAmount={() => {
              if (rowCount >= 3) {
                setRowCount(rowCount - 1);
                setCurrentPage(1);
              }
            }}
            increaseRowAmount={() => {
              if (rowCount <= 9) {
                setRowCount(rowCount + 1);
                setCurrentPage(1);
              }
            }}
          />
          <div className="ml-auto">
            <Pagination
              currentPage={currentPage}
              maxPage={maxPage}
              increasePage={() => {
                if (currentPage < maxPage) {
                  setCurrentPage(currentPage + 1);
                }
              }}
              decreasePage={() => {
                if (currentPage > 1) {
                  setCurrentPage(currentPage - 1);
                }
              }}
            />
          </div>
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
                setFixedItems([
                  ...fixedItems,
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
