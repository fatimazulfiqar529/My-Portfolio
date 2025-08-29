import * as React from 'react';
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";   
import Typography from "@mui/material/Typography"; 
import Button from '@mui/material/Button';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import i1 from '../assests/MCS/i1.png';
import i2 from '../assests/MCS/i2.png';
import i3rd from '../assests/MCS/i3rd.png';
import i4th from '../assests/MCS/i4th.png';
import i5th from '../assests/MCS/i5th.png';
import i6th from '../assests/MCS/i6th.png';
import i7th from '../assests/MCS/i7th.png';
import i8th from '../assests/MCS/i8th.png';
import w1 from '../assests/ibrahimi/w1.png';
import w2 from '../assests/ibrahimi/w2.png';
import w3 from '../assests/ibrahimi/w3.png';
import w4 from '../assests/ibrahimi/w4.png';
import w5 from '../assests/ibrahimi/w5.png';
import t1 from '../assests/it/t1.png';
import t2 from '../assests/it/t2.png';
import t3 from '../assests/it/t3.png';
import t4 from '../assests/it/t4.png';
import t5 from '../assests/it/t5.png';
import t6 from '../assests/it/t6.png';
import t7 from '../assests/it/t7.png';
import t8 from '../assests/it/t8.png';
import t9 from '../assests/it/t9.png';
import t10 from '../assests/it/t10.png';
import t11 from '../assests/it/t11.png';
import a1 from '../assests/Alibaba/a1.png';
import a2 from '../assests/Alibaba/a2.png';
import a3 from '../assests/Alibaba/a3.png';
import a4 from '../assests/Alibaba/a4.png';
import a5 from '../assests/Alibaba/a5.png';
import a6 from '../assests/Alibaba/a6.png';
import a7 from '../assests/Alibaba/a7.png';
import a8 from '../assests/Alibaba/a8.png';
import a9 from '../assests/Alibaba/a9.png';
import m1 from '../assests/Marham/m1.png';
import m2 from '../assests/Marham/m2.png';
import m3 from '../assests/Marham/m3.png';
import m4 from '../assests/Marham/m4.png';
import m5 from '../assests/Marham/m5.png';
import m6 from '../assests/Marham/m6.png';
import m7 from '../assests/Marham/m7.png';
import m8 from '../assests/Marham/m8.png';
import m9 from '../assests/Marham/m9.png';
import m10 from '../assests/Marham/m10.png';
import m11 from '../assests/Marham/m11.png';
import m12 from '../assests/Marham/m12.png';
function MCSGallery() {
  const images = [i1, i2, i3rd, i4th, i5th, i6th, i7th, i8th];

  return (
    <Box sx={{display:"flex",flexDirection:"row",gap:"1rem",flexWrap:"wrap",justifyContent:"center"}}>
      {images.map((img, index) => (
        <a key={index} href={img}>
          <img src={img} alt="img" style={{ width:'150px', borderRadius:'8px' }} />
        </a>
      ))}
    </Box>
  );
}
function Ibrahimi(){
    const img=[w1,w2,w3,w4,w5];
    return(
<Box sx={{display:"flex",flexDirection:"row",gap:"1rem",flexWrap:"wrap",justifyContent:"center"}}>
    {img.map((img,index)=>(
        <a key={index} href={img}>
        <img src={img} alt="img" style={{ width:'150px', borderRadius:'8px' }}/>
        </a>
    ))}
</Box>
    )
}
function IT(){
    const photo=[t1,t2,t3,t4,t5,t6,t7,t8,t9,t10,t11];
    return(
        <Box sx={{display:"flex",flexDirection:"row",gap:"1rem",flexWrap:"wrap",justifyContent:"center"}}>
    {photo.map((img,index)=>(
    <a key={index} href={img}>
<img src={img} alt="img" style={{ width:'150px',borderRadius:'8px' }}/>
    </a>
)
)}
        </Box>
    )
}
function Alibaba(){
    const photos=[a1,a2,a3,a4,a5,a6,a7,a8,a9];
    return(
        <Box sx={{display:"flex",flexDirection:"row",gap:"1rem",flexWrap:"wrap",justifyContent:"center"}}>
    {photos.map((img,index)=>(
    <a key={index} href={img}>
<img src={img} alt="img" style={{ width:'150px',borderRadius:'8px' }}/>
    </a>
)
)}
        </Box>
    )
}
function Marham(){
    const pic=[m1,m2,m3,m4,m5,m6,m7,m8,m9,m10,m11,m12];
    return(
        <Box sx={{display:"flex",flexDirection:"row",gap:"1rem",flexWrap:"wrap",justifyContent:"center"}}>
    {pic.map((img,index)=>(
    <a key={index} href={img}>
<img src={img} alt="img" style={{ width:'150px',borderRadius:'8px' }}/>
    </a>
)
)}
        </Box>
    )
}
function Nust() {
  const [showGallery, setShowGallery] = React.useState(false);
const handleClick=() => setShowGallery(prev => !prev)
const [showIbrahimi,setShowIbrahimi]=React.useState(false);
  const handleClickc=()=>setShowIbrahimi(prev=>!prev);
  const [showIT,setShowIT]=React.useState(false);
  const handleClickk=()=>{
   setShowIT(prev=>!prev)
  } 
   const [showAlibaba,setShowAlibaba]=React.useState(false);
  const handleClickl=()=>{
   setShowAlibaba(prev=>!prev)
  } 
     const [showMarham,setShowMarham]=React.useState(false);
  const handleClicki=()=>{
   setShowMarham(prev=>!prev)
  } 
  return (
    <Box id="Nust" sx={{backgroundColor:"#E6F7FF",padding:"8%"}}>
      <Typography sx={{color:"#FF6F61",fontFamily:"Poppins",textAlign:"center",fontSize:{lg:"25px",md:"18px",xs:"15px",sm:"15px"},fontWeight:700}}>
        See My Websites Here
      </Typography>

      <Box sx={{marginTop:"5%",display:"flex",flexDirection:"column",gap:"1rem",justifyContent:"center",alignItems:"center"}}>
        <Typography sx={{color:"#005073",textAlign:"center",fontFamily:"Inter",fontSize:{lg:"18px",md:"12px",xs:"12px",sm:"12px"},width:"75%",fontWeight:400}}>
          Military College of Signals Website
        </Typography>

        <Link href="https://github.com/fatimazulfiqar529/mcs-website.git">
          <Button variant="contained" sx={{backgroundColor:"#007ACC",color:"#F0F8FF"}}>
            Click Here to Get the Code <ArrowUpwardIcon/>
          </Button>
        </Link>
        <Button variant="outlined" sx={{marginTop:"1rem"}} onClick={handleClick}>
          {showGallery ? "Hide Gallery" : "Show Gallery"}
        </Button>
        {showGallery && <MCSGallery />}
      </Box>
            <Box sx={{marginTop:"5%",display:"flex",flexDirection:"column",gap:"1rem",justifyContent:"center",alignItems:"center"}}>
        <Typography sx={{color:"#005073",textAlign:"center",fontFamily:"Inter",fontSize:{lg:"18px",md:"12px",xs:"12px",sm:"12px"},width:"75%",fontWeight:400}}>
        Marham Hospital(IFFAT ANWAR MEDICAL COMPLEX,LAHORE)
        </Typography>

        <Link href="https://github.com/fatimazulfiqar529/demo-website.git">
          <Button variant="contained" sx={{backgroundColor:"#007ACC",color:"#F0F8FF"}}>
            Click Here to Get the Code <ArrowUpwardIcon/>
          </Button>
        </Link>
        <Button variant="outlined" sx={{marginTop:"1rem"}} onClick={handleClickc}>
          {showIbrahimi ? "Hide Images" : "Show Images"}
        </Button>
        {showIbrahimi && <Ibrahimi />}
      </Box>
        <Box sx={{marginTop:"5%",display:"flex",flexDirection:"column",gap:"1rem",justifyContent:"center",alignItems:"center"}}>
        <Typography sx={{color:"#005073",textAlign:"center",fontFamily:"Inter",fontSize:{lg:"18px",md:"12px",xs:"12px",sm:"12px"},width:"75%",fontWeight:400}}>
        CyberShield.IT
        </Typography>

        <Link href="https://github.com/fatimazulfiqar529/CYBERSHIELD.IT.git">
          <Button variant="contained" sx={{backgroundColor:"#007ACC",color:"#F0F8FF"}}>
            Click Here to Get the Code <ArrowUpwardIcon/>
          </Button>
        </Link>
        <Button variant="outlined" sx={{marginTop:"1rem"}} onClick={handleClickk}>
          {showIT? "Hide Images" : "Show Images"}
        </Button>
        {showIT && <IT />}
      </Box>
       <Box sx={{marginTop:"5%",display:"flex",flexDirection:"column",gap:"1rem",justifyContent:"center",alignItems:"center"}}>
        <Typography sx={{color:"#005073",textAlign:"center",fontFamily:"Inter",fontSize:{lg:"18px",md:"12px",xs:"12px",sm:"12px"},width:"75%",fontWeight:400}}>
        Alibaba E-Commerce
        </Typography>

        <Link href="https://github.com/fatimazulfiqar529/CYBERSHIELD.IT.git">
          <Button variant="contained" sx={{backgroundColor:"#007ACC",color:"#F0F8FF"}}>
            Click Here to Get the Code <ArrowUpwardIcon/>
          </Button>
        </Link>
        <Button variant="outlined" sx={{marginTop:"1rem"}} onClick={handleClickl}>
          {showAlibaba? "Hide Images" : "Show Images"}
        </Button>
        {showAlibaba && <Alibaba />}
      </Box>
    
      <Box sx={{marginTop:"5%",display:"flex",flexDirection:"column",gap:"1rem",justifyContent:"center",alignItems:"center"}}>
        <Typography sx={{color:"#005073",textAlign:"center",fontFamily:"Inter",fontSize:{lg:"18px",md:"12px",xs:"12px",sm:"12px"},width:"75%",fontWeight:400}}>
        Marham Hospital
        </Typography>

        <Link href="https://github.com/fatimazulfiqar529/CYBERSHIELD.IT.git">
          <Button variant="contained" sx={{backgroundColor:"#007ACC",color:"#F0F8FF"}}>
            Click Here to Get the Code <ArrowUpwardIcon/>
          </Button>
        </Link>
        <Button variant="outlined" sx={{marginTop:"1rem"}} onClick={handleClicki}>
          {showMarham? "Hide Images" : "Show Images"}
        </Button>
        {showMarham && <Marham />}
      </Box>

    </Box>
  );
}

export default Nust;
