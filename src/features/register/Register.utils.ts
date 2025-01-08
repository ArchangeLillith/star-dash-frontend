type FormFields = {
  username: string;
  password: string;
  passwordConfirm: string;
};

export function isValidUsername(username: string) {
  return username.match(/^(?!.*\.\.)(?!.*\.$)[a-zA-Z0-9_.]{2,32}$/);
}

export const validateFields = ({
  username,
  password,
  passwordConfirm,
}: FormFields) => {
  const errors: string[] = [];
  if (!isValidUsername(username)) errors.push('invalid username');
  if (password !== passwordConfirm) errors.push("passwords don't match");
  if (!password || !username || !username)
    errors.push('all fields are required');
  return errors;
};
