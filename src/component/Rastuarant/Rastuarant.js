import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Row } from 'react-bootstrap';
import Meal from '../Meal/Meal';

const Rastuarant = () => {
    const [meals, setMeals] = useState([])
    const [searchText,setSearchText] = useState('')
    useEffect(()=>{
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
        fetch(url)
        .then(res => res.json())
        .then(data => setMeals(data.meals))
    },[meals])

    const handleSearchText = (e) => {
        setSearchText(e.target.value)
    }

    return (
        <>
             <input onChange={handleSearchText} className="border border-2 border-warning rounded p-1 mt-5 text-primary fw-bold" type="text" placeholder="Search Meals"/>
            <div className="m-5">
                {
                    meals.length === 0 ? 
                        'Loadding.....'
                    :
                    <Row xs={1} md={4} className="g-4">
                        {
                            meals.map(meal => {
                                return <Meal key={meal.idMeal} meal={meal}></Meal>
                            })
                        }
                    </Row>
                }
            </div>
        </>
    );
};

export default Rastuarant;