# 1.1
```
const Header = (props) => {
	return (
		<>
			<h1>{props.header}</h1>
		</>
		)
}

const Content = (props) => {
	return (
		<>
			<p>{props.p1} {props.e1}</p>
			<p>{props.p2} {props.e2}</p>
			<p>{props.p3} {props.e3}</p>
		</>
	)
}

const Total = (props) => {
	return (
		<>
			<p>Number of exercises {props.e1 + props.e2 + props.e3}</p>
		</>
	)
}


const App = () => {
	const course = 'Half Stack application development'
	const part1 = 'Fundamentals of React'
	const exercises1 = 10
	const part2 = 'Using props to pass data'
	const exercises2 = 7
	const part3 = 'State of a component'
	const exercises3 = 14

	return (
		<div>
			<Header header = {course}/>			
			<Content p1 = {part1} p2 = {part2} p3 = {part3} e1 = {exercises1} e2 = {exercises2} e3 = {exercises3}/>
			<Total e1 = {exercises1} e2 = {exercises2} e3 = {exercises3}/>
		</div>
	)
}

export default App
```
![image](https://github.com/endawghae/fullstackopen/assets/94265058/543d3f1e-7961-4ac6-af58-df49b2c0d841)

# 1.2
```
const Header = (props) => {
	return (
		<>
			<h1>{props.header}</h1>
		</>
		)
}

const Part = (props) => {
	return (
		<p>{props.p} {props.e}</p>
	)
}

const Content = (props) => {
	return (
		<>
			<Part p = {props.p1} e = {props.e1}/>
			<Part p = {props.p2} e = {props.e2}/>
			<Part p = {props.p3} e = {props.e3}/>
		</>
	)
}

const Total = (props) => {
	return (
		<>
			<p>Number of exercises {props.e1 + props.e2 + props.e3}</p>
		</>
	)
}


const App = () => {
	const course = 'Half Stack application development'
	const part1 = 'Fundamentals of React'
	const exercises1 = 10
	const part2 = 'Using props to pass data'
	const exercises2 = 7
	const part3 = 'State of a component'
	const exercises3 = 14

	return (
		<div>
			<Header header = {course}/>			
			<Content p1 = {part1} p2 = {part2} p3 = {part3} e1 = {exercises1} e2 = {exercises2} e3 = {exercises3}/>
			<Total e1 = {exercises1} e2 = {exercises2} e3 = {exercises3}/>
		</div>
	)
}

export default App
```
![image](https://github.com/endawghae/fullstackopen/assets/94265058/ee1acef2-6f25-49b9-9fc1-3dc66b2d20a7)

# 1.3
```
const Header = (props) => {
	return (
		<>
			<h1>{props.header}</h1>
		</>
		)
}

const Part = (props) => {
	return (
		<p>{props.p} {props.e}</p>
	)
}

const Content = (props) => {
	return (
		<>
			<Part p = {props.p1} e = {props.e1}/>
			<Part p = {props.p2} e = {props.e2}/>
			<Part p = {props.p3} e = {props.e3}/>
		</>
	)
}

const Total = (props) => {
	return (
		<>
			<p>Number of exercises {props.e1 + props.e2 + props.e3}</p>
		</>
	)
}


const App = () => {
	const course = 'Half Stack application development'
	const part1 = {
		name: 'Fundamentals of React',
		exercises: 10
	}
	const part2 = {
		name: 'Using props to pass data',
		exercises: 7
	}
	const part3 = {
		name: 'State of a component',
		exercises: 14
	}

	return (
		<div>
			<Header header = {course}/>			
			<Content p1 = {part1.name} p2 = {part2.name} p3 = {part3.name} e1 = {part1.exercises} e2 = {part2.exercises} e3 = {part3.exercises}/>
			<Total e1 = {part1.exercises} e2 = {part2.exercises} e3 = {part3.exercises}/>
		</div>
	)
}

export default App
```
![image](https://github.com/endawghae/fullstackopen/assets/94265058/1cbb7fbc-e8e3-4b4a-9b5c-a8e7578edb7f)

# 1.4
```
const Header = (props) => {
	return (
		<>
			<h1>{props.header}</h1>
		</>
		)
}

const Part = (props) => {
	return (
		<p>{props.p} {props.e}</p>
	)
}

const Content = (props) => {
	return (
		<>
			<Part p = {props.parts[0].name} e = {props.parts[0].exercises}/>
			<Part p = {props.parts[1].name} e = {props.parts[1].exercises}/>
			<Part p = {props.parts[2].name} e = {props.parts[2].exercises}/>
		</>
	)
}

const Total = (props) => {
	return (
		<>
			<p>Number of exercises {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}</p>
		</>
	)
}


const App = () => {
const course = 'Half Stack application development'
const parts = [
	{
		name: 'Fundamentals of React',
		exercises: 10
	},
	{
		name: 'Using props to pass data',
		exercises: 7
	},
	{
		name: 'State of a component',
		exercises: 14
	}
]

	return (
		<div>
			<Header header = {course}/>			
			<Content parts = {parts}/>
			<Total parts = {parts}/>
		</div>
	)
}

export default App
```
![image](https://github.com/endawghae/fullstackopen/assets/94265058/821f7331-cf71-4298-ac3f-5427490dd593)

# 1.5
```
const Header = (props) => {
	return (
		<>
			<h1>{props.header}</h1>
		</>
		)
}

const Part = (props) => {
	return (
		<p>{props.p} {props.e}</p>
	)
}

const Content = (props) => {
	return (
		<>
			<Part p = {props.parts[0].name} e = {props.parts[0].exercises}/>
			<Part p = {props.parts[1].name} e = {props.parts[1].exercises}/>
			<Part p = {props.parts[2].name} e = {props.parts[2].exercises}/>
		</>
	)
}

const Total = (props) => {
	return (
		<>
			<p>Number of exercises {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}</p>
		</>
	)
}


const App = () => {
const course = {
	name: 'Half Stack application development',
	parts: [
		{
			name: 'Fundamentals of React',
			exercises: 10
		},
		{
			name: 'Using props to pass data',
			exercises: 7
		},
		{
			name: 'State of a component',
			exercises: 14
		}
	]
}

	return (
		<div>
			<Header header = {course.name}/>			
			<Content parts = {course.parts}/>
			<Total parts = {course.parts}/>
		</div>
	)
}

export default App
```
![image](https://github.com/endawghae/fullstackopen/assets/94265058/5582f20c-b8f0-420f-8ae9-aa6bceafe81a)

# 1.6 - 1.11 unicafe
```
import { useState } from 'react'

const Header = ({header}) => 
	(
		<h1>{header}</h1>
	)

const Button = ({onClick, text}) =>
	(
		<button onClick={onClick}>{text}</button>
	)

const StatisticLine = ({text, count}) =>
	(
		<>
			<td>{text}</td> 
			<td>{count}</td>
		</>
	)

const Statistics = ({texts, counts}) => {
	if (counts[3] == 0) return (<>No feedback given</>)
	return (
		<>
			<tr><StatisticLine text = {texts[0]} count = {counts[0]} /></tr>
			<tr><StatisticLine text = {texts[1]} count = {counts[1]} /></tr>
			<tr><StatisticLine text = {texts[2]} count = {counts[2]} /></tr>
			<tr><StatisticLine text = {texts[3]} count = {counts[3]} /></tr>
			<tr><StatisticLine text = {texts[4]} count = {counts[4]} /></tr>
			<tr><StatisticLine text = {texts[5]} count = {counts[5]} /> %</tr>
		</>
	)
}

const App = () => {
	// save clicks of each button to its own state
	const [clicks, setClicks] = useState({
		good : 0, neutral: 0, bad: 0
	})
	const [all, setAll] = useState(0)
	const [average, setAverage] = useState(0)
	const [positive, SetPositive] = useState(0)
	const headers = ["give feedback", "statistics"]
	const stats = ["good", "neutral", "bad", "all", "average", "positive"]
	const buttons = {
		good: {
			text: "good",
			onClick: () => {
				const newGood = clicks.good + 1
				const newAll = newGood + clicks.neutral + clicks.bad
				setClicks({...clicks, good: newGood})
				setAll(newAll)
				setAverage((newGood - clicks.bad) / newAll)
				SetPositive(newGood / newAll * 100)
			}
		},
		neutral: {
			text: "neutral",
			onClick: () => {
				const newNeutral = clicks.neutral + 1
				const newAll = clicks.good + newNeutral + clicks.bad
				setClicks({...clicks, neutral: newNeutral})
				setAll(newAll)
				setAverage((clicks.good - clicks.bad) / newAll)
				SetPositive(clicks.good / newAll * 100)
			}
		},
		bad: {
			text: "bad",
			onClick: () => {
				const newBad = clicks.bad + 1
				const newAll = clicks.good + clicks.neutral + newBad
				setClicks({...clicks, bad: newBad})
				setAll(newAll)
				setAverage((clicks.good - newBad) / newAll)
				SetPositive(clicks.good / newAll * 100)
			}
		}
	}

	return (
		<div>
			<Header header = {headers[0]} />
			<Button onClick = {buttons.good.onClick} text = {buttons.good.text} />
			<Button onClick = {buttons.neutral.onClick} text = {buttons.neutral.text} />
			<Button onClick = {buttons.bad.onClick} text = {buttons.bad.text} />
			<Header header = {headers[1]} />
			<Statistics texts = {stats} counts = {[clicks.good, clicks.neutral, clicks.bad, all, average, positive]}/>
		</div>
	)
}

export default App
```
![image](https://github.com/endawghae/fullstackopen/assets/94265058/d03ff187-b9cb-423b-8953-06a57d58d5d5)

# 1.12 - 1.14 anecdotes
```
import { useState } from 'react'

const Header = ({header}) => (
	<h1>{header}</h1>
)

const Button = ({buttons}) => (
	<button onClick={buttons.onClick}>{buttons.text}</button>
)

const Quote = ({text}) => (
	<>{text}</>
)

const VoteCounter = ({votes}) => (
	<>has {votes} votes</>
)

const TopQuote = ({anecdotes,votes}) => {
	const GetTopQuote = () => {
		let max = 0
		for (let i = 1; i < votes.length; i++) {
			if (votes[i] > votes[max]) max = i
		}
		return max;
	}
	let top = GetTopQuote()
	return (
		<>
			<Quote text = {anecdotes[top]} />
			<br></br>
			<VoteCounter votes = {votes[top]} />
		</>
	)
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

	const [selected, setSelected] = useState(0)
	const [votes, setVotes] = useState(Array(anecdotes.length).fill(0))
	const headers = {
		daily : "Anecdote of the Day",
		top : "Anecdote with Most Votes"
	}
	const getRandomAnecdote = () => {
		let newSelected = Math.floor(Math.random() * anecdotes.length)
		console.log("formerly: ", selected, " now: ", newSelected)
		setSelected(newSelected)
	}
	const handleVote = () => {
		let newVotes = [...votes]
		newVotes[selected]++
		console.log(newVotes)
		setVotes(newVotes)
	}
	const buttons = {
		nextAnecdote: {
			text : "next anecdote",
			onClick : () => {getRandomAnecdote()}
		},
		vote: {
			text : "vote",
			onClick : () => {handleVote()}
		}
	}
	
	return (
		<div>
			<Header header = {headers.daily} />
			<Quote text = {anecdotes[selected]} />
			<br></br>
			<VoteCounter votes = {votes[selected]} />
			<br></br>
			<Button buttons = {buttons.vote} />
			<Button buttons = {buttons.nextAnecdote}/>
			<Header header = {headers.top} />
			<TopQuote anecdotes = {anecdotes} votes = {votes} />
		</div>
	)
}

export default App
```
![image](https://github.com/endawghae/fullstackopen/assets/94265058/423e274f-4009-41ce-afa1-ee0f4b1996a6)
