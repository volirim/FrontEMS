interface IcheckFile {
    success: boolean;
    message: string
}

const imageUtils = {
    validate: (file: any): IcheckFile => {
        if (!file.type.startsWith('image')){
            return {
                success: false,
                message: 'К загрузке доступны только изображения'
            }
        }
        if(file.size/1000000 > 2) {
            return {
                success: false,
                message: 'Размер файла не должен превышать 2 МБ'
            }
        }
        return {
            success: true,
            message: ''
        }
    },
    
    read: (filePath: any): Promise<string | ArrayBuffer | null> => {
        return new Promise((resolve, reject)=> {
            const reader: FileReader = new FileReader();
            reader.onloadend = () => {                
                resolve(filePath)
            }
            reader.readAsDataURL(filePath)
            reader.onerror = () => {reject()}
        })
        
    }
}

export default imageUtils;