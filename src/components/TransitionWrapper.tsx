import React, { useState, useEffect } from "react";

interface TransitionWrapperProps {
	oldBackgroundImage: string; // URL for the old background
	newBackgroundImage: string; // URL for the new background
	children: React.ReactNode; // Page content
}

const TransitionWrapper: React.FC<TransitionWrapperProps> = ({
	oldBackgroundImage,
	newBackgroundImage,
	children,
}) => {
	const [showContent, setShowContent] = useState(false);

	useEffect(() => {
		const timeout = setTimeout(() => setShowContent(true), 500); // Matches animation duration
		return () => clearTimeout(timeout);
	}, []);

	return (
		<div
			className="transition-wrapper"
			style={{ backgroundImage: `url(${oldBackgroundImage})` }}
		>
			{/* New sliding background */}
			<div
				className="background-slide"
				style={{ backgroundImage: `url(${newBackgroundImage})` }}
			></div>

			{/* Page content */}
			{showContent && <div className="page-content">{children}</div>}
		</div>
	);
};

export default TransitionWrapper;
