import React from 'react';
import Star from './Star';
import Rating from './Rating';


const App = () => (
    <>
        <h2>Hello Rating Stars</h2>
        <Star color='green' isFilled />
        <Star color='red' />
        <Star color='blue' isFilled />
        <hr/>
        <Rating stars={4} />
    </>
);

export default App;