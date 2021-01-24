import React from 'react'
import { Calendar } from 'primereact/calendar'

const CalendarComponent = ({ placeholder, disabled, minDate, name, value, onChange }) => {
	let today = new Date()
	let newMinDate = new Date()

	// Create new minimun date for 'to' date
	if (minDate) {
		newMinDate.setDate(minDate.getDate() + 1)
	}

	return (
		<Calendar
			placeholder={placeholder}
			minDate={minDate && newMinDate}
			maxDate={today}
			disabledDates={disabled ? [disabled] : []}
			dateFormat="dd/mm/yy"
			name={name}
			value={value}
			onChange={(e) => onChange(e.target.value)}
		></Calendar>
	)
}

export default CalendarComponent
