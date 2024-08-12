import styles from './modal.module.scss'
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import img from '@/libs/pages/components/chooseimg.png';

export default function UploadPhoto({setIsOpenModalAdd}) { 
  const [imageUrl, setImageUrl] = useState(img);
  const [file, setFile] = useState(null);

  const fileInput = useRef(null);

  useEffect(() => {
    if (!window.globalState) {
      window.globalState = {};
    }

    const fileFromGlobalState = window.globalState?.file;
    if (fileFromGlobalState) {
      setImageUrl(fileFromGlobalState);
    }
  }, []);

  function handleButtonClick() {
    fileInput.current.click();
  }

  function handleImageChange(event) {
    const file = event.target.files[0];
    const reader = new FileReader();

    const url = URL.createObjectURL(file);

    if (!window.globalState) {
      window.globalState = {};
    }


    reader.addEventListener('load', event => {
      setImageUrl(event.target.result);
    });

    setFile(file);

    reader.readAsDataURL(file);
  }

  
  return (
    <div className={styles.beckdrop}>
      <div className={styles.modal}>
          <button type="button" className={styles.modalclose} onClick={()=> setIsOpenModalAdd(false)}>X</button>
          <p className={styles.modalname}>ADD Contact</p>
          <form className={styles.form} action="">
              <input className={styles.input} type="text" size="30" placeholder='Name' />
              <input className={styles.input} type="text" size="30" placeholder='Firstname' />
              {/* <input className={styles.input} type="file" hidden placeholder='Photo'/> */}
              <input className={styles.input} type="number" placeholder='Phone number' />
              <input className={styles.input} type="email" placeholder='Email' />
              <input className={styles.input} type="datetime-local"  />
            <label className={styles.inputcheck} ><input  type="checkbox"/>check<input  type="checkbox"/>check</label>
            {/* <label className={styles.input} ><input  type="checkbox"/>check</label> */}
            <div className={styles.photo}>
              <Image
                src={imageUrl}
                alt="upload photo"
                fill
                priority={true}
                loading="eager"
                quality={100}
                className={styles.img}
                onClick={handleButtonClick}
              />
            </div>
            <input
              type="file"
              name="photo"
              ref={fileInput}
              style={{ display: 'none' }}
              multiple
              accept=".jpeg, .png, .jpg"
              onChange={handleImageChange}
          />
          </form>
          <button type="submit" className={styles.btnsave} onClick={()=> setIsOpenModalAdd(false)} >Save</button>
      </div>
    </div>
    )
}
