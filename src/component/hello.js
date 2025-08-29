import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import background from '../assests/images/background.jpg';
import Link from '@mui/material/Link';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

function Navv() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handlePortfolioClick = (event) => { setAnchorEl(event.currentTarget); };
  const handlePortfolioClose = () => { setAnchorEl(null); };

  return (
    <AppBar sx={{ display: "flex", flexDirection: { lg: "row", md: "row", sm: "row", xs: "column" }, justifyContent: "center", gap: { lg: "2rem", md: "2rem", sm: "0.5rem", xs: "0.5rem" }, padding: "0.5rem", backgroundImage: `url(${background})` }}>
      <Link href="#home" underline='none'>
        <Typography sx={{ color: "#4B0082", "&:hover": { textDecoration: "underline", textDecorationColor: "#310062" }, fontFamily: "Inter", fontSize: "18px", fontWeight: "600" }}>
          Home
        </Typography>
      </Link>
      <Link href="#about" underline='none'>
        <Typography sx={{ color: "#4B0082", "&:hover": { textDecoration: "underline", textDecorationColor: "#310062" }, fontFamily: "Inter", fontSize: "18px", fontWeight: "600" }}>
          About Me
        </Typography>
      </Link>
      <Link href="#service" underline='none'>
        <Typography sx={{ color: "#4B0082", "&:hover": { textDecoration: "underline", textDecorationColor: "#310062" }, fontSize: "18px", fontWeight: "600" }}>
          Services
        </Typography>
      </Link>
      <Typography onClick={handlePortfolioClick} sx={{ display: "inline-block", color: "#4B0082", "&:hover": { textDecoration: "underline", textDecorationColor: "#310062" }, fontFamily: "Inter", fontSize: "18px", fontWeight: "600", cursor: "pointer" }}>
        Portfolio
      </Typography>
      <Menu anchorEl={anchorEl} open={open} onClose={handlePortfolioClose}>
      <Menu anchorEl={anchorEl} open={open} onClose={handlePortfolioClose}>
  <MenuItem component="a" href="/Nust" onClick={handlePortfolioClose}>Websites</MenuItem>
  <MenuItem component="a" href="/Design" onClick={handlePortfolioClose}>Designs</MenuItem>
  <MenuItem component="a" href="https://github.com/fatimazulfiqar529" onClick={handlePortfolioClose}>Projects</MenuItem>
</Menu>

      </Menu>
      <Link href="#contact" underline='none'>
        <Typography sx={{ color: "#4B0082", "&:hover": { textDecoration: "underline", textDecorationColor: "#310062" }, fontFamily: "Inter", fontSize: "18px", fontWeight: "600" }}>
          Contact
        </Typography>
      </Link>
      <Link href="#other" underline='none'>
        <Typography sx={{ color: "#4B0082", "&:hover": { textDecoration: "underline", textDecorationColor: "#310062" }, fontFamily: "Inter", fontSize: "18px", fontWeight: "600" }}>
          Others
        </Typography>
      </Link>
    </AppBar>
  );
}

export default Navv;
