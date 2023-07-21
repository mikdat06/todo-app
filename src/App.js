import { Button, Container } from "react-bootstrap";
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import { useState } from "react";


function App() {
  const [inputValue, setInputValue] = useState("");
  const [showValue, setShowValue] = useState([]);
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  const handleButtonClick = () => {
    setShowValue((item) => [...item, inputValue]);
    setInputValue("")
  };
  const handleDelete = (index) => {
    setShowValue((e) =>
     e.filter((_, i) => i !== index)
    );
  };
  const handleClearAll = () => {
    setShowValue([]);
  };

  return (
    <Container className="mt-5 App">
      <Header
        value={inputValue}
        onChange={handleInputChange}
        onButtonClick={handleButtonClick}
      />
      <TodoList show={showValue} onDelete={handleDelete}/>
      <div class="d-flex justify-content-end">
      <Button className="" variant="primary" onClick={handleClearAll}>Clear All</Button>
      </div>
    </Container>
  );
}

export default App;
