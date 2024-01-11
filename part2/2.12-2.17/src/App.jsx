import { useState, useEffect } from "react"
import backendManager from "./services/backendManager"

const Filter = ({ newSearch, handleOnSearchChange }) => (
	<div>
		filter shown with{" "}
		<input value={newSearch} onChange={handleOnSearchChange} />
	</div>
)

const PersonForm = ({ newName, handleOnNameChange, newNumber, handleOnNumberChange, addPerson }) => (
	<form onSubmit={addPerson}>
		<div>
			name: <input value={newName} onChange={handleOnNameChange} />
		</div>
		<div>
			number: <input value={newNumber} onChange={handleOnNumberChange} />
		</div>
		<div>
			<button>add</button>
		</div>
	</form>
)


const Numbers = ({ contactsToShow, persons, setPersons, setErrorMessage}) => {
	const confirm = ({person}) => {
		if (window.confirm(`delete ${person.name}?`)) {
			backendManager.destroy(person.id).then(returnedPerson => {
				setErrorMessage(`Removed ${person.name} from phonebook`)
				setTimeout(() => { setErrorMessage(null) }, 5000)
				setPersons(persons.filter(p => p.id !== person.id))
			}).catch(error => {
				setErrorMessage(`${person.name} was already removed from phonebook`)
				setTimeout(() => { setErrorMessage(null) }, 5000)
				setPersons(persons.filter(p => p.id !== person.id))
			})
        }
    }
	return (
		<ul>
			{contactsToShow.map((person, i) => (
				<li key={person.id}>
					{person.name} {person.number} <button onClick={() => { confirm({ person }) }}>delete</button>
				</li>
			))}
		</ul>
	)
}

const Notification = ({ message }) => {
	return (message === null) ? null : (<div className="error"> {message} </div>)
}

const App = () => {
	const [persons, setPersons] = useState([])
	const [newName, setNewName] = useState("")
	const [newNumber, setNewNumber] = useState("")
	const [newSearch, setNewSearch] = useState("")
	const [errorMessage, setErrorMessage] = useState(null)

	useEffect(() => {
		console.log('effect')
		backendManager.getAll().then(persons => {
			setPersons(persons)
		})
	}, [])

	const addPerson = (event) => {
		event.preventDefault()
		let targetPerson = persons.find((person) => person.name === newName)
		if (targetPerson != null) {
			if (newNumber == targetPerson.number) {
				setErrorMessage(`Contact ${newName} with number ${newNumber} already exists in phonebook`)
				setTimeout(() => { setErrorMessage(null) }, 5000)
				return
			}
			if (confirm(`The name ${newName} is already added to phonebook, would you like to change the number?`)) {
				const changedPerson = { ...targetPerson, number: newNumber }
				backendManager.edit(changedPerson.id, changedPerson).then(returnedPerson => {
					setPersons(persons.map(person => person.id === returnedPerson.id ? returnedPerson : person))
					setNewName("")
					setNewNumber("")
					setErrorMessage(`Updated contact ${newName}`)
					setTimeout(() => { setErrorMessage(null) }, 5000)
					}).catch(error => {
					setErrorMessage(`An error has ocurred while trying change the number for contact ${newName}`)
					setTimeout(() => { setErrorMessage(null) }, 5000)
                })
				return
			}
		}
		targetPerson = persons.find((person) => person.number === newNumber)
		if (targetPerson != null) {
			setErrorMessage(`The number ${newNumber} is already added to phonebook`)
			setTimeout(() => { setErrorMessage(null) }, 5000)
			return
		}
		const newPerson = { name: newName, number: newNumber }
		backendManager.create(newPerson).then(newPerson => {
			setPersons(persons.concat(newPerson))
			setNewName("")
			setNewNumber("")
			setErrorMessage(`Added ${newName} to phonebook`)
			setTimeout(() => { setErrorMessage(null) }, 5000)
		}).catch(error => {
			setErrorMessage(`an error has ocurred while trying to create contact ${newName}`)
			setTimeout(() => { setErrorMessage(null) }, 5000)
        })
	}
	const handleOnNameChange = (event) => {
		setNewName(event.target.value)
	}
	const handleOnNumberChange = (event) => {
		setNewNumber(event.target.value)
	}
	const handleOnSearchChange = (event) => {
		setNewSearch(event.target.value)
	}

	const contactsToShow = persons.filter((person) =>
		person.name.toLowerCase().includes(newSearch.toLowerCase()),
	)

	return (
		<div>
			<h2>Phonebook</h2>
			<Notification message={errorMessage} />
			<Filter newSearch={newSearch} handleOnSearchChange={handleOnSearchChange} />

			<h2>add a new</h2>
			<PersonForm newName={newName} handleOnNameChange={handleOnNameChange} newNumber={newNumber} handleOnNumberChange={handleOnNumberChange} addPerson={addPerson} />

			<h2>Numbers</h2>
			<Numbers contactsToShow={contactsToShow} persons={persons} setPersons={setPersons} setErrorMessage={setErrorMessage} />
		</div>
	)
}

export default App
