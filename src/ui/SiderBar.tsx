import { RxHamburgerMenu } from "react-icons/rx";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
type SideBarProps = { onClick: () => void };
export function SideBar({ onClick }: SideBarProps) {
  return (
    <Sidebar //React sidebar library is used for make responsive top bar.
      rootStyles={{
        backgroundColor: "#E5DC17",
        height: "100vh",
        position: "absolute",
        borderBottomLeftRadius: "40px",
        right: 0,
      }}
    >
      <Menu
        menuItemStyles={{
          button: ({ level, active, disabled }) => {
            return {
              color: "#744BFC",
              background: "#E5DC17",
              borderColor: "#744BFC",
              floodColor: "#744BFC",
            };
          },
        }}
      >
        <MenuItem>
          <div className="flex items-center" onClick={onClick}>
            <RxHamburgerMenu className="w-5 h-5" color="#744BFC" />
          </div>
        </MenuItem>
        <MenuItem>
          {" "}
          <p className="font-bold">Hakkımızda</p>{" "}
        </MenuItem>
        <MenuItem>
          {" "}
          <p className="font-bold">Jüri - Yarışma Yazılımı </p>
        </MenuItem>
        <MenuItem>
          {" "}
          <p className="font-bold">Word Ninja</p>{" "}
        </MenuItem>
        <MenuItem>
          {" "}
          <p className="font-bold">Word Pyramids</p>{" "}
        </MenuItem>
        <MenuItem>
          <div className="flex flex-row items-center justify-center">
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
          </div>
        </MenuItem>
      </Menu>
    </Sidebar>
  );
}
