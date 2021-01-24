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
			{showResults ? <Results industries={selectedIndustries} tags={selectedTags} from={from} to={to} /> : <></>}
		</>
	)
}

export default index
