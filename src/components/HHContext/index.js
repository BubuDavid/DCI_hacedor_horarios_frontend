import React, { useState } from "react"
import { useFetchAirtableData } from "./customHooks"

const HHContext = React.createContext()

const AIRTABLE_API_KEY = process.env.REACT_APP_AIRTABLE_API_KEY
const AIRTABLE_TABLE_URL = process.env.REACT_APP_AIRTABLE_TABLE_URL


const requestParams = {
	url: AIRTABLE_TABLE_URL,
	headers: {
		'Authorization': `Bearer ${AIRTABLE_API_KEY}`,
		'Content-Type': 'application/json',
		'Accept': 'application/json',
	},
	method: 'GET'
}

function HHProvider(props) {
	const {
		item: subjects,
		setItem: setSubjects,
		loading,
		error
	} = useFetchAirtableData([], requestParams)
	const [openModal, setOpenModal] = useState(false)
	const [schedules, setSchedules] = useState([])

	const toggleSelectSubject = (id) => {
		const indexSubject = subjects.findIndex(subject => subject._ID === id)
		const newSubjects = [...subjects]
		newSubjects[indexSubject].selected = !newSubjects[indexSubject].selected
		setSubjects(newSubjects)
	}

	// // tests
	// subjects.forEach(subject => {
	// 	if (subject.NAME === "ANALISIS VECTORIAL") {
	// 		subject.selected = true;
	// 	}
	// 	if (subject.NAME === "DEBATES ETICOS CONTEMPORANEOS Y DERECHOS HUMANOS") {
	// 		subject.selected = true;
	// 	}
	// 	if (subject.NAME === "ELECTROMAGNETISMO") {
	// 		subject.selected = true;
	// 	}
	// 	if (subject.NAME === "FISICA CUANTICA") {
	// 		subject.selected = true;
	// 	}
	// });
	const yourSubjects = subjects.filter(subject => subject.selected)

	return (
		<HHContext.Provider value={{
			loading,
			error,
			subjects,
			toggleSelectSubject,
			yourSubjects,
			openModal,
			setOpenModal,
			schedules,
			setSchedules
		}}>
			{ props.children }
		</HHContext.Provider>
	)
}

export { HHProvider, HHContext };