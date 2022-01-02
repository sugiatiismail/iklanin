import React from "react";
import { useEffect, useState } from "react";


import Typography from "@mui/material/Typography";
import Box from '@mui/material/Box';
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";

import useMediaQuery from '@mui/material/useMediaQuery';
import createTheme from '@mui/material/styles/createTheme';





export default function Kategori2() {
    const theme = createTheme();
    const isDesktop = useMediaQuery(theme.breakpoints.up('sm'));
    const [products, setProducts] = useState([])

    useEffect(() => { 

    const fetchData = fetch('http://localhost:8080/products')
    fetchData.then(res => {
        if (res.status === 200)
            return res.json()
    }).then(response => {
        setProducts(response)
    });

}, [])

return (
    <Box paddingTop={4}>
        <Container >
            <Grid container spacing={1}>
                {products.map(product => (
                    < Grid key={product.id} item xs={3} md={1.5} lg={1.5}>
                        <Stack alignItems='center'>
                        <img src={product.icon} alt="protein" height={isDesktop ? 55 : 42} width={isDesktop ? 55 : 42} />
                            <Typography lineHeight={isDesktop ? '25px' : '20px'} textAlign='center' color="inherit" fontSize={isDesktop ? '15px' : '12px'} >{product.productName}</Typography>
                        </Stack>

                    </Grid>
                ))}
            </Grid>
        </Container>
    </Box >

)
}