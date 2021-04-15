import React, { useState } from 'react';

import { useHttp } from '../hooks/http.hook';

export const SignUpPage = () => {
    const { error, request } = useHttp();

    const [form, setForm] = useState({
         name: '',
         email: '',
         password: '',
         confirmation: ''
    });

    const changeHandler = (event) => {
        setForm({ ...form, [event.target.name]: event.target.value });
    };

    const submitHandler = async (event) => {
        event.preventDefault();

        try {
            const response = await request('http://localhost:5000/api/auth/signup', { ...form });
            //window.location = '/';
        } catch(error) { }
    };

    return (
        <div className="d-flex flex-column align-items-center">
            <div className="container p-5 mt-5 form">
                <h3 className="mb-4">Регистрация</h3>
                <form onSubmit={submitHandler}>
                    <div className="form-group">
                        <label htmlFor="email">Почта</label>
                        <input
                            name="email"
                            type="email"
                            className="form-control"
                            value={form.email}
                            onChange={changeHandler}
                            />
                    </div>
                    <div className="form-group">
                        <label htmlFor="name">Имя</label>
                        <input
                            name="name"
                            type="text"
                            className="form-control"
                            value={form.name}
                            onChange={changeHandler}
                            />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Пароль</label>
                        <input
                            name="password"
                            type="password"
                            className="form-control"
                            value={form.password}
                            onChange={changeHandler}
                            />
                    </div>
                    <div className="form-group">
                        <label htmlFor="confirmation">Повторите пароль</label>
                        <input
                            name="confirmation"
                            type="password"
                            className="form-control"
                            value={form.confirmation}
                            onChange={changeHandler}
                            />
                    </div>
                    <button type="submit" className="btn btn-primary btn-block">Зарегистрироваться</button>
                </form>
        </div>
        <p className="text-danger">{error}</p>
      </div>
    );
}