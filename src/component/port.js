import * as React from 'react';
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";   
import Typography from "@mui/material/Typography"; 
import Button from '@mui/material/Button';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import port2 from '../assests/Login/port2.png';
import portfolio1 from '../assests/Login/portfolio1.png';
function Portt() {
        const images=[portfolio1,port2];
  return (
    <Box sx={{display:"flex",flexDirection:"row",gap:"1rem",flexWrap:"wrap",justifyContent:"center"}}>
        {images.map((img,index)=>(
        <a key={index} href={img}>
          <img src={img} alt="port" style={{ width:'150px', borderRadius:'8px' }} />
          </a>
           ))}
    </Box>
  );
}
function Port() {
    const [showPortt,setShowPortt]=React.useState(false);
    const handleClick=()=>{
        setShowPortt(prev=>!prev);
    }
  return (
    <Box sx={{backgroundColor:"#F9F9F9",padding:"8%"}}>
      <Typography sx={{color:"#444444",fontFamily:"Poppins",textAlign:"center",fontSize:{lg:"25px",md:"18px",xs:"15px",sm:"15px"},fontWeight:700}}>
        See Portfolio Here
      </Typography>

      <Box sx={{marginTop:"5%",display:"flex",flexDirection:"column",gap:"1rem",justifyContent:"center",alignItems:"center"}}>
        <Typography sx={{color:"#333333;",textAlign:"center",fontFamily:"Inter",fontSize:{lg:"18px",md:"12px",xs:"12px",sm:"12px"},width:"75%",fontWeight:400}}>
          My First Portfolio
        </Typography>
                <Link href="https://github.com/fatimazulfiqar529/Portfolio.git">
          <Button variant="contained" sx={{backgroundColor:"#FF6600",color:"#F0F8FF"}}>
            Click Here to Get the Code <ArrowUpwardIcon/>
          </Button>
        </Link>
          <Button variant="outlined" sx={{marginTop:"1rem"}} onClick={handleClick}>
          {showPortt ? "Hide Layout" : "Show Layout"}
        </Button>
        {showPortt && <Portt />}

       
      </Box>
         </Box> 
        );
      }
      
      export default Port;