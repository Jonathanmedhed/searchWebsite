import React from 'react'
import { useState } from 'react'

const Filter = ({
	setShowSearch,
	selectedTags,
	setSelectedTags,
	selectedIndustries,
	setSelectedIndustries,
	setShowResults,
}) => {
	const industries = [
		{ label: 'Agriculture', value: 'agriculture' },
		{ label: 'Building', value: 'building' },
		{ label: 'Constructions', value: 'constructions' },
		{ label: 'Energy', value: 'energy' },
		{ label: 'Financial services', value: 'financial services' },
		{ label: 'Food & beverage', value: 'food & beverage' },
		{ label: 'Forestry', value: 'forestry' },
		{ label: 'Healthcare', value: 'healthcare' },
		{ label: 'Logistics', value: 'logistics' },
		{ label: 'Manufacturing', value: 'manufacturing' },
		{ label: 'Mining', value: 'mining' },
		{ label: 'Public administration', value: 'public administration' },
		{ label: 'Transportation', value: 'transportation' },
		{ label: 'Utilities (electricity, water, waste)', value: 'utilities (electricity, water, waste)' },
	]

	const tags = [
		{ label: '3d printing', value: '3d printing' },
		{ label: 'advanced metering', value: 'advanced metering' },
		{ label: 'air vehicles', value: 'air vehicles' },
		{ label: 'air-to-water', value: 'air-to-water' },
		{ label: 'algae', value: 'algae' },
		{ label: 'packaging', value: 'packaging' },
		{ label: 'alternative proteins', value: 'alternative proteins' },
		{ label: 'animal farming', value: 'animal farming' },
		{ label: 'animal welfareg', value: 'animal welfareg' },
		{ label: 'apiculture', value: 'apiculture' },
		{ label: 'apps', value: 'apps' },
		{ label: 'aquaculture', value: 'aquaculture' },
		{ label: 'artificial intelligence (AI)', value: 'artificial intelligence (AI)' },
		{ label: 'automotive', value: 'automotive' },
		{ label: 'autonomous vehicles', value: 'autonomous vehicles' },
		{ label: 'aviation', value: 'aviation' },
		{ label: 'banking', value: 'banking' },
	]

	const [keyword, setKeyword] = useState('')

	const checkIfSelectedTag = (tag) => {
		return selectedTags.find((x) => x.value === tag.value)
	}

	const checkIfSelectedIndustry = (industry) => {
		if (selectedIndustries.find((x) => x.value === industry.value)) {
			return true
		} else {
			return false
		}
	}

	const addToTags = (tag) => {
		if (!checkIfSelectedTag(tag)) {
			setSelectedTags([...selectedTags, tag])
		}
	}

	const addToIndustries = (industry) => {
		if (checkIfSelectedIndustry(industry) === false) {
			setSelectedIndustries([...selectedIndustries, industry])
		} else {
			setSelectedIndustries(selectedIndustries.filter((x) => x.value !== industry.value))
		}
	}

	const removeFromTags = (tag) => {
		setSelectedTags(selectedTags.filter((x) => x.value !== tag.value))
	}

	const applyHandler = () => {
		setShowSearch(false)
		setShowResults(true)
	}

	const clearHandler = () => {
		setSelectedIndustries([])
		setSelectedTags([])
	}
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
			<section className="selected-tags">
				{selectedTags.map((tag) => (
					<span onClick={() => removeFromTags(tag)} key={tag.value} className="selected-tag">
						{tag.label}
						<i className="fas fa-times ml-half"></i>
					</span>
				))}
			</section>
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

	const checkBoxes = () => (
		<div className="filter-item">
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
		</div>
	)
	return (
		<section className="filter">
			{searchBox()} {checkBoxes()}
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
		</section>
	)
}

export default Filter
