import Box from '@mui/material/Box';
import Container from "@mui/material/Container";
import React from "react";
import imagerekomendasi from '../component/image/imagerekomendasi.png';
import Typography from '@mui/material/Typography'
import useMediaQuery from '@mui/material/useMediaQuery';
import createTheme from '@mui/material/styles/createTheme';



export default function KumpulanRekomendasi() {
    const theme = createTheme();
    const isDesktop = useMediaQuery(theme.breakpoints.up('sm'));

    return (
        <Box paddingTop={4}>
            <Container >
                <Typography fontSize='24px' fontWeight='bold' color='#4D4D4D'>Kumpulan Rekomendasi Untukmu</Typography>
                <Typography paddingBottom={2} fontSize='18px' color='#959595'>Ada Rekomendasi yang Bikin Happy</Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', py: 1 }}>
                    <img src={imagerekomendasi} alt="imagerekomendasi" style={{ height: isDesktop ? 390 : 110 }} />
                </Box>
            </Container>
        </Box >

    )
}