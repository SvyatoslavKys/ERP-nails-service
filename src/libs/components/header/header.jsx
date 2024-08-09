
import  styles  from "./header.module.scss";
import Image from "next/image";
import Avatar from '@/libs/pages/components/BG.jpg';
function Header() {


    return (
      <>
        <section className={styles.section}>
          <div className={styles.container}>
            <form className={styles.form}>
              <input type="search" placeholder="Search name" className={styles.search} />
            </form>
            <div className={styles.avatarr}>
              <Image
                  src={Avatar}
                  alt="avatar"
                  priority={true}
                  loading="eager"
              />
            </div>
        </div>
      </section>
      </>
    );
  };
  
  export default Header
  