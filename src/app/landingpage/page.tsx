import React from "react";
import Image from "next/image";

export default function LandingPage() {
  return (
    <div className="h-max w-full relative">
      <div className=" bg-darkBrown flex w-full h-[77vh] z-0 relative overflow-hidden">
        <div className="leftContent w-2/4 absolute z-20 font-montserrat">
          <div className="group1 text-white ms-14 mt-[8.2rem] mb-12">
            <p className="font-bold text-4xl w-3/5 mb-3 font-opensans">
              Lorem Ipsum sit tetur adipiscing
            </p>
            <p className="text-xs w-4/6 mb-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequet.
            </p>
            <div className="buttonGroup font-bold text-sm flex gap-4">
              <button className=" w-40 h-11 rounded-3xl bg-lightBrown text-darkBrown">
                Lorem Ipsum
              </button>
              <button className=" w-40 h-11 rounded-3xl border border-white">
                Ipsum
              </button>
            </div>
          </div>
        </div>
        <div className="dotsImage absolute right-16 top-32 z-20">
          <Image src="/dots.png" alt="dots" width={250} height={100} />
        </div>
        <div className="rightContent w-2/4 absolute z-20 right-12 bottom-0">
          <Image
            src="/people1.png"
            alt="People holding glass"
            width={640}
            height={100}
          />
        </div>
        <div className="polygonImage absolute right-0 z-10">
          <Image
            src="/Polygon1.png"
            alt="Polygon Shape"
            width={640}
            height={100}
          />
        </div>
      </div>
      <div className="searchParent absolute w-full flex justify-center z-20  top-[29rem]">
        <div className="Search flex gap-2 align-middle px-8 py-5 w-4/6 bg-white rounded-full">
          <div className="icon">
            <Image
              src="/searchicon.png"
              alt="Search Icon"
              width={25}
              height={25}
            />
          </div>
          <input
            type="search"
            placeholder="Cari toko"
            className="w-full focus:outline-none"
          />
        </div>
      </div>
      <div className="relative bg-beige w-full h-[64vh] z-10">
        <div className="categoryListParent w-full h-fit pt-20 flex justify-center">
          <div className="category w-[70%] flex gap-4">
            <div className="categoryItem flex flex-col justify-center">
              <div className="icon bg-darkBrown p-5 rounded-md mb-1 drop-shadow-md">
                <Image
                  src="/Polygon1.png"
                  alt="Polygon Shape"
                  width={64}
                  height={64}
                />
              </div>
              <p className="font-opensans font-semibold text-xs text-center">
                Makanan
              </p>
            </div>
            <div className="categoryItem flex flex-col justify-center">
              <div className="icon bg-darkBrown p-5 rounded-md mb-1 drop-shadow-md">
                <Image
                  src="/Polygon1.png"
                  alt="Polygon Shape"
                  width={64}
                  height={64}
                />
              </div>
              <p className="font-opensans font-semibold text-xs text-center">
                Makanan
              </p>
            </div>
            <div className="categoryItem flex flex-col justify-center">
              <div className="icon bg-darkBrown p-5 rounded-md mb-1 drop-shadow-md">
                <Image
                  src="/Polygon1.png"
                  alt="Polygon Shape"
                  width={64}
                  height={64}
                />
              </div>
              <p className="font-opensans font-semibold text-xs text-center">
                Makanan
              </p>
            </div>
            <div className="categoryItem flex flex-col justify-center">
              <div className="icon bg-darkBrown p-5 rounded-md mb-1 drop-shadow-md">
                <Image
                  src="/Polygon1.png"
                  alt="Polygon Shape"
                  width={64}
                  height={64}
                />
              </div>
              <p className="font-opensans font-semibold text-xs text-center">
                Makanan
              </p>
            </div>
            <div className="categoryItem flex flex-col justify-center">
              <div className="icon bg-darkBrown p-5 rounded-md mb-1 drop-shadow-md">
                <Image
                  src="/Polygon1.png"
                  alt="Polygon Shape"
                  width={64}
                  height={64}
                />
              </div>
              <p className="font-opensans font-semibold text-xs text-center">
                Makanan
              </p>
            </div>
            <div className="categoryItem flex flex-col justify-center">
              <div className="icon bg-darkBrown p-5 rounded-md mb-1 drop-shadow-md">
                <Image
                  src="/Polygon1.png"
                  alt="Polygon Shape"
                  width={64}
                  height={64}
                />
              </div>
              <p className="font-opensans font-semibold text-xs text-center">
                Makanan
              </p>
            </div>
            <div className="categoryItem flex flex-col justify-center">
              <div className="icon bg-darkBrown p-5 rounded-md mb-1 drop-shadow-md">
                <Image
                  src="/Polygon1.png"
                  alt="Polygon Shape"
                  width={64}
                  height={64}
                />
              </div>
              <p className="font-opensans font-semibold text-xs text-center">
                Makanan
              </p>
            </div>
            <div className="categoryItem flex flex-col justify-center">
              <div className="icon bg-darkBrown p-5 rounded-md mb-1 drop-shadow-md">
                <Image
                  src="/Polygon1.png"
                  alt="Polygon Shape"
                  width={64}
                  height={64}
                />
              </div>
              <p className="font-opensans font-semibold text-xs text-center">
                Makanan
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="storeListParent font-montserrat flex flex-col items-center top-[48rem] absolute w-full h-fit z-20">
        <div className="header w-fit font-bold text-lg uppercase mb-3">
          UMKM Di Sekitar Kamu
        </div>
        <div className="store flex gap-6 w-[91%] h-fit pb-6 overflow-hidden">
          <div className="storeItem w-[19%] h-max drop-shadow-lg">
            <div className="image w-full h-[141px] relative rounded-t-xl">
              <Image src="/storeimage.png" alt="Store Image" fill />
            </div>
            <div className="text w-full h-[28%] bg-white px-4 py-2 text-xs rounded-b-xl">
              <p className="font-bold">Rm. Sahabat</p>
              <p>09:00 - 22:00</p>
            </div>
          </div>
          <div className="storeItem w-[19%] h-max drop-shadow-lg">
            <div className="image w-full h-[141px] relative rounded-t-xl">
              <Image src="/storeimage.png" alt="Store Image" fill />
            </div>
            <div className="text w-full h-[28%] bg-white px-4 py-2 text-xs rounded-b-xl">
              <p className="font-bold">Rm. Sahabat</p>
              <p>09:00 - 22:00</p>
            </div>
          </div>
          <div className="storeItem w-[19%] h-max drop-shadow-lg">
            <div className="image w-full h-[141px] relative rounded-t-xl">
              <Image src="/storeimage.png" alt="Store Image" fill />
            </div>
            <div className="text w-full h-[28%] bg-white px-4 py-2 text-xs rounded-b-xl">
              <p className="font-bold">Rm. Sahabat</p>
              <p>09:00 - 22:00</p>
            </div>
          </div>
          <div className="storeItem w-[19%] h-max drop-shadow-lg">
            <div className="image w-full h-[141px] relative rounded-t-xl">
              <Image src="/storeimage.png" alt="Store Image" fill />
            </div>
            <div className="text w-full h-[28%] bg-white px-4 py-2 text-xs rounded-b-xl">
              <p className="font-bold">Rm. Sahabat</p>
              <p>09:00 - 22:00</p>
            </div>
          </div>
          <div className="storeItem w-[19%] h-max drop-shadow-lg">
            <div className="image w-full h-[141px] relative rounded-t-xl">
              <Image src="/storeimage.png" alt="Store Image" fill />
            </div>
            <div className="text w-full h-[28%] bg-white px-4 py-2 text-xs rounded-b-xl">
              <p className="font-bold">Rm. Sahabat</p>
              <p>09:00 - 22:00</p>
            </div>
          </div>
        </div>
      </div>
      <div className="relative bg-white w-full h-fit gap-44 z-10 flex flex-col items-center mb-36">
        <div className="adsParent flex justify-between h-72 mt-52 w-[91%] bg-white drop-shadow-lg">
          <div className="w-[288px] h-full relative">
            <Image src="/storeimage.png" alt="Store Image" fill />
          </div>
          <div className="w-3/5 my-8 font-opensans text-center">
            <p className="font-bold text-3xl w-3/4 mx-auto mb-5">
              um dolor sit amet, consectetur adipiscing elit,
            </p>
            <p className="w-3/4 mx-auto text-lightGray">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequet.
            </p>
          </div>
        </div>
        <div className="productListParent w-[80%] min-h-96 h-fit">
          <div className="product flex w-full h-fit justify-between flex-wrap gap-y-6">
            <div className="productItem w-[32%] h-max">
              <div className="image w-full h-[300px] relative rounded-md overflow-hidden">
                <Image src="/storeimage.png" alt="Store Image" fill />
              </div>
              <div className="text w-full text-xs">
                <p>Lorem ipsum dolor sit amet consectetur.</p>
                <p className="font-bold mb-3">Lorem ipsum dolor.</p>
                <p className=" text-base font-semibold">Rp. 66,666</p>
              </div>
            </div>
            <div className="productItem w-[32%] h-max">
              <div className="image w-full h-[300px] relative rounded-md overflow-hidden">
                <Image src="/storeimage.png" alt="Store Image" fill />
              </div>
              <div className="text w-full text-xs">
                <p>Lorem ipsum dolor sit amet consectetur.</p>
                <p className="font-bold mb-3">Lorem ipsum dolor.</p>
                <p className=" text-base font-semibold">Rp. 66,666</p>
              </div>
            </div>
            <div className="productItem w-[32%] h-max">
              <div className="image w-full h-[300px] relative rounded-md overflow-hidden">
                <Image src="/storeimage.png" alt="Store Image" fill />
              </div>
              <div className="text w-full text-xs">
                <p>Lorem ipsum dolor sit amet consectetur.</p>
                <p className="font-bold mb-3">Lorem ipsum dolor.</p>
                <p className=" text-base font-semibold">Rp. 66,666</p>
              </div>
            </div>
            <div className="productItem w-[32%] h-max">
              <div className="image w-full h-[300px] relative rounded-md overflow-hidden">
                <Image src="/storeimage.png" alt="Store Image" fill />
              </div>
              <div className="text w-full text-xs">
                <p>Lorem ipsum dolor sit amet consectetur.</p>
                <p className="font-bold mb-3">Lorem ipsum dolor.</p>
                <p className=" text-base font-semibold">Rp. 66,666</p>
              </div>
            </div>
            <div className="productItem w-[32%] h-max">
              <div className="image w-full h-[300px] relative rounded-md overflow-hidden">
                <Image src="/storeimage.png" alt="Store Image" fill />
              </div>
              <div className="text w-full text-xs">
                <p>Lorem ipsum dolor sit amet consectetur.</p>
                <p className="font-bold mb-3">Lorem ipsum dolor.</p>
                <p className=" text-base font-semibold">Rp. 66,666</p>
              </div>
            </div>
            <div className="productItem w-[32%] h-max">
              <div className="image w-full h-[300px] relative rounded-md overflow-hidden">
                <Image src="/storeimage.png" alt="Store Image" fill />
              </div>
              <div className="text w-full text-xs">
                <p>Lorem ipsum dolor sit amet consectetur.</p>
                <p className="font-bold mb-3">Lorem ipsum dolor.</p>
                <p className=" text-base font-semibold">Rp. 66,666</p>
              </div>
            </div>
            <div className="productItem w-[32%] h-max">
              <div className="image w-full h-[300px] relative rounded-md overflow-hidden">
                <Image src="/storeimage.png" alt="Store Image" fill />
              </div>
              <div className="text w-full text-xs">
                <p>Lorem ipsum dolor sit amet consectetur.</p>
                <p className="font-bold mb-3">Lorem ipsum dolor.</p>
                <p className=" text-base font-semibold">Rp. 66,666</p>
              </div>
            </div>
            <div className="productItem w-[32%] h-max">
              <div className="image w-full h-[300px] relative rounded-md overflow-hidden">
                <Image src="/storeimage.png" alt="Store Image" fill />
              </div>
              <div className="text w-full text-xs">
                <p>Lorem ipsum dolor sit amet consectetur.</p>
                <p className="font-bold mb-3">Lorem ipsum dolor.</p>
                <p className=" text-base font-semibold">Rp. 66,666</p>
              </div>
            </div>
            <div className="productItem w-[32%] h-max">
              <div className="image w-full h-[300px] relative rounded-md overflow-hidden">
                <Image src="/storeimage.png" alt="Store Image" fill />
              </div>
              <div className="text w-full text-xs">
                <p>Lorem ipsum dolor sit amet consectetur.</p>
                <p className="font-bold mb-3">Lorem ipsum dolor.</p>
                <p className=" text-base font-semibold">Rp. 66,666</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
