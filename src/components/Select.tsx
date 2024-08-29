interface SelectProps {
	options: string[];
	setValue: (value: string) => void;
}

const Select = ({ options, setValue }: SelectProps) => {
	return (
		<select onChange={(e) => setValue(e.target.value)}>
			{options.map((option, index) => (
				<option key={option + index} value={option}>
					{option}
				</option>
			))}
		</select>
	);
};

export default Select;
