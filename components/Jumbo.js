import React from 'react'

const Jumbo = ({ setShowSearch, showSearch }) => {
	return (
		<section className="jumbo">
			<div className="content">
				<i className="fas fa-leaf"></i>
				<h1>Green Tech StartUps in Europe</h1>
				<button onClick={() => setShowSearch(!showSearch)} className="btn btn-primary">
					{showSearch ? 'Hide Filter' : 'Advanced Filter'}
				</button>
			</div>
		</section>
	)
}

export default Jumbo
