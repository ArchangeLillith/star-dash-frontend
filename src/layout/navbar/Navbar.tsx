import React from "react";
import AuthenticatedNavLinks from "./AuthenticatedNavLinks";
import PublicNavLinks from "./PublicNavLinks";
import { Link } from "react-router-dom";

const NavBar: React.FC = () => {
	// const [navLogo, setNavLogo] = React.useState({
	// 	src: `../img/Logo/logo.png`,
	// });
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const [selectionMode, setSelectionMode] = React.useState(false);
	const user = {
		loggedIn: true,
		registeredEvents: [
			{ event: "Shooting Star", leadManager: "Ki" },
			{ event: "This event", leadManager: "Ki" },
		],
		event: "Shooting Star",
		leadManager: true,
		siteAdmin: false,
	};

	return (
		<nav className="navbar">
			<div className="navbar-logo" onClick={handleRefresh}>
				<Link to="/">
					<img src="/images/Logo/logo.png" alt="back arrow" id="nav-logo" />
				</Link>
			</div>
			<div className="navbar-link-wrapper">
				<ul className="navbar-ul">
					{user.loggedIn && (
						<AuthenticatedNavLinks
							user={user}
							selectionMode={selectionMode}
							confirmEventChange={confirmEventChange}
						/>
					)}
					{!user.loggedIn && <PublicNavLinks />}
				</ul>
			</div>
		</nav>
	);
};

export default NavBar;

/**
 * Popup to confirm an event change
 * *Needs no params
 * Shows a pop up to ensure the user wants to change events, as it will change their context and potentially erase anything the user hasn't saved. If yes is chosen, another function is called to return the context for the new event chosen. If no is chosen, nothing happens.
 */
function confirmEventChange() {
	alert("Change eent?");
	// confirmAlert({
	// 	message:
	// 		"Are you sure you'd like to change the event? This will reset your schedule if you're working on it! Please save before doing this if you don't want to loose your hard work",
	// 	buttons: [
	// 		{
	// 			label: "Yes",
	// 			onClick: () => eventChange(),
	// 		},
	// 		{
	// 			label: "No",
	// 		},
	// 	],
	// });
}

// /**
//  * Popup to confirm reload of page
//  * *Needs no params
//  * Shows a pop up to ensure the user wants to refresh the page and go back to the home menu, as it will change their context and potentially erase anything the user hasn't saved. If yes is chosen, the window reloads. If no is chosen, nothing happens.
//  */
function handleRefresh() {
	console.log(`Refresh`);
	// confirmAlert({
	// 	message:
	// 		"Go back to home page? This will reset anything you haven't saved and also log you out!",
	// 	buttons: [
	// 		{
	// 			label: "Yes",
	// 			onClick: () => window.location.reload(),
	// 		},
	// 		{
	// 			label: "No",
	// 		},
	// 	],
	// });
}

// /**
//  * Changes the state to event change state
//  * *Needs no params
//  * Changes the local state to show the dropdown list of registered events in user context so the user can change their current event
//  */
// function eventChange() {
// 	// setSelectionMode(true);
//   console.log(`Event change`)
// }

// /**
//  * Calls for context of a different event and sets the users context to that
//  * *Needs no params
//  * !Events CANNOT contain "," because this function will break if they do
//  * Scrapes the document to get the event and lead manager as selected by the user. The string is then split into an array at the comma, leaving the event at index 0 and the manager of the event iteration requested at index 1. Then another funtion is called to return the context for that event and then that data is set to the local context of the current user. Exits the selection mode after context is set.
//  * @returns Full event context
//  */
// async function handleEventChange() {
// const eventAndManager = document
// 	.getElementById("event-select-choice")
// 	.value.split(/\s*,\s*/);
// let managerContext = await getContext(
// 	eventAndManager[0],
// 	eventAndManager[1]
// );
// const sortedAssociatedUsers = managerContext[0].associatedUsers.sort();
// setUser({
// 	...user,
// 	event: managerContext[0].event,
// 	scheduleArray: managerContext[0].schedule,
// 	runner: managerContext[0].runner,
// 	leadManager: managerContext[0].leadManager,
// 	associatedUsers: sortedAssociatedUsers,
// 	activeTeamDropdown: managerContext[0].activeTeamDropdown,
// 	notesPerHour: managerContext[0].notesPerHour,
// 	teamsPerHour: managerContext[0].teamsPerHour,
// });
// setSelectionMode(false);
// }

// 	/**
// 	 * Returns the context from the API for a specific event iteration
// 	 * @params Event - the event that is being asked for
// 	 * @params leadManager - The lead manager pointing to the specific event iteraiton requested
// 	 * Calls the API to return the event iteration based off of the passed in parameters.
// 	 * @returns Full event context or an error
// 	 */
// async function getContext(event: string, leadManager: string) {
// let queryObject = { manager: user.user, event, leadManager: leadManager };
// const url = `http://localhost:8080/return/context`;
// const res = await fetch(url, {
// 	method: "POST",
// 	mode: "cors",
// 	headers: {
// 		"Content-Type": "application/json",
// 	},
// 	body: JSON.stringify(queryObject),
// });
// const data = await res.json();
// if (data.error?.data) {
// 	let errorMessage = data.error?.data;
// 	confirmAlert({
// 		message: errorMessage,
// 		buttons: [
// 			{
// 				label: "Okay",
// 			},
// 		],
// 	});
// } else {
// 	return data;
// }
// }
