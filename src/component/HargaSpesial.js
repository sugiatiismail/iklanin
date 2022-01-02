import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from "@mui/material/Container";
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

        },
        {
            nama: "dua",

        },
        {
            nama: "tiga",

        },
        {
            nama: "empat",

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
            <Container  >
                <Stack >
                    <Typography fontSize='24px' fontWeight='bold' color='#4D4D4D'>Spesial Hari Ini</Typography>
                    <Typography paddingBottom={2} fontSize='18px' color='#959595'>Promo menarik dari Sayurbox untuk kamu</Typography>
                </Stack>
                <Box maxWidth sx={{
                    bgcolor:'red',
                    display: 'flex',
                    overflowX: isDesktop ? 'block' : 'auto',
                    justifyContent: 'center', alignItems: 'center'

                }}>
                    <Stack  marginRight={ isDesktop ? 4.3 : 3.8}  spacing={isDesktop ? -4.5 : -3} maxWidth direction='row'>
                        {hargakebon.map(item => (
                            <GardenProduct />
                        ))}
                    </Stack>
                </Box>
            <Divider />
        </Container>
        </Box >
    )
}