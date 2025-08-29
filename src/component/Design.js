import * as React from 'react';
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";   
import Typography from "@mui/material/Typography"; 
import Button from '@mui/material/Button';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import pink from '../assests/Login/pink.png';
import blue from '../assests/Login/blue.png';
import weather from '../assests/Login/weather.png';
import covid from '../assests/Login/covid.png';
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
function Log() {
  return (
    <Box>
          <img src={pink} alt="pink" style={{ width:'150px', borderRadius:'8px' }} />
    </Box>
  );
}
function LogIn() {
  return (
    <Box>
          <img src={blue} alt="blue" style={{ width:'150px', borderRadius:'8px' }} />
    </Box>
  );
}
function Design() {
      const [showLog, setShowLog] = React.useState(false);
    const handleClick=() => setShowLog(prev => !prev)
        const [showLogIn, setShowLogIn] = React.useState(false);
    const handleClickk=() => setShowLogIn(prev => !prev)  
      const [showhello, setShowhello] = React.useState(false);
        const handleClickkk=() => setShowhello(prev => !prev)
           const [showhy, setShowhy] = React.useState(false);
        const handleClickkkk=() => setShowhy(prev => !prev)
   const [showPortt,setShowPortt]=React.useState(false);
    const handleClickl=()=>{
        setShowPortt(prev=>!prev);
    }
  return (
    <Box sx={{backgroundColor:"#7d799bff",padding:"8%"}}>
      <Typography sx={{color:"#4CAF50",fontFamily:"Poppins",textAlign:"center",fontSize:{lg:"25px",md:"18px",xs:"15px",sm:"15px"},fontWeight:700}}>
        See All Designs Here
      </Typography>

      <Box sx={{marginTop:"5%",display:"flex",flexDirection:"column",gap:"1rem",justifyContent:"center",alignItems:"center"}}>
        <Typography sx={{color:"#F5F5F5;",textAlign:"center",fontFamily:"Inter",fontSize:{lg:"18px",md:"12px",xs:"12px",sm:"12px"},width:"75%",fontWeight:400}}>
          Login Page
        </Typography>
                <Link href="https://github.com/fatimazulfiqar529/Login2.git">
          <Button variant="contained" sx={{backgroundColor:"#0066CC",color:"#F0F8FF"}}>
            Click Here to Get the Code <ArrowUpwardIcon/>
          </Button>
        </Link>
          <Button variant="outlined" sx={{marginTop:"1rem"}} onClick={handleClick}>
          {showLog ? "Hide Layout" : "Show Layout"}
        </Button>
        {showLog && <Log />}

       
      </Box>
      <Box sx={{marginTop:"5%",display:"flex",flexDirection:"column",gap:"1rem",justifyContent:"center",alignItems:"center"}}>
        <Typography sx={{color:"#F5F5F5;",textAlign:"center",fontFamily:"Inter",fontSize:{lg:"18px",md:"12px",xs:"12px",sm:"12px"},width:"75%",fontWeight:400}}>
          BootStrap5 Login Page
        </Typography>
                <Link href="https://github.com/fatimazulfiqar529/LoginPage1.git">
          <Button variant="contained" sx={{backgroundColor:"#0066CC",color:"#F0F8FF"}}>
            Click Here to Get the Code <ArrowUpwardIcon/>
          </Button>
        </Link>
          <Button variant="outlined" sx={{marginTop:"1rem"}} onClick={handleClickk}>
          {showLogIn ? "Hide Layout" : "Show Layout"}
        </Button>
        {showLogIn && <LogIn />}

       
      </Box> 
            <Box sx={{marginTop:"5%",display:"flex",flexDirection:"column",gap:"1rem",justifyContent:"center",alignItems:"center"}}>
              <Typography sx={{color:"#F5F5F5",textAlign:"center",fontFamily:"Inter",fontSize:{lg:"18px",md:"12px",xs:"12px",sm:"12px"},width:"75%",fontWeight:400}}>
                Weather App
              </Typography>
                      <Link href="https://github.com/fatimazulfiqar529/Weather.git">
                <Button variant="contained" sx={{backgroundColor:"#0066CC",color:"#F0F8FF"}}>
                  Click Here to Get the Code <ArrowUpwardIcon/>
                </Button>
              </Link>
                <Button variant="outlined" sx={{marginTop:"1rem"}} onClick={handleClickkk}>
                {showhello ? "Hide Layout" : "Show Layout"}
              </Button>
              {showhello && <Hello />}
      
             
            </Box>
      
               <Box sx={{marginTop:"5%",display:"flex",flexDirection:"column",gap:"1rem",justifyContent:"center",alignItems:"center"}}>
              <Typography sx={{color:"#F5F5F5",textAlign:"center",fontFamily:"Inter",fontSize:{lg:"18px",md:"12px",xs:"12px",sm:"12px"},width:"75%",fontWeight:400}}>
      Global Covid Tracker        </Typography>
                      <Link href="https://github.com/fatimazulfiqar529/Covid-Data.git">
                <Button variant="contained" sx={{backgroundColor:"#0066CC",color:"#F0F8FF"}}>
                  Click Here to Get the Code <ArrowUpwardIcon/>
                </Button>
              </Link>
                <Button variant="outlined" sx={{marginTop:"1rem"}} onClick={handleClickkkk}>
                {showhy ? "Hide Layout" : "Show Layout"}
              </Button>
              {showhy && <Hy />}
      
             
            </Box>
                  <Box sx={{marginTop:"5%",display:"flex",flexDirection:"column",gap:"1rem",justifyContent:"center",alignItems:"center"}}>
        <Typography sx={{color:"#F5F5F5;",textAlign:"center",fontFamily:"Inter",fontSize:{lg:"18px",md:"12px",xs:"12px",sm:"12px"},width:"75%",fontWeight:400}}>
          Portfolio Design
        </Typography>
                <Link href="https://github.com/fatimazulfiqar529/Portfolio.git">
          <Button variant="contained" sx={{backgroundColor:"#0066CC",color:"#F0F8FF"}}>
            Click Here to Get the Code <ArrowUpwardIcon/>
          </Button>
        </Link>
          <Button variant="outlined" sx={{marginTop:"1rem"}} onClick={handleClickl}>
          {showPortt ? "Hide Layout" : "Show Layout"}
        </Button>
        {showPortt && <Portt />}

       
      </Box>
      <Link href="https://github.com/fatimazulfiqar529" underline='none'>
      <Typography sx={{color:"#4CAF50",fontFamily:"Poppins",textAlign:"center",marginTop:"2%",fontSize:{lg:"25px",md:"30px",xs:"25px",sm:"25px"},fontWeight:{lg:800,md:700,xs:700,sm:700}}}>For All Designs,Please Visit My github Account</Typography>
      </Link>
       </Box>
        );
      }
      
      export default Design;