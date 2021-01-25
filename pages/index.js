import React, { useState } from 'react'
import Results from '../components/Results'
import Search from '../components/Search'
import Header from '../components/Header'
import Jumbo from '../components/Jumbo'
import Footer from '../components/Footer'

const index = () => {
	// check browser window is loaded
	let windowLoaded = typeof window !== 'undefined'
	// get variables from local storage
	let localTags = windowLoaded && localStorage.getItem('tags') ? JSON.parse(localStorage.getItem('tags')) : []
	let localIndustries =
		windowLoaded && JSON.parse(localStorage.getItem('industries'))
			? JSON.parse(localStorage.getItem('industries'))
			: []
	let localDateFrom =
		windowLoaded && localStorage.getItem('dateFrom') ? new Date(JSON.parse(localStorage.getItem('dateFrom'))) : null
	let localDateTo =
		windowLoaded && localStorage.getItem('dateTo') ? new Date(JSON.parse(localStorage.getItem('dateTo'))) : null

	// states
	// asign local variables to state if there are any
	const [showSearch, setShowSearch] = useState(false)
	const [showResults, setShowResults] = useState(false)
	const [selectedTags, setSelectedTags] = useState(localTags)
	const [selectedIndustries, setSelectedIndustries] = useState(localIndustries)
	const [from, setFrom] = useState(localDateFrom)
	const [to, setTo] = useState(localDateTo)

	return (
		<>
			<Header />
			<Jumbo setShowSearch={setShowSearch} showSearch={showSearch} />
			<Search
				showSearch={showSearch}
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
			<Results industries={selectedIndustries} tags={selectedTags} from={from} to={to} />
			<Footer />
		</>
	)
}

export default index
