import { Dispatch, SetStateAction } from "react";
import { handleStateChange } from "../features/create-run/utils";

interface InputProps<T> {
	id: string;
	stateKey: keyof T;
	setState: Dispatch<SetStateAction<T>>;
	className: string;
	value: string | number;
	type?: string;
	placeholder?: string;
	disabled?: boolean;
	"aria-label"?: string;
}

const Input = <T,>({
	type = "text",
	setState,
	stateKey,
	className,
	id,
	placeholder = "",
	disabled = false,
	"aria-label": ariaLabel,
}: InputProps<T>) => {
	return (
		<input
			id={id}
			type={type}
			placeholder={placeholder}
			onChange={(e) => handleStateChange(stateKey, setState)(e.target.value)}
			className={className}
			disabled={disabled}
			aria-label={ariaLabel}
		/>
	);
};

export default Input;
