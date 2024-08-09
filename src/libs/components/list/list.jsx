"use client"
import { useState } from "react";
import styles from "./list.module.scss";
import Image from "next/image";
import Avatar from '@/libs/pages/components/BG.jpg';

import Modal from "@/libs/components/modal/modalAdd/modal";
import ModalCards from "../modal/modalCard/modalCards";

export default function List() {
    const [isOpenModalAdd, setIsOpenModalAdd] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
        <section className={styles.section}>
            <div className={styles.container}>
                <button className={styles.button} onClick={()=> setIsOpenModalAdd(true)}>Add+</button>
                <ul className={styles.datalist}>
                    <li className={styles.dataitem} >
                    <div className={styles.avatarr} onClick={()=> setIsOpen(true)}>
                        <Image
                            src={Avatar}
                            alt="avatar"
                            priority={true}
                            loading="eager"
                        />
                        </div>
                        <div className={styles.telname}>
                        <p className={styles.name}>Name</p>
                        <a className={styles.phone} href="tel:+380441111111">+38 044 111 11 11</a>
                        </div>
                        <time datetime="2024-08-01">1 Аагуста 2024</time>
                    </li>
                </ul>
            </div>
        </section>
            
        {isOpenModalAdd &&
            < Modal setIsOpenModalAdd={setIsOpenModalAdd} />
        }
        {isOpen &&
            <ModalCards setIsOpen={setIsOpen} />
        }
    </>
    )
}
