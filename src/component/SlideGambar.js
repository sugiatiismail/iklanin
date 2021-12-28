import { Stack } from "@mui/material";
import Box from '@mui/material/Box';
import Container from "@mui/material/Container";
import TextField from '@mui/material/TextField';
import React from "react";
import imageslide from '../component/image/imageslide.png';




export default function SlideGambar() {


    return (
        <Box paddingTop={12}>
            <Container>
                <Stack spacing='16px' justifyContent='center' >
                    <Box
                        sx={{
                            width: 1150,
                            maxWidth: '100%',
                        }}>
                        <TextField
                            size="small"
                            className="inputRounded"
                            fullWidth id="fullWidth"
                            placeholder='Cari model iklan disini...'
                            variant="outlined"
                        />
                    </Box>
                    <img src={imageslide} alt="imageslide" style={{ height: 390 }} />
                </Stack>
            </Container>
        </Box >

    )
}