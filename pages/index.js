import React, { useState } from 'react'
import Results from '../components/Results'
import Search from '../components/Search'
import Header from '../components/Header'
import Jumbo from '../components/Jumbo'
import Footer from '../components/Footer'

const index = () => {
	let windowLoaded = typeof window !== 'undefined'
	let localTags = windowLoaded && localStorage.getItem('tags') ? JSON.parse(localStorage.getItem('tags')) : []
	let localIndustries =
		windowLoaded && JSON.parse(localStorage.getItem('industries'))
			? JSON.parse(localStorage.getItem('industries'))
			: []

	const [showSearch, setShowSearch] = useState(false)
	const [showResults, setShowResults] = useState(false)
	const [selectedTags, setSelectedTags] = useState(localTags)
	const [selectedIndustries, setSelectedIndustries] = useState(localIndustries)
	const [from, setFrom] = useState(null)
	const [to, setTo] = useState(null)

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
