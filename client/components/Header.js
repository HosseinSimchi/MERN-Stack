import Link from 'next/link'
import {AppBar,Box,Toolbar,Typography,Button, Avatar} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';


const Header = () => {
    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <Avatar sx = {{marginRight:3}} alt = "Hossein Simchi" src="" />
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            Hossein Simchi
                        </Typography>
                        <Button sx = {{marginRight:6}} color="inherit">Home</Button>
                        <Button sx = {{marginRight:6}} color="inherit">Skills</Button>
                        <Button sx = {{marginRight:6}} color="inherit">Education</Button>
                        <Button sx = {{marginRight:6}} color="inherit">Articles</Button>
                        <Button color="inherit">Login/Signup</Button>
                    </Toolbar>
                </AppBar>
            </Box>
        </>
    )
}

export default Header;