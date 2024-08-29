interface InputProps {
	setInput: (value: string) => void;
	type: string;
	placeholder?: string;
}

const Input = ({ type, setInput, placeholder }: InputProps) => {
	return (
		<input
			type={type}
			placeholder={placeholder}
			onChange={(e) => setInput(e.target.value)}
		/>
	);
};

export default Input;
