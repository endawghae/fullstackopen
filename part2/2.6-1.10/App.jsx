import { useState } from "react";

const Filter = ({ newSearch, handleOnSearchChange }) => (
  <div>
    filter shown with{" "}
    <input value={newSearch} onChange={handleOnSearchChange} />
  </div>
);

const PersonForm = ({newName, handleOnNameChange, newNumber, handleOnNumberChange, addPerson}) => (
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


const Numbers = ({contactsToShow}) => (
	<ul>
		{contactsToShow.map((person, i) => (
			<li key={i}>
				{person.name} {person.number}
			</li>
		))}
	</ul>
)

const App = () => {
  const [persons, setPersons] = useState([
    {
      name: "Arto Hellas",
      number: "040-1234567",
    },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [newSearch, setNewSearch] = useState("");

  const addPerson = (event) => {
    event.preventDefault();
    if (persons.find((person) => person.name === newName) != null)
      return alert(`The name ${newName} is already added to phonebook`);
    if (persons.find((person) => person.number === newNumber) != null)
      return alert(`The number ${newNumber} is already added to phonebook`);
    setPersons(persons.concat({ name: newName, number: newNumber }));
    setNewName("");
    setNewNumber("");
  };
  const handleOnNameChange = (event) => {
    setNewName(event.target.value);
  };
  const handleOnNumberChange = (event) => {
    setNewNumber(event.target.value);
  };
  const handleOnSearchChange = (event) => {
    setNewSearch(event.target.value);
  };

  const contactsToShow = persons.filter((person) =>
    person.name.toLowerCase().includes(newSearch.toLowerCase()),
  );
	
  return (
    <div>
      <h2>Phonebook</h2>
      <Filter newSearch = {newSearch} handleOnSearchChange = {handleOnSearchChange} />
      
			<h2>add a new</h2>
      <PersonForm newName = {newName} handleOnNameChange = {handleOnNameChange} newNumber = {newNumber} handleOnNumberChange = {handleOnNumberChange} addPerson = {addPerson} />
      
			<h2>Numbers</h2>
			<Numbers contactsToShow = {contactsToShow} />
    </div>
  );
};

export default App;
