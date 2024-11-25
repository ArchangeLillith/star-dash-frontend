import React, { createContext, useState } from 'react';
import { backgroundMap } from './utils';

export type SettingsState = {
  theme: string;
  favoriteCharacters: string[];
  currentPageBackground: string;
};

/**
 * Typing for the settings state
 */
interface SettingsContextType {
  settingsState: SettingsState;
  setSettingsState: React.Dispatch<React.SetStateAction<SettingsState>>;
}

/**
 * Settings context to allow other components to pull from it no matter how nested
 */
export const SettingsContext = createContext<SettingsContextType>({
  settingsState: {
    theme: 'default',
    favoriteCharacters: ['miku'],
    currentPageBackground: backgroundMap['home'],
  },
  setSettingsState: () => {},
  // loginToAuthState: () => {},
  // logoutFromAuthState: () => {},
  // updateUserData: () => {},
});

interface SettingProviderProps {
  children: React.ReactNode;
}

const SettingsProvider: React.FC<SettingProviderProps> = ({ children }) => {
  const [settingsState, setSettingsState] = useState<SettingsState>({
    theme: 'default',
    favoriteCharacters: [],
    currentPageBackground: '',
  });

  // /**
  //  * The function that handles the auth state to reflect a log in
  //  * @param token - a JWT
  //  */
  // const loginToAuthState = async (token: string) => {
  // 	try {
  // 		const userData = await authService.getUserFromToken(token);
  // 		setAuthState((prev) => {
  // 			if (prev.authenticated && prev.authorData?.id === userData.id) {
  // 				return prev;
  // 			}
  // 			return { authenticated: true, authorData: userData };
  // 		});
  // 	} catch (error) {
  // 		setAuthState((prev) => {
  // 			if (!prev.authenticated) return prev; // Avoid re-render if the state is already false
  // 			return { authenticated: false, authorData: null };
  // 		});
  // 		alert(error);
  // 	}
  // };

  // /**
  //  * The function that resets a user in auth state when they log out
  //  */
  // const logoutFromAuthState = () => {
  // 	setAuthState({ authenticated: false, authorData: null });
  // };

  // /**
  //  * Updates the userdata in state for the components to use
  //  * @param userData - The user data to be set in state
  //  */
  // const updateUserData = (userData: Partial<AuthState>) => {
  // 	setAuthState((prevState) => ({
  // 		...prevState,
  // 		...userData,
  // 	}));
  // };

  //
  // /**
  //  * Ensures that there's a valid token and sets the user to state if the token checks out
  //  */
  // useEffect(() => {
  // 	const checkUser = async () => {
  // 		const token = storage.getToken();

  // 		// Check if no token exists and the user is already logged out
  // 		if (!token) {
  // 			if (!authState.authenticated) {
  // 				setAuthState({ authenticated: false, authorData: null });
  // 			}
  // 			setLoading(false); // Only set authLoading to false here
  // 			return;
  // 		}

  // 		try {
  // 			const userData = await authService.getUserFromToken(token);
  // 			if (userData) {
  // 				console.log("User data retrieved:", userData);
  // 				setAuthState((prev) => {
  // 					// Only set state if the values have changed
  // 					if (
  // 						prev.authenticated === true &&
  // 						prev.authorData?.id === userData.id &&
  // 						JSON.stringify(prev.authorData) === JSON.stringify(userData)
  // 					) {
  // 						return prev; // Avoid unnecessary re-renders if no change
  // 					}
  // 					return {
  // 						authenticated: true,
  // 						authorData: {
  // 							id: userData.id,
  // 							username: userData.username,
  // 						},
  // 					};
  // 				});
  // 			} else {
  // 				console.log("User data is null or undefined, setting auth to false.");
  // 				setAuthState({ authenticated: false, authorData: null });
  // 			}
  // 		} catch (error) {
  // 			console.error("Error fetching user data:", error);
  // 			setAuthState({ authenticated: false, authorData: null });
  // 		} finally {
  // 			setLoading(false); // Ensure loading state is only set once
  // 		}
  // 	};
  // 	checkUser();
  // }, [authState.authenticated]);

  return (
    <SettingsContext.Provider
      value={{
        settingsState,
        setSettingsState,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
};

export default SettingsProvider;

// const handleFavPatternChange = async (
// 	eventButton: React.MouseEvent<HTMLButtonElement>
// ) => {
// 	const { authorData } = authState;
// 	if (!authorData || !authorData.id) return;

// 	const pattern_id = eventButton.currentTarget.id;
// 	const isFavorited = authorData.patternsFavorited.some(
// 		fav_id => fav_id === pattern_id
// 	);

// 	const result = isFavorited
// 		? await favoritesService.removeFavorite(authorData.id, pattern_id)
// 		: await favoritesService.addFavorite(authorData.id, pattern_id);

// 	if (result.affectedRows > 0) {
// 		const newFavs = isFavorited
// 			? authorData.patternsFavorited.filter(fav_id => fav_id !== pattern_id)
// 			: [...authorData.patternsFavorited, pattern_id];

// 		setAuthState(prev => {
// 			if (
// 				JSON.stringify(prev.authorData?.patternsFavorited) ===
// 				JSON.stringify(newFavs)
// 			) {
// 				return prev; // Avoid setting state if the favorite list hasn't changed
// 			}
// 			return {
// 				...prev,
// 				authorData: {
// 					...prev.authorData,
// 					patternsFavorited: newFavs,
// 				},
// 			};
// 		});
// 	}
// };
