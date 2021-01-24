import React from 'react'
import Filter from './Filter'

const Search = ({
	showSearch,
	setShowSearch,
	selectedTags,
	setSelectedTags,
	selectedIndustries,
	setSelectedIndustries,
	setShowResults,
}) => {
	const header = () => (
		<ul className="tabs">
			<li className="tab">overview</li>
			<li className="tab">sector</li>
			<li className="tab">climate impact</li>
			<li className="tab">financials</li>
			<li className="tab">wildcard</li>
		</ul>
	)
	return (
		<section className={showSearch ? 'search-container' : 'search-container-closed'}>
			{header()}{' '}
			<Filter
				setShowSearch={setShowSearch}
				selectedTags={selectedTags}
				setSelectedTags={setSelectedTags}
				selectedIndustries={selectedIndustries}
				setSelectedIndustries={setSelectedIndustries}
				setShowResults={setShowResults}
			/>
		</section>
	)
}

export default Search
