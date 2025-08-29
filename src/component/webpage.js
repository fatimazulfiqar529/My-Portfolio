import * as React from 'react';
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";   
import Typography from "@mui/material/Typography"; 
import Button from '@mui/material/Button';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import res1 from '../assests/Login/res1.png';
import res2 from '../assests/Login/res2.png';
import tailwind from '../assests/Login/tailwind.png';
import doctor from '../assests/Login/doctor.png';
import news from '../assests/Login/news.png';
import nav from '../assests/Login/nav.png';
function Poge() {
        const images=[res1,res2];
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
function Tailwind() {
  return (
    <Box>
          <img src={tailwind} alt="blue" style={{ width:'150px', borderRadius:'8px' }} />
    </Box>
  );
}
function Hospital() {
  return (
    <Box>
          <img src={doctor} alt="blue" style={{ width:'150px', borderRadius:'8px' }} />
    </Box>
  );
}
function News() {
  return (
    <Box>
          <img src={news} alt="blue" style={{ width:'150px', borderRadius:'8px' }} />
    </Box>
  );
}
function Nav() {
  return (
    <Box>
          <img src={nav} alt="blue" style={{ width:'150px', borderRadius:'8px' }} />
    </Box>
  );
}
function Page() {
        const [showPoge,setShowPoge]=React.useState(false);
        const handleClick=()=>{
            setShowPoge(prev=>!prev);
        }
         const [showTailwind,setShowTailwind]=React.useState(false);
        const handleClickk=()=>{
            setShowTailwind(prev=>!prev);
        }
           const [showHospital,setShowHospital]=React.useState(false);
        const handleClickkk=()=>{
            setShowHospital(prev=>!prev);
        }
                   const [showNews,setShowNews]=React.useState(false);
        const handleClickkkk=()=>{
            setShowNews(prev=>!prev);
        }
                  const [showNav,setShowNav]=React.useState(false);
        const handleClickl=()=>{
            setShowNav(prev=>!prev);
        }
    return(
 <Box sx={{backgroundColor:"#F4FDFB",padding:"8%"}}>
      <Typography sx={{color:"#2F4F4F",fontFamily:"Poppins",textAlign:"center",fontSize:{lg:"25px",md:"18px",xs:"15px",sm:"15px"},fontWeight:700}}>
        See My WebPages Here
      </Typography>

      <Box sx={{marginTop:"5%",display:"flex",flexDirection:"column",gap:"1rem",justifyContent:"center",alignItems:"center"}}>
        <Typography sx={{color:"#264653",textAlign:"center",fontFamily:"Inter",fontSize:{lg:"18px",md:"12px",xs:"12px",sm:"12px"},width:"75%",fontWeight:400}}>
        Restaurant WebPage
        </Typography>

        <Link href="https://github.com/fatimazulfiqar529/Restaurant-WebPage.git">
          <Button variant="contained" sx={{backgroundColor:"#2A9D8F",color:"#F0F8FF"}}>
            Click Here to Get the Code <ArrowUpwardIcon/>
          </Button>
        </Link>
        <Button variant="outlined" sx={{marginTop:"1rem"}} onClick={handleClick}>
          {showPoge ? "Hide Layout" : "Show Layout"}
        </Button>
        {showPoge && <Poge />}
     
      </Box>
            <Box sx={{marginTop:"5%",display:"flex",flexDirection:"column",gap:"1rem",justifyContent:"center",alignItems:"center"}}>
        <Typography sx={{color:"#264653",textAlign:"center",fontFamily:"Inter",fontSize:{lg:"18px",md:"12px",xs:"12px",sm:"12px"},width:"75%",fontWeight:400}}>
         Digital Solution WebPage
        </Typography>

        <Link href="https://github.com/fatimazulfiqar529/Tailwind-repo.git">
          <Button variant="contained" sx={{backgroundColor:"#2A9D8F",color:"#F0F8FF"}}>
            Click Here to Get the Code <ArrowUpwardIcon/>
          </Button>
        </Link>
        <Button variant="outlined" sx={{marginTop:"1rem"}} onClick={handleClickk}>
          {showTailwind ? "Hide Layout" : "Show Layout"}
        </Button>
        {showTailwind && <Tailwind />}
      </Box>

                  <Box sx={{marginTop:"5%",display:"flex",flexDirection:"column",gap:"1rem",justifyContent:"center",alignItems:"center"}}>
        <Typography sx={{color:"#264653",textAlign:"center",fontFamily:"Inter",fontSize:{lg:"18px",md:"12px",xs:"12px",sm:"12px"},width:"75%",fontWeight:400}}>
         Hospital WebPage
        </Typography>

        <Link href="https://github.com/fatimazulfiqar529/hospital.git">
          <Button variant="contained" sx={{backgroundColor:"#2A9D8F",color:"#F0F8FF"}}>
            Click Here to Get the Code <ArrowUpwardIcon/>
          </Button>
        </Link>
        <Button variant="outlined" sx={{marginTop:"1rem"}} onClick={handleClickkk}>
          {showHospital ? "Hide Layout" : "Show Layout"}
        </Button>
        {showHospital && <Hospital />}
      </Box>

        <Box sx={{marginTop:"5%",display:"flex",flexDirection:"column",gap:"1rem",justifyContent:"center",alignItems:"center"}}>
        <Typography sx={{color:"#264653",textAlign:"center",fontFamily:"Inter",fontSize:{lg:"18px",md:"12px",xs:"12px",sm:"12px"},width:"75%",fontWeight:400}}>
         Creative Marketing WebPage
        </Typography>

        <Link href="https://github.com/fatimazulfiqar529/Creative-Marketing.git">
          <Button variant="contained" sx={{backgroundColor:"#2A9D8F",color:"#F0F8FF"}}>
            Click Here to Get the Code <ArrowUpwardIcon/>
          </Button>
        </Link>
        <Button variant="outlined" sx={{marginTop:"1rem"}} onClick={handleClickkkk}>
          {showNews ? "Hide Layout" : "Show Layout"}
        </Button>
        {showNews && <News />}
      </Box>

            <Box sx={{marginTop:"5%",display:"flex",flexDirection:"column",gap:"1rem",justifyContent:"center",alignItems:"center"}}>
        <Typography sx={{color:"#264653",textAlign:"center",fontFamily:"Inter",fontSize:{lg:"18px",md:"12px",xs:"12px",sm:"12px"},width:"75%",fontWeight:400}}>
         Orbital WebPage
        </Typography>

        <Link href="https://github.com/fatimazulfiqar529/orbital.git">
          <Button variant="contained" sx={{backgroundColor:"#2A9D8F",color:"#F0F8FF"}}>
            Click Here to Get the Code <ArrowUpwardIcon/>
          </Button>
        </Link>
        <Button variant="outlined" sx={{marginTop:"1rem"}} onClick={handleClickl}>
          {showNav ? "Hide Layout" : "Show Layout"}
        </Button>
        {showNav && <Nav />}
      </Box>

    </Box>
  );
}

export default Page;