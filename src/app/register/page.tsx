import React from "react";
import Image from "next/image";
import { LoginButton } from "@/components/AuthButton";

export default function Login() {
return (
<div className="w-full h-max flex lg:flex-row flex-col relative">
    <div className="bg-darkBrown w-full lg:w-2/4 min-h-full max-h-max">
        <div className="leftContent text-white mt-[7.650rem] font-montserrat">
            <div className="textParent mx-[3.8rem] flex flex-col">
                <p className="font-bold text-[1.680rem] leading-[2.05rem] w-full lg:w-3/4 mb-5">
                    Temukan & Terhubung dengan Komunitas Profesional
                </p>
                <p className="text-sm w-full lg:w-[78%] leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                    enim ad minim veniam, quis nostrud exercitation ullamco laboris
                    nisi ut aliquip ex ea commodo consequet.
                </p>
            </div>
            <div className="imageParent -mt-16">
                <Image src="/registerImage.png" alt="E-commerce Picture" width={640} height={100} />
            </div>
        </div>
    </div>
    <div className="bg-gray w-full lg:w-2/4 min-h-full h-full max-h-max">
        <div className="rightContent mt-[4.5rem] mb-40 mx-8 lg:mx-[5.4rem] font-opensans">
            <div className="header flex w-full flex-col justify-center items-center mb-9">
                <p className="text-xl font-bold">Selamat datang di UMKMConnect.</p>
                <p className="text-xs text-lightGray">
                    Lorem ipsum dolor sit amet, consectetur
                </p>
            </div>
            <div className="card bg-white rounded-xl drop-shadow p-12">
                <div className="logo mb-12 w-full">
                    <Image src="/connectLogo.png" alt="E-commerce Picture" width={1000} height={1000}
                        className="h-fit w-fit mx-auto" />
                </div>
                <form action="" className="text-sm">
                    <div className="inputGroup flex flex-col mb-4">
                        <label htmlFor="">Nama Lengkap</label>
                        <input type="text"
                            className="border-black/25 border drop-shadow-sm rounded-md py-[0.58rem] px-3 text-xs focus:outline-none" />
                    </div>
                    <div className="inputGroup flex flex-col mb-4">
                        <label htmlFor="">Email</label>
                        <input type="text"
                            className="border-black/25 border drop-shadow-sm rounded-md py-[0.58rem] px-3 text-xs focus:outline-none" />
                    </div>
                    <div className="inputGroup flex flex-col mb-4">
                        <label htmlFor="">Kata Sandi</label>
                        <input type="text"
                            className="border-black/25 border drop-shadow-sm rounded-md py-[0.58rem] px-3 text-xs focus:outline-none" />
                    </div>
                    <div className="mt-10">
                        <button className="w-full bg-darkBrown py-[0.50rem] text-white font-bold text-lg rounded-md">
                            Daftar
                        </button>
                    </div>
                    <div className="mt-4 mb-12 align-middle flex">
                        <input type="checkbox" className="me-1 border-white/28" />
                        <label htmlFor="" className="text-black/25">Ingat saya</label>
                    </div>
                    <div className="logo mb-12 w-full flex justify-center items-center">
                        <p className="h-fit w-fit me-2">Anda sudah punya akun?
                        </p>
                        <LoginButton />

                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
);
}
