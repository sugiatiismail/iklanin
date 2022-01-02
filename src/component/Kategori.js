import { Typography } from "@mui/material";
import Box from '@mui/material/Box';
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import React from "react";
import spekta from '../component/image/spekta.jpg';
import kd from '../component/image/kd.jpg';
import pk from '../component/image/pk.jpg';
import sp from '../component/image/sp.jpg';
import jl from '../component/image/jl.jpg';
import mr from '../component/image/mr.jpg';
import terbaru from '../component/image/terbaru.jpg';
import stk from '../component/image/stk.jpg';
import rt from '../component/image/rt.jpg';
import vegetables from '../component/image/vegetables.jpg';
import pm from '../component/image/pm.jpg';
import baking from '../component/image/baking.jpg';
import fruits from '../component/image/fruits.jpg';
import kdapur from '../component/image/kdapur.jpg';
import organik from '../component/image/organik.jpg';
import protein from '../component/image/protein.jpg';
import bmp from '../component/image/bmp.jpg';
import terlaris from '../component/image/terlaris.jpg';
import jhm from '../component/image/jhm.jpg';
import sarapan from '../component/image/sarapan.jpg';
import spromo from '../component/image/spromo.jpg';
import hw from '../component/image/hw.jpg';
import ia from '../component/image/ia.jpg';
import useMediaQuery from '@mui/material/useMediaQuery';
import createTheme from '@mui/material/styles/createTheme';




export default function Kategori() {
    const theme = createTheme();
    const isDesktop = useMediaQuery(theme.breakpoints.up('sm'));


    return (
        <Box paddingTop={4} bgcolor='red'>
            <Container >
                <Typography fontSize='24px' fontWeight='bold'>Kategori</Typography>
                <Grid container>
                    <Grid item xs={3} md={1.5} lg={1.5}>
                        <Stack spacing={3} alignItems='center' justifyContent='center' width={isDesktop ? 140 : 80} height={310}>
                            <Stack alignItems='center'>
                                <img src={spekta} alt="spekta" height={isDesktop ? 55 : 40} width={isDesktop ? 55 : 40} />
                                <Typography color="inherit" fontSize='15px'>SPEKTA!</Typography>
                            </Stack>
                            <Stack alignItems='center' width={isDesktop ? 200:20}>
                                <img src={kd} alt="kd" height={isDesktop ? 45 : 30} width={isDesktop ? 45 : 30} />
                                <Typography color="inherit" fontSize='15px' textAlign='center'>Kuliner Dunia</Typography>
                            </Stack>
                            <Stack alignItems='center' width={isDesktop ? 200:20}>
                                <img src={pk} alt="pk" height={isDesktop ? 55 : 40} width={isDesktop ? 55 : 40} />
                                <Typography color="inherit" fontSize='15px' textAlign='center'>Produk Kesehatan</Typography>
                            </Stack>
                        </Stack>
                    </Grid>

                    <Grid item xs={3} md={1.5} lg={1.5}>
                        <Stack spacing={isDesktop? 3 : 2} alignItems='center' justifyContent='center' width={isDesktop ? 140 : 80}  height={isDesktop ? 310 : 300} >
                            <Stack alignItems='center' width={isDesktop ? 200:20}>
                                <img src={sp} alt="sp" height={isDesktop ? 55 : 40} width={isDesktop ? 55 : 40} />
                                <Typography color="inherit" fontSize='15px' textAlign='center'>Semua Produk!</Typography>
                            </Stack>
                            <Stack alignItems='center' width={isDesktop ? 200:20}>
                                <img src={jl} alt="jl" height={isDesktop ? 45 : 30} width={isDesktop ? 45 : 30} />
                                <Typography color="inherit" fontSize='15px' textAlign='center'>Jajanan Lokal</Typography>
                            </Stack>
                            <Stack alignItems='center' width={isDesktop ? 200:20}>
                                <img src={mr} alt="mr" height={isDesktop ? 55 : 40} width={isDesktop ? 55 : 40} />
                                <Typography color="inherit" fontSize='15px' textAlign='center'>Makanan Ringan </Typography>
                            </Stack>
                        </Stack>
                    </Grid>


                    <Grid item xs={3} md={1.5} lg={1.5}>
                        <Stack spacing={3} alignItems='center' justifyContent='center' height={isDesktop ? 310 : 300} width={isDesktop ? 140 : 80} >
                            <Stack alignItems='center'>
                                <img src={terbaru} alt="terbaru" height={isDesktop ? 55 : 40} width={isDesktop ? 55 : 40} />
                                <Typography color="inherit" fontSize='15px'>Terbaru</Typography>
                            </Stack>
                            <Stack alignItems='center' width={isDesktop ? 200:100}>
                                <img src={stk} alt="stk" height={isDesktop ? 45 : 30} width={isDesktop ? 45 : 30} />
                                <Typography color="inherit" fontSize='15px' textAlign='center'>Susu, Telur, dan Keju</Typography>
                            </Stack>
                            <Stack alignItems='center' width={isDesktop ? 200:20}>
                                <img src={rt} alt="rt" height={isDesktop ? 55 : 40} width={isDesktop ? 55 : 40} />
                                <Typography color="inherit" fontSize='15px' textAlign='center'>Rumah Tangga </Typography>
                            </Stack>
                        </Stack>
                    </Grid>



                    <Grid item xs={3} md={1.5} lg={1.5}>
                        <Stack spacing={3} alignItems='center' justifyContent='center' height={isDesktop ? 310 : 280} width={isDesktop ? 140 : 80}>
                            <Stack alignItems='center'>
                                <img src={vegetables} alt="vegetables" height={isDesktop ? 55 : 40} width={isDesktop ? 55 : 40} />
                                <Typography color="inherit" fontSize='15px'>Vegetables</Typography>
                            </Stack>
                            <Stack alignItems='center' width={isDesktop ? 200:20}>
                                <img src={pm} alt="pm" height={isDesktop ? 45 : 30} width={isDesktop ? 45 : 30} />
                                <Typography color="inherit" fontSize='15px' textAlign='center'>Pojok Minuman</Typography>
                            </Stack>
                            <Stack alignItems='center'>
                                <img src={baking} alt="baking" height={isDesktop ? 55 : 40} width={isDesktop ? 55 : 40} />
                                <Typography color="inherit" fontSize='15px'>Baking </Typography>
                            </Stack>
                        </Stack>
                    </Grid>


                    <Grid item xs={3} md={1.5} lg={1.5}>
                        <Stack spacing={3} alignItems='center' justifyContent='center'  height={isDesktop ? 310 : 275}  width={isDesktop ? 140 : 80} >
                            <Stack alignItems='center'>
                                <img src={fruits} alt="fruits" height={isDesktop ? 55 : 40} width={isDesktop ? 55 : 40} />
                                <Typography color="inherit" fontSize='15px'>Fruits</Typography>
                            </Stack>
                            <Stack alignItems='center' width={isDesktop ? 200:20}>
                                <img src={kdapur} alt="kdapur" height={isDesktop ? 45 : 30} width={isDesktop ? 45 : 30} />
                                <Typography color="inherit" fontSize='15px' textAlign='center'>Kebutuhan Dapur</Typography>
                            </Stack>
                            <Stack alignItems='center'>
                                <img src={organik} alt="organik" height={isDesktop ? 55 : 40} width={isDesktop ? 55 : 40} />
                                <Typography color="inherit" fontSize='15px'>Organik </Typography>
                            </Stack>
                        </Stack>
                    </Grid>


                    <Grid item xs={3} md={1.5} lg={1.5}>
                        <Stack spacing={3} alignItems='center' justifyContent='center' height={isDesktop ? 310 : 270} width={isDesktop ? 140 : 80} >
                            <Stack alignItems='center'>
                                <img src={protein} alt="protein" height={isDesktop ? 55 : 40} width={isDesktop ? 55 : 40} />
                                <Typography color="inherit" fontSize='15px'>Protein</Typography>
                            </Stack>
                            <Stack alignItems='center' width={isDesktop ? 200:90}>
                                <img src={bmp} alt="bmp" height={isDesktop ? 45 : 30} width={isDesktop ? 45 : 30} />
                                <Typography color="inherit" fontSize='15px' textAlign='center'>Beras, Mie, Pasta</Typography>
                            </Stack>
                            <Stack alignItems='center'>
                                <img src={terlaris} alt="terlaris" height={isDesktop ? 55 : 40} width={isDesktop ? 55 : 40} />
                                <Typography color="inherit" fontSize='15px'>Terlaris </Typography>
                            </Stack>
                        </Stack>
                    </Grid>


                    <Grid item xs={3} md={1.5} lg={1.5}>
                        <Stack spacing={2} alignItems='center' justifyContent='center' height={isDesktop ? 290 : 275} width={isDesktop ? 140 : 80} >
                            <Stack alignItems='center' width={isDesktop ? 200:20}>
                                <img src={jhm} alt="jhm" height={isDesktop ? 55 : 40} width={isDesktop ? 55 : 40} />
                                <Typography color="inherit" fontSize='15px' textAlign='center'>Jaminan Murah</Typography>
                            </Stack>
                            <Stack alignItems='center'>
                                <img src={sarapan} alt="sarapan" height={isDesktop ? 45 : 30} width={isDesktop ? 45 : 30} />
                                <Typography color="inherit" fontSize='15px'>Sarapan</Typography>
                            </Stack>
                            <Stack alignItems='center' width={isDesktop ? 200:20}>
                                <img src={spromo} alt="spromo" height={isDesktop ? 55 : 40} width={isDesktop ? 55 : 40} />
                                <Typography color="inherit" fontSize='15px' textAlign='center'>Spesial Promo </Typography>
                            </Stack>
                        </Stack>
                    </Grid>


                    <Grid item xs={3} md={1.5} lg={1.5}>
                        <Stack spacing={3} alignItems='center' justifyContent='center'height={isDesktop ? 200 : 160} width={isDesktop ? 140 : 80} >
                            <Stack alignItems='center'>
                                <img src={hw} alt="hw" height={isDesktop ? 55 : 40} width={isDesktop ? 55 : 40} />
                                <Typography color="inherit" fontSize='15px'>Hemat Waktu</Typography>
                            </Stack>
                            <Stack alignItems='center'>
                                <img src={ia} alt="ia" height={isDesktop ? 45 : 30} width={isDesktop ? 45 : 30} />
                                <Typography color="inherit" fontSize='15px'>Ibu & Anak</Typography>
                            </Stack>
                        </Stack>
                    </Grid>

                </Grid>
            </Container>
        </Box >

    )
}