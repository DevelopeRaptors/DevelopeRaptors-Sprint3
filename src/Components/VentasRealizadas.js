import React from "react";
import '../Styles/VentasRealizadas.css';

export default class ListaVentas extends React.Component {


    render() {
        let Data = [
            {
                fecha: "27/09/22",
                idVenta: "123",
                valor: "$35"
            },
            {
                fecha: "28/09/22",
                idVenta: "234",
                valor: "$50"
            },
            {
                fecha: "29/09/22",
                idVenta: "456",
                valor: "$10"
            },
            {
                fecha: "",
                idVenta: "Total",
                valor: "$95"
            }
        ];
        return (
            <div
                style={{
                    display: "flex",
                    justifyContent: "flex-end",
                    marginTop: "150px",
                    marginRight: "500px",
                    color: "black"
                }}
            >
                <div>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Fecha</th>
                                <th>Id venta</th>
                                <th>Valor</th>
                            </tr>

                        </thead>
                        <tbody>
                            {Data.map((user, index) => {
                                return (
                                    <tr key={user.id}>
                                        <td>{user.fecha}</td>
                                        <td>{user.idVenta}</td>
                                        <td>{user.valor}</td>
                                    </tr>

                                );
                            })}
                        </tbody>
                    </table>
                    <div>
                        <br />
                        <span className="title">Agregar Venta</span>
                        <br />
                        <button >Agregar Nueva</button>
                    </div>
                </div>
            </div>
        );
    }
}
