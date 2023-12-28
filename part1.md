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


