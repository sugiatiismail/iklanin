import { Stack } from "@mui/material";
import Box from '@mui/material/Box';
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import TextField from '@mui/material/TextField';
import React from "react";
import imagerekomendasi from '../component/image/imagerekomendasi.png';
import Typography from '@mui/material/Typography'




export default function KumpulanRekomendasi() {


    return (
        <Box paddingTop={4}>
            <Container >
                <Typography variant="h5">Spesial Hari Ini</Typography>
                <Typography paddingBottom={2} variant="h6">Promo menarik dari Sayurbox untuk kamu</Typography>
                <img src={imagerekomendasi} alt="imagerekomendasi" style={{ height: 390 }} />
            </Container>
        </Box >

    )
}