import React, { useState, useEffect } from "react";

const Modal = ({ show, data, onSubmit, onCancel, editUser }) => {
    useEffect(() => {
        console.log(editUser);
        if (editUser) setFormData(editUser);
    }, [editUser]);

    const initialFormState = () => {
        return editUser
            ? { id: null, name: "silly billy", cant: "123" }
            : { id: null, name: "", cant: "" };
    };

    const [formData, setFormData] = useState(initialFormState);

    const onInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: name === "cant" ? parseInt(value) : value,
        });
    };

    const submitData = (event) => {
        event.preventDefault();
        onSubmit(formData);
        onCancel();
    };

    return show ? (
        <div className="modal-overlay">
            <div className="modal">
                <form onSubmit={submitData}>
                <br/>
                    <h3>{editUser ? "Editar detalles" : "Nuevos detalles"}</h3>
                    <br/>
                    <div className="modal-section">
                        <label>Nombre: </label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={onInputChange}
                            autoFocus
                            autoComplete="off"
                        />
                        
                    </div>
                    <br/>
                    <div className="modal-section">
                        <label>Cantidad: </label>
                        <input
                            type="text"
                            name="cant"
                            value={formData.cant}
                            onChange={onInputChange}
                            autoComplete="off"
                        />
                    </div>
                    <br/>

                    <div className="modal-section">
                        <label>Precio: </label>
                        <input
                            type="text"
                            name="precio"
                            value={formData.precio}
                            onChange={onInputChange}
                            autoComplete="off"
                        />
                    </div>
                    <br/>

                    <button type="button" onClick={onCancel}>
                        Cancelar
                    </button>
                    <button type="submit">Aceptar</button>
                </form>
                <br/>
            </div>
        </div>
    ) : null;
};

export default Modal;
