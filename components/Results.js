import React from 'react'
import moment from 'moment'

const Results = ({ industries, tags, from, to }) => {
	const hasIndustries = industries && industries.length > 0
	const hasTags = tags && tags.length > 0
	const hasDates = from && to
	return (
		<>
			{hasIndustries || hasTags || hasDates ? (
				<section className="results">
					<div className="content">
						<h1>Selected Search Parameters</h1>
						<div className="title-underline"></div>
						{hasIndustries ? (
							<ul className="industries">
								<h2>Industries</h2>
								<div className="list">
									{industries.map((industry) => (
										<li className="industry">{industry.label}</li>
									))}
								</div>
								<div className="sub-title-underline"></div>
							</ul>
						) : (
							<></>
						)}
						{hasTags ? (
							<ul className="tags">
								<h2>Tags</h2>
								<div className="list">
									{tags.map((tag) => (
										<li className="tag">{tag.label}</li>
									))}
								</div>
								<div className="sub-title-underline"></div>
							</ul>
						) : (
							<></>
						)}
						{hasDates ? (
							<ul className="dates">
								<h2>Last Funding Range</h2>
								<div className="content">
									<span className="date">{moment(from).format('DD-MM-YYYY')}</span>
									<span className="center">to</span>
									<span className="date">{moment(to).format('DD-MM-YYYY')}</span>
								</div>
								<div className="sub-title-underline"></div>
							</ul>
						) : (
							<></>
						)}
					</div>
				</section>
			) : (
				<></>
			)}
		</>
	)
}

export default Results
