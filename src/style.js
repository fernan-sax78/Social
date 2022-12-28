import {styled} from "@mui/material/styles";
import { Box, Toolbar} from "@mui/material";





export const StyledToolBar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

export const SearchDiv = styled("div")(({ theme }) => ({
  background: "#fff",
  width: "40%",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
}));

export const Icons = styled(Box)(({theme}) => ({
  display: "none",
  gap: "20px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    display : 'flex'
  },
}));


export const UserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "10px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));

export const ModalStyle = styled("div")(({ theme }) => ({
  display: "grid",
  width: "100%",
  height: "100vh",
  placeItems: "center",
}));

export const ModalStyleCom = styled("div")(({ theme }) => ({
  width: "100%",
  height: "100%",
}));

export const UserBoxPost = styled("div")(({ theme }) => ({
 display : 'flex',
 alignItems : 'center',
 gap : 8,
 marginBottom : 8
}));




