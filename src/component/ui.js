import * as React from 'react';
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";   
import Typography from "@mui/material/Typography"; 
import Button from '@mui/material/Button';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import weather from '../assests/Login/weather.png';
import covid from '../assests/Login/covid.png';
function Hello() {
  return (
    <Box>
          <img src={weather} alt="pink" style={{ width:'150px', borderRadius:'8px' }} />
    </Box>
  );
}
function Hy() {
  return (
    <Box>
          <img src={covid} alt="pink" style={{ width:'150px', borderRadius:'8px' }} />
    </Box>
  );
}

function UI() {
      const [showhello, setShowhello] = React.useState(false);
    const handleClick=() => setShowhello(prev => !prev)
       const [showhy, setShowhy] = React.useState(false);
    const handleClickk=() => setShowhy(prev => !prev)
      

  return (
    <Box sx={{backgroundColor:"#FDF6F0",padding:"8%"}}>
      <Typography sx={{color:"#6D6875",fontFamily:"Poppins",textAlign:"center",fontSize:{lg:"25px",md:"18px",xs:"15px",sm:"15px"},fontWeight:700}}>
        See My UI Layout Here
      </Typography>

      <Box sx={{marginTop:"5%",display:"flex",flexDirection:"column",gap:"1rem",justifyContent:"center",alignItems:"center"}}>
        <Typography sx={{color:"#e59898",textAlign:"center",fontFamily:"Inter",fontSize:{lg:"18px",md:"12px",xs:"12px",sm:"12px"},width:"75%",fontWeight:400}}>
          Weather App By Using API
        </Typography>
                <Link href="https://github.com/fatimazulfiqar529/Weather.git">
          <Button variant="contained" sx={{backgroundColor:"#B5838D",color:"#F0F8FF"}}>
            Click Here to Get the Code <ArrowUpwardIcon/>
          </Button>
        </Link>
          <Button variant="outlined" sx={{marginTop:"1rem"}} onClick={handleClick}>
          {showhello ? "Hide Layout" : "Show Layout"}
        </Button>
        {showhello && <Hello />}

       
      </Box>

         <Box sx={{marginTop:"5%",display:"flex",flexDirection:"column",gap:"1rem",justifyContent:"center",alignItems:"center"}}>
        <Typography sx={{color:"#e59898",textAlign:"center",fontFamily:"Inter",fontSize:{lg:"18px",md:"12px",xs:"12px",sm:"12px"},width:"75%",fontWeight:400}}>
Global Covid Tracker        </Typography>
                <Link href="https://github.com/fatimazulfiqar529/Covid-Data.git">
          <Button variant="contained" sx={{backgroundColor:"#B5838D",color:"#F0F8FF"}}>
            Click Here to Get the Code <ArrowUpwardIcon/>
          </Button>
        </Link>
          <Button variant="outlined" sx={{marginTop:"1rem"}} onClick={handleClickk}>
          {showhy ? "Hide Layout" : "Show Layout"}
        </Button>
        {showhy && <Hy />}

       
      </Box>
          </Box>
        );
      }
      
      export default UI;