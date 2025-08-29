import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ImageListItem from '@mui/material/ImageListItem';
import coaching from '../assests/images/coaching.png';
import event from '../assests/images/event.png';
function Language(){
    return(
<Box id="other" sx={{backgroundColor:"#E6E6FA",padding:"10%"}}>
<Typography  sx={{color:"#734f96",fontFamily:"Poppins",paddingLeft:"30%",fontSize:{lg:"50px",md:"30px",xs:"25px",sm:"25px"},fontWeight:{lg:800,md:700,xs:700,sm:700}}}>Coaching & Events</Typography>
   <Typography sx={{color:"#734f96",paddingLeft:"23%",textAlign:"center",fontFamily:"Inter",fontSize:{lg:"13px",md:"12px",xs:"12px",sm:"12px"},width:"79%",fontWeight:{lg:400,md:400,xs:400,sm:400}}}>
I provide personalized coaching to help individuals build skills and achieve their goals. I also organize and host events, ensuring smooth execution and a great experience for all participants.   </Typography>
<Box sx={{display:"flex",justifyContent:"flex-start",flexDirection:{lg:"row",md:"row",sm:"column",xs:"column"},gap:"1.5rem",marginTop:"7%"}}>
    <Box sx={{display:"flex",justifyContent:"flex-start",flexDirection:"column","&:hover":{backgroundColor:"#F5F5DC"},backgroundColor:"white",borderRadius:"15px",padding:"1rem",width:{lg:"33%",md:"33%",sm:"100%",xs:"100%"},gap:"0.5rem"}}>
<ImageListItem>
            <img src={coaching} alt="Web development" style={{width:"25%",height:"100%",marginLeft:"35%"}}/>
</ImageListItem>
       <Typography sx={{color:"#555555",fontFamily:"Poppins",textAlign:"start",width:"100%","&:hover":{textDecoration:"underline",textDecorationColor:"#555555"},marginLeft:"18%",fontSize:{lg:"18px",md:"18px",xs:"15px",sm:"15px"},fontWeight:{lg:800,md:700,xs:700,sm:700}}}>
Science & Math Coaching       </Typography>
         <Typography sx={{color:"#555555",textAlign:"center",marginLeft:"8%","&:hover":{textDecoration:"underline",textDecorationColor:"#734f96"},fontFamily:"Inter",fontSize:{lg:"12px",md:"12px",xs:"12px",sm:"12px"},width:"90%",fontWeight:{lg:400,md:400,xs:400,sm:400}}}>
I provide personalized coaching in Physics, Chemistry, and Mathematics for Matric and F.Sc students. My sessions focus on clarifying concepts, solving problems effectively, and building confidence to excel in exams. Lessons are designed to be interactive, engaging, and easy to understand.   </Typography>
    </Box>
        <Box sx={{display:"flex",justifyContent:"flex-start",flexDirection:"column","&:hover":{backgroundColor:"#F5F5DC"},width:{lg:"33%",md:"33%",sm:"100%",xs:"100%"},backgroundColor:"white",borderRadius:"15px",padding:"1.5rem",gap:"0.5rem"}}>
<ImageListItem>
            <img src={event} alt="Web development" style={{width:"25%",height:"100%",marginLeft:"35%"}}/>
</ImageListItem>
       <Typography sx={{color:"#555555",fontFamily:"Poppins",textAlign:"start",width:"100%","&:hover":{textDecoration:"underline",textDecorationColor:"#555555"},marginLeft:"13%",fontSize:{lg:"18px",md:"18px",xs:"15px",sm:"15px"},fontWeight:{lg:800,md:700,xs:700,sm:700}}}>
Event & Stage Management       </Typography>
         <Typography sx={{color:"#555555",textAlign:"center",marginLeft:"8%","&:hover":{textDecoration:"underline",textDecorationColor:"#734f96"},fontFamily:"Inter",fontSize:{lg:"12px",md:"12px",xs:"12px",sm:"12px"},width:"90%",fontWeight:{lg:400,md:400,xs:400,sm:400}}}>
I organize and manage college events and functions, including Independence Day celebrations, Annual Dinners, and Sports Week. I ensure smooth execution, stage management, and seamless coordination, creating a memorable experience for participants and audiences alike.</Typography>    </Box>
 </Box>


   
</Box>
    )
}
export default Language;