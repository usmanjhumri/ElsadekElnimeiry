import * as React from "react";
import { Menu, MenuItem, IconButton } from '@mui/material'
import SettingsIcon from "@mui/icons-material/Settings";
// import { useDispatch } from "react-redux";
// import {change} from '../../store/actions/actions'
export default function ToogleMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    // const dispatch=useDispatch()
  // const handleClick = (event) => {
  //   dispatch(change(event))
  // };

  return (
    <div>
      <IconButton
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={(event) => {
          setAnchorEl(event.currentTarget);
        }}
      >
        <SettingsIcon />
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={() => {
          setAnchorEl(null);
        }}
      >
        {/* <MenuItem
          onClick={() => {
            handleClick("light");
          }}
        >
          Light Mode
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleClick("dark");
          }}
        >
          Dark Mode
        </MenuItem> */}
        <MenuItem>Login</MenuItem>
      </Menu>
    </div>
  );
}
