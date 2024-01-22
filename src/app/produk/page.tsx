import React from "react";
import css from "./desk1.module.css";
import Image from "next/image";

export default function page() {
  return (
    <div className={css.Container}>
      <div className={css.body}>
        <div className={css.header}>
          <div className={css.image}>
            <Image src={"/apples.png"} width={440} height={440} alt="apples" />
            <div className={css.imgslide}>
              <Image
                src={"/apples2.png"}
                width={100}
                height={100}
                alt="apples"
              />
              <Image
                src={"/apples3.png"}
                width={100}
                height={100}
                alt="apples"
              />
              <Image
                src={"/apples4.png"}
                width={100}
                height={100}
                alt="apples"
              />
            </div>
          </div>
          <div className={css.desc}>
            <div className={css.title}>
              <h1>Apel Impor Surya kencana </h1>
              <p>Rp 10,000</p>
            </div>
            <div className={css.teks}>
              <p>
                Apel impor memberikan pengalaman rasa segar yang unik dengan
                tekstur yang renyah dan manis yang khas. Kualitasnya yang
                superior dan keasliannya menjadikannya pilihan sempurna untuk
                memuaskan keinginan akan buah-buahan berkualitas tinggi. Nikmati
                kelezatan apel impor sebagai pilihan buah segar yang istimewa.
              </p>
              <div className={css.pptoko}>
                <Image src={"/pptoko.png"} width={50} height={50} alt="pp" />
                <p>Toko Buah NN</p>
              </div>
            </div>
          </div>
        </div>

        <div className={css.product}>
            <div className={css.title}>
                <p>Produk lainnya di toko ini</p>
            </div>
            <div className={css.containerProduct}>
                <div className={css.card}>
                    <Image
                    src={'/strawberry.png'}
                    width={250}
                    height={250}
                    alt="product1"
                    />
                    <div className={css.titleProduct}>
                        <p>Strawberry impor</p>
                        <h2>Toko Buah NN</h2>
                    </div>
                    <h1>Rp 22,000 </h1>
                </div>

                <div className={css.card}>
                    <Image
                    src={'/strawberry.png'}
                    width={250}
                    height={250}
                    alt="product1"
                    />
                    <div className={css.titleProduct}>
                        <p>Strawberry impor</p>
                        <h2>Toko Buah NN</h2>
                    </div>
                    <h1>Rp 22,000 </h1>
                </div>

                <div className={css.card}>
                    <Image
                    src={'/strawberry.png'}
                    width={250}
                    height={250}
                    alt="product1"
                    />
                    <div className={css.titleProduct}>
                        <p>Strawberry impor</p>
                        <h2>Toko Buah NN</h2>
                    </div>
                    <h1>Rp 22,000 </h1>
                </div>

                <div className={css.card}>
                    <Image
                    src={'/strawberry.png'}
                    width={250}
                    height={250}
                    alt="product1"
                    />
                    <div className={css.titleProduct}>
                        <p>Strawberry impor</p>
                        <h2>Toko Buah NN</h2>
                    </div>
                    <h1>Rp 22,000 </h1>
                </div>

                <div className={css.card}>
                    <Image
                    src={'/strawberry.png'}
                    width={250}
                    height={250}
                    alt="product1"
                    />
                    <div className={css.titleProduct}>
                        <p>Strawberry impor</p>
                        <h2>Toko Buah NN</h2>
                    </div>
                    <h1>Rp 22,000 </h1>
                </div>

                <div className={css.card}>
                    <Image
                    src={'/strawberry.png'}
                    width={250}
                    height={250}
                    alt="product1"
                    />
                    <div className={css.titleProduct}>
                        <p>Strawberry impor</p>
                        <h2>Toko Buah NN</h2>
                    </div>
                    <h1>Rp 22,000 </h1>
                </div>

                <div className={css.card}>
                    <Image
                    src={'/strawberry.png'}
                    width={250}
                    height={250}
                    alt="product1"
                    />
                    <div className={css.titleProduct}>
                        <p>Strawberry impor</p>
                        <h2>Toko Buah NN</h2>
                    </div>
                    <h1>Rp 22,000 </h1>
                </div>

                <div className={css.card}>
                    <Image
                    src={'/strawberry.png'}
                    width={250}
                    height={250}
                    alt="product1"
                    />
                    <div className={css.titleProduct}>
                        <p>Strawberry impor</p>
                        <h2>Toko Buah NN</h2>
                    </div>
                    <h1>Rp 22,000 </h1>
                </div>

                <div className={css.card}>
                    <Image
                    src={'/strawberry.png'}
                    width={250}
                    height={250}
                    alt="product1"
                    />
                    <div className={css.titleProduct}>
                        <p>Strawberry impor</p>
                        <h2>Toko Buah NN</h2>
                    </div>
                    <h1>Rp 22,000 </h1>
                </div>

                <div className={css.card}>
                    <Image
                    src={'/strawberry.png'}
                    width={250}
                    height={250}
                    alt="product1"
                    />
                    <div className={css.titleProduct}>
                        <p>Strawberry impor</p>
                        <h2>Toko Buah NN</h2>
                    </div>
                    <h1>Rp 22,000 </h1>
                </div>
            </div>
        </div>

      </div>
    </div>
  );
}
