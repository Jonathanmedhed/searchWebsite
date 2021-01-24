import React from 'react'

const Results = ({ industries, tags }) => {
	const haveIndustries = industries && industries.length > 0
	const haveTags = tags && tags.length > 0
	return (
		<>
			{haveIndustries || haveTags ? (
				<section className="results">
					<div className="content">
						<h1>Selected Search Parameters</h1>
						<div className="title-underline"></div>
						{haveIndustries ? (
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
						{haveTags ? (
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
					</div>
				</section>
			) : (
				<></>
			)}
		</>
	)
}

export default Results
