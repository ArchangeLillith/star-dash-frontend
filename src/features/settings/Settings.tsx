import { useContext, useEffect } from 'react';

import settingsService from '@/services/settings';

import useBackgroundUpdater from '@/hooks/useBackgroundUpdater';
import TransitionWrapper from '@/components/TransitionWrapper';
import {
  backgroundMap,
  ECharacter,
  EThemeNames,
} from '@/context/settings/settingsProvider.utils';
import { SettingsContext } from '@/context/settings/SettingsProvider';
import {
  characterIcons,
  themeArray,
  ThemeDisplayNames,
} from './Settings.utils';
import useThemeApplication from '@/hooks/useThemeApplication';
import { AuthContext } from '@/context/auth/AuthProvider';

const Settings = () => {
  /**
   * Setting the background with a hook and access to the setting context
   */
  const { settingsState, setSettingsState } = useContext(SettingsContext);
  const { authState } = useContext(AuthContext);

  useBackgroundUpdater({
    backgroundKey: 'settings',
    backgroundMap,
    setSettingsState,
  });

  useThemeApplication(settingsState.theme);

  const saveSettings = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (authState.managerData?.id === undefined) {
      throw new Error('No manager ID found');
    }
    const result = settingsService.updateSettings(
      authState.managerData?.id,
      settingsState
    );
    console.log(`Settings saved!`, result);
  };

  const resetFav = () => {
    setSettingsState({
      ...settingsState,
      favoriteCharacters: [],
    });
    console.log(`Reset hit`);
  };

  const selectAllFav = () => {
    setSettingsState({
      ...settingsState,
      favoriteCharacters: [
        'ichika',
        'saki',
        'honami',
        'shiho',
        'minori',
        'haruka',
        'airi',
        'shizuku',
        'kohane',
        'an',
        'akito',
        'toya',
        'tsukasa',
        'emu',
        'nene',
        'rui',
        'kanade',
        'mafuyu',
        'ena',
        'mizuki',
        'miku',
        'len',
        'rin',
        'luka',
        'kaito',
      ],
    });
  };

  const changeTheme = (e: React.MouseEvent<HTMLButtonElement>) => {
    const theme = e.currentTarget.getAttribute('data-theme') as EThemeNames;
    setSettingsState({
      ...settingsState,
      theme,
    });
  };

  useEffect(() => {
    console.log(
      `ChildComponent re-rendered with theme: ${settingsState.theme}`
    );
  }, [settingsState.theme]);

  const toggleCharacter = (e: React.MouseEvent<HTMLButtonElement>) => {
    const character = e.currentTarget.value as ECharacter;
    if (settingsState.favoriteCharacters.includes(character)) {
      console.log(`Removing ${character} from favorites`);
      setSettingsState({
        ...settingsState,
        favoriteCharacters: settingsState.favoriteCharacters.filter(
          (char) => char !== character
        ),
      });
    } else {
      console.log(`Adding ${character} to favorites`);
      setSettingsState({
        ...settingsState,
        favoriteCharacters: [...settingsState.favoriteCharacters, character],
      });
    }
  };

  return (
    <TransitionWrapper newBackgroundImage={backgroundMap.settings}>
      <div className="transition-base settings">
        <form className="form-container">
          <div className="form-title">Settings</div>
          <div className="input-card">
            <label htmlFor="username">Theme:</label>
            <div>
              {themeArray.map((theme: string) => (
                <div key={theme} className="tooltip-container">
                  <button
                    data-theme={theme}
                    className={
                      settingsState.theme === theme
                        ? `color-wheel ${theme} selected`
                        : `color-wheel ${theme}`
                    }
                    onClick={changeTheme}
                    type="button"
                  ></button>
                  <span className="tooltip-text">
                    {ThemeDisplayNames[theme]}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="input-card">
            <label htmlFor="password">Favorite Characters:</label>
            <div>
              {Object.entries(characterIcons).map(([name, url]) => (
                <button
                  value={name}
                  className={
                    settingsState.favoriteCharacters.some(
                      (favName) => favName === name
                    )
                      ? 'character-button selected'
                      : 'character-button'
                  }
                  onClick={toggleCharacter}
                  type="button"
                >
                  <img
                    key={name} // Use the character name as a unique key
                    src={url} // Use the value from the object as the source
                    alt={name} // Use the character name as the alt text
                    style={{
                      width: '50px',
                      height: '50px',
                    }}
                  />
                </button>
              ))}
            </div>
            <div className="button-box">
              <button
                onClick={selectAllFav}
                type="button"
                className="mode-btn all"
              >
                Select All
              </button>

              <button
                onClick={resetFav}
                type="button"
                className="mode-btn reset"
              >
                Reset
              </button>
            </div>
          </div>
          <div className="input-card">
            {/* <div>{JSON.stringify(settingsState)}</div> */}
            <label htmlFor="password">Schedule Options:</label>
            <div>
              <div>
                <div>Hours per Page:</div>
                <select>
                  <option>10</option>
                  <option>20</option>
                  <option>50</option>
                  <option>200</option>
                </select>
              </div>
              <div>
                <div>Starting hour:</div>
                <input type="number"></input>
              </div>
            </div>
          </div>
        </form>
        <div>
          <button onClick={saveSettings}>Save!</button>
        </div>
      </div>
      <div className="desktop-title settings">Settings</div>
    </TransitionWrapper>
  );
};

export default Settings;
