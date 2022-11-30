import React from 'react';

const Datos = ({ data, onEdit, onDelete }) => (
    <table>
        <thead>
            <tr>
                <th>Nombre</th>
                <th>Cantidad</th>
                <th>Precio</th>
                <th>Acciones</th>
            </tr>
        </thead>
        <tbody>
            {(
                data.map(user => (
                    <tr key={user.name}>
                        <td>{user.name}</td>
                        <td>{user.cant}</td>
                        <td>{user.precio}</td>
                        <td>
                            <button onClick={() => onEdit(user)}>Editar</button>
                            <button onClick={() => onDelete(user)}>Eliminar</button>
                        </td>
                    </tr>
                ))
            )}
        </tbody>
    </table>
);


export default Datos;