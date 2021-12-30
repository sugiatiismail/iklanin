
import imagedagingsegar from '../component/image/imagedagingsegar.png';
import ProductItem from "./ProductItem";



import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import React from "react";
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import useMediaQuery from '@mui/material/useMediaQuery';
import createTheme from '@mui/material/styles/createTheme';



export default function DagingSegar() {
    const theme = createTheme();
    const isDesktop = useMediaQuery(theme.breakpoints.up('sm'));

    return (
        <Box paddingTop={6} paddingBottom={6}>
            <Container>
                <Stack>
                    <Typography fontSize='24px' fontWeight='bold' color='#4D4D4D'>Daging Segar</Typography>
                    <Typography paddingBottom={2} fontSize='18px' color='#959595'>Dipanen dalam 24 jam</Typography>
                </Stack>
                <Grid container rowSpacing={isDesktop ? 0 : 1} columnSpacing={isDesktop ? 1 : 3} sx={{ alignItems: 'center' }} paddingBottom={4}>
                    <Grid item xs={6} md={5.2} lg={5.2} maxWidth>
                        <Box maxWidth sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', py: 1}}>
                            <img src={imagedagingsegar} alt="harga" style={{ height: isDesktop ? 164 : 110 }} />
                        </Box>
                    </Grid>
                    <Grid item xs md lg >
                        <Box maxWidth sx={{
                            display: 'flex',
                            overflowX: isDesktop ? 'block' : 'auto',
                            justifyContent: 'center', alignItems:'center'

                        }}>
                                <Stack spacing={1.5} maxWidth direction='row'>
                                    <ProductItem />
                                    <ProductItem />
                                    <ProductItem />
                                    <ProductItem />
                                </Stack>
                        </Box>
                    </Grid>
                </Grid>
                <Divider paddingBottom='2' />
            </Container>
        </Box >
    )
}