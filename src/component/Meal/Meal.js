import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

const Meal = (props) => {
    const history = useHistory()
    const {idMeal,strMeal,strMealThumb,strCategory} = props.meal

    const url = `/meal/${idMeal}`
    const handleMealDetails = () => {
        history.push(url)
    }
    return (
        <div>
            <Col>
                <Card>
                    <Card.Img variant="top" src={strMealThumb}/>
                    <Card.Body>
                        <Card.Title>{strMeal}</Card.Title>
                        <Card.Text>
                            {strCategory}
                        </Card.Text>
                        <Button onClick={handleMealDetails} variant="outline-primary">Details</Button>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Meal;