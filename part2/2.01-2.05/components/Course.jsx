const Header = ({ course }) => <h1>{course}</h1>

const Total = ({ sum }) => <p>Number of exercises {sum}</p>

const Part = ({ part }) => 
	<li>
		{part.name} {part.exercises}
	</li>

const Content = ({ parts }) => {
	return (
	<ul>
		{parts.map(part => <Part key = {part.id} part = {part}/>)}
	</ul>
	)
}

const Course = ({course}) => {
	const total = course.parts.reduce((sum, part) => sum + part.exercises, 0)
	return (
		<div>
			<Header course = {course.name} />
			<Content parts = {course.parts} />
			<Total sum = {total} />
		</div>
	)
}

export default Course
