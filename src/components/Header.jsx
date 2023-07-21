import React from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

const Header = ({ value, onChange, onButtonClick }) => {
  return (
    <Container>
      <h1 className="text-danger text-center mb-5">Todo App</h1>
      <InputGroup className="mb-3 w-50 d-flex mx-auto">
        <Form.Control
          placeholder="Enter new todo..."
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          value={value}
          onChange={onChange}
        />
        <Button variant="success" id="button-addon2" onClick={onButtonClick}>
          Add Todo
        </Button>
      </InputGroup>
    </Container>
  );
};

export default Header;
