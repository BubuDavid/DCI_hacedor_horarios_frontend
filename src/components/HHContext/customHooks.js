import { useState, useEffect } from "react"

function useFetchAirtableData(initialValue, requestParams) {
	const [error, setError] = useState(false)
	const [loading, setLoading] = useState(true)
	const [item, setItem] = useState(initialValue)

	useEffect(() => {
		try {

			async function fetchData({ url, headers }) {
				let fetching = true
				let records = []
				while (fetching) {
					const response = await fetch(url, {
						headers: headers
					})
					const data = await response.json()
					records.push(...data.records)
					if (!data.offset) fetching = false
					else {
						url = url.split('&offset')[0]
						url += `&offset=${data.offset}`
					}
				}
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

function useCallHHAPI(schedules, setSchedules) {
	// States
	const [scheduleLoading, setScheduleLoading] = useState(false)
	const [scheduleError, setScheduleError] = useState(false)
	// API call function
	const makeSchedules = async (url, body_request) => {
		setScheduleLoading(true)
		try {
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