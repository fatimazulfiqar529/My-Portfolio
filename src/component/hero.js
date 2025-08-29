import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import background from '../assests/images/background.jpg';
import fatimap from '../assests/images/fatimap.png';
import ImageListItem from '@mui/material/ImageListItem';
import Button from '@mui/material/Button';
function Hero(){
    return(
    <Box id="home" sx={{backgroundImage: `url(${background})`,maxWidth:"1530px",width:"100%",padding:"5%",marginTop:{lg:"2.3%",md:"2.3%",sm:"5%",xs:"25%"}}}>
<Box sx={{display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
   <Box sx={{display:"flex",flexDirection:"column",justifyContent:"flex-start",gap:"0.5rem"}}>
   <Typography sx={{color:"black",fontFamily:"Poppins",fontSize:{lg:"45px",md:"30px",xs:"25px",sm:"25px"},fontWeight:{lg:800,md:700,xs:700,sm:700},width:{lg:"50%",md:"50%",sm:"70%",xs:"70%"}}}>I'm Fatima Zulfiqar <Box sx={{color:"#734f96"}}>Front-end Developer</Box></Typography>
   <Typography sx={{color:"#555555",fontFamily:"Inter",fontSize:{lg:"13px",md:"12px",xs:"12px",sm:"12px"},fontWeight:{lg:400,md:400,xs:400,sm:400},width:{lg:"50%",md:"50%",sm:"70%",xs:"70%"}}}>I am a front-end developer passionate about creating responsive and interactive websites that bring designs to life. I specialize in building clean, user-friendly interfaces using modern web technologies, including HTML, CSS, JavaScript, and React. My goal is to craft seamless digital experiences that are both visually appealing and highly functional for users.</Typography>
 <Box sx={{display:"flex",flexDirection:"row",justifyContent:"start",gap:"1rem"}}>
    <Button variant='contained' sx={{color:"white",backgroundColor:"#734f96",fontFamily:"Inter",fontSize:{lg:"13px",md:"12px",xs:"12px",sm:"12px"},fontWeight:{lg:400,md:400,xs:400,sm:400},width:{lg:"15%",md:"30%",sm:"30%",xs:"20%"}}}>Hire Me<i className='fas fa-arrow-right'></i></Button>
    <Button href="
https://github.com/fatimazulfiqar529" variant='contained' sx={{color:"white",backgroundColor:"#734f96",fontFamily:"Inter",fontSize:{lg:"13px",md:"12px",xs:"12px",sm:"12px"},fontWeight:{lg:400,md:400,xs:400,sm:400},width:{lg:"15%",md:"30%",sm:"30%",xs:"20%"}}}>View My Project</Button>
 </Box>
    </Box>
    <ImageListItem>
        <img src={fatimap} alt="Fatima" style={{height:"70vh",width:"20vw",marginTop:"-50%"}}/>
    </ImageListItem>

</Box>
    </Box>
    );
}
export default Hero;