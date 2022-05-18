import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import apiClient from '../../apiClient/apiClient';
import imageUtils from '../../utils/checkFile';
import checkFile from '../../utils/checkFile';
import styles from './Admin.module.css'

const Admin = () => {
    const navigate = useNavigate()
    const [title, setTitle] = useState('');
    const [firstText, setFirstText] = useState('');
    const [secondText, setSecondText] = useState('');
    const [firstFile, setFirstFile] = useState<any>('');
    const [secondFile, setSecondFile] = useState<any>('');
    const [firstImage, setFirstImage] = useState<string | ArrayBuffer | null>('static/pictures/admin/img.png');
    const [secondImage, setSecondImage] = useState<string | ArrayBuffer | null>('static/pictures/admin/img.png');

    let imageLoading = false;

    const handleFirstFile = (event: any) => {
        const filePath = event.target.files[0];
        const checkResult = imageUtils.validate(filePath);
        if(!checkResult.success) {
            event.preventDefault()
            alert(checkResult.message)
        }
        imageLoading = true;
        imageUtils.readURL(filePath).then(file => setFirstImage(file))  
        imageUtils.read(filePath).then(file => {
            console.log(file);
            imageLoading = false;             
            setFirstFile(file);
        }).catch(()=> {
            imageLoading = false;
            alert('не удалость загрузить первое изображение')   
        })
    }

    const handleSecondFile = (event: any) => {
        const filePath = event.target.files[0];
        const checkResult = imageUtils.validate(filePath);
        if(!checkResult.success) {
            event.preventDefault()
            alert(checkResult.message)
        }
        imageLoading = true;
        imageUtils.readURL(filePath).then(file => setSecondImage(file))  
        imageUtils.read(filePath).then(file => {
            imageLoading = false;    
            setSecondFile(file);
        }).catch(()=> {
            imageLoading = false;
            alert('не удалость загрузить первое изображение')   
        })
    }

    const handleSubmit = async (event: any) => {
        event.preventDefault();
        if(imageLoading) {
            return   
        }
        
        const firstPhoto = await apiClient.uploadImage(firstFile);
        const secondPhoto = secondFile !== '' ? await apiClient.uploadImage(secondFile) : null;
        console.log('[handleSubmit] first photo', firstPhoto);
        
        apiClient.post('posts', {
            title,
            firstText,
            firstPhoto,
            secondText,
            secondPhoto
        }) 
        console.log(await apiClient.get('posts'));
        
    }

    return (
        <div className={styles.container}>
            <form className={styles.postForm} onSubmit={handleSubmit}>
                <h3>Создание поста</h3>
                <input placeholder="Заголовок" className={styles.title} onChange={(e)=> setTitle(e.target.value)} required/>
                <div className={styles.imageContainer}>
                    <img src={typeof firstImage === 'string' ? firstImage : 'static/pictures/admin/img.png'} alt='вставьте изображение' className={styles.image}></img>
                    <input type="file" onInput={handleFirstFile} required className={styles.file} />
                </div>
                <textarea className={styles.postTextarea} onChange={(e)=> setFirstText(e.target.value)} placeholder="Текст первого поста" required/>
                <div className={styles.imageContainer}>
                    <img src={typeof secondImage === 'string' ? secondImage : 'static/pictures/admin/img.png'} alt='вставьте изображение' className={styles.image}></img>
                    <input type="file" onInput={handleSecondFile} className={styles.file}/>
                </div>
                <textarea className={styles.postTextarea} onChange={(e)=> setSecondText(e.target.value)} placeholder="Текст первого поста" />
                <button type='submit' className={styles.addPostSubmit}>отправить</button>
            </form>
        </div>
    )
}

export default Admin;