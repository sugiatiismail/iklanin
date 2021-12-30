import { Typography } from "@mui/material";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
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





export default function Kategori() {


    return (
        <Box paddingTop={4}>
            <Container >
            <Typography fontSize='24px' fontWeight='bold'>Kategori</Typography>
                <Grid container>
                        <Grid item xs={3} md={1.5}  lg={1.5}>
                            <Stack>
                                <Button>
                                    <img src={spekta} alt="spekta" style={{ height: 40 }} />
                                </Button>
                                <Button sx={{textTransform:'none'}} color="inherit" variant="text">SPEKTA!</Button>
                            </Stack>

                            <Stack>
                                <Button>
                                <img src={kd} alt="kd" style={{ height: 40 }} />
                                </Button>
                                <Button sx={{textTransform:'none'}} color="inherit" variant="text">Kuliner Dunia</Button>
                            </Stack>

                            <Stack>
                                <Button>
                                    <img src={pk} alt="pk" style={{ height: 40 }} />
                                </Button>
                                <Button sx={{textTransform:'none'}} color="inherit" variant="text">Produk Kesehatan</Button>
                            </Stack>
                        </Grid>

                        <Grid item xs={3} md={1.5}  lg={1.5}>
                            <Stack>
                                <Button>
                                    <img src={sp} alt="sp" style={{ height: 40 }} />
                                </Button>
                                <Button sx={{textTransform:'none'}} color="inherit" variant="text">Semua Produk</Button>
                            </Stack>

                            <Stack>
                                <Button>
                                    <img src={jl} alt="jl" style={{ height: 40 }} />
                                </Button>
                                <Button sx={{textTransform:'none'}} color="inherit" variant="text">Jajanan Lokal</Button>
                            </Stack>

                            <Stack>
                                <Button>
                                    <img src={mr} alt="mr" style={{ height: 40 }} />
                                </Button>
                                <Button sx={{textTransform:'none'}} color="inherit" variant="text">Makanan Ringan</Button>
                            </Stack>
                        </Grid>

                        <Grid item xs={3} md={1.5}  lg={1.5}>
                            <Stack>
                                <Button>
                                    <img src={terbaru} alt="terbaru" style={{ height: 40 }} />
                                </Button>
                                <Button sx={{textTransform:'none'}} color="inherit" variant="text">Terbaru</Button>
                            </Stack>

                            <Stack>
                                <Button>
                                    <img src={stk} alt="stk" style={{ height: 40 }} />
                                </Button>
                                <Button sx={{textTransform:'none'}} color="inherit" variant="text">Susu, Telur, Keju</Button>
                            </Stack>

                            <Stack>
                                <Button>
                                    <img src={rt} alt="rt" style={{ height: 40 }} />
                                </Button>
                                <Button sx={{textTransform:'none'}} color="inherit" variant="text">Rumah Tangga</Button>
                            </Stack>
                        </Grid>

                        <Grid item xs={3} md={1.5}  lg={1.5}>
                            <Stack>
                                <Button>
                                    <img src={vegetables} alt="vegetables" style={{ height: 40 }} />
                                </Button>
                                <Button sx={{textTransform:'none'}} color="inherit" variant="text">Vegetables</Button>
                            </Stack>

                            <Stack>
                                <Button>
                                    <img src={pm} alt="pm" style={{ height: 40 }} />
                                </Button>
                                <Button sx={{textTransform:'none'}} color="inherit" variant="text">Pojok Minuman</Button>
                            </Stack>

                            <Stack>
                                <Button>
                                    <img src={baking} alt="baking" style={{ height: 40 }} />
                                </Button>
                                <Button sx={{textTransform:'none'}} color="inherit" variant="text">Baking</Button>
                            </Stack>
                        </Grid>

                        <Grid item xs={3} md={1.5}  lg={1.5}>
                                <Stack>
                                    <Button>
                                        <img src={fruits} alt="fruits" style={{ height: 40 }} />
                                    </Button>
                                    <Button sx={{textTransform:'none'}} color="inherit" variant="text">Fruits</Button>
                                </Stack>

                                <Stack>
                                    <Button>
                                        <img src={kdapur} alt="kdapur" style={{ height: 40 }} />
                                    </Button>
                                    <Button sx={{textTransform:'none'}} color="inherit" variant="text">Kebutuhan Dapur</Button>
                                </Stack>

                                <Stack>
                                    <Button>
                                        <img src={organik} alt="organik" style={{ height: 40 }} />
                                    </Button>
                                    <Button sx={{textTransform:'none'}} color="inherit" variant="text">Organik</Button>
                                </Stack>
                        </Grid>

                        <Grid item xs={3} md={1.5}  lg={1.5}>
                            <Stack>
                                <Button>
                                    <img src={protein} alt="protein" style={{ height: 40 }} />
                                </Button>
                                <Button sx={{textTransform:'none'}} color="inherit" variant="text">Protein</Button>
                            </Stack>

                            <Stack>
                                <Button>
                                    <img src={bmp} alt="bmp" style={{ height: 40 }} />
                                </Button>
                                <Button sx={{textTransform:'none'}} color="inherit" variant="text">Beras, Mie, Pasta</Button>
                            </Stack>

                            <Stack>
                                <Button>
                                    <img src={terlaris} alt="terlaris" style={{ height: 40 }} />
                                </Button>
                                <Button sx={{textTransform:'none'}} color="inherit" variant="text">Terlaris</Button>
                            </Stack>
                        </Grid>

                        <Grid item xs={3} md={1.5}  lg={1.5}>
                            <Stack>
                                <Button>
                                    <img src={jhm} alt="jhm" style={{ height: 40 }} />
                                </Button>
                                <Button sx={{textTransform:'none'}} color="inherit" variant="text">Jaminan Murah</Button>
                            </Stack>

                            <Stack>
                                <Button>
                                    <img src={sarapan} alt="sarapan" style={{ height: 40 }} />
                                </Button>
                                <Button sx={{textTransform:'none'}} color="inherit" variant="text">Sarapan</Button>
                            </Stack>

                            <Stack>
                                <Button>
                                    <img src={spromo} alt="spromo" style={{ height: 40 }} />
                                </Button>
                                <Button sx={{textTransform:'none'}} color="inherit" variant="text">Spesial Promo</Button>
                            </Stack>
                        </Grid>

                        <Grid item xs={3} md={1.5}  lg={1.5}>
                            <Stack>
                                <Button>
                                    <img src={hw} alt="hw" style={{ height: 40 }} />
                                </Button>
                                <Button sx={{textTransform:'none'}} color="inherit" variant="text">Hemat Waktu</Button>
                            </Stack>

                            <Stack>
                                <Button>
                                    <img src={ia} alt="ia" style={{ height: 40 }} />
                                </Button>
                                <Button sx={{textTransform:'none'}} color="inherit" variant="text">Ibu & Anak</Button>
                            </Stack>
                        </Grid>
                </Grid>
            </Container>
        </Box >

    )
}