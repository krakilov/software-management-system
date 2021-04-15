import React, { useState } from 'react';

export const LogInPage = () => {
    const [form, setForm] = useState({
        email: '',
        password: ''
    });

   const changeHandler = (event) => {
       setForm({ ...form, [event.target.name]: event.target.value });
    };

   const submitHandler = (event) => {
       event.preventDefault();
       window.location = '/account';
    };

    return (
        <div className="container p-5 mt-5 form">
            <h3 className="mb-4">Вход</h3>
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
                    <label htmlFor="password">Пароль</label>
                    <input
                        name="password"
                        type="password"
                        className="form-control"
                        value={form.password}
                        onChange={changeHandler}
                        />
                </div>
                <button type="submit" className="btn btn-primary btn-block">Войти</button>
            </form>
      </div>
    );
}

export default LogInPage;