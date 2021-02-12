import React, { useState } from "react";
import { Button, Form, FormGroup, Input, Row, Col } from 'reactstrap';

function NewForm({ addItem }) {
    const INITIAL_STATE = { type: "Main", name: "", description: "", price: "" }

    const [formData, setFormData] = useState(INITIAL_STATE);

    const handleChange = evt => {
        const { name, value } = evt.target;
        setFormData(formData => ({
            ...formData,
            [name]: value
        }));
    };

    function handleSubmit(e) {
        e.preventDefault();
        addItem(formData)
        setFormData(INITIAL_STATE)
    }

    const { type, name, description, price } = formData;

    return (
        <Form onSubmit={handleSubmit} className="mt-5" >
            <h3 className="text-center mb-4">Add new items</h3>
            <Row form xs="2">
                <Col md={12} lg={6}>
                    <FormGroup>
                        <Input type="select" name="type" id="type" placeholder="Type" onChange={handleChange}
                            value={type}>
                            <option>Main</option>
                            <option>Side</option>
                            <option>Drink</option>
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Input type="text" name="name" id="name" placeholder="Name" onChange={handleChange} value={name} />
                    </FormGroup>
                </Col>
                <Col md={12} lg={6}>
                    <FormGroup>
                        <Input type="text" name="description" id="description" placeholder="Description" onChange={handleChange}
                            value={description} />
                    </FormGroup>
                    <FormGroup>
                        <Input type="number" name="price" id="price" placeholder="Price" onChange={handleChange}
                            value={price} min="0.1" max="999.9" />
                    </FormGroup>
                    <Button className="btn btn-success float-right">Add</Button>
                </Col>
            </Row>
        </Form>
    );
}

export default NewForm;
