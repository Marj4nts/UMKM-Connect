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
                <div className="itemNav flex flex-col items-center text-black font-bold text-lg justify-end">
                    <div className="dot">
                        {/* <Image src="/Ellipse 1.png" alt="dots" width={12} height={12} /> */}
                    </div>
                    <p>Beranda</p>
                </div>
                <div className="itemNav flex flex-col items-center text-black font-bold text-lg justify-end">
                    <div className="dot">
                        {/* <Image src="/Ellipse 1.png" alt="dots" width={12} height={12} /> */}
                    </div>
                    <p>Produk</p>
                </div>
                <div className="itemNav flex flex-col items-center text-darkBrown font-bold text-lg  justify-end">
                    <div className="dot">
                        <Image src="/Ellipse 1.png" alt="dots" width={12} height={12} />
                    </div>
                    <p>Galeri</p>
                </div>
            </div>
            <div className="aboutUs px-12 py-8">
                <div className="headerParent flex justify-between">
                <div className="header mb-4">
                    <p className='text-2xl font-extrabold mb-1'>Galeri Toko</p>
                    <div className="thickLine rounded-full bg-darkBrown h-2 w-40"></div>
                </div>
                </div>
                <div className="gallery w-full flex flex-wrap gap-8">
                    <Image src="/Rectangle 4.png" alt="dots" width={1000} height={1000} className='h-[300px] w-fit' />
                    <Image src="/Rectangle 5.png" alt="dots" width={1000} height={1000} className='h-[300px] w-fit' />
                    <Image src="/Rectangle 7.png" alt="dots" width={1000} height={1000} className='h-[300px] w-fit' />
                    <Image src="/Rectangle 6.png" alt="dots" width={1000} height={1000} className='h-[300px] w-fit' />
                    <Image src="/Rectangle 8.png" alt="dots" width={1000} height={1000} className='h-[300px] w-fit' />
                    <Image src="/Rectangle 9.png" alt="dots" width={1000} height={1000} className='h-[300px] w-fit' />
                    <Image src="/Rectangle 11.png" alt="dots" width={1000} height={1000} className='h-[300px] w-fit' />
                    <Image src="/Rectangle 10.png" alt="dots" width={1000} height={1000} className='h-[300px] w-fit' />
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
