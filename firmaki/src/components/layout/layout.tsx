import { MouseEvent, ReactNode, useState } from "react";

import useTheme from "@mui/material/styles/useTheme";
import useMediaQuery from "@mui/material/useMediaQuery";

import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  const theme = useTheme();
  // breakpoint sizes: https://mui.com/customization/breakpoints/#default-breakpoints
  const isAtLeastSm = useMediaQuery(theme.breakpoints.up("sm"));

  const [menuAnchorEl, setMenuAnchorEl] = useState<null | HTMLElement>(null);

  const handleMenu = (event: MouseEvent<HTMLElement>) => {
    setMenuAnchorEl(event.currentTarget);
  };

  const handleClose = (event: MouseEvent<HTMLElement>) => {
    setMenuAnchorEl(null);
  };

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            {!isAtLeastSm && (
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
                onClick={handleMenu}
              >
                <MenuIcon />
              </IconButton>
            )}
            <Menu
              id="menu-appbar"
              anchorEl={menuAnchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(menuAnchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>Sign Document</MenuItem>
              <MenuItem onClick={handleClose}>Draw Signature</MenuItem>
              <MenuItem onClick={handleClose}>Upload Signature</MenuItem>
            </Menu>
            <Typography variant="h4" component="h4" sx={{ flexGrow: 1 }}>
              Firmaki
            </Typography>
            {isAtLeastSm && (
              <>
                <Button color="inherit">Sign Document</Button>
                <Button color="inherit">Draw Signature</Button>
                <Button color="inherit">Upload Signature</Button>
              </>
            )}
          </Toolbar>
        </AppBar>
      </Box>
      {children}
    </>
  );
};

export default Layout;
