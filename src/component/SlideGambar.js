import { Stack } from "@mui/material";
import Box from '@mui/material/Box';
import Container from "@mui/material/Container";
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';


import React from "react";
import imageslide from '../component/image/imageslide.png';
import SearchIcon from '@mui/icons-material/Search';
import useMediaQuery from '@mui/material/useMediaQuery';
import createTheme from '@mui/material/styles/createTheme';



export default function SlideGambar() {
    const theme = createTheme();
    const isDesktop = useMediaQuery(theme.breakpoints.up('sm'));

    return (
        <Box paddingTop={isDesktop ? 10: 3}>
            <Container>
                <Stack spacing='16px' justifyContent='center' >
                    <Box
                        sx={{
                            width: 1150,
                            maxWidth: '100%',
                        }}>
                        <TextField
                            sx={{ backgroundColor: '#f9f9f9' }}
                            size="small"
                            className="inputRounded"
                            fullWidth id="fullWidth"
                            placeholder='Cari model iklan disini...'
                            variant="outlined"
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <SearchIcon />
                                    </InputAdornment>
                                ),
                            }}
                        />
                    </Box>
                    <img src={imageslide} alt="imageslide" style={{ height: isDesktop ? 390 : 130 }} />
                </Stack>
            </Container>
        </Box >

    )
}