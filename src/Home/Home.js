import React from 'react'
import addStaff from "../Assets/Images/addStaff.PNG"
import "../Assets/Css/Home.css";
import Image from "../Assets/Images/Frame 1936.png";
import CloseIcon from '@mui/icons-material/Close';
import FeedOutlinedIcon from '@mui/icons-material/FeedOutlined';
import CategoryIcon from '@mui/icons-material/Category';
import PostAddOutlinedIcon from '@mui/icons-material/PostAddOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import TextSnippetOutlinedIcon from '@mui/icons-material/TextSnippetOutlined';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import proImage from "../Assets/Images/profile.JPG"
import TextField from '@mui/material/TextField';
import IosShareOutlinedIcon from '@mui/icons-material/IosShareOutlined';
import IconButton from '@mui/material/IconButton';




const drawerWidth = 500;


const Home = () => {
    const [open, setOpen] = React.useState(false);
    
    const handleDrawerOpen = () => {
      setOpen(true);
    };
  
    const handleDrawerClose = () => {
      setOpen(false);
    };
  
  return (
    <Box sx={{ display: 'flex' }}>
    <div className='container'>
        <div className='side_bar'>
            <div>
            <div className='side_bar_logo'>
                <img src={Image} />
                <h3> <CategoryIcon fontSize="small" className='project_icon' />          Projects</h3>
                </div>
            </div>
            <div className='side_bar_lists'>
                    <li className='side_bar_list1' >Concord</li>
                    <li className='side_bar_list'>San diego</li>
                    <li className='side_bar_list'>Fresno</li>
                    <li className='side_bar_list'>Sacramento</li>
                    <li className='side_bar_list'>Bakersfield</li>
                {/* </ul> */}
            </div>
            </div>    
        <div className='main_container'>
            <div className='top_bars'>
                <li className='top_bar'> <PostAddOutlinedIcon fontSize="small" className='top_bar_icon' />Dashboard</li>
                <li className='top_bar1'> <TextSnippetOutlinedIcon fontSize="small" className='top_bar_icon1' />Checklists</li>
                <li className='top_bar'> <PersonOutlineOutlinedIcon  fontSize="small" className='top_bar_icon' />Manage Staff</li>
                <li className='top_bar'><FeedOutlinedIcon fontSize="small"  className='top_bar_icon'/>Reports</li>
            </div>
            <p className='empty_border'></p>
            <div className='middle_bar'>
            <KeyboardBackspaceIcon className='back_icon'/>
            <Button variant="contained" className='add_staff_btn'
             onClick={handleDrawerOpen}
             sx={{ ...(open && { display: 'none' }) }}
            >Add Staff+</Button>
            
            <h3 className='middle_bar_text'>Staff List</h3>
            </div>
            <p className='empty_border'></p>
            <div className='last _bar'>
                <img src={addStaff} className='last_bar_img'/>
                <p className='last_bar_content'>You haven't added staff yet</p>
                <h3></h3>
            </div>
            </div> 
            <Drawer
        sx={{
          width: 0,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
          },
        }}
        variant="persistent"
        anchor="right"
        open={open}
      >
        <div className='drawer_header'>
        <h3>Add Employee Details</h3>
          <IconButton onClick={handleDrawerClose}>           
            <CloseIcon />
          </IconButton>
          </div>
       <div className='drawer'>
        <img src={proImage} className='drawer_img'/>
        <div className='text_fields'>
        <TextField className='text_field' id="outlined-basic" label="First Name" variant="outlined" />
        <TextField className='text_field' id="outlined-basic" label="Last name" variant="outlined" />
        <TextField className='text_field1' id="outlined-basic" label="Job Title" variant="outlined" fullWidth sx={{ m: 1 }}/>
        <TextField className='text_field' id="outlined-basic" label="Email" variant="outlined" />
        <TextField className='text_field' id="outlined-basic" label="Mobile Number" variant="outlined" />
        </div>
       </div>
       <div className='drawer_bottom'>
       <h3 className='text'>ID proof</h3>
       <div className='id_proof'>
        <IconButton>
        <IosShareOutlinedIcon />
        </IconButton>
        <h3 className='text'>Click or Drop File here</h3>
        <p className='para'>Supported files: JPG, PNG, PDF</p>
       </div>
       <h3>Other Documents</h3>
       <div className='other_docs'>
       <div className='other_docs1'>
       <IconButton>
        <IosShareOutlinedIcon />
        </IconButton>
        <h3 className='text1'>Click or Drop File here</h3>
        <p className='para1'>Supported files: JPG, PNG, PDF</p>
        </div>
        <div className='btns'>
      <Button variant="outlined" className='cancel_btn'>Cancel</Button>
      <Button variant="contained" className='save_btn'>Save</Button>
      </div>
       
       </div>
       </div>
      </Drawer>
    </div>
    {open && <div className='OverLay'></div>}
    </Box>

  )
}

export default Home