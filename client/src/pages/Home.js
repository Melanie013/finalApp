import React, { useState, useEffect } from 'react'
import '../styles/Quotes.css'

export default function Home() {

	const [quotes, setQuotes] = useState ('')

	const getQuotes = () => {
		fetch("https://type.fit/api/quotes")
		.then(res => res.json())
		.then(data => {
			let randomNumber = Math.floor(Math.random() * data.length)
			setQuotes (data[randomNumber])
		})

	};

	useEffect (() => {
		getQuotes();

	}, []);


	return (

		<div className='quotes'>
		<div className="profileheader">
			<h1>PureFocus</h1>

			<h2>Lack of motivation?</h2>
			<p>Boost yourself with some inspiring quotes ✨</p>
		</div>

			<div className='quote'>
				<p>{quotes.text}</p>
				<p>Author: {quotes.author}</p>
			<div className='btn-container'>
				<button onClick={getQuotes} className='btn'>Get quote</button>
			</div>
			</div>


	
		</div>
	)
}