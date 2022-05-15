import { NavLink } from 'react-router-dom';
import MainPageItem from '../../components/MainPageItem/MainPageItem';
import NewsItem from '../../components/NewsItem/NewsItem';
import ProductsItem from '../../components/ProductsItem/ProductsItem';
import { mainPageItems, mainPageItems2 } from '../../constants/mainPageItems';
import arrayOfProducts from '../../constants/productItems';
import Scrollable from '../../HOC/Scrollable';
import CarouselComponent from '../../UI/Carousel/CarouselComponent';
import styles from './Main.module.css';
const uniqid = require('uniqid');

const array = [0,1,2];

function App() {
  return (
    <div>
      <div className={styles.container}></div>
      {/* <div className={styles.container}>
        <video autoPlay width="100%" loop src="./static/video/movie.mp4" muted className={styles.video}/>
        <div className={styles.videoBackground} />
        <div className={styles.videoTextBlock}>
          <h2 className={styles.title}>Отраслевой союз «Электромашиностроение»</h2>
          <p className={styles.text}>
            является организацией, включающей ведущих производителей электродвигателей на территории Российской Федерации и Республики Беларусь с долей рынка по производимым асинхронным электродвигателям не менее 70 %.
          </p>
        </div>
      </div> */}
      <div className={styles.itemsContainer}>
        {mainPageItems.map(item => <MainPageItem img={item.img} title={item.title} text={item.text} key={uniqid()} id={mainPageItems.indexOf(item)} />)}
      </div>
      <a href='https://youtube.com' target='_blank' rel="noreferrer" className={styles.filmPictureBlock} />
      <div className={styles.itemsContainer}>
        {mainPageItems2.map(item => <MainPageItem img={item.img} title={item.title} text={item.text} key={uniqid()}  id={mainPageItems2.indexOf(item)} />)}
      </div>
      <CarouselComponent />
      <div className={styles.newsBlock}>
        <h3 className={styles.newsTitle}>Новости компании</h3>
          <div className={'sliderContainer'}>
            <Scrollable class='sliderSlides'>
              {array.map(element => <NewsItem isOnMainPage={true} key={uniqid()}/>)}
            </Scrollable>
          </div>
          <NavLink to="/news" className={styles.newsLink}>Все новости</NavLink>
      </div>
      <div className={styles.productsBlock}>
        <h3 className={styles.productsTitle}>Продукты наших участников</h3>
        <div className={styles.productItemsContainer}>
          {arrayOfProducts.map(product => <ProductsItem text={product.text} img={product.img} link={product.link} key={uniqid()} id={product.id} />)}
        </div>
      </div>
    </div>
  );
}

export default App;
