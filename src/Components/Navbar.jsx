import * as React from "react";
import { useTheme } from "@mui/material/styles";
import {
  Toolbar,
  Box,
  AppBar,
  Button,
  Drawer,
  List,
  Divider,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Close } from "@mui/icons-material";
import IconButton from "@mui/material/IconButton";
import { useNavigate, Link } from "react-router-dom";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  appBar: {
    background: "none !important",
    boxShadow: "none !important",
    position: "relative !important",
  },
  appBarLink: {
    textDecoration: "none",
    marginRight: 60,
    opacity: 0.8,
    color: "white",
    "&:hover": {
      color: "white",
      opacity: 1,
    },
  },
  loginBtn: {
    borderRadius: "0px !important",
    boxShadow: "none !important",
    padding: "8px 30px !important",
    marginRight: "100px !important",
  },
  paper: {
    background: "rgba(98, 11, 214, .8) !important",
  },
}));

export default function MenuAppBar(props) {
  const [dimensions, setDimensions] = React.useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });
  const classes = useStyles();
  const theme = useTheme();
  const navigate = useNavigate();
  const [drawer, setDrawer] = React.useState(false);

  React.useEffect(() => {
    setDimensions({
      height: window.innerHeight,
      width: window.innerWidth,
    });
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  function handleResize() {
    setDimensions({
      height: window.innerHeight,
      width: window.innerWidth,
    });
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      {dimensions.width > 1300 ? (
        <>
          <AppBar className={classes.appBar}>
            <Toolbar style={{ position: "relative" }}>
              <div className='w-100 d-flex align-items-center justify-content-end'>
                <div>
                  <Link exact to='/' className={classes.appBarLink}>
                    Home
                  </Link>
                  <Link exact to='/our-work' className={classes.appBarLink}>
                    Our Work
                  </Link>
                  <Link exact to='/team' className={classes.appBarLink}>
                    Team
                  </Link>
                  <Link exact to='/contact-us' className={classes.appBarLink}>
                    Contact Us
                  </Link>
                  <Button variant='contained' className={classes.loginBtn}>
                    Login
                  </Button>
                </div>
              </div>
            </Toolbar>
          </AppBar>
          {/* <br />
          <br />
          <br /> */}
        </>
      ) : (
        <>
          <AppBar className={classes.appBar}>
            <Toolbar style={{ position: "relative" }}>
              <div className='d-flex align-items-center justify-content-end w-100'>
                <IconButton
                  color='inherit'
                  aria-label='open drawer'
                  onClick={() => setDrawer(true)}
                  edge='start'>
                  <MenuIcon />
                </IconButton>
              </div>

              <Drawer
                anchor={"right"}
                open={drawer}
                classes={{ paper: classes.paper }}
                onClose={() => setDrawer(false)}>
                <Box
                  style={{
                    width: 250,
                  }}
                  role='presentation'>
                  <List>
                    <ListItem
                      button
                      style={{
                        textAlign: "center",
                        width: 50,
                        height: 30,
                        marginTop: 0,
                        marginBottom: 0,
                        marginLeft: "auto",
                      }}
                      onClick={() => {
                        setDrawer(false);
                      }}>
                      <ListItemText primary={<Close />} />
                    </ListItem>
                    <ListItem
                      button
                      style={{ textAlign: "center" }}
                      onClick={() => {
                        setDrawer(false);
                        navigate("/");
                      }}>
                      <ListItemText primary={"Home"} />
                    </ListItem>
                    <ListItem
                      button
                      style={{ textAlign: "center" }}
                      onClick={() => {
                        setDrawer(false);
                        navigate("/our-work");
                      }}>
                      <ListItemText
                        style={{ color: "white" }}
                        primary={"Our Work"}
                      />
                    </ListItem>
                    <ListItem
                      button
                      style={{ textAlign: "center" }}
                      onClick={() => {
                        setDrawer(false);
                        navigate("/team");
                      }}>
                      <ListItemText primary={"Team"} />
                    </ListItem>
                    <ListItem
                      button
                      style={{ textAlign: "center" }}
                      onClick={() => {
                        setDrawer(false);
                        navigate("/contact-us");
                      }}>
                      <ListItemText primary={"Contact Us"} />
                    </ListItem>
                    <ListItem
                      button
                      onClick={() => {
                        setDrawer(false);
                      }}
                      style={{
                        background: theme.palette.primary.main,
                        textAlign: "center",
                        width: 100,
                        margin: "0 auto",
                        padding: "4px 10px",
                      }}>
                      <ListItemText primary={"Login"} />
                    </ListItem>
                  </List>
                </Box>
              </Drawer>
            </Toolbar>
          </AppBar>
          <br />
          <br />
        </>
      )}
    </Box>
  );
}
