import { NavItem } from "./nav.interface";

import { FaUserFriends } from "react-icons/fa";
import { PiTelevisionSimple } from "react-icons/pi";
import { MdGroups, MdOutlinePersonalVideo } from "react-icons/md";

const navItems: NavItem[] = [
  {
    icon: PiTelevisionSimple,
    name: "Newsfeed",
    route: "/home",
  },
  {
    icon: FaUserFriends,
    name: "Friends",
    route: "/friends",
  },
  {
    icon: MdGroups,
    name: "Groups",
    route: "/groups",
  },
  {
    icon: MdOutlinePersonalVideo,
    name: "Video",
    route: "/watch",
  },
];

export default navItems;
