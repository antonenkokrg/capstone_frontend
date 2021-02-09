import React, { useState } from "react";
import { Button, Form, FormGroup, Input } from 'reactstrap';

function NewForm({ addItem }) {
    const INITIAL_STATE = { type: "", name: "", description: "", price: "" }

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
        <Form onSubmit={handleSubmit} className="mt-5">
            {/* <FormGroup>
                <Input type="select" name="type" id="type" placeholder="Type" onChange={handleChange}
                    value={type}>
                    <option>Breakfast</option>
                    <option>Lunch</option>
                    <option>Dinner</option>
                </Input>
            </FormGroup> */}
            <FormGroup>
                <Input type="text" name="type" id="type" placeholder="Type" onChange={handleChange}
                    value={type} />
            </FormGroup>
            <FormGroup>
                <Input type="text" name="name" id="name" placeholder="Name" onChange={handleChange} value={name} />
            </FormGroup>
            <FormGroup>
                <Input type="text" name="description" id="description" placeholder="Description" onChange={handleChange}
                    value={description} />
            </FormGroup>
            <FormGroup>
                <Input type="text" name="price" id="price" placeholder="Price" onChange={handleChange}
                    value={price} />
            </FormGroup>
            <Button>Add</Button>
        </Form>
    );
}

export default NewForm;
