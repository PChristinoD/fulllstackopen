import { useState } from 'react'
const Head = (props) => {
	return (
		<h1> {props.text}</h1>
	)
}

const Button = (props) => {
	return (
		<button onClick={props.onClick} >
			{props.text}
		</button >
	)
}

const Votes = (props) => {
	if (props.value <= 1) {
		return (
			<span>{"has " + props.value + " vote"}</span>
		)
	} else {
		return (
			<span>{"has " + props.value + " votes"}</span>

		)
	}
}



const App = () => {
	const anecdotes = [
		'If it hurts, do it more often.',
		'Adding manpower to a late software project makes it later!',
		'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
		'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
		'Premature optimization is the root of all evil.',
		'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
		'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
		'The only way to go fast, is to go well.'
	]

	const [selected, setSelected] = useState(Math.floor(Math.random() * anecdotes.length));
	const [votes, setVotes] = useState(new Uint32Array(anecdotes.length));
	const [maxIndex, setMaxIndex] = useState(selected);

	const randomSelected = () => {
		setSelected(Math.floor(Math.random() * anecdotes.length))

	}
	const incVotes = () => {
		let newVotes = [...votes];
		newVotes[selected] += 1;
		setVotes(newVotes);
		setMaxIndex(newVotes.indexOf(Math.max.apply(null, newVotes)));
	}



	return (
		<div>
			<Head text="Anecdotes of the day" />
			{anecdotes[selected]}
			<br />
			<Votes value={votes[selected]} />
			<br />
			<Button onClick={incVotes} text="vote" />
			<Button onClick={randomSelected} text="next anecdotes" />
			<Head text="Anecdotes with most votes" />
			<span>{anecdotes[maxIndex]}</span>
			<br />
			<Votes value={votes[maxIndex]} />


		</div>

	)
}
export default App;
