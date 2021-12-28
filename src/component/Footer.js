import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import FacebookIcon from '@mui/icons-material/Facebook';


import React from "react";
import playstore from '../component/image/playstore.png';
import appstore from '../component/image/appstore.png';



export default function InformasiProduk() {


    return (
        <Box paddingTop={6} >
            <Container >
                <Grid container sx={{ backgroundColor: 'red' }} spacing={1}>
                    <Grid item xs={2}>
                        <Typography fontSize='16px' color='#4D4D4D' fontWeight='bold'>Sayurbox</Typography>
                        <Button variant="text" sx={{ textTransform: 'none' }}>Berita & Promo</Button>
                        <Button variant="text" sx={{ textTransform: 'none' }}>Blog</Button>
                    </Grid>
                    <Grid item xs={2}>
                        <Typography fontSize='16px' color='#4D4D4D' fontWeight='bold'>Bantuan & Panduan</Typography>
                        <Stack>
                            <Button variant="text" sx={{ textTransform: 'none' }}>Bantuan</Button>
                            <Button variant="text" sx={{ textTransform: 'none' }}>Kebijakan & Privasi</Button>
                        </Stack>
                    </Grid>

                    <Grid item xs={4}>
                        <Typography fontSize='16px' color='#4D4D4D' fontWeight='bold'>Ikuti Kami</Typography>
                        <FacebookIcon />
                        <FacebookIcon />
                        <FacebookIcon />
                        <FacebookIcon />
                        <Typography fontSize='16px' color='#4D4D4D' fontWeight='bold'>Hubungi Kami</Typography>
                        <Stack>
                            <Typography variant="caption">Customer Service Sayurbox</Typography>
                            <Typography variant="caption">Nomor WhatsApp : +62 852 8234 9911</Typography>
                            <Typography variant="caption">Email : support@sayurbox.com</Typography>
                            <Typography variant="caption">Layanan Pengaduan Konsumen</Typography>
                            <Typography variant="caption">Direktorat Jenderal Perlindungan Konsumen
                                dan Tata Tertib Niaga Kementrian Perdagangan RI</Typography>
                            <Typography variant="caption">Nomor WhatsApp Ditjen PTKN : +62 853 1111 1010</Typography>
                        </Stack>
                    </Grid>

                    <Grid item xs sx={{ bgcolor: 'black' }}>
                    <Typography textAlign='end' fontSize='16px' color='#4D4D4D' fontWeight='bold'>Download Sayurbox App</Typography>

                        <Box 
                        display="flex"
                        alignItems= 'flex-end' 
                        justifyContent= 'flex-end' 
                        sx={{ bgcolor: 'pink'}}>
                          
                            <img src={playstore} alt="playstore" style={{ height: 50 }} />
                            <img src={appstore} alt="appstore" style={{ height: 50 }} />
                        </Box>

                    
                    </Grid>
                </Grid>
            </Container>
        </Box >

    )
}