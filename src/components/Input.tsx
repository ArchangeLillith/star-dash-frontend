import { Dispatch, SetStateAction } from "react";
import {
	handleStateChange,
	handleStateChangeSecondLayer,
} from "../features/create-run/utils";
import { TEAM_NUMBER_INPUT_SETTINGS, TEXT_INPUT_SETTINGS } from "../utils/variables";

interface InputProps<T> {
	id: string;
	className: string;
	placeholder?: string;
	type?: string;
	value: string | number | undefined;
	valueRange?: typeof TEAM_NUMBER_INPUT_SETTINGS;
	maxLength?: number;
	parentStateKey?: keyof T;
	stateKey: keyof T;
	setState: Dispatch<SetStateAction<T>>;
	disabled?: boolean;
	"aria-label"?: string;
}

const Input = <T,>({
	id,
	className,
	placeholder = "",
	type = "text",
	value,
	valueRange,
	parentStateKey: team,
	stateKey,
	setState,
	disabled = false,
	"aria-label": ariaLabel,
}: InputProps<T>) => {
	if (!team)
		return (
			<input
				id={id}
				type={type}
				value={value}
				min={valueRange?.MIN_LENGTH}
				max={valueRange?.MAX_LENGTH}
				maxLength={TEXT_INPUT_SETTINGS.MAX_LENGTH}
				placeholder={placeholder}
				onChange={(e) => {
					const parsedValue =
						type === "number" ? Number(e.target.value) : e.target.value;
					handleStateChange(stateKey, setState)(parsedValue);
				}}
				className={className}
				disabled={disabled}
				aria-label={ariaLabel || id}
			/>
		);
	return (
		<input
			id={id}
			type={type}
			value={value}
			min={valueRange?.MIN_LENGTH}
			max={valueRange?.MAX_LENGTH}
			maxLength={TEXT_INPUT_SETTINGS.MAX_LENGTH}
			placeholder={placeholder}
			onChange={(e) => {
				const parsedValue =
					type === "number" ? Number(e.target.value) : e.target.value;
				handleStateChangeSecondLayer(stateKey, team, setState)(parsedValue);
			}}
			className={className}
			disabled={disabled}
			aria-label={ariaLabel || id}
		/>
	);
};

export default Input;
