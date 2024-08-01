
import  styles  from "./header.module.scss";
function Header() {


    return (
      <>
      <section className={styles.section}>
        <form className={styles.form}>
            <input type="name" placeholder="Search name" className={styles.search} />
            
        </form>

      </section>
  
      </>
    );
  };
  
  export default Header
  