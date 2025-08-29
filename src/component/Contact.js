import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import PhoneIcon from '@mui/icons-material/Phone';
import LinkdeInIcon from '@mui/icons-material/LinkedIn';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
function Contact(){
    return(
<Box id="contact" sx={{backgroundColor:"#F3E5F5",padding:"8%",display:"flex",justifyContent:"center",flexDirection:"column",gap:"1rem",alignItems:"center"}}>
 <Typography sx={{color:"#6A1B9A",fontFamily:"Poppins",fontSize:{lg:"28px",md:"25px",xs:"25px",sm:"25px"},"&:hover":{color:"#5e35b1"},fontWeight:{lg:800,md:700,xs:700,sm:700}}}><ContactMailIcon sx={{ fontSize: 35, color: "#8965a0ff" }} />
                Contact Me</Typography>
                <Box sx={{display:"flex",justifyContent:"center",flexDirection:"row",gap:"0.2rem","&:hover":{color:"#3f51b5"}}}>
<Typography sx={{color:"#6a1b9a","&:hover":{color:"#3f51b5"},fontFamily:"Inter",fontSize:{lg:"20px",md:"18px",xs:"15px",sm:"15px"},fontWeight:{lg:700,md:700,xs:700,sm:700}}}><EmailIcon sx={{ fontSize: 20, color: "#8965a0ff" }}/>
   Email:
    </Typography>
    <Typography sx={{color:"#4B5563","&:hover":{color:"#3f51b5"},fontFamily:"Inter",fontSize:{lg:"18px",md:"18px",xs:"15px",sm:"15px"},fontWeight:{lg:600,md:700,xs:700,sm:700}}}>
   fatimazulfiqar529@gmail.com
    </Typography>
    </Box>
                    <Box sx={{display:"flex",marginLeft:"-10%",justifyContent:"center",flexDirection:"row",gap:"0.2rem","&:hover":{color:"#00897b"}}}>
<Typography sx={{color:"#6a1b9a","&:hover":{color:"#00897b"},fontFamily:"Inter",fontSize:{lg:"20px",md:"18px",xs:"15px",sm:"15px"},fontWeight:{lg:700,md:700,xs:700,sm:700}}}><PhoneIcon sx={{ fontSize: 20, color: "#8965a0ff" }}/>
   Phone:
    </Typography>
    <Typography sx={{color:"#4B5563","&:hover":{color:"#00897b"},fontFamily:"Inter",fontSize:{lg:"18px",md:"18px",xs:"15px",sm:"15px"},fontWeight:{lg:600,md:700,xs:700,sm:700}}}>
   0315-6034211
    </Typography>
    </Box>
                        <Box sx={{display:"flex",marginLeft:"-8%",justifyContent:"center",flexDirection:"row",gap:"0.2rem"}}>
<Typography sx={{color:"#6a1b9a","&:hover":{color:"#f57c00"},fontFamily:"Inter",fontSize:{lg:"20px",md:"18px",xs:"15px",sm:"15px"},fontWeight:{lg:700,md:700,xs:700,sm:700}}}><LocationOnIcon sx={{ fontSize: 20, color: "#8965a0ff" }}/>
   Location:
    </Typography>
    <Typography sx={{color:"#4B5563","&:hover":{color:"#f57c00"},fontFamily:"Inter",fontSize:{lg:"18px",md:"18px",xs:"15px",sm:"15px"},fontWeight:{lg:600,md:700,xs:700,sm:700}}}>
   Mailsi,Pakistan
    </Typography>
    </Box>
                    <Box sx={{display:"flex",marginLeft:"16%",justifyContent:"center",flexDirection:"row",gap:"0.2rem","&:hover":{color:"#0077b5"}}}>
<Typography sx={{color:"#6a1b9a",fontFamily:"Inter","&:hover":{color:"#0077b5"},fontSize:{lg:"20px",md:"18px",xs:"15px",sm:"15px"},fontWeight:{lg:700,md:700,xs:700,sm:700}}}><LinkdeInIcon sx={{ fontSize: 20, color: "#8965a0ff" }}/>
   LinkedIn:
    </Typography>
    <Link href="http://www.linkedin.com/in/fatima-zulfiqar-a41848360"underline="hover">
    <Typography sx={{color:"#4B5563","&:hover":{color:"#0077b5"},fontFamily:"Inter",fontSize:{lg:"18px",md:"18px",xs:"15px",sm:"15px"},fontWeight:{lg:600,md:700,xs:700,sm:700}}}>
   www.linkedin.com/in/fatima-zulfiqar-a41848360
    </Typography>   </Link>

    </Box>
                        <Box sx={{display:"flex",marginLeft:"7%",justifyContent:"center",flexDirection:"row",gap:"0.2rem"}}>
<Typography sx={{color:"#6a1b9a","&:hover":{color:"#333"},fontFamily:"Inter",fontSize:{lg:"20px",md:"18px",xs:"15px",sm:"15px"},fontWeight:{lg:700,md:700,xs:700,sm:700}}}><GitHubIcon sx={{ fontSize: 20, color: "#8965a0ff" }}/>
   GitHub:
    </Typography>
    <Link href="https://github.com/fatimazulfiqar529"underline="hover">
    <Typography sx={{color:"#4B5563","&:hover":{color:"#333"},fontFamily:"Inter",fontSize:{lg:"18px",md:"18px",xs:"15px",sm:"15px"},fontWeight:{lg:600,md:700,xs:700,sm:700}}}>
   https://github.com/fatimazulfiqar529
    </Typography>   </Link>

    </Box>
    <form action="https://formsubmit.co/fatimazulfiqar529@gmail.com" method="POST">
    <Box sx={{display:"flex",flexDirection:"column",gap:"1.5rem",width:"15vw",fontSize:"14px",marginTop:"10%",fontFamily:"Inter",backgroundColor:"#e0f7fa",border:"5px #f0f8ff solid",borderRadius:"10px",padding:"10%"}}>
  <input style={{backgroundColor:"#f3e8ff",color:"black",borderRadius:"3%",border:"2px #4b5563",padding:"3%"}} type="text" name="name" placeholder="Your Name" required />
  <input style={{backgroundColor:"#f3e8ff",color:"black",borderRadius:"3%",border:"2px #4b5563",padding:"3%"}} type="email" name="email" placeholder="Your Email" required />
    <input style={{backgroundColor:"#f3e8ff",color:"black",borderRadius:"3%",border:"2px #4b5563",padding:"3%"}} type="text" name="job" placeholder="Your Job" required />
  <textarea style={{backgroundColor:"#f3e8ff",color:"black",borderRadius:"3%",border:"2px #4b5563",padding:"3%"}} name="message" placeholder="Your Message" required></textarea>
  <Button variant="contained" color="dark" style={{backgroundColor:"#a78bfa",color:"white"}} type="submit">Submit</Button>
  </Box>
</form>

        </Box>
    )
}
export default Contact;
