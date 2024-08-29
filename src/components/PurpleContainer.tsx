interface PurpleContainerProps {
	children: React.ReactNode;
}

const PurpleContainer = ({ children }: PurpleContainerProps) => {
	return <div>{children}</div>;
};

export default PurpleContainer;
