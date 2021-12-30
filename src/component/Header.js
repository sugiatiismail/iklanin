import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ShoppingBasketOutlinedIcon from '@mui/icons-material/ShoppingBasketOutlined';
import AppBar from '@mui/material/AppBar';
// import logoo from '../component/image/logo.png';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Toolbar from '@mui/material/Toolbar';
import React from "react";
import sayurbox from '../component/image/sayurbox.png';
import useMediaQuery from '@mui/material/useMediaQuery';
import createTheme from '@mui/material/styles/createTheme';
import Typography from '@mui/material/Typography';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import Divider from '@mui/material/Divider';

export default function Header() {
  const theme = createTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('sm'));

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
      <AppBar position={isDesktop ? 'fixed' : 'none'} sx={{ backgroundColor: '#fff', boxShadow: "none" }}>
        <Toolbar>
          <Container>
            {isDesktop ?
              <></>
              :
              <Stack>
                <Typography mt={2} mb={1} fontWeight='bold' color='#4d4d4d' ml={-2}>Mau dikirim kemana?</Typography>
                <Stack direction='row' mb={-2}>
                  <FmdGoodIcon sx={{ fontSize: 18, marginRight: 0.5, color:'#47b04b' }} />
                  <Typography fontSize={15} textAlign='center' fontWeight='bold' color='#47b04b'>Pilih Alamat & Tanggal Pengiriman</Typography>
                  <KeyboardArrowDownIcon sx={{ fontSize: 18, marginRight: 0.5 }} color="primary" />
                </Stack>
              </Stack>
            }
            <Grid container spacing={1}>
              <Grid item xs='auto'>
                {isDesktop ?
                  <Button sx={{ width: 160, height: 40 }}>
                    <img src={sayurbox} alt="sayur box" height={50} />
                  </Button>
                  :
                  <></>
                }
              </Grid>
              <Grid item xs='auto'>
                {isDesktop ?
                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
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
                  :
                  <></>
                }
              </Grid>

              <Grid item xs>
                {isDesktop ?
                  <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Button startIcon={<FmdGoodIcon />} 
                    size='small' 
                    variant="outlined"  
                    sx={{ width: 400, height: 45, textTransform: 'none', borderRadius: 20, color:"#47b04b",}} >
                      Dikirim ke Pilih Alamat & Tgl Pengiriman  <Divider orientation="vertical" flexItem />  Desember 31   </Button>
                  </Box>
                  :
                  <></>
                }
              </Grid>

              <Grid item xs={'auto'}>
                {isDesktop ?
                  <Button color='inherit' variant="outlined" sx={{ height: 41, color:"#686868" }} >
                    <ShoppingBasketOutlinedIcon />
                  </Button>
                  :
                  <></>
                }
              </Grid>
              <Grid item xs='auto'>
                {isDesktop ?
                  <Button variant="contained" sx={{ width: 150, backgroundColor: '#47b04b', textTransform: 'none', fontSize: '100%' }}>
                    Login</Button>
                  :
                  <></>
                }
              </Grid>
            </Grid>
          </Container>
        </Toolbar >
      </AppBar >
    </Box >
  )
}

