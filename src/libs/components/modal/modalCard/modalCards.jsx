import styles from './modalCards.module.scss';
import Image from "next/image";
import Avatar from '@/libs/pages/components/BG.jpg';

export default function ModalCards({ setIsOpen }) {

  return (

        <div className={styles.beckdrop}>
        <div className={styles.modal}>
            <button type="button" className={styles.modalclose}onClick={() => setIsOpen(false)}>X</button>
            <form className={styles.form} action="">
              <div className={styles.nameblock}>
            <div className={styles.avatarr} onClick={()=> setIsOpen(true)}>
                        <Image
                            src={Avatar}
                            alt="avatar"
                            priority={true}
                            loading="eager"
                        />
                        </div>
                        <div className={styles.surnameblok}>
                <texteria className={styles.nameclass}  type="text" size="30">
                  Name
                </texteria>
                <textaria  className={styles.nameclass} type="text" size="30">
                  Surname</textaria>
                  </div>
                </div>
                <textaria className={styles.input} type="text" size="30">Phone number</textaria>
                <textaria className={styles.input} type="text" size="30">Email</textaria>
              {/* <label className={styles.input} ><input  type="checkbox"/>check</label> */}
              <textaria className={styles.inputdescript} type="text" size="999">Description</textaria>
              <textaria className={styles.input} type="text" size="30">Price</textaria>
              <div className={styles.inputcheck}>
              <input  type="checkbox"/>check
              <input  type="checkbox"/>check
              </div>
            </form>
            <div className={styles.blokbottom}>
            <time datetime="2024-08-01">1 Аагуста 2024</time>
            <button type="submit" className={styles.btnsave} >Edit</button>
            </div>
        </div>
      </div>
  )
}