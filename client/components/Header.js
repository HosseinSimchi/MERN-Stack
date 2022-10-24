import Link from 'next/link'
import {AppBar,Box,Toolbar,Typography,Button, Avatar} from '@mui/material';


const Header = () => {
    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <Avatar sx = {{width: 45, height: 45, marginRight:3}} alt = "Hossein Simchi" src="/img/Logo.png" />
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            Hossein Simchi
                        </Typography>
                        <Button sx = {{marginRight:6}} color="inherit">
                            <Link href="/">
                                Home
                            </Link>
                        </Button>
                        <Button sx = {{marginRight:6}} color="secondary">
                            <Link href="/skills">
                                Skills
                            </Link>
                        </Button>
                        <Button sx = {{marginRight:6}} color="secondary">
                            <Link href="/articles">
                                Articles
                            </Link>
                        </Button>
                        <Button sx = {{marginRight:6}} color="secondary">
                            <Link href="/education">
                                Education
                            </Link>
                        </Button>
                        <Button sx = {{marginRight:6}} color="secondary">
                            <Link href="/contact">
                                Contact
                            </Link>
                        </Button>
                    </Toolbar>
                </AppBar>
            </Box>
        </>
    )
}

export default Header;