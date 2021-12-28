import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Typography from '@mui/material/Typography'

import React from "react";
import { useState } from "react"
import imagedaging from '../component/image/imagedaging.png';






export default function ProductItem() {
    const [style, setStyle] = useState({ display: 'none' });

    return (
        <Box paddingTop={6}>
            <Container>
                <Paper sx={{ width: 152.5 , height: 325 }} onMouseEnter={e => {
                    setStyle({ display: 'block' });
                }}
                    onMouseLeave={e => {
                        setStyle({ display: 'none' })
                    }}
                >

                    <Box sx={{backgroundColor:'#546e7a', pr:1, pb:0.5, pt:0.2, pl:1, borderTopRightRadius:12, borderBottomRightRadius:12, mt:1, position:'absolute'}}>
                        <Typography variant="body2" sx={{color:'#fff'}}> Segar </Typography>
                    </Box>

                    <img src={imagedaging} alt="imagedaging" style={{ height: 135 }} />
                    <Stack padding={1}>
                        <Typography  color="initial" style={{fontSize:15}}>Iga Sapi Tidak Beku</Typography>
                        <Typography variant="caption" color="initial">250-300 gram/pack</Typography>
                        <Stack spacing={1} direction='row'>
                            <Typography variant="caption" color="initial">Rp. 43.200</Typography>
                            <Chip color='warning' label="Save 12%" sx={{height:18, width:70, fontSize:10}} />
                        </Stack>
                        <Stack spacing={1} direction='row'>
                            <Typography color="initial" >Rp. 38.000</Typography>
                            <Typography variant="caption" color="initial">/ 1 pack</Typography>
                        </Stack>
                        <Stack spacing={1}>
                            <Typography variant="caption" sx={{ color: "red" }}>Promo!! maksimal 3</Typography>
                            <Button color="success" variant='contained' style={style}>Beli</Button>
                        </Stack>
                    </Stack>
                </Paper>
            </Container >
        </Box >

    )
}