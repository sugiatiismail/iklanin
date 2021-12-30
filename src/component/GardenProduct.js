import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Typography from '@mui/material/Typography'


import React from "react";
import { useState } from "react"
import imagetempe from '../component/image/imagetempe.png';
import { Link } from "react-router-dom"
import useMediaQuery from '@mui/material/useMediaQuery';
import createTheme from '@mui/material/styles/createTheme';






export default function GardenProduct() {
    const [style, setStyle] = useState({ display:'none'});
    const theme = createTheme();
    const isDesktop = useMediaQuery(theme.breakpoints.up('sm'));

    return (
        <Box paddingTop={6}>
            <Container>
                <Paper sx={{ width: 152.5, height:isDesktop? 302:298 }}
                onMouseEnter={e => {
                    setStyle({ display: 'block' });
                }}
                    onMouseLeave={e => {
                         setStyle({ display: 'none' })
                    }}
                >
                    <Stack spacing={-5}>
                        <Box sx={{ backgroundColor: '#546e7a', pr: 1, pb: 0.5, pt: 0.2, pl: 1, borderTopRightRadius: 12, borderBottomRightRadius: 12, mt: 1, position: 'relative', width: 85, height: 20 }}>
                            <Typography variant="body2" sx={{ color: '#fff' }}> Harga Kebon </Typography>
                        </Box>
                        <img src={imagetempe} alt="imagetempe" style={{ height: 135 }} />
                    </Stack>
                    <Stack padding={1}>
                        <Typography color="initial" style={{ fontSize: 15 }}>Iga Sapi Tidak Beku</Typography>
                        <Typography fontSize='12px' color='#959595'>250-300 gram/pack</Typography>
                        <Stack spacing={1} direction='row'>
                            <Typography fontSize='12px' color='#959595'>Rp. 43.200</Typography>
                            <Chip color='warning' label="Save 12%" sx={{ height: 18, width: 70, fontSize: 10 }} />
                        </Stack>
                        <Stack spacing={1} direction='row'>
                            <Typography fontSize='16px' color="#47b04b" >Rp. 38.000</Typography>
                            <Typography variant="caption" color="#959595">/ 1 pack</Typography>
                        </Stack>
                        <Stack spacing={1}>
                            <Typography fontSize='13px' sx={{ color: "red" }}>Promo!! maksimal 3</Typography>
                            <Button sx={{ bgcolor: '#47b04b' }} component={Link} to={`/product`} variant='contained' style={isDesktop?style : {display: 'block' }}>Beli</Button>
                        </Stack>
                    </Stack>
                </Paper>
            </Container >
        </Box >

    )
}