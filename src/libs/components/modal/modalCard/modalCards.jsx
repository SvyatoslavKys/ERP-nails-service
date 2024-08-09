import styles from './modalCards.module.scss';

export default function ModalCards({ setIsOpen }) {

  return (
    <div className={styles.container}>
      <div className={styles.closed} onClick={() => setIsOpen(false)}>X</div>
    </div>
  )
}