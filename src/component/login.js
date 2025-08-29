import * as React from 'react';
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";   
import Typography from "@mui/material/Typography"; 
import Button from '@mui/material/Button';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import pink from '../assests/Login/pink.png';
import blue from '../assests/Login/blue.png';
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
function Login() {
      const [showLog, setShowLog] = React.useState(false);
    const handleClick=() => setShowLog(prev => !prev)
        const [showLogIn, setShowLogIn] = React.useState(false);
    const handleClickk=() => setShowLogIn(prev => !prev)  

  return (
    <Box sx={{backgroundColor:"#FFF0E6",padding:"8%"}}>
      <Typography sx={{color:"#CC3300",fontFamily:"Poppins",textAlign:"center",fontSize:{lg:"25px",md:"18px",xs:"15px",sm:"15px"},fontWeight:700}}>
        See My Login and Registration Layout Here
      </Typography>

      <Box sx={{marginTop:"5%",display:"flex",flexDirection:"column",gap:"1rem",justifyContent:"center",alignItems:"center"}}>
        <Typography sx={{color:"#333333;",textAlign:"center",fontFamily:"Inter",fontSize:{lg:"18px",md:"12px",xs:"12px",sm:"12px"},width:"75%",fontWeight:400}}>
          Login Page In Peach Theme
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
        <Typography sx={{color:"#333333;",textAlign:"center",fontFamily:"Inter",fontSize:{lg:"18px",md:"12px",xs:"12px",sm:"12px"},width:"75%",fontWeight:400}}>
          Login Page By Using Bootstrap
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
       </Box>
        );
      }
      
      export default Login;