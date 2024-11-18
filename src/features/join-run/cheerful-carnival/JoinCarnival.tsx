const JoinCarnival = () => {
	return (
		<form className="filler-registration-form">
			<div className="form-title">Register as a filler ✨</div>
			<div className="name-content">
				<div className="manager-container">
					<div className="manager-banner">Manager Name</div>
					<input className="manager-input" type="text"></input>
				</div>
				<div className="filler-container">
					<div className="filler-banner">Discord Name</div>
					{/* //Refactor add a tooltip here as to why we need this */}
					<input className="filler-input" type="text"></input>
				</div>
			</div>
			<div className="team-content">
				<div className="team-container">
					<div className="team-banner">Fill Team</div>
					<input className="team-number-input"></input>
					<input className="team-number-input"></input>
					<input className="team-number-input"></input>
				</div>
				<div className="team-container">
					<div className="team-banner">Heal Team</div>
					<input className="team-number-input"></input>
					<input className="team-number-input"></input>
					<input className="team-number-input"></input>
				</div>
				<div className="team-container">
					<div className="team-banner">SB1 Team</div>
					<input className="team-number-input"></input>
					<input className="team-number-input"></input>
					<input className="team-number-input"></input>
				</div>
				<div className="team-container">
					<div className="team-banner">SB2 Team</div>
					<input className="team-number-input"></input>
					<input className="team-number-input"></input>
					<input className="team-number-input"></input>
				</div>
			</div>
			<button className="submit-btn">StartDash!</button>
		</form>
	);
};

export default JoinCarnival;
