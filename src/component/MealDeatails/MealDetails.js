import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Button, Card } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router-dom';
import './Details.css'

const MealDetails = () => {
    const {mealId} = useParams()
    const [meal, setMeal] = useState({})

    useEffect(()=>{
        const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
        fetch(url)
        .then(res => res.json())
        .then(data => setMeal(data.meals[0]))
    },[])

    const {idMeal,strMeal,strMealThumb,strCategory,strInstructions} = meal

    const history = useHistory()
    const handleBackBtn = () => {
        history.push('/')
    }

    return (
        <div className="details-container">
            <Card style={{ width: '28rem' }}>
                <Card.Img variant="top" src={strMealThumb} />
                <Card.Body>
                    <Card.Title>{idMeal} {strMeal} </Card.Title>
                    <Card.Text>
                        {strCategory}
                    </Card.Text>
                    <Card.Text>{strInstructions}</Card.Text>
                </Card.Body>
            </Card>
            <Button onClick={handleBackBtn} className="mt-2" variant="primary">Back</Button>
        </div>
    );
};

export default MealDetails;