import React from "react";
import classes from "./Sidebar.module.css";
import SidebarOption from "./SidebarOption";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
// import { getTokenFromResponse } from "./spotify";
import { useStateValue } from "../../StateProvider";
import scream from "../image/scream.jpg";

function Sidebar() {
  const [{ playlists }] = useStateValue();
  console.log(playlists);
        // src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"

  return (
    <div className={classes.sidebar}>
      <img
        className={classes.sidebar__logo}
        src={scream}
        alt=""
      />
      <SidebarOption Icon={HomeIcon} option="Home" />
      <SidebarOption Icon={SearchIcon} option="Search" />
      <SidebarOption Icon={LibraryMusicIcon} option="Your Library" />
      <br />
      <strong className={classes.sidebar__title}>PLAYLISTS</strong>
      <hr />
      {playlists?.items?.map((playlist) => (
      <SidebarOption option={playlist.name} />
      ))}
      <br />
      <strong className={classes.sidebar__title}>RECENT</strong>
      <hr />
    </div>
  );
}

export default Sidebar;