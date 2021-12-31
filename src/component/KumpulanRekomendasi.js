import Box from '@mui/material/Box';
import Container from "@mui/material/Container";
import React from "react";
import imagerekomendasi from '../component/image/imagerekomendasi.png';
import Typography from '@mui/material/Typography'

export default function KumpulanRekomendasi() {

    return (
        <Box paddingTop={4}>
            <Container >
                <Typography fontSize='24px' fontWeight='bold' color='#4D4D4D'>Kumpulan Rekomendasi Untukmu</Typography>
                <Typography paddingBottom={2} fontSize='18px' color='#959595'>Ada Rekomendasi yang Bikin Happy</Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', py: 1 }}>
                    <img src={imagerekomendasi} alt="imagerekomendasi" width='100%' />
                </Box>
            </Container>
        </Box >

    )
}