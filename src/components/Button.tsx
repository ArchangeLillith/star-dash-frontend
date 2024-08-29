interface ButtonProps {
	onClick: () => void;
	title: string;
	type?: "button" | "submit" | "reset";
}

const Button = ({ onClick, title, type }: ButtonProps) => {
	return (
		<button type={type} onClick={onClick}>
			{title}
		</button>
	);
};

export default Button;
