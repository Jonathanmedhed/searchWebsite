import React, { useState } from 'react'
import Results from '../components/Results'
import Search from '../components/Search'
import Header from '../components/Header'
import Jumbo from '../components/Jumbo'

const index = () => {
	const [showSearch, setShowSearch] = useState(false)
	const [showResults, setShowResults] = useState(false)
	const [selectedTags, setSelectedTags] = useState([])
	const [selectedIndustries, setSelectedIndustries] = useState([])

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
			/>
			{showResults ? <Results industries={selectedIndustries} tags={selectedTags} /> : <></>}
		</>
	)
}

export default index
