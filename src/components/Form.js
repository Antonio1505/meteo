import React from "react";

const Form = props => (
	<form onSubmit={props.getWeather}>
		<input type="text" name="city1" placeholder="City..."/>
		<input type="text" name="country" placeholder="Country..."/>
		<button>Get Weather</button>
	</form>
);

export default Form;