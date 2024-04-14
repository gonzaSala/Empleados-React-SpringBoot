import { useEffect, useState } from "react";
import { Button, Col, Container, Row, Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";



const Dashboard = () =>{

    const [empleados, setEmpleados] = useState([]);
    const navigate = useNavigate();

    useEffect(() =>{
        const fetchEmpleados = async() =>{
            try {
                const response = await fetch("http://localhost:8080/api/listaEmpleados");
                const data =await response.json();

                setEmpleados(data);
            } catch (error) {
                console.log("Error al cargar los empleados: " , error.message);
            }
        }

        fetchEmpleados();
    }, [])

    const handleDelete= async (empleadoId) =>{
        try {
            const response = await fetch(`http://localhost:8080/api/empleados/${empleadoId}`,{
                method:"DELETE",
            });

        if(response.ok){
            setEmpleados((prevEmpleados)=> prevEmpleados.filter((empleado)=>empleado.id !== empleadoId))
        }

            console.log(`Empleado con ID ${empleadoId} eliminado con EXISTO`);
        } catch (error) {
            console.error("Error al eliminar al empleado: ", error.message);
        }
    }

    const handleUpdate = (empleadoId) => {
        navigate (`/empleados/${empleadoId}`)
    } 


    return (
        <>
        <Container className="mt-5">
            <Row>
                <Col>
                <h1 className="text-center" > Empleados</h1>
                <Table striped border hover responsive>
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Email</th>
                            <th>Departmento</th>
                            <th>Teléfono</th>
                            <th>Acción</th>
                        </tr>
                    </thead>
                    <tbody>
                        {empleados.map((empleado) =>(
                            <tr key={empleado.id}>
                                <td>{empleado.name}</td>
                                <td>{empleado.email}</td>
                                <td>{empleado.department}</td>
                                <td>{empleado.phone}</td>
                                <td>
                                    <Button variant="outline-secondary" onClick={()=> handleUpdate(empleado.id)}>Editar</Button>{" "}
                                    <Button variant="outline-danger" onClick={() => handleDelete(empleado.id)}>Eliminar</Button>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                </Table>
                </Col>
            </Row>
        </Container>
        </>
    )
}

export default Dashboard;