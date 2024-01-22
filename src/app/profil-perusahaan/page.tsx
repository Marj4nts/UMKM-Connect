import React from 'react'
import Image from 'next/image'

export default function ProfilPerusahaan() {
return (
<div className='min-h-screen w-full'>
    <div className="banner w-full h-72 relative z-10">
        <Image src="/Frame 19.png" alt="dots" fill />
    </div>
    <div className="profile flex justify-between absolute z-20 w-full px-20 h-56 top-32">
        <div className="leftContent relative h-full w-7/12 ">
            <div className="whiteBg flex bottom-0 absolute bg-white w-full mt-auto h-4/6 z-20 shadow-lg rounded-md">
                <div className="text items-center relative flex ms-[250px]">
                    <p className='font-bold text-3xl'>
                        Toko Serba Ada
                    </p>
                </div>
            </div>
            <div className="content flex absolute top-0 w-full h-full z-20">
                <div className="image h-full !w-[224px] relative border-white border-px rounded-md">
                    <Image src="/Frame 22.png" alt="dots" fill />
                </div>
            </div>
        </div>
        <div className="rightContent relative h-full w-2/12 ">
            <div
                className="statusCard p-2 ps-4 pe-8 bg-white rounded-lg flex align-middle absolute bottom-12 right-0 shadow-lg">
                <div className="bullet h-[30px] w-[30px] relative items-center flex">
                    <Image src="/Ellipse 2.png" alt="dots" width={24} height={24} />

                </div>
                <div className="status ms-4 font-extrabold items-center flex">
                    <p className='uppercase'>
                        Tutup
                    </p>
                </div>
            </div>
        </div>
    </div>
    <div className="contentParent flex relative z-10 mt-28 px-20">
        <div className="mainContent w-10/12 ">
            <div className="navigation border-b border-gray flex gap-14 px-6 pb-2">
                <div className="itemNav flex flex-col items-center text-darkBrown font-bold text-lg">
                    <div className="dot">
                        <Image src="/Ellipse 1.png" alt="dots" width={12} height={12} />
                    </div>
                    <p>Beranda</p>
                </div>
                <div className="itemNav flex flex-col items-center text-black font-bold text-lg justify-end">
                    <div className="dot">
                        {/*
                        <Image src="/Ellipse 1.png" alt="dots" width={12} height={12} /> */}
                    </div>
                    <p>Produk</p>
                </div>
                <div className="itemNav flex flex-col items-center text-black font-bold text-lg  justify-end">
                    <div className="dot">
                        {/*
                        <Image src="/Ellipse 1.png" alt="dots" width={12} height={12} /> */}
                    </div>
                    <p>Galeri</p>
                </div>
            </div>
            <div className="aboutUs px-12 py-8">
                <div className="header mb-4">
                    <p className='text-2xl font-extrabold mb-1'>Tentang Kami</p>
                    <div className="thickLine rounded-full bg-darkBrown h-2 w-48"></div>
                </div>
                <div className="desc mb-20">
                    <p>
                        Selamat datang di toko kami, tempat di mana Anda dapat menjelajahi beragam produk berkualitas
                        tinggi. Dari makanan lokal lezat hingga buah impor yang segar, kami menawarkan pengalaman
                        belanja yang memuaskan dan memikat. Dengan pilihan yang cermat dipilih, toko kami mengundang
                        Anda untuk mengeksplorasi kelezatan dan kualitas yang tak tertandingi. Sambutlah kepuasan
                        belanja di toko kami, di mana keunikan dan kenyamanan bertemu dalam setiap produk yang kami
                        sajikan.
                    </p>
                </div>
                <div className="longCardParent flex gap-4">
                    <div
                        className="longCard bg-white w-4/12 h-fit py-2 px-4 flex items-center gap-4 rounded-md shadow-lg">
                        <div className="icon">
                            <Image src="/mdi_calendar.png" alt="dots" width={36} height={36} />
                        </div>
                        <div className="textParent">
                            <div className="mainText mb-1">
                                <p className='font-bold'>Jam Operasional</p>
                            </div>
                            <div className="secondaryText">
                                <p>
                                    Senin - Jumat
                                </p>
                            </div>
                        </div>
                    </div>
                    <div
                        className="longCard bg-white w-4/12 h-fit py-2 px-4 flex items-center gap-4 rounded-md shadow-lg">
                        <div className="icon">
                            <Image src="/mdi_clock-outline.png" alt="dots" width={36} height={36} />

                        </div>
                        <div className="textParent">
                            <div className="mainText mb-1">
                                <p className='font-bold'>Hari Operasional</p>
                            </div>
                            <div className="secondaryText">
                                <p>
                                    Senin - Jumat
                                </p>
                            </div>
                        </div>
                    </div>
                    <div
                        className="longCard bg-lightBrown text-white w-4/12 h-fit py-2 px-4 flex items-center gap-4 rounded-md shadow-lg">
                        <div className="icon">
                            <Image src="/mdi_telephone.png" alt="dots" width={36} height={36} />
                        </div>
                        <div className="textParent">
                            <div className="mainText mb-1">
                                <p className='font-bold'>Hari Operasional</p>
                            </div>
                            <div className="secondaryText">
                                <p>
                                    Senin - Jumat
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="location px-12 py-8">
                <div className="header mb-4">
                    <p className='text-2xl font-extrabold mb-1'>Lokasi</p>
                    <div className="thickLine rounded-full bg-darkBrown h-2 w-28"></div>
                </div>
                <div className="content w-full h-[70vh] flex">
                    <div className="leftContent w-7/12 h-full px-4">
                        <div className="detailAddress w-full me-12 h-48 mb-14">
                            <div className="headerAddress bg-white h-fit px-3 font-bold py-2 w-4/12 rounded-t-md">
                                <p>Alamat Lengkap</p>
                            </div>
                            <div className="addressContent bg-white h-full py-3 px-3 rounded-b-md shadow-lg">
                                <p>
                                    Jl.Mencari cinta sejati, Kec. Lorem Ipsum, Kab. Bogor
                                </p>
                            </div>
                        </div>
                        <div className="photoAddress">
                            <div className="headerAddress h-fit px-3 font-bold py-2 w-4/12 rounded-t-md mb-4">
                                <p>Foto Lokasi</p>
                            </div>
                            <div className="imageParent w-full h-fit flex">
                                <div className="image ms-6 relative w-3/12 h-[143px]">
                                    <Image src="/Frame 64.png" alt="dots" fill />
                                </div>
                                <div className="image ms-6 relative w-3/12 h-[143px]">
                                    <Image src="/Frame 65.png" alt="dots" fill />
                                </div>
                                <div className="image ms-6 relative w-3/12 h-[143px]">
                                    <Image src="/Frame 66.png" alt="dots" fill />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="rightContent w-5/12 h-full ps-6 ">
                        <div className="mapLocation h-full w-full">
                            <div
                                className="headerAddress ms-auto bg-white h-fit px-3 font-bold py-2 w-5/12 rounded-t-md">
                                <p>Lokasi pada peta</p>
                            </div>
                            <div className="mapImage bg-white h-5/6 py-3 px-3 rounded-b-md shadow-lg relative">
                                <Image src="/Frame 61.png" alt="dots" width={1000} height={1000}
                                    className='w-full h-full' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="menu px-12 py-8">
                <div className="header mb-8">
                    <p className='text-2xl font-extrabold mb-1'>Menu</p>
                    <div className="thickLine rounded-full bg-darkBrown h-2 w-24"></div>
                </div>
                <div className="content h-[50vh] flex">
                    <div className="leftContent w-6/12 pe-6 flex flex-col justify-center">
                        <p className='text-justify mb-4'>
                            Menu kami menawarkan pilihan hidangan lezat dengan sentuhan kreatif dan cita rasa autentik.
                            Dari hidangan klasik hingga kreasi inovatif, setiap menu disajikan dengan keahlian untuk
                            memanjakan lidah Anda. Nikmati pengalaman kuliner yang memuaskan dalam setiap suapan, di
                            mana kelezatan bertemu dengan variasi yang tak terbatas.
                        </p>
                        <p className='text-justify'>
                            Setiap menu merupakan perpaduan sempurna antara keahlian dapur dan keinginan untuk
                            memberikan kepuasan kepada pelanggan kami. Selamat menikmati setiap hidangan yang kami
                            hadirkan, di mana setiap sajian adalah kisah unik dari inovasi dan cita rasa yang menggoda.
                        </p>
                    </div>
                    <div className="rightContent w-6/12">
                        <div className="menuImage flex w-full h-full">
                            <div className="imageMenu h-full w-2/4">
                                <Image src="/Frame 70.png" alt="dots" width={1000} height={1000}
                                    className='h-full full' />
                            </div>
                            <div className="imageMenu h-full w-2/4">
                                <Image src="/Frame 71.png" alt="dots" width={1000} height={1000}
                                    className='h-full full' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="promo px-12 py-8">
                <div className="header mb-8">
                    <p className='text-2xl font-extrabold mb-1'>Promo</p>
                    <div className="thickLine rounded-full bg-darkBrown h-2 w-24"></div>
                </div>
                <div className="imagePromo h-[50vh]">
                    <Image src="/Frame 74.png" alt="dots" width={1000} height={1000} className='h-full' />
                </div>
            </div>
            <div className="social px-12 py-8">
                <div className="header mb-4">
                    <p className='text-2xl font-extrabold mb-1'>Sosial media</p>
                    <div className="thickLine rounded-full bg-darkBrown h-2 w-44"></div>
                </div>
                <div className="iconParent flex w-full h-10 gap-4">
                    <div className="icon">
                        <Image src="/lets-icons_insta.png" alt="dots" width={1000} height={1000}
                            className='w-fit' />
                    </div>
                    <div className="icon">
                        <Image src="/Frame 79.png" alt="dots" width={1000} height={1000} className='w-fit' />
                    </div>
                    <div className="icon">
                        <Image src="/Frame 80.png" alt="dots" width={1000} height={1000} className='w-fit' />
                    </div>
                </div>
            </div>
        </div>
        <div className="sideAdvertisement w-2/12 pt-20 flex flex-col gap-14">
            <Image src="/Frame 40.png" alt="dots" width={1000} height={1000} className='h-fit w-full' />
            <Image src="/Frame 43.png" alt="dots" width={1000} height={1000} className='h-fit w-full' />
            <Image src="/Frame 44.png" alt="dots" width={1000} height={1000} className='h-fit w-full' />
        </div>
    </div>
</div>
)
}
