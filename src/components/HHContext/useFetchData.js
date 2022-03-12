import { useState, useEffect } from "react"

function fetchSubjectNames(records) {
	for (const record of records) {
		
	}
}

function useFetchData(initialValue, requestInfo) {
	const [error, setError] = useState(false)
	const [loading, setLoading] = useState(true)
	const [item, setItem] = useState(initialValue)

	useEffect(() => {
		try {
			async function fetchData(url, headers) {
				const response = await fetch(url, {
					headers: headers
				})
				const data = await response.json()
				const records = data.records.map(record => (record.fields))
				records.forEach(record => {
					record.selected = false
				});
				setItem(records)
				setLoading(false)
			}
			fetchData(requestInfo.url, requestInfo.headers)
		} catch (error) {
			setError(error)
		}
	}, [requestInfo])
	
	return {
		error,
		loading,
		item,
		setItem
	}
}


export { useFetchData }