import styles from './modal.module.scss'

export default function ModalAdd({ setIsOpenModalAdd }) {
  
  return (
    <div className={styles.beckdrop}>
      <div className={styles.modal}>
          <button type="button" className={styles.modalclose} onClick={()=> setIsOpenModalAdd(false)}>X</button>
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
          <button type="submit" className={styles.btnsave} >Save</button>
      </div>
    </div>
    )
}