import { useEffect, useState } from "react";
import "./editarEmpleado.css"
import { Button, Form } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";


const UpdateUser = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        department: ""
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    useEffect(() => {
        const fetchEmpleados = async () => {
            try {
                const response = await fetch(`http://localhost:8080/api/empleados/${id}`);
                const data = await response.json();
                setFormData(data);
            } catch (error) {
                console.error("error en el fetchign: ", error.message);
            }
        }

        fetchEmpleados();
    }, [id])

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(`http://localhost:8080/api/empleados/${id}`, {
                method: 'PATCH',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();
            console.log("Empleado editado: ", data);

            navigate(`/`)
        } catch (error) {
            console.error("Error al editar al empleado: ", error.message);

        }
    }

    return (
        <div className="center-form">
            <h1>Editar empleado</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formBasicName">
                    <Form.Control
                        type="text"
                        name="name"
                        placeholder="Enter name"
                        value={formData.name}
                        onChange={handleInputChange}
                    />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Control
                        type="text"
                        name="email"
                        placeholder="Enter email"
                        value={formData.email}
                        onChange={handleInputChange}
                    />
                </Form.Group>
                <Form.Group controlId="formBasicPhone">
                    <Form.Control
                        type="text"
                        name="phone"
                        placeholder="Enter phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                    />
                </Form.Group>
                <Form.Group controlId="formBasicDepartment">
                    <Form.Control
                        type="text"
                        name="department"
                        placeholder="Enter department"
                        value={formData.department}
                        onChange={handleInputChange}
                    />
                </Form.Group>
                <Button variant="primary" type="submit" className="w-100">Editar empleado</Button>
            </Form>
        </div>
    )
}

export default UpdateUser;

