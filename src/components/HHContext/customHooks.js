import { useState, useEffect } from "react"

function useFetchAirtableData(initialValue, requestParams) {
	const [error, setError] = useState(false)
	const [loading, setLoading] = useState(true)
	const [item, setItem] = useState(initialValue)

	useEffect(() => {
		try {
			async function fetchData({ url, headers }) {
				const response = await fetch(url, {
					headers: headers
				})
				const data = await response.json()
				const records = data.records
				setItem(records.map(record => record.fields))
				setLoading(false)
			}
			fetchData(requestParams)
		} catch (error) {
			setError(error)
		}
	}, [requestParams])
	
	return {
		error,
		loading,
		item,
		setItem
	}
}

function useCallHHAPI(setSchedules) {
	// States
	const [scheduleLoading, setScheduleLoading] = useState(false)
	const [scheduleError, setScheduleError] = useState(false)
	// API call function
	const makeSchedules = async (url, body_request) => {
		setScheduleLoading(true)
		try {
			console.log(body_request)
			const response = await fetch(url, {
				method: "POST",
				mode:"cors",
				headers: {
					"Content-type": "application/json"
				},
				body: JSON.stringify(body_request)
			})
			
			const data = await response.json()
			setSchedules(data)
		} catch (error) {
			setScheduleError(error)
		}
		setScheduleLoading(false)
	}

	return {
		scheduleLoading,
		scheduleError,
		makeSchedules
	}
}


export { useFetchAirtableData, useCallHHAPI }