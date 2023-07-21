import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import { Button } from "react-bootstrap";

const TodoList = ({ show, onDelete }) => {
  return (
    <div className="">
      <h2 className="text-center" style={{ color: "#6C757D" }}>
        Todos
      </h2>
      <ListGroup className="d-flex mx-auto w-50">
        {show.map((item, index) => (
          <ListGroup.Item
            action
            variant="success"
            key={index}
            className="p-2 text-capitalize d-flex justify-content-between rounded-5 mb-3"
            style={{ height: "40px", color: "#0F5132" }}
          >
            <span>{item} </span>
            <Button
              className=" d-flex justify-content-center align-items-center"
              style={{ height: "24px" }}
              variant="danger"
              onClick={() => onDelete(index)}
            >
              Delete
            </Button>
          </ListGroup.Item>
        ))}
      </ListGroup>
      
    </div>
  );
};

export default TodoList;
