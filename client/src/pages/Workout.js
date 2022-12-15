import React from 'react';
import Cards from '../components/Cards';
import "./Workout.css";
import workout from '../'



import 'bootstrap/dist/css/bootstrap.min.css';

const Workouts = () => {
return (
	<div>
	<h1>
		GeeksforGeeks is a Computer
		Science portal for geeks.
	</h1>
	<div className='workout-container'>
		<div className="workout">
			<Cards workout={workout} />
			<h1>Workouts </h1>
			<button>Add Workout</button>
		</div>
	</div>
	</div>
);
};

export default Workouts;


