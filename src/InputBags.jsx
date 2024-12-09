import "./app.css"
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


const InputBags = () => {
    return (
        <div>
            <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Enter the number of bags</Form.Label>
                    <div>
                        <Form.Control type="number" placeholder="Please enter the number of bags" />
                    </div>
                </Form.Group>
                <Button variant="primary">Primary</Button>
            </Form>
        </div>
    )
}

export default InputBags