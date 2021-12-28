import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";


import React from "react";




export default function InformasiProduk() {


    return (
        <Box paddingTop={6}>
            <Container>
                <Grid container justifyContent='center'>
                    <Grid item xs={6}>
                        <Typography fontSize='20px' color='black' fontWeight='bold'>Informasi Produk</Typography>
                        <Typography fontSize='18px' color='#4D4D4D'>Bagaimana mengecek ketersediaan produk?</Typography>
                        <Typography color='#959595' fontSize='14px'>Ketersediaan produk dapat dicek melalui aplikasi
                            atau website Sayurbox pada halaman detail produk.
                        </Typography>
                        <Typography fontSize='18px' color='#4D4D4D'>Bagaimana melihat detail informasi produk?</Typography>
                        <Typography color='#959595' fontSize='14px'>
                            Klik Produk yang kamu inginkan, Lihat keterangan produk di bawah gambar,
                            terdapat spesifikasi produk: berat, jumlah, harga, promo maksimal
                            (ketersediaan produk sesuai dengan jumlah promo yang tersedia), deksripsi produk,
                            manfaat dan cara penyimpanan produk.
                        </Typography>
                    </Grid>
                    <Grid item xs={6} >
                        <Typography fontSize='20px' color='black' fontWeight='bold'>Status Pemesanan</Typography>
                        <Typography fontSize='18px' color='#4D4D4D'>Bagaimana cara mengecek status pemesanan saya?</Typography>
                        <Typography color='#959595' fontSize='14px'>Pilih menu Transaksi pada Aplikasi Sayurbox atau buka menu Akun
                            di pojok kanan atas pada website Sayurbox kemudian pilih menu Transaksi, Lihat pada Status Pemesanan yang tertera atau klik card untuk melihat detail status pemesanan.
                        </Typography>
                        <Typography fontSize='18px' color='#4D4D4D'>Bagaimana melihat detail informasi produk?</Typography>
                        <Typography color='#959595' fontSize='14px'>
                            Klik Produk yang kamu inginkan, Lihat keterangan produk di bawah gambar,
                            terdapat spesifikasi produk: berat, jumlah, harga, promo maksimal
                            (ketersediaan produk sesuai dengan jumlah promo yang tersedia), deksripsi produk,
                            manfaat dan cara penyimpanan produk.
                        </Typography>
                        <Typography fontSize='18px' color='#4D4D4D'>Bagaimana jika pesanan yang saya terima tidak lengkap?</Typography>
                        <Typography color='#959595' fontSize='14px'>
                        Pesanan yang tidak lengkap biasanya terjadi saat produk yang kamu pesan sedang tidak tersedia atau tidak panen. 
                        Kami akan melakukan pengembalian dana berupa voucher dengan jumlah sesuai produk yang tidak tersedia.
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
        </Box >

    )
}