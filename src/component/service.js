import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import web from '../assests/images/web.png';
import ImageListItem from '@mui/material/ImageListItem';
import design from '../assests/images/design.png';
import control from '../assests/images/control.png';
import portfolio from '../assests/images/portfolio.png';
import log from '../assests/images/log.png';
import hy from '../assests/images/hy.png';
function Service(){
const handleClick = () => {
  window.open('/Nust', '_blank'); 
};
const handleClickk = () => {
  window.open('/Login', '_blank'); 
};
const handleClickkk=()=>{
       window.open('Port','-blank')
}
const handleClickkkk=()=>{
       window.open('Page','-blank')
}
const handleCli=()=>{
       window.open('UI','-blank')
}
const handle=()=>{
       window.open('Design','-blank')
}

    return(
<Box id="service" sx={{backgroundColor:"#F5F5DC",padding:"10%"}}>
<Typography  sx={{color:"#555555",fontFamily:"Poppins",paddingLeft:"37%",fontSize:{lg:"50px",md:"30px",xs:"25px",sm:"25px"},fontWeight:{lg:800,md:700,xs:700,sm:700}}}>My Service</Typography>
   <Typography sx={{color:"#555555",paddingLeft:"20%",textAlign:"center",fontFamily:"Inter",fontSize:{lg:"13px",md:"12px",xs:"12px",sm:"12px"},width:"75%",fontWeight:{lg:400,md:400,xs:400,sm:400}}}>
    I create responsive and interactive websites that provide seamless user experiences across all devices. I specialize in front-end development using HTML, CSS, JavaScript, and React, turning designs into functional, modern websites.
   </Typography>
   <Box sx={{display:"flex",justifyContent:"space-evenly",flexDirection:{lg:"row",md:"row",sm:"column",xs:"column"},gap:"1.5rem",marginTop:"7%"}}>
    <Box onClick={handle} sx={{display:"flex",justifyContent:"flex-start",flexDirection:"column","&:hover":{backgroundColor:"#D6F1FF"},backgroundColor:"white",borderRadius:"15px",padding:"1rem",gap:"0.5rem"}}>
<ImageListItem>
            <img src={design} alt="Web development" style={{width:"25%",height:"100%",marginLeft:"35%"}}/>
</ImageListItem>
       <Typography sx={{color:"#555555",fontFamily:"Poppins",textAlign:"center","&:hover":{textDecoration:"underline",textDecorationColor:"#555555"},marginLeft:{lg:"25%",md:"25%",sm:"13%",xs:"13%"},fontSize:{lg:"18px",md:"18px",xs:"15px",sm:"15px"},fontWeight:{lg:800,md:700,xs:700,sm:700},width:{lg:"50%",md:"50%",sm:"70%",xs:"70%"}}}>
Web Design
       </Typography>
         <Typography sx={{color:"#555555",textAlign:"center",marginLeft:"13%","&:hover":{textDecoration:"underline",textDecorationColor:"#555555"},fontFamily:"Inter",fontSize:{lg:"12px",md:"12px",xs:"12px",sm:"12px"},width:"75%",fontWeight:{lg:400,md:400,xs:400,sm:400}}}>
I create clean, modern, and responsive website designs that give users a seamless browsing experience on all devices.
   </Typography>
    </Box>
        <Box onClick={handleClick} sx={{display:"flex",justifyContent:"flex-start",flexDirection:"column","&:hover":{backgroundColor:"#D6F1FF"},backgroundColor:"white",borderRadius:"15px",padding:"1.5rem",gap:"0.5rem"}}>
<ImageListItem>
            <img src={web} alt="Web development" style={{width:"25%",height:"100%",marginLeft:"35%"}}/>
</ImageListItem>
       <Typography sx={{color:"#555555",fontFamily:"Poppins",textAlign:"start",width:"100%","&:hover":{textDecoration:"underline",textDecorationColor:"#555555"},marginLeft:"18%",fontSize:{lg:"18px",md:"18px",xs:"15px",sm:"15px"},fontWeight:{lg:800,md:700,xs:700,sm:700}}}>
Frontend Development
       </Typography>
         <Typography sx={{color:"#555555",textAlign:"center",marginLeft:"13%","&:hover":{textDecoration:"underline",textDecorationColor:"#555555"},fontFamily:"Inter",fontSize:{lg:"12px",md:"12px",xs:"12px",sm:"12px"},width:"75%",fontWeight:{lg:400,md:400,xs:400,sm:400}}}>
I build fast, interactive, and user-friendly websites using modern tools like React, BootStrap5 and Material-UI.</Typography>
       <Typography sx={{color:"white",textAlign:"center",marginLeft:"13%",fontFamily:"Inter",fontSize:{lg:"20px",md:"12px",xs:"12px",sm:"12px"},width:"75%",fontWeight:{lg:400,md:400,xs:400,sm:400}}}>
Click To See Websites.</Typography>
    </Box>
            <Box onClick={handleCli} sx={{display:"flex",justifyContent:"flex-start",flexDirection:"column","&:hover":{backgroundColor:"#D6F1FF"},backgroundColor:"white",borderRadius:"15px",padding:"1rem",gap:"0.5rem"}}>
<ImageListItem>
            <img src={control} alt="Web development" style={{width:"25%",height:"100%",marginLeft:"35%"}}/>
</ImageListItem>
       <Typography sx={{color:"#555555",fontFamily:"Poppins",textAlign:"center","&:hover":{textDecoration:"underline",textDecorationColor:"#555555"},marginLeft:{lg:"25%",md:"25%",sm:"13%",xs:"13%"},fontSize:{lg:"18px",md:"18px",xs:"15px",sm:"15px"},fontWeight:{lg:800,md:700,xs:700,sm:700},width:{lg:"50%",md:"50%",sm:"70%",xs:"70%"}}}>
UI/UX Design
       </Typography>
         <Typography sx={{color:"#555555",textAlign:"center",marginLeft:"13%","&:hover":{textDecoration:"underline",textDecorationColor:"#555555"},fontFamily:"Inter",fontSize:{lg:"12px",md:"12px",xs:"12px",sm:"12px"},width:"75%",fontWeight:{lg:400,md:400,xs:400,sm:400}}}>
I design intuitive, visually appealing, and user-friendly interfaces that provide a seamless experience across all devices.</Typography>
       <Typography sx={{color:"white",textAlign:"center",marginLeft:"13%",fontFamily:"Inter",fontSize:{lg:"20px",md:"12px",xs:"12px",sm:"12px"},width:"75%",fontWeight:{lg:400,md:400,xs:400,sm:400}}}>
Click To See User Layout.</Typography>
    </Box>
    </Box>
  <Box sx={{display:"flex",justifyContent:"space-evenly",flexDirection:{lg:"row",md:"row",sm:"column",xs:"column"},gap:"1.5rem",marginTop:"4%"}}>
    <Box onClick={handleClickkk} sx={{display:"flex",width:"60%",justifyContent:"flex-start",flexDirection:"column","&:hover":{backgroundColor:"#D6F1FF"},backgroundColor:"white",borderRadius:"15px",padding:"1rem",gap:"0.5rem"}}>
<ImageListItem>
            <img src={portfolio} alt="Web development" style={{width:"25%",height:"100%",marginLeft:"35%"}}/>
</ImageListItem>
       <Typography sx={{color:"#555555",fontFamily:"Poppins",textAlign:"start","&:hover":{textDecoration:"underline",textDecorationColor:"#555555"},marginLeft:"23%",fontSize:{lg:"18px",md:"18px",xs:"15px",sm:"15px"},fontWeight:{lg:800,md:700,xs:700,sm:700}}}>
Portfolio Websites
       </Typography>
         <Typography sx={{color:"#555555",textAlign:"center",marginLeft:"13%","&:hover":{textDecoration:"underline",textDecorationColor:"#555555"},fontFamily:"Inter",fontSize:{lg:"12px",md:"12px",xs:"12px",sm:"12px"},width:"75%",fontWeight:{lg:400,md:400,xs:400,sm:400}}}>
I create professional and responsive portfolio websites to highlight your projects or business.
   </Typography>
     <Typography sx={{color:"white",textAlign:"center",marginLeft:"13%",fontFamily:"Inter",fontSize:{lg:"20px",md:"12px",xs:"12px",sm:"12px"},width:"75%",fontWeight:{lg:400,md:400,xs:400,sm:400}}}>
Click To See Portfolio.</Typography>
    </Box>
       <Box onClick={handleClickk} sx={{display:"flex",justifyContent:"flex-start",flexDirection:"column","&:hover":{backgroundColor:"#D6F1FF"},backgroundColor:"white",borderRadius:"15px",padding:"1rem",gap:"0.5rem"}}>
<ImageListItem>
            <img src={log} alt="Web development" style={{width:"25%",height:"100%",marginLeft:"35%"}}/>
</ImageListItem>
       <Typography sx={{color:"#555555",fontFamily:"Poppins",textAlign:"start",width:"100%","&:hover":{textDecoration:"underline",textDecorationColor:"#555555"},marginLeft:"18%",fontSize:{lg:"18px",md:"18px",xs:"15px",sm:"15px"},fontWeight:{lg:800,md:700,xs:700,sm:700}}}>
Login & Registration Pages       </Typography>
         <Typography sx={{color:"#555555",textAlign:"center",marginLeft:"13%","&:hover":{textDecoration:"underline",textDecorationColor:"#555555"},fontFamily:"Inter",fontSize:{lg:"12px",md:"12px",xs:"12px",sm:"12px"},width:"75%",fontWeight:{lg:400,md:400,xs:400,sm:400}}}>
I design responsive and user-friendly login and registration pages that provide a smooth experience across all devices.
   </Typography>
    <Typography sx={{color:"white",textAlign:"center",marginLeft:"13%",fontFamily:"Inter",fontSize:{lg:"20px",md:"12px",xs:"12px",sm:"12px"},width:"75%",fontWeight:{lg:400,md:400,xs:400,sm:400}}}>
Click To See Login layout.</Typography>
    </Box>
           <Box onClick={handleClickkkk} sx={{display:"flex",justifyContent:"flex-start",flexDirection:"column","&:hover":{backgroundColor:"#D6F1FF"},backgroundColor:"white",borderRadius:"15px",padding:"1rem",gap:"0.5rem"}}>
<ImageListItem>
            <img src={hy} alt="Web development" style={{width:"25%",height:"100%",marginLeft:"35%"}}/>
</ImageListItem>
       <Typography sx={{color:"#555555",fontFamily:"Poppins",textAlign:"center","&:hover":{textDecoration:"underline",textDecorationColor:"#555555"},marginLeft:{lg:"25%",md:"25%",sm:"13%",xs:"13%"},fontSize:{lg:"18px",md:"18px",xs:"15px",sm:"15px"},fontWeight:{lg:800,md:700,xs:700,sm:700},width:{lg:"50%",md:"50%",sm:"70%",xs:"70%"}}}>
Web Pages      </Typography>
         <Typography sx={{color:"#555555",textAlign:"center",marginLeft:"13%","&:hover":{textDecoration:"underline",textDecorationColor:"#555555"},fontFamily:"Inter",fontSize:{lg:"12px",md:"12px",xs:"12px",sm:"12px"},width:"75%",fontWeight:{lg:400,md:400,xs:400,sm:400}}}>
I design responsive, visually appealing, and well-structured web pages that provide a smooth experience across all devices.   </Typography>
     <Typography sx={{color:"white",textAlign:"center",marginLeft:"13%",fontFamily:"Inter",fontSize:{lg:"20px",md:"12px",xs:"12px",sm:"12px"},width:"75%",fontWeight:{lg:400,md:400,xs:400,sm:400}}}>
Click To See WebPages</Typography>
    </Box>
    </Box>



   
</Box>
    )
}
export default Service;