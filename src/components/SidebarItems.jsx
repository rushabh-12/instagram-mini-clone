import SidebarHome from "./SidebarHome";
import SidebarSearch from "./SidebarSearch";
import SidebarNotifications from "./SidebarNotifications";
import SidebarCreatePost from "./SidebarCreatePost";
import SidebarProfileLink from "./SidebarProfileLink";

const SidebarItems = () => {
  return (
    <>
      <SidebarHome />
      <SidebarSearch />
      <SidebarNotifications />
      <SidebarCreatePost />
      <SidebarProfileLink />
    </>
  );
};

export default SidebarItems;
