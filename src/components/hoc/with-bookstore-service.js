import React from "react";
import {BookstoreServiceConsumer} from "../bookstore-service-context";

//В компоненте высшего порядка создается новый компонент
const withBookstoreService=()=>(Wrapped) => { //функция, которая возвращает функцию, которая принимает компонент, который мы будем оборачивать
    return (props) =>{
        return(
            <BookstoreServiceConsumer>
                { //Чтобы получить данные из консюмера, необходимо передать в него рендер-функцию
                    (bookstoreService)=>{ //принмает в качестве значения тот сервис, который передается через контекст
                        return (
                            <Wrapped { ...props} bookstoreService={bookstoreService}/>
                            );
                    }
                }
            </BookstoreServiceConsumer>
        );
    }
}

export default withBookstoreService;
