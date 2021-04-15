import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

import List from 'bootstrap-icons/icons/list.svg';
import Search from 'bootstrap-icons/icons/search.svg';
import PersonCircle from 'bootstrap-icons/icons/person-circle.svg';
import Gear from 'bootstrap-icons/icons/gear.svg';
import QuestionCircle from 'bootstrap-icons/icons/question-circle.svg';

export const AccountPage = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [projects, setProjects] = useState([]);

    const [project, setProject] = useState({
        title: '',
        description: '',
        members: ''
    });

    const handleChange = (event) => {
        setProject({ ...project, [event.target.name]: event.target.value });
        console.log(project);
    };

    const handleProjectCreate = async (event) => {
        event.preventDefault();
        setProjects([...projects, {
            title: project.title,
            description: project.description,
            members: project.members
        }]);
        setProject({});
        
    };

    return (
        <div>
            <div className="container-fluid d-flex bg-primary p-1">
                <div className="container d-flex align-items-center p-2">
                    <img src={List} alt="list" className="menu-icon" />
                    <button className="btn btn-danger ml-3" onClick={handleShow}>Создать</button>
                </div>
                <div className="container-fluid d-flex flex-row-reverse align-items-center">
                    <img src={PersonCircle} alt="person-circle" className="menu-icon" />
                    <img src={Gear} alt="gear" className="menu-icon mr-3" />
                    <img src={QuestionCircle} alt="question-circle" className="menu-icon mr-3" />
                    <form className="search-form p-2 mr-3">
                        <input type="text" className="search-bar" />
                        <img src={Search} alt="search" width="32" height="32" />
                    </form>
                </div>
            </div>
            <div className="container d-flex">

            </div>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Создание проекта</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <Form onSubmit={handleProjectCreate}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Название</Form.Label>
                        <Form.Control
                            type="text"
                            name="title"
                            onChange={handleChange}
                            value={project.title}
                        />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Описание</Form.Label>
                        <br />
                        <textarea
                            className="form-control"
                            name="description"
                            onChange={handleChange}
                            value={project.description}
                            />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Участники</Form.Label>
                        <Form.Control
                            type="text"
                            name="members"
                            onChange={handleChange}
                            value={project.members}
                            />
                    </Form.Group>
                    
                    <Button variant="primary" type="submit">Создать</Button>
                </Form>
                </Modal.Body>
            </Modal>
        </div>
    );
};