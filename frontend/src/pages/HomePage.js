import React from 'react';
import {Link} from 'react-router-dom';

import Globe from 'bootstrap-icons/icons/globe.svg';

export const HomePage = () => {
    return (
        <div>
            <div className="d-flex align-items-center bg-primary">
                <div className="container logo">Alpha Task</div>
                <div className="container-fluid d-flex flex-row-reverse">
                    <Link to="/signup" className="btn m-1 btn-light">Регистрация</Link>
                    <Link to="/login" className="btn m-1 btn-outline-light">Вход</Link>
                </div>
            </div>
            <div className="container-fluid d-flex align-items-center justify-content-around p-5" style={{height: '750px'}}>
                <img src={Globe} alt="globe" width="512" height="512" />
                <div className="m-5">
                    <h1>Alpha Task помогает командам разработчиков выполнять работу вместе.</h1>
                    <br />
                    <p style={{fontSize: '24px'}}>
                        Alpha Task - это информационная система, которая автоматизирует задачи организации разработки программного обеспечения.
                        <br />
                        Объединяйтесь в команды, создавайте проекты, добавляйте задания и проверяйте отчетность.
                        <br />
                        <Link to="/signup" className="btn mt-3 btn-primary" style={{fontSize: '24px'}}>Зарегистрируйтесь - это бесплатно</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};