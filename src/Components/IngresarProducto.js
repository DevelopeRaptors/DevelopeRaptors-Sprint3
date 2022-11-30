//import React from 'react';
import '../Styles/IngresarProducto.css';

import React, { useState } from 'react';
import data from './data.json';
import Datos from './Datos';
import Modal from './Modal';

const IngresarProducto = () => {
    const [showModal, setShowModal] = useState(false);
    const [userData, setUserData] = useState(data);
    const [currentUser, setCurrentUser] = useState(null);

    const toggleModal = () => {
        setShowModal(!showModal);
    }

    const addUser = user => {
        if (currentUser) {
            setUserData(userData.map(data => (data.id === user.id ? user : data)));
            setCurrentUser(null);
            return;
        }
        user.id = userData.length + 1;
        setUserData([...userData, user]);
    }

    const editUserHandler = user => {
        setCurrentUser(user);
        toggleModal();
    }

    const deleteUser = user => {
        setUserData(userData.filter(item => item.name !== user.name));
    }

    return (
        <div>
            <div className="header">
                <br />
                <span className="title">Agregar Productos al Stock</span>
                <br />
                <button onClick={toggleModal}>Agregar Nuevo</button>
            </div>
            <br />
            <Datos data={userData} onEdit={editUserHandler} onDelete={deleteUser} />
            <Modal onCancel={toggleModal} onSubmit={addUser} show={showModal} data={userData} editUser={currentUser} />
        </div>
    )
}




export default IngresarProducto