import React from 'react'

const Footer = () => {
	return (
		<footer>
			<div className="logo-section">
				<div className="logo">
					<img src={'../static/images/logo-final.png'} alt="logo"></img>
				</div>
				<span>Eutopia</span>
			</div>
			<div className="bottom">
				Website created by{' '}
				<a target="_blank" rel="noopener noreferrer" href="https://portfolio-jonathan-v2.herokuapp.com/">
					Jonathan Medina <i className="fas fa-external-link-alt"></i>
				</a>
			</div>
		</footer>
	)
}

export default Footer
