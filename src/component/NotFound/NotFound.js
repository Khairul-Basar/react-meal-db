import React from 'react';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

const NotFound = () => {

    const history = useHistory()
    const handleBackBtn = () => {
        history.push('/')
    }

    return (
        <div>
            <h3>Sorry..!! Page Not Found....!!!</h3>
            <Button onClick={handleBackBtn} className="mt-2" variant="primary">Back To Home</Button>
        </div>
    );
};

export default NotFound;