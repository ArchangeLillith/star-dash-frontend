//Refactor is this file gets much longer, we call pull apart the regexHandler object
export enum ERegexHandler {
  CreateRunPass = 'createRunPass',
  UserPass = 'userPass',
}

export const regexHandler = {
  [ERegexHandler.CreateRunPass]: {
    minLength: 12,
    maxLength: 20,
    uppercase: /[A-Z]/,
    number: /\d/,
    specChar: /[\W_]/,
    spaces: false,
  },
  [ERegexHandler.UserPass]: {
    minLength: 6,
    maxLength: 15,
    uppercase: /[A-Z]/,
    number: /\d/,
    specChar: false,
    spaces: false,
  },
};

export const callRegex = (
  password: string,
  regexType: keyof typeof regexHandler
) => {
  const rules = regexHandler[regexType];
  // Check regex conditions individually
  if (
    rules.minLength &&
    rules.maxLength &&
    (password.length < rules.minLength || password.length > rules.maxLength)
  ) {
    return `ERROR: Password must be between ${rules.minLength} and ${rules.maxLength} characters long.`;
  }
  for (const [rule, regex] of Object.entries(rules)) {
    if (typeof regex === 'object' && !regex.test(password)) {
      return `ERROR: Password must include at least one ${rule.replace('uppercase', 'uppercase letter')}.`;
    }
    if (rule === 'spaces' && !rules.spaces && /\s/.test(password)) {
      return 'ERROR: Password must not contain spaces.';
    }
  }
  // If all checks pass
  return;
};
