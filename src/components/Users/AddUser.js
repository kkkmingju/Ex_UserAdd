import React, { useState } from 'react';
import Card from '../UI/Card';
import Button from '../UI/Button';
import classes from '../UI/Card.module.css';

const AddUser = (props) => {
	const [enteredUsername, setEnteredUsername] = useState('');
	const [enteredAge, setEnteredAge] = useState('');
	const addUserHandler = (event) =>{
		event.preventDefault(); // 기본동작 방지해놔서 다시 로드되지 않음
			
		if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0){
			return;
		}
		if (+enteredAge < 1){
			return;
		}
		console.log(enteredUsername, enteredAge);
		
		setEnteredUsername('');
		setEnteredAge('');
	};
	
	const usernameChangeHandler = (event) => {
		setEnteredUsername(event.target.value);
	};
	const ageChangeHandler = (event) => {
		setEnteredAge(event.target.value);
	};

	return (
		<Card className={classes.input}>
			<form onSubmit={addUserHandler}>
				<lable htmlFor="username">UserName</lable>
							{/* htmlFor으로 id가 username인 요소에 접근 */}
				<input id="username" type="text" value={enteredUsername} onChange={usernameChangeHandler}/>
				<lable htmlFor="age">Age (Years)</lable>
				<input id="age" type="number" value={enteredAge} onChange={ageChangeHandler}/>
				{/* <button type="submit">submit</button> */}
				<Button type="submit">Add User</Button>
			</form>
		</Card>
	)
};

export default AddUser;