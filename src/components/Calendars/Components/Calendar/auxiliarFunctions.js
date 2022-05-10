function createTable(nDays = 7) {
	const columnNames = ['Hora', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo']
	const table = document.createElement('table')
	const tableHeader = document.createElement('thead')
	const tableBody = document.createElement('tbody')

	// Table Head Generation
	for (let i = 0; i < nDays; i++) {
		const header = document.createElement('th')
		header.innerText = columnNames[i]
		tableHeader.appendChild(header)
	}
	table.appendChild(tableHeader)

	// Table Body Generation
	for (let hour = 8; hour <= 20; hour++) {
		let hourText = hourTransformation(hour)
		let row = document.createElement('tr')
		let data = document.createElement('td')
		data.innerText = hourText
		data.classList.add('CalendarHour')
		row.appendChild(data)
		for (let i = 1; i < nDays; i++) {
			let empty = document.createElement('td')
			row.appendChild(empty)
		}
		tableBody.appendChild(row)
	}

	table.appendChild(tableBody)

	// Style
	table.classList.add('Calendar')
	return table
}

function hourTransformation(hour) {
	if (hour === 12) return `12:00 PM`
	if (hour > 12) return `${hour % 12}:00 PM`
	return `${hour}:00 AM`
}


export {createTable}