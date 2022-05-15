import axios from "axios";
import { useNavigate } from "react-router";
import apiClient from "../../apiClient/apiClient";
import styles from "./Login.module.css";


const Login = () => {

    const navigate = useNavigate()

    const handleSubmit = (event: any) => {
        event.preventDefault()
        const data = {
            login: event.target[0].value,
            password: event.target[1].value
        }
        event.target[0].value = '';
        event.target[1].value = '';
        axios.post('http://localhost:4000/api/auth/login', data)
        .then(response=> {
                console.log(response);
                apiClient.setToken(response.data.token)  
                navigate('/admin')
        }).catch(error => {
            alert('Неверные данные для входа')
            navigate('/login')
        });
    }

    return (
        <div className={styles.container}>
            <form className={styles.loginForm} onSubmit={handleSubmit}>
                <input placeholder="логин" type="text" className={styles.loginInput} id="login"></input>
                <input placeholder="пароль" type="password" className={styles.loginInput}></input>
                <button type="submit">Войти</button>
            </form>
        </div>
    )
}   

export default Login; 