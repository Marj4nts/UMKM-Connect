import React from "react";
import css from "./desk2.module.css";
import Image from "next/image";

export default function page() {
  return (
    <div className={css.container}>
      <div className={css.body}>
        <p>Pembuatan profile toko</p>
        <div className={css.content}>
          <div className={css.inputimg}>
            <Image src={"/input.png"} width={400} height={400} alt="inptimg" />
            <button>
              <p>Tambah Foto</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M6.85714 9.14286H0V6.85714H6.85714V0H9.14286V6.85714H16V9.14286H9.14286V16H6.85714V9.14286Z"
                  fill="#111111"
                />
              </svg>
            </button>
          </div>
          <div className={css.form}>
            <form>
              <div className={css.input}>
                <div className={css.label}>
                  <label htmlFor="">Nama Toko</label>
                  <input type="text" />
                </div>
                <div className={css.label}>
                  <label htmlFor="">No Telepon</label>
                  <input type="text" />
                </div>
                <div className={css.label}>
                  <label htmlFor="">Alamat Toko</label>
                  <input type="text" />
                </div>
                <div className={css.label}>
                  <label htmlFor="">Email</label>
                  <input type="text" />
                </div>
                <div className={css.label}>
                  <label htmlFor="">Jam Operasional</label>
                  <input type="text" />
                </div>
                <div className={css.label}>
                  <label htmlFor="">Hari Operasional</label>
                  <input type="text" />
                </div>
              </div>
              <div id={css.textarea} className={css.label}>
                <label htmlFor="">Deskripsi Toko</label>
                <textarea name="" id="" cols={60} rows={10}></textarea>
              </div>
              <div className={css.adjust}>
                <button>Simpan</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
