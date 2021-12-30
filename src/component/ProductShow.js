
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from ".//Header";
import Footer from "./Footer";
import ismail from '../component/image/ismail.jpg';
import ProductItem from "./ProductItem";



import Chip from '@mui/material/Chip';
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import nanas from '../component/image/nanas.png';
import Typography from "@mui/material/Typography";
import Stack from '@mui/material/Stack';
import Button from "@mui/material/Button";
import Box from '@mui/material/Box';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';


function ProductShow() {
    return (
        <Router>
            <Switch>
                <Route>
                    <Header />
                    <Container>
                        <Grid container marginTop={10} paddingBottom={4}>
                            <Box
                                sx={{
                                    width: 1150,
                                    maxWidth: '100%',
                                    marginBottom: 4
                                }}>
                                <TextField
                                    size="small"
                                    sx={{ backgroundColor: '#f9f9f9' }}
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
                            <Grid item xs={4.7}>
                                <img src={nanas} alt="nanas" style={{ height: 350 }} />
                                <Typography paddingTop={15} paddingBottom={2} fontSize='22px' fontWeight='500px' color='#4D4D4D'>
                                    Produk Rekomendasi</Typography>
                                <Box
                                    paddingBottom={4}
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'flex-start',
                                        justifyContent: 'flex-start',
                                    }}
                                >
                                    <ProductItem />
                                </Box>
                            </Grid>
                            <Grid item xs>
                                <Typography fontSize='28px' fontWeight='500px' color='#4D4D4D'>
                                    Nanas Madu 1 pcs SPEKTA </Typography>
                                <Typography fontSize='22px' color='#959595'>
                                    250-400 gram/pcs</Typography>
                                <Stack spacing={1} direction='row'>
                                    <Typography fontSize='22px' fontWeight='bold' color='#aab1aa' sx={{ textDecorationLine: 'line-through' }}>
                                        Rp. 8.800</Typography>
                                    <Chip label="Save 43%" sx={{ height: 25, width: 80, fontSize: 13, bgcolor: '#F69C07', color: 'white' }} />
                                </Stack>
                                <Stack spacing={1} direction='row'>
                                    <Typography
                                        fontSize='26px'
                                        color="#47b04b"
                                        fontWeight='bold'
                                    >5.000</Typography>
                                    <Typography fontSize='18px' color="#959595">/ 1 pcs</Typography>
                                </Stack>
                                <Typography fontSize='18px' sx={{ color: "red" }}>Promo!! maksimal 3</Typography>
                                <Typography fontSize='18px' fontWeight='500px' color="#4D4D4D">Jumlah Pembelian</Typography>
                                <Box width={220} marginBottom={4}>
                                    <Button sx={{ backgroundColor: "#47b04b", width: '100%' }} color='success' variant='contained'>Beli</Button>
                                </Box>
                                <Accordion>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1a-content"
                                        id="panel1a-header"
                                    >
                                        <Typography fontSize={16} color='#4d4d4d'>Informasi Produk</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography color='#bcc1bc' fontSize={14}>
                                            Nanas Madu relatif berukuran lebih kecil dari jenis nanas lainnya,
                                            walaupun sama-sama berwarna kuning nanas madu memiliki rasa dan aroma
                                            yang lebih manis, berserat, lebih lunak daripada nanas lainnya.
                                            Biasanya tunggu matang hingga 1-2 hari terlebih dahulu
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                                <Accordion>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel2a-content"
                                        id="panel2a-header"
                                    >
                                        <Typography fontSize={16} color='#4d4d4d'>Nutrisi dan Manfaat</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography color='#bcc1bc' fontSize={14}>
                                            Salah satu kandungan mineral dalam nanas madu adalah mangan yang bermanfaat
                                            untuk menurunkan gula dan mencegah diabetes. Selain itu nanas juga bermanfaat
                                            untuk mencegah kolesterol tinggi karena kaya akan vitamin C, rendah kalori dan
                                            zat bernutrisi lainnya
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                                <Accordion>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1a-content"
                                        id="panel1a-header"
                                    >
                                        <Typography fontSize={16} color='#4d4d4d'>Cara Penyimpanan</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography color='#bcc1bc' fontSize={14}>
                                            Cara menyimpan nanas dapat disimpan di suhu ruangan untuk mematangkannya
                                            dan jika ingin memakannya setengah, biarkan setengahnya lagi tidak terkupas kulitnya,
                                            bungkus/ wadahkan nanas kedalam kulkas ya. Nanas seger banget dijadiin rujak!
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                                <Accordion>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1a-content"
                                        id="panel1a-header"
                                    >
                                        <Typography fontSize={16} color='#4d4d4d'>Petani dan Supplier</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Stack spacing={2} direction='row'>
                                            <Box>
                                                <img src={ismail} alt="ismail" style={{ height: 80 }} />
                                                <Typography textAlign='center' fontSize={16} color='#bcc1bc'>Ismail</Typography>
                                            </Box>
                                            <Box>
                                                <img src={ismail} alt="ismail" style={{ height: 80 }} />
                                                <Typography textAlign='center' fontSize={16} color='#bcc1bc'>Tina</Typography>
                                            </Box>
                                            <Box>
                                                <img src={ismail} alt="ismail" style={{ height: 80 }} />
                                                <Typography textAlign='center' fontSize={16} color='#bcc1bc'>Ismail</Typography>
                                            </Box>
                                        </Stack>
                                    </AccordionDetails>
                                </Accordion>
                            </Grid>
                        </Grid>
                        <Divider />
                    </Container>

                    <Footer />
                </Route>
            </Switch>
        </Router>

    )
}



export default ProductShow;
