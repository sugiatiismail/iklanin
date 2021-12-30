import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import React from "react";
// import harga from '../component/image/harga.png';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';

import GardenProduct from "./GardenProduct";
import useMediaQuery from '@mui/material/useMediaQuery';
import createTheme from '@mui/material/styles/createTheme';



export default function HargaSpesial() {
    const theme = createTheme();
    const isDesktop = useMediaQuery(theme.breakpoints.up('sm'));

    var hargakebon = [
        {
            id: "satu",
            tumbhnail: "//"

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
            <Container   >
                <Stack>
                    <Typography fontSize='24px' fontWeight='bold' color='#4D4D4D'>Spesial Hari Ini</Typography>
                    <Typography paddingBottom={2} fontSize='18px' color='#959595'>Promo menarik dari Sayurbox untuk kamu</Typography>
                </Stack>
                <Grid container spacing={isDesktop? 0: 3.5} columnSpacing={isDesktop ? 0 : -1} marginBottom={6}
                >
                    <Box  maxWidth sx={{
                        display: 'flex',
                        overflowX:isDesktop ? 'block': 'auto',
                        justifyContent:'center',
                    
                    }}>
                        {hargakebon.map(item => (
                            <Grid item key={item.id} xs={6} md={1.7} lg={1.7}>
                                <Box ml= {isDesktop ? 0:70 } sx={{ display: 'flex', justifyContent: 'center' }}>
                                    <GardenProduct
                                    />
                                </Box>
                            </Grid>
                        ))}
                    </Box>
                </Grid>
                <Divider />
            </Container>
        </Box >
    )
}