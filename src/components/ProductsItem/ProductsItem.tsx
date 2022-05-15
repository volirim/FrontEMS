import styles from "./ProductsItem.module.css"

export interface IProductsItem {
    id: string;
    img: string;
    text: string; 
    link: string;
} 

const ProductsItem = ({img, text, link, id}: IProductsItem) => {
    return (
        <a href={link} target="_blank" rel="noreferrer" className={styles.container}>
            <img src={img} alt="ссылка на партнера" className={styles.image} />
            <div className={styles.text}>
                {text}
            </div>
        </a>
    )
}

export default ProductsItem;