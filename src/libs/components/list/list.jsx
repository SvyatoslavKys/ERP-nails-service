// import { Bentham } from "next/font/google";
import  styles  from "./list.module.scss";
import Image from "next/image";
import Avatar from '@/libs/pages/components/BG.jpg';
// import Image from "./pages/BG.jpg";

function List (){
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <button className={styles.button}>Add+</button>
                <ul className={styles.datalist}>
                    <li className={styles.dataitem}>
                    <div className={styles.avatarr}>
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
            <div className={styles.beckdrop}>
     <div className={styles.modal}>
        <button type="button" className={styles.modalclose} data-modal-close>X</button>
        <p className={styles.modalname}>ADD Contact</p>
        <form className={styles.form} action="">
            <input className={styles.input} type="text" size="30" placeholder='Name' />
            <input className={styles.input} type="text" size="30" placeholder='Firstname' />
            <input className={styles.input} type="file" placeholder='Photo'/>
            <input className={styles.input} type="number" placeholder='Phone number' />
            <input className={styles.input} type="email" placeholder='Email' />
            <input className={styles.input} type="datetime-local"  />
           <label className={styles.input} ><input  type="checkbox"/>check</label>
           <label className={styles.input} ><input  type="checkbox"/>check</label>
        </form>
        <button type="submit" className={styles.btnsave}>Save</button>
     </div>
   </div>
   <script >
   </script>
        </section>
     )
}
export default List;