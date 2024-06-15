import {AppBar, Box, Toolbar, Typography, Button, Link} from "@mui/material";

function NavBar(){
    return (
        <Box sx={{flexGrow:1}}>
            <AppBar position={'static'}>
                <Toolbar>
                    <Typography>
                        <Link to={"/"}>ReactLogin</Link>
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    );
}