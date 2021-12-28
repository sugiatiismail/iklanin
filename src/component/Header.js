import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import AppBar from '@mui/material/AppBar';
// import logoo from '../component/image/logo.png';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Toolbar from '@mui/material/Toolbar';
import React from "react";
import sayurbox from '../component/image/sayurbox.png';





export default function Header() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box>
      <AppBar position="fixed" sx={{ backgroundColor: '#EFEFEF' }}>
        <Toolbar>
          <Container>

            <Grid container spacing={1}>
              <Grid item xs='auto'>
                <Button sx={{width:160, height:40}}>
                  <img src={sayurbox} alt="sayur box" height={60}/>
                </Button>
              </Grid>
              <Grid item xs='auto'>
                <Box sx={{display: 'flex', alignItems: 'center', justifyContent:'center' }}>
                  <Button
                    size="large"
                    sx={{ textTransform: 'none', color: 'black' }}
                    id="basic-button"
                    aria-controls="basic-menu"
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                  >
                    Kategori
                    <KeyboardArrowDownIcon sx={{ color: 'black' }} />
                  </Button>
                  <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                      'aria-labelledby': 'basic-button',
                    }}
                  >
                    <MenuItem onClick={handleClose}>Baliho</MenuItem>
                    <MenuItem onClick={handleClose}>Spanduk</MenuItem>
                    <MenuItem onClick={handleClose}>Sosmed</MenuItem>
                  </Menu>
                </Box>
              </Grid>

              <Grid item xs>
                <Box  sx={{display: 'flex', justifyContent: 'center'}}>
                  <Button size='large' variant="outlined" color="success" sx={{ width: 400, textTransform: 'none', borderRadius:20 }} >
                    Dikirim ke Pilih Alamat & Tanggal Pengiriman</Button>
                </Box>
              </Grid>

              <Grid item xs='auto'>
                <Button color="success" variant="outlined" >
                  <ShoppingBagIcon />
                </Button>
              </Grid>
              <Grid item xs='auto'>
                <Button variant="contained" color="success" sx={{ width: 150 }}>
                  Login</Button>
              </Grid>
            </Grid>
          </Container>
        </Toolbar >
      </AppBar >
    </Box >
  )
}

