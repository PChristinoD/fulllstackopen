import { useState } from 'react'
const Button = (props) => {
	return (
		<button onClick={() => props.onClick(props.value + 1)} >{props.text}</button>
	)
}
const StatsticLine = (props) => {
	return (
		<tbody>
			<tr>
				<th align="left"> {props.text}</th>
				<td align="left">{props.value}</td>
			</tr>
		</tbody>

	)
}
const Statstic = (props) => {
	if (props.good == 0 && props.bad == 0 && props.neutral == 0) {
		return (
			<p> {"No feedback given"}</p>
		)
	} else {

		return (
			<table>
				<StatsticLine text={"good "} value={props.good} />
				<StatsticLine text={"neutral "} value={props.neutral} />
				<StatsticLine text={"bad "} value={props.bad} />
				<StatsticLine text={"average "} value={props.average()} />
				<StatsticLine text={"postive "} value={props.posPer()} />
			</table>
		)
	}
}
function App() {
	const [good, setGood] = useState(0)
	const [neutral, setNeutral] = useState(0)
	const [bad, setBad] = useState(0)
	const average = () => {
		return (good - bad) / (good + neutral + bad)
			;
	}
	const posPer = () => {
		return good * 100 / (good + neutral + bad) + "%"
	}

	return (
		<div>
			<h1>{"give feedback"}</h1>
			<Button text="good" onClick={setGood} value={good} />
			<Button text="neutral" onClick={setNeutral} value={neutral} />
			<Button text="bad" onClick={setBad} value={bad} />
			<h2>{"statistic"}</h2>
			<Statstic good={good} bad={bad} neutral={neutral} average={average} posPer={posPer} />
		</div>
	)
}

export default App;
