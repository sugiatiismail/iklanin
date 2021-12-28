
import imagedagingsegar from '../component/image/imagedagingsegar.png';
import ProductItem from "./ProductItem";



import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import React from "react";
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';






export default function DagingSegar() {


    return (
        <Box paddingTop={6}>
            <Container>
                <Stack>
                    <Typography variant="h5">Daging Segar</Typography>
                    <Typography paddingBottom={2} variant="h6">Dipanen dalam 24 jam</Typography>
                </Stack>
                <Grid container sx={{ alignItems: 'center'}} paddingBottom={4}>
                    <Grid item xs>
                        <Box >
                            <img src={imagedagingsegar} alt="harga" style={{ width: 490 }} />
                        </Box>
                    </Grid>

                    <Grid item xs={1.7}>
                        <Box sx={{display: 'flex', justifyContent: 'center' }}>
                            <ProductItem />
                        </Box>
                    </Grid>

                    <Grid item xs={1.7}>
                        <Box sx={{display: 'flex', justifyContent: 'center' }}>
                            <ProductItem />
                        </Box>
                    </Grid>

                    <Grid item xs={1.7}>
                        <Box sx={{display: 'flex', justifyContent: 'center' }} >
                            <ProductItem />
                        </Box>
                    </Grid>

                    <Grid item xs={1.7}>
                        <Box sx={{display: 'flex', justifyContent: 'center' }}>
                            <ProductItem />
                        </Box>
                    </Grid>

                </Grid>
                <Divider paddingBottom='2' />
            </Container>
        </Box >
    )
}