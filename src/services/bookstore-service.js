export default class BookstoreService {

    data = [
        {
            id: 1,
            title: 'Prod-Red Mic',
            author: 'some cool aut',
            price: 5,
            cover_image: 'https://www.eduneo.ru/wp-content/uploads/2019/08/15481641829914-752x440.jpg'
        },
        {
            id: 2,
            title: 'release it',
            author: 'M T N',
            price: 6,
            cover_image: 'https://i.work.ua/article/1532b.jpg'
        }
    ];

    getBooks() {
        //имитация API для отработки асинхронного запроса
        return new Promise((resolve, reject) =>{
            setTimeout(() => {
                if (Math.random() > 0.75){
                    reject(new Error('Something bad'));
                }
                else{
                    resolve(this.data);
                }

            }, 700)
        });
    }
}
