import {AppBar, Box, Toolbar, Typography, Button} from "@mui/material";
import {Link} from "react-router-dom";

function NavBar(){
    return (
        <Box sx={{flexGrow:1}}>
            <AppBar position={'static'}>
                <Toolbar>
                    <Typography variant="h5" component="div">
                        <Link to="/" style={{textDecoration:'none', color:'white'}}>ReactLogin</Link>
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default NavBar;