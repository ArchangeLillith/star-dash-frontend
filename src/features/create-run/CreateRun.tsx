import { useContext, useEffect, useState } from "react";
import Select from "../../components/Select";
import Input from "../../components/Input";
import TransitionWrapper from "../../components/TransitionWrapper";
import { RunnerInputConfigs } from "./utils";
import { SettingsContext } from "../../context/settings/SettingsProvider";
import { backgroundMap } from "../../context/settings/utils";
import {
	TEAM_NUMBER_INPUT_SETTINGS,
	TEXT_INPUT_SETTINGS,
} from "../../utils/variables";
import React from "react";

const CreateRun = () => {
	const [formStateCreateRun, setFormStateCreateRun] = useState({
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

	const { setSettingsState } = useContext(SettingsContext);

	useEffect(() => {
		const timeout = setTimeout(() => {
			setSettingsState((prev) => ({
				...prev,
				currentPageBackground: backgroundMap["createRun"],
			}));
		}, 500);
		return () => clearTimeout(timeout);
	}, []);

	return (
		<TransitionWrapper newBackgroundImage={backgroundMap.createRun}>
			<div className="create-event-page">
				<form className="create-event-form">
					<div className="form-title">Create Event</div>
					<Select
						value={formStateCreateRun.selectedEvent}
						state={formStateCreateRun}
						options={events}
						stateKey="selectedEvent"
						setState={setFormStateCreateRun}
						defaultOption="Choose your event..."
					/>

					<div className="manager-container">
						<label className="banner" htmlFor="runner-name">
							Runner Name
						</label>
						<Input
							id="runner-name"
							value={formStateCreateRun.runnerName}
							maxLength={TEXT_INPUT_SETTINGS.MAX_LENGTH}
							className="input"
							stateKey="runnerName"
							setState={setFormStateCreateRun}
							placeholder="Will default to 'Runner'"
						/>
						<div className="banner">Runner Stats</div>
						<div className="input-container">
							{RunnerInputConfigs.map(({ id, stateKey, placeholder }) => (
								<Input
									id={id}
									className="input"
									key={id}
									value={
										formStateCreateRun[
											stateKey as keyof typeof formStateCreateRun
										]
									}
									valueRange={TEAM_NUMBER_INPUT_SETTINGS}
									type="number"
									stateKey={stateKey as keyof typeof formStateCreateRun}
									setState={setFormStateCreateRun}
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
								id="run-password"
								className="input"
								value={formStateCreateRun.runPassword}
								maxLength={TEXT_INPUT_SETTINGS.MAX_LENGTH}
								type="password"
								stateKey="runPassword"
								setState={setFormStateCreateRun}
								placeholder="This is for managers to join your run!"
							/>
						</div>
						<div className="password-group no-desktop">
							<label className="banner" htmlFor="confirm-password">
								Confirm Password
							</label>
							<Input
								id="confirm-password"
								className="input"
								value={formStateCreateRun.runPasswordConfirm}
								maxLength={TEXT_INPUT_SETTINGS.MAX_LENGTH}
								type="password"
								stateKey="runPasswordConfirm"
								setState={setFormStateCreateRun}
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
