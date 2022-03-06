import { Form } from "react-bootstrap";
import { useMovie } from "../movies/MovieContext";

function Companies(props) {

    const{checkedState1, setCheckedState1} = useMovie();

    function handleChange(index) {
        //TODO check if we should drectly modify the state and then write it
        checkedState1[index] = !checkedState1[index]
        setCheckedState1(checkedState1);
    }

    function getCheckboxes() {
        return props.checkboxes1.map((checkbox, index) => {
            return <Form.Group 
                    key={checkbox.value}
                    controlId={`checkbox ${checkbox.id}`}>
                        <Form.Check 
                            value={checkedState1[index]}
                            onChange={() => handleChange(index)}
                            type="checkbox" 
                            label={checkbox.label} />
            </Form.Group>
        })
    }


    return (
        <Form.Group 
           className="mb-3" 
           controlId="filterForm.ControlCheckboxes">
           <Form.Label>Избери Компания</Form.Label>
           {getCheckboxes()}
        </Form.Group>
    )
}    
export default Companies;