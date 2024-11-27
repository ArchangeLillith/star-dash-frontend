//REFACTOR this is going to be useful like literally everywhere, we should move this at some point
export const handleStateChange =
  <T>(key: keyof T, setState: React.Dispatch<React.SetStateAction<T>>) =>
  (value: unknown) => {
    setState((prev) => ({
      ...prev,
      [key]: value,
    }));
  };
export const handleStateChangeSecondLayer =
  <T>(
    key: keyof T,
    parentStateKey: keyof T,
    setState: React.Dispatch<React.SetStateAction<T>>
  ) =>
  (value: unknown) => {
    setState((prev) => {
      // Validate that the team exists in the state
      if (!prev[parentStateKey]) {
        console.error(
          `ERORORORORORR: Team '${JSON.stringify(
            parentStateKey
          )}' does not exist in the state.`
        );
        return prev; // Return the unchanged state
      }

      // Proceed with the update if the team exists
      return {
        ...prev,
        [parentStateKey]: {
          ...prev[parentStateKey], // Safely copy the team's existing properties
          [key]: value, // Update the specified key within the team
        },
      };
    });
  };

export const runPasswordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[\W_])[^\s]{12}$/;
