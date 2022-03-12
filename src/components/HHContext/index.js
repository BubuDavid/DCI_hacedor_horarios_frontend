import React from "react"
import { useFetchData } from "./useFetchData"

const HHContext = React.createContext()

const AIRTABLE_API_KEY = process.env.REACT_APP_AIRTABLE_API_KEY

const requestInfo = {
	url: "https://api.airtable.com/v0/appHZnhbBkL60GEIz/nombres_materias?sort%5B0%5D%5Bfield%5D=_ID",
	headers: {
		'Authorization': `Bearer ${AIRTABLE_API_KEY}`
	}
}

function HHProvider(props) {
	const {
		item: subjects,
		setItem: setSubjects,
		loading,
		error
	} = useFetchData([], requestInfo)


	const toggleSelectSubject = (id) => {
		const indexSubject = subjects.findIndex(subject => subject._ID === id)
		const newSubjects = [...subjects]
		newSubjects[indexSubject].selected = !newSubjects[indexSubject].selected
		setSubjects(newSubjects)
	}

	const yourSubjects = subjects.filter(subject => subject.selected)

	return (
		<HHContext.Provider value={{
			loading,
			error,
			subjects,
			toggleSelectSubject,
			yourSubjects
		}}>
			{ props.children }
		</HHContext.Provider>
	)
}

export { HHProvider, HHContext };