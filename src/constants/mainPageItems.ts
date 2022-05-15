interface ImainPageItems {
    id: number;
    img: string;
    title: string;
    text: string;
} 

const mainPageItems: ImainPageItems[] = [
    {
        id: 0,
        img: './static/pictures/mainItems/sertificate.png',
        title: 'Сертификация',
        text: 'Инициирование введения обязательной сертификации на продукцию электромашиностроения'
    },
    {
        id: 1,
        img: './static/pictures/mainItems/money.png',
        title: 'Контроль',
        text: 'Введение антидемпинговых пошлин на импортируемые асинхронные электродвигатели на территорию ЕАЭС'
    },
    {
        id: 2,
        img: './static/pictures/mainItems/organisation.png',
        title: 'Организация',
        text: 'Организация производства продукции, не выпускаемой на территории Российской Федерации'
    },
]

const mainPageItems2: ImainPageItems[] = [
    {
        id: 0,
        img: './static/pictures/mainItems/sertificate2.png',
        title: 'Сертификация',
        text: 'Создание совместного сертификационного органа'
    },
    {
        id: 1,
        img: './static/pictures/mainItems/import.png',
        title: 'Импортозамещение',
        text: 'Совместная с Министерством промышленности и торговли разработка программ по импортозамещению'
    },
    {
        id: 2,
        img: './static/pictures/mainItems/science.png',
        title: 'Наука',
        text: 'Использование научных разработок сотрудничающих с союзом НИИ'
    },
]

export { mainPageItems, mainPageItems2 };