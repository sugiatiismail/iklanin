import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';


import React from "react";
import playstore from '../component/image/playstore.png';
import appstore from '../component/image/appstore.png';



export default function InformasiProduk() {


    return (
        <Box paddingTop={2} >
            <Container >
                <Grid container spacing={1}>
                    <Grid item xs={2}>
                        <Typography paddingLeft={1} fontSize='16px' color='#4D4D4D' fontWeight='bold'>Sayurbox</Typography>
                        <Button variant="text" sx={{ textTransform: 'none', color:'#4D4D4D'}}>Berita & Promo</Button>
                        <Button variant="text" sx={{ textTransform: 'none', color:'#4D4D4D' }}>Blog</Button>
                    </Grid>
                    <Grid item xs={2.7}>
                        <Typography paddingLeft={1} fontSize='16px' color='#4D4D4D' fontWeight='bold'>Bantuan & Panduan</Typography>
                        <Stack direction='row'>
                            <Button variant="text" sx={{ textTransform: 'none', color:'#4D4D4D' }}>Bantuan</Button>
                            <Button variant="text" sx={{ textTransform: 'none', color:'#4D4D4D' }}>Kebijakan & Privasi</Button>
                        </Stack>
                    </Grid>

                    <Grid item xs={4}>
                        <Typography fontSize='16px' color='#4D4D4D' fontWeight='bold'>Ikuti Kami</Typography>
                        <FacebookIcon fontSize='large'/>
                        <InstagramIcon fontSize='large'/>
                        <TwitterIcon fontSize='large'/>
                        <YouTubeIcon fontSize='large'/>
                        <Typography marginTop={2} fontSize='16px' color='#4D4D4D' fontWeight='bold'>Hubungi Kami</Typography>
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

                    <Grid item xs>
                    <Typography textAlign='end' fontSize='16px' color='#4D4D4D' fontWeight='bold'>Download Sayurbox App</Typography>

                        <Box 
                        display="flex"
                        alignItems= 'flex-end' 
                        justifyContent= 'flex-end' >
                          
                            <img src={playstore} alt="playstore" style={{ height: 40 }} />
                            <img src={appstore} alt="appstore" style={{ height: 40 }} />
                        </Box>

                    
                    </Grid>
                </Grid>
            </Container>
        </Box >

    )
}