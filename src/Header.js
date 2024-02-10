import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from "@material-ui/icons/Home";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";

const Header = () => {
  return (
    <div className="header">
      <h1>This is the Header</h1>

      <div className="header_left">
        <img src="https://www.flaticon.com/free-icon/linkedin_3536505" alt="" />

        <div className="header_search">
          <SearchIcon />

          <input type="text" />
        </div>
      </div>

      <div className="header_right">
        <headerOption Icon={HomeIcon} title='Home'/>
        <headerOption Icon={} title="My Network" />

      </div>
    </div>
  );
}

export default Header
