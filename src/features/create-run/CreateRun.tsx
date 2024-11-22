import { useState } from "react";
import Select from "../../components/Select";
import Input from "../../components/Input";
import TransitionWrapper from "../../components/TransitionWrapper";
import { inputConfigs } from "./utils";

const CreateRun = () => {
	const [state, setState] = useState({
		selectedEvent: "",
		runnerName: "",
		runnerIsv1: 0,
		runnerIsv2: 0,
		runnerBp: 0,
		runPassword: "",
		runPasswordConfirm: "",
	});
	const events = ["Event 1", "Event 2", "Event 3"];

	const submitRun = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		alert(`Button clicked`);
	};

	return (
		<TransitionWrapper
			newBackgroundImage="/card-backgrounds/card_after_training\ \(20\).webp"
			oldBackgroundImage="/card-backgrounds/card_after_training\ \(14\).webp"
		>
			<div className="create-event-page">
				<form className="create-event-form">
					<div className="form-title">Create Event</div>
					<Select
						value={state.selectedEvent}
						state={state}
						options={events}
						stateKey="selectedEvent"
						setState={setState}
						defaultOption="Choose your event..."
					/>

					<div className="manager-container">
						<label className="banner" htmlFor="runner-name">
							Runner Name
						</label>
						<Input
							value={state.runnerName}
							className="input"
							stateKey="runnerName"
							setState={setState}
							id="runner-name"
							placeholder="Will default to 'Runner'"
						/>
						<div className="banner">Runner Stats</div>
						<div className="input-container">
							{inputConfigs.map(({ id, stateKey, placeholder }) => (
								<Input
									key={id}
									value={state[stateKey as keyof typeof state]}
									type="number"
									className="input"
									stateKey={stateKey as keyof typeof state}
									setState={setState}
									id={id}
									placeholder={placeholder}
								/>
							))}
						</div>
					</div>

					<div className="password-container">
						<div className="password-group">
							<label className="banner" htmlFor="run-password">
								Run Password
							</label>
							<Input
								value={state.runPassword}
								type="password"
								className="input"
								stateKey="runPassword"
								setState={setState}
								id="run-password"
								placeholder="This is for managers to join your run!"
							/>
						</div>
						<div className="password-group no-desktop">
							<label className="banner" htmlFor="confirm-password">
								Confirm Password
							</label>
							<Input
								value={state.runPasswordConfirm}
								type="password"
								className="input"
								stateKey="runPasswordConfirm"
								setState={setState}
								id="confirm-password"
								placeholder="Confirm Password"
							/>
						</div>
					</div>

					<button className="submit-btn" onClick={submitRun}>
						Submit!
					</button>
				</form>
				<div className="create-run-title">Create a new run</div>
			</div>
		</TransitionWrapper>
	);
};

export default CreateRun;
