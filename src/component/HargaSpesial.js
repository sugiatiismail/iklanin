import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import React from "react";
// import harga from '../component/image/harga.png';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';

import GardenProduct from "./GardenProduct";




export default function HargaSpesial() {

    var hargakebon = [
        {
            id: "satu",

        },
        {
            nama: "dua",

        },
        {
            nama: "tiga",

        },
        {
            id: "empat",

        },
        {
            nama: "lima",

        },
        {
            nama: "enam",

        },
        {
            nama: "tujuh",

        },
    ]


    return (
        <Box paddingTop={6}>
            <Container >
                <Stack>
                    <Typography variant="h5">Spesial Hari Ini</Typography>
                    <Typography paddingBottom={2} variant="h6">Promo menarik dari Sayurbox untuk kamu</Typography>
                </Stack>
                <Grid container spacing={3.5}>
                    {hargakebon.map(item => (
                        <Grid item key={item.id} xs={1.7}>
                            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                                <GardenProduct />
                            </Box>
                        </Grid>
                    ))}
                </Grid>
                <Divider />
            </Container>
        </Box >
    )
}