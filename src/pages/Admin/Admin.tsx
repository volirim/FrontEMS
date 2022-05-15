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

    let imageLoading = false;
    

    useEffect(() => {
        (async () => {
            const accessPermitted = await apiClient.isAuthorised() 
            !accessPermitted && navigate('/login')
            console.log('paginate', await apiClient.get('posts?quantity=3'));
        })()
    },[])

    const handleFirstFile = (event: any) => {
        const filePath = event.target.files[0];
        const checkResult = imageUtils.validate(filePath);
        if(!checkResult.success) {
            event.preventDefault()
            alert(checkResult.message)
        }
        imageLoading = true;
        imageUtils.read(filePath).then(file => {
            imageLoading = false; 
            setFirstFile(file);
            setTimeout(()=> console.log('[handleFirstFile] first file' ,firstFile), 1000);
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
                <input type="text" placeholder="Заголовок" onChange={(e)=> setTitle(e.target.value)} required/>
                <input type="file" onInput={handleFirstFile} required/>
                <textarea className={styles.postTextarea} onChange={(e)=> setFirstText(e.target.value)} required/>
                <input type="file" onInput={handleSecondFile} />
                <textarea className={styles.postTextarea} onChange={(e)=> setSecondText(e.target.value)}/>
                <button type='submit'>отправить</button>
            </form>
        </div>
    )
}

export default Admin;