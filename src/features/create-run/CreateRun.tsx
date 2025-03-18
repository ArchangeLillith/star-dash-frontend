import React, { useContext, useState } from 'react';

import useBackgroundUpdater from '@/hooks/useBackgroundUpdater';

import TransitionWrapper from '../../components/TransitionWrapper';
import Input from '../../components/Input';
import TeamFields from '@/components/TeamFields';
import EventSelect from '@/components/select/EventSelect';

import { SettingsContext } from '../../context/settings/SettingsProvider';
import { EventsContext } from '@/context/events/EventsProvider';

import { backgroundMap } from '../../context/settings/settingsProvider.utils';
import { TEXT_INPUT_SETTINGS } from '../../utils/variables';
import { InitializeCreateRun } from './CreateRun.utils';
import { callRegex, ERegexHandler } from '@/utils/regex';

import { CreateRunFormState } from './CreateRun.types';
import { ModalContent } from './components/ModalContent';

const CreateRun = () => {
  /**
   * Setting the background with a hook and access to the setting context
   */
  const { setSettingsState } = useContext(SettingsContext);
  const { eventsState } = useContext(EventsContext);

  const [formStateCreateRun, setFormStateCreateRun] =
    useState<CreateRunFormState>(InitializeCreateRun);
  const [show, setShow] = useState<boolean>(false);

  //Hook to set background
  useBackgroundUpdater({
    backgroundKey: 'createRun',
    backgroundMap,
    setSettingsState,
  });

  const validateAndConfirmRun = (e: React.MouseEvent<HTMLButtonElement>) => {
    //Refactor we should prob use a debouncer for this at some point so they don't get like 4 errors :')
    //Change the name of the function them to show modal cause it'll only work if everything's passed
    e.preventDefault();
    // If regex doesn't pass, just return and let them know they need a better pass
    const error = callRegex(
      formStateCreateRun.runPassword,
      ERegexHandler.CreateRunPass
    );
    if (error) {
      alert(error);
    } else {
      setShow(true);
    }
  };

  return (
    <TransitionWrapper newBackgroundImage={backgroundMap.createRun}>
      <div className="transition-base create-run">
        <form className="form-container">
          <div className="form-title">Create Event</div>
          <div className="top-content">
            <EventSelect
              value={formStateCreateRun.selectedEvent.event_name}
              state={formStateCreateRun}
              options={eventsState.allEvents}
              stateKey="selectedEvent"
              setState={setFormStateCreateRun}
              defaultOption="Choose your event..."
            />
            <div className="input-card">
              <label className="banner" htmlFor="runner-name">
                Runner Name
              </label>
              <Input
                id="runner-name"
                value={formStateCreateRun.runnerName}
                maxLength={TEXT_INPUT_SETTINGS.MAX_LENGTH}
                className="input"
                stateKey="runnerName"
                setState={setFormStateCreateRun}
                placeholder="Will default to 'Runner'"
              />
              <div className="banner">Runner Stats</div>

              <TeamFields
                state={formStateCreateRun}
                setState={setFormStateCreateRun}
              />
            </div>
          </div>

          <div className="password-container">
            <div className="password-group">
              <label className="banner" htmlFor="run-password">
                Run Password
              </label>
              <div className="notice-text">
                Requires one uppercase letter, one number and one symbol
              </div>
              <Input
                id="run-password"
                className="input"
                value={formStateCreateRun.runPassword}
                maxLength={TEXT_INPUT_SETTINGS.MAX_LENGTH}
                stateKey="runPassword"
                setState={setFormStateCreateRun}
                placeholder="This is for managers to join your run!"
              />
            </div>
            <div className="password-group no-desktop">
              <label className="banner" htmlFor="confirm-password">
                Confirm Password
              </label>
            </div>
          </div>
          {show && (
            <ModalContent state={formStateCreateRun} setShow={setShow} />
          )}
          <button className="submit-btn" onClick={validateAndConfirmRun}>
            Submit!
          </button>
        </form>
        <div className="desktop-title">Create a new run</div>
      </div>
    </TransitionWrapper>
  );
};
export default CreateRun;
