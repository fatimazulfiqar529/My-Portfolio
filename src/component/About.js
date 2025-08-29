import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import fatima from '../assests/images/fatima.png';
import ImageListItem from '@mui/material/ImageListItem';
import SchoolIcon from '@mui/icons-material/School';
import BuildIcon from '@mui/icons-material/Build';
import CodeIcon from '@mui/icons-material/Code';
import PsychologyIcon from '@mui/icons-material/Psychology';
import PaletteIcon from '@mui/icons-material/Palette';
import ComputerIcon from '@mui/icons-material/Computer';
import ArticleIcon from '@mui/icons-material/Article';
import WorkIcon from '@mui/icons-material/Work';
function About(){
    return(
<Box id="about" sx={{display:"flex",justifyContent:"center",flexDirection:"column",gap:"1rem",alignItems:"center",backgroundColor:"#F3F4F6",padding:"8%"}}>
       <ImageListItem>
        <img src={fatima} alt="Fatima" style={{height:"50%",width:"50%",borderRadius:"50%",marginLeft:"25%"}}/>
    </ImageListItem>
    <Typography sx={{color:"#1E1E2F",fontFamily:"Poppins",fontSize:{lg:"28px",md:"25px",xs:"25px",sm:"25px"},fontWeight:{lg:800,md:700,xs:700,sm:700}}}>Fatima Zulfiqar</Typography>
    <Typography sx={{color:"#1E1E2F",fontFamily:"Inter",fontSize:{lg:"18px",md:"18px",xs:"15px",sm:"15px"},fontWeight:{lg:700,md:700,xs:700,sm:700}}}>Frontend Developer</Typography>
<Typography sx={{color:"#4B5563",fontFamily:"Inter",fontSize:"14px",fontWeight:400,width:"40%",textAlign:"center"}}>Hi, I’m Fatima Zulfiqar, a beginner Web Developer passionate about building clean and responsive websites. I enjoy learning new technologies and creating projects that help me grow. I also have experience teaching Physics and Mathematics to students.</Typography>
           <Box sx={{backgroundColor:"#333333",marginLeft:"5%",height:"0.5px",width:"50%"}}>
</Box>
    <Typography sx={{color:"#1E1E2F",fontFamily:"Poppins",fontSize:{lg:"28px",md:"25px",xs:"25px",sm:"25px"},fontWeight:{lg:800,md:700,xs:700,sm:700}}}><SchoolIcon sx={{ fontSize: 35, color: "#3B82F6" }} />Education</Typography>
    <Typography sx={{color:"#4B5563",fontFamily:"Inter",fontSize:{lg:"20px",md:"18px",xs:"15px",sm:"15px"},fontWeight:{lg:700,md:700,xs:700,sm:700}}}>
        Bachelor of Engineering in Software Engineering (BESE)
    </Typography>
    <Typography sx={{color:"#F59E0B",fontFamily:"Inter",fontSize:"14px",fontWeight:400,width:"45%",textAlign:"center"}}>
       Military College of Signals, National University of Sciences and Technology (NUST)
Currently in 3rd Semester (2025 – Present)
       </Typography>
  <Typography sx={{color:"#4B5563",fontFamily:"Inter",fontSize:{lg:"20px",md:"18px",xs:"15px",sm:"15px"},fontWeight:{lg:700,md:700,xs:700,sm:700}}}>
   FSc Pre-Engineering
    </Typography>
    <Typography sx={{color:"#F59E0B",fontFamily:"Inter",fontSize:"14px",fontWeight:400,width:"20%",textAlign:"center"}}>
Punjab Group of Colleges, Dunyapur
Completed in 2024
       </Typography>
       <Typography sx={{color:"#4B5563",fontFamily:"Inter",fontSize:{lg:"20px",md:"18px",xs:"15px",sm:"15px"},fontWeight:{lg:700,md:700,xs:700,sm:700}}}>
Matriculation (Science Group)    </Typography>
    <Typography sx={{color:"#F59E0B",fontFamily:"Inter",fontSize:"14px",fontWeight:400,width:"20%",textAlign:"center"}}>
Elahi Public Girls High School, Dokota
Completed in 2022
       </Typography>
                  <Box sx={{backgroundColor:"#333333",marginLeft:"5%",height:"0.5px",width:"50%"}}>
</Box>
    <Typography sx={{color:"#1E1E2F",fontFamily:"Poppins",fontSize:{lg:"28px",md:"25px",xs:"25px",sm:"25px"},fontWeight:{lg:800,md:700,xs:700,sm:700}}}><WorkIcon sx={{ fontSize: 35, color: "#F59E0B" }} />Internship Experience</Typography>
    <Typography sx={{color:"#1e1e2f",fontFamily:"Inter",width:"20%",fontSize:{lg:"20px",md:"18px",xs:"15px",sm:"15px"},fontWeight:{lg:700,md:700,xs:700,sm:700}}}>
Web Development Intern
</Typography>
   <Typography sx={{color:"#1e1e2f",fontFamily:"Inter",fontSize:"20px",fontWeight:800,textAlign:"center"}}>
Idrak AI
       </Typography>
          <Typography sx={{color:"#1e1e2f",fontFamily:"Inter",fontSize:"18px",fontWeight:600,textAlign:"center"}}>
June 2025 – August 2025
       </Typography>
        <Typography sx={{color:"#F59E0B",fontFamily:"Inter",fontSize:"12px",width:"50%",fontWeight:400,textAlign:"center"}}>
     Gained hands-on experience in building responsive web applications using Material UI (MUI), HTML, CSS, and JavaScript.
Applied best practices in frontend development and improved skills in UI component styling and layout design.
       </Typography>

    
       <Box sx={{backgroundColor:"#333333",marginLeft:"5%",height:"0.5px",width:"50%"}}>
</Box>
    <Typography sx={{color:"#1E1E2F",fontFamily:"Poppins",fontSize:{lg:"28px",md:"25px",xs:"25px",sm:"25px"},fontWeight:{lg:800,md:700,xs:700,sm:700}}}><BuildIcon sx={{ fontSize: 35, color: "#3B82F6" }} />
    Skills</Typography>
  
 <Typography sx={{color:"#4B5563",fontFamily:"Inter",marginLeft:"-37%",fontSize:{lg:"20px",md:"18px",xs:"15px",sm:"15px"},fontWeight:{lg:700,md:700,xs:700,sm:700}}}>
HTML    </Typography>
<Typography sx={{color:"#4B5563",fontFamily:"Inter",marginTop:"-3.5%",marginLeft:"37%",fontSize:{lg:"20px",md:"18px",xs:"15px",sm:"15px"},fontWeight:{lg:700,md:700,xs:700,sm:700}}}>
90%    </Typography>
<Box sx={{border:"#734f96 1px solid",marginLeft:"5%",borderRadius:"10px",height:"10px",width:"50%"}}>
    <Box sx={{backgroundColor:"#734f96",borderRadius:"10px",height:"10px",width:"90%"}}>
</Box>
</Box>

 <Typography sx={{color:"#4B5563",fontFamily:"Inter",marginLeft:"-37%",fontSize:{lg:"20px",md:"18px",xs:"15px",sm:"15px"},fontWeight:{lg:700,md:700,xs:700,sm:700}}}>
CSS    </Typography>
<Typography sx={{color:"#4B5563",fontFamily:"Inter",marginTop:"-3.5%",marginLeft:"37%",fontSize:{lg:"20px",md:"18px",xs:"15px",sm:"15px"},fontWeight:{lg:700,md:700,xs:700,sm:700}}}>
90%    </Typography>
<Box sx={{border:"#734f96 1px solid",marginLeft:"5%",borderRadius:"10px",height:"10px",width:"50%"}}>
    <Box sx={{backgroundColor:"#734f96",borderRadius:"10px",height:"10px",width:"90%"}}>
</Box>
</Box>
 <Typography sx={{color:"#4B5563",fontFamily:"Inter",marginLeft:"-37%",fontSize:{lg:"20px",md:"18px",xs:"15px",sm:"15px"},fontWeight:{lg:700,md:700,xs:700,sm:700}}}>
Bootstrap    </Typography>
<Typography sx={{color:"#4B5563",fontFamily:"Inter",marginTop:"-3.5%",marginLeft:"37%",fontSize:{lg:"20px",md:"18px",xs:"15px",sm:"15px"},fontWeight:{lg:700,md:700,xs:700,sm:700}}}>
90%    </Typography>
<Box sx={{border:"#734f96 1px solid",marginLeft:"5%",borderRadius:"10px",height:"10px",width:"50%"}}>
    <Box sx={{backgroundColor:"#734f96",borderRadius:"10px",height:"10px",width:"90%"}}>
</Box>
</Box>
 <Typography sx={{color:"#4B5563",fontFamily:"Inter",marginLeft:"-35%",fontSize:{lg:"20px",md:"18px",xs:"15px",sm:"15px"},fontWeight:{lg:700,md:700,xs:700,sm:700}}}>
React JS    </Typography>
<Typography sx={{color:"#4B5563",fontFamily:"Inter",marginTop:"-3.5%",marginLeft:"37%",fontSize:{lg:"20px",md:"18px",xs:"15px",sm:"15px"},fontWeight:{lg:700,md:700,xs:700,sm:700}}}>
85%    </Typography>
<Box sx={{border:"#734f96 1px solid",marginLeft:"5%",borderRadius:"10px",height:"10px",width:"50%"}}>
    <Box sx={{backgroundColor:"#734f96",borderRadius:"10px",height:"10px",width:"85%"}}>
</Box>
</Box>

 <Typography sx={{color:"#4B5563",fontFamily:"Inter",marginLeft:"-35%",fontSize:{lg:"20px",md:"18px",xs:"15px",sm:"15px"},fontWeight:{lg:700,md:700,xs:700,sm:700}}}>
JavaScript    </Typography>
<Typography sx={{color:"#4B5563",fontFamily:"Inter",marginTop:"-3.5%",marginLeft:"37%",fontSize:{lg:"20px",md:"18px",xs:"15px",sm:"15px"},fontWeight:{lg:700,md:700,xs:700,sm:700}}}>
70%    </Typography>
<Box sx={{border:"#734f96 1px solid",marginLeft:"5%",borderRadius:"10px",height:"10px",width:"50%"}}>
    <Box sx={{backgroundColor:"#734f96",borderRadius:"10px",height:"10px",width:"70%"}}>
</Box>
</Box>
       <Box sx={{backgroundColor:"#333333",marginTop:"1%",marginLeft:"5%",height:"0.5px",width:"50%"}}>
</Box>
 <Typography sx={{color:"#1E1E2F",fontFamily:"Poppins",fontSize:{lg:"28px",md:"25px",xs:"25px",sm:"25px"},fontWeight:{lg:600,md:700,xs:700,sm:700}}}><CodeIcon sx={{ fontSize: 35, color: "#3B82F6" }} />
    Other Skills</Typography>
     <Typography sx={{color:"#1e1e2f",fontFamily:"Inter",marginLeft:"3%",fontSize:{lg:"20px",md:"18px",xs:"15px",sm:"15px"},fontWeight:{lg:600,md:700,xs:700,sm:700}}}><PsychologyIcon sx={{ fontSize: 20, color: "#F59E0B" }}/>
Programming: C++, Java (OOP)    </Typography>
     <Typography sx={{color:"#1e1e2f",fontFamily:"Inter",marginLeft:"1%",fontSize:{lg:"20px",md:"18px",xs:"15px",sm:"15px"},fontWeight:{lg:600,md:700,xs:700,sm:700}}}><BuildIcon sx={{ fontSize: 20, color: "#F59E0B" }}/>
Version Control: Git & GitHub    </Typography>
 <Typography sx={{color:"#1e1e2f",fontFamily:"Inter",marginLeft:"15%",fontSize:{lg:"20px",md:"18px",xs:"15px",sm:"15px"},fontWeight:{lg:600,md:700,xs:700,sm:700}}}><PaletteIcon sx={{ fontSize: 20, color: "#F59E0B" }}/>
Libraries & Frameworks: Material UI, Fetch API  </Typography>
   <Typography sx={{color:"#1e1e2f",fontFamily:"Inter",marginLeft:"12%",fontSize:{lg:"20px",md:"18px",xs:"15px",sm:"15px"},fontWeight:{lg:600,md:700,xs:700,sm:700}}}><ComputerIcon sx={{ fontSize: 20, color: "#F59E0B" }}/>
IDEs & Tools: Dev C++, NetBeans, VS Code   </Typography>
   <Typography sx={{color:"#1e1e2f",fontFamily:"Inter",marginLeft:"-5%",fontSize:{lg:"20px",md:"18px",xs:"15px",sm:"15px"},fontWeight:{lg:600,md:700,xs:700,sm:700}}}><ArticleIcon sx={{ fontSize: 20, color: "#F59E0B" }}/>
Other Tools: MS Word    </Typography>
                  <Box sx={{backgroundColor:"#333333",marginLeft:"5%",height:"0.5px",width:"50%"}}>
</Box>
</Box>


    )
}
export default About;