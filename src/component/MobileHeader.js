import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import ReceiptLongOutlinedIcon from '@mui/icons-material/ReceiptLongOutlined';
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import { Typography } from '@mui/material';




export default function BottomAppBar() {
  return (
    <AppBar position="fixed" sx={{ top: 'auto', bottom: 0, bgcolor: "#ffffff" }}>
      <Toolbar>
        <Grid container spacing={9}>
          <Grid item xs={2.6}>
            <IconButton  sx={{color:"black"}} aria-label="open drawer">
              <Stack alignItems='center' justifyContent='center'>
                < WorkOutlineOutlinedIcon fontSize='small' />
                <Typography sx={{ fontSize: 10 }}>Home</Typography>
              </Stack>
            </IconButton>
          </Grid>
          <Grid item xs={3}>
            <IconButton  sx={{color:"black"}} aria-label="open drawer">
              <Stack alignItems='center' justifyContent='center'>
                <ReceiptLongOutlinedIcon fontSize='small'  />
                <Typography sx={{ fontSize: 10 }}>Transaksi</Typography>
              </Stack>
            </IconButton>
          </Grid>
          <Grid item xs={3}>
            <IconButton  sx={{color:"black"}} aria-label="open drawer">
              <Stack alignItems='center' justifyContent='center'>
                <LocalOfferOutlinedIcon fontSize='small'  />
                <Typography sx={{ fontSize: 10 }}>Promo</Typography>
              </Stack>
            </IconButton>
          </Grid>
          <Grid item xs={3}>
            <IconButton sx={{color:"black"}} aria-label="open drawer">
              <Stack alignItems='center' justifyContent='center'>
                <PermIdentityOutlinedIcon fontSize='small'  />
                <Typography sx={{ fontSize: 10 }}>Akun</Typography>
              </Stack>
            </IconButton>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>

  );
}