import React from 'react'

const Header = () => {
	return (
		<navbar className="header">
			<div className="title">
				<img src={'../static/images/logo-final.png'}></img>
				<h1>Eutopia</h1>
			</div>
			<ul className="options"></ul>
		</navbar>
	)
}

export default Header
