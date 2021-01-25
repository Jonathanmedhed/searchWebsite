import React from 'react'
import { useState } from 'react'
import CalendarComponent from './CalendarComponent'
import { tags, industries } from '../constants/constants'

const Filter = ({
	setShowSearch,
	selectedTags,
	setSelectedTags,
	selectedIndustries,
	setSelectedIndustries,
	setShowResults,
	from,
	setFrom,
	to,
	setTo,
}) => {
	// Search value
	const [keyword, setKeyword] = useState('')

	// check if tag is already selected
	const checkIfSelectedTag = (tag) => {
		return selectedTags.find((x) => x.value === tag.value)
	}

	// check if industry is already selected
	// use boolean for checkbox checked state
	const checkIfSelectedIndustry = (industry) => {
		if (selectedIndustries.find((x) => x.value === industry.value)) {
			return true
		} else {
			return false
		}
	}

	// add tag to selected ones in state and local storage
	const addToTags = (tag) => {
		if (!checkIfSelectedTag(tag)) {
			setSelectedTags([...selectedTags, tag])
			localStorage.setItem('tags', JSON.stringify([...selectedTags, tag]))
		}
	}

	// add industry to selected ones
	// remove if already selected
	// state and local storage
	const addToIndustries = (industry) => {
		if (checkIfSelectedIndustry(industry) === false) {
			setSelectedIndustries([...selectedIndustries, industry])
			localStorage.setItem('industries', JSON.stringify([...selectedIndustries, industry]))
		} else {
			setSelectedIndustries(selectedIndustries.filter((x) => x.value !== industry.value))
			localStorage.setItem(
				'industries',
				JSON.stringify(selectedIndustries.filter((x) => x.value !== industry.value))
			)
		}
	}

	// remove tag from selected ones in state and local storage
	const removeFromTags = (tag) => {
		setSelectedTags(selectedTags.filter((x) => x.value !== tag.value))
		localStorage.setItem('tags', JSON.stringify(selectedTags.filter((x) => x.value !== tag.value)))
	}

	// set date 'to' state and local storage
	const setDateTo = (date) => {
		setTo(date)
		localStorage.setItem('dateTo', JSON.stringify(date))
	}

	// set date 'from' state and local storage
	const setDateFrom = (date) => {
		setFrom(date)
		localStorage.setItem('dateFrom', JSON.stringify(date))
	}

	// show search results
	const applyHandler = () => {
		setShowSearch(false)
		setShowResults(true)
	}

	// clear all input states and local storage
	const clearHandler = () => {
		setSelectedIndustries([])
		setSelectedTags([])
		setFrom(null)
		setTo(null)
		typeof window !== 'undefined' && window.localStorage.clear()
	}

	// date range input component
	const dateRange = () => (
		<section className="filter-item">
			<h2 className="title">
				{`${'last funding round'}`} <div className="title-line"></div>
			</h2>
			<div className="calendars">
				<CalendarComponent
					placeholder={'Start date'}
					disabled={to && to}
					name={'from'}
					value={from}
					onChange={setDateFrom}
				/>{' '}
				<span className="separator">to</span>{' '}
				<CalendarComponent
					placeholder={'End date'}
					disabled={from && from}
					minDate={from && from}
					name={'to'}
					value={to}
					onChange={setDateTo}
				/>
			</div>
		</section>
	)

	// search input component
	const searchBox = () => (
		<div className="filter-item">
			<h2 className="title">
				{`${'industries & tags'}`} <div className="title-line"></div>
			</h2>
			<input
				className="search-input"
				type="search"
				name="keyword"
				value={keyword}
				onChange={(e) => setKeyword(e.target.value)}
				placeholder="Type to search..."
			></input>
			{/** Selected tags container */}
			<section className="selected-tags">
				{selectedTags.map((tag) => (
					<span onClick={() => removeFromTags(tag)} key={tag.value} className="selected-tag">
						{tag.label}
						<i className="fas fa-times ml-half"></i>
					</span>
				))}
			</section>
			{/** Pop up suggested tag list */}
			<section className="tag-list">
				{tags
					.filter((tag) => tag.value.toLowerCase().includes(keyword.toLowerCase()) && keyword !== '')
					.map((tag) => (
						<>
							{!checkIfSelectedTag(tag) ? (
								<span onClick={() => addToTags(tag)} key={tag.label} className="tag">
									{tag.label}
								</span>
							) : (
								<></>
							)}
						</>
					))}
			</section>
		</div>
	)

	// checkboxes component
	const checkBoxes = () => (
		<section className="filter-item">
			<h2 className="title">
				industries <div className="title-line"></div>
			</h2>
			<ul className="check-boxes">
				{industries.map((industry) => (
					<li key={industry.label} className="checkbox-item">
						<label class="checkbox-container">
							<input
								onChange={() => addToIndustries(industry)}
								checked={checkIfSelectedIndustry(industry)}
								type="checkbox"
							></input>
							<span class="checkmark"></span>
						</label>
						<label className="checkbox-label">{industry.label}</label>
					</li>
				))}
			</ul>
		</section>
	)

	// bottom options
	const options = () => (
		<div className="buttons">
			<button onClick={() => applyHandler()} className="btn btn-primary">
				apply
			</button>
			<button onClick={() => clearHandler()} className="btn btn-reverse">
				clear all
			</button>
			<button onClick={() => setShowSearch(false)} className="btn btn-white">
				cancel
			</button>
		</div>
	)

	return (
		<section className="filter">
			{dateRange()}
			{searchBox()} {checkBoxes()}
			{options()}
		</section>
	)
}

export default Filter
