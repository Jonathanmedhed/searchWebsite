import React, { useState } from 'react'
import Filter from './Filter'
import { options } from '../constants/constants'

const Search = ({
	showSearch,
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
	// selected option
	const [selectedOption, setSelectedOption] = useState('sector')

	const header = () => (
		<ul className="tabs">
			{options.map((option) => (
				<li
					key={option}
					onClick={() => setSelectedOption(option)}
					className={selectedOption === option ? 'tab-highlight' : 'tab'}
				>
					{option}
				</li>
			))}
		</ul>
	)

	const headerMobile = () => (
		<ul className="tabs-mobile">
			{options.map((option) => (
				<li
					key={option}
					onClick={() => setSelectedOption(option)}
					className={selectedOption === option ? 'tab-highlight' : 'tab'}
				>
					{option}
				</li>
			))}
		</ul>
	)
	return (
		<section className={showSearch ? 'search-container' : 'search-container-closed'}>
			{headerMobile()}
			{header()}{' '}
			{selectedOption === 'sector' ? (
				<Filter
					setShowSearch={setShowSearch}
					selectedTags={selectedTags}
					setSelectedTags={setSelectedTags}
					selectedIndustries={selectedIndustries}
					setSelectedIndustries={setSelectedIndustries}
					setShowResults={setShowResults}
					from={from}
					setFrom={setFrom}
					to={to}
					setTo={setTo}
				/>
			) : (
				<section className="under-const">
					<div className="content">
						<i className="fas fa-tools"></i>
						<h2>Section Under Development</h2>
					</div>
				</section>
			)}
		</section>
	)
}

export default Search
