import { NavItem } from "./nav.interface";

import { FaUserFriends } from "react-icons/fa";
import { PiTelevisionSimple } from "react-icons/pi";
import { MdGroups, MdOutlinePersonalVideo } from "react-icons/md";

const navItems: NavItem[] = [
  {
    icon: "/news.png",
    name: "Newsfeed",
    route: "/home",
  },
  {
    icon: "/friends.png",
    name: "Friends",
    route: "/friends",
  },
  {
    icon: "/group.png",
    name: "Groups",
    route: "/groups",
  },
  {
    icon: "/video.png",
    name: "Video",
    route: "/watch",
  },
];

export default navItems;
