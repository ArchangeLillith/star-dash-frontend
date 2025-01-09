import React, { useContext, useState } from 'react';
import { IoClose } from 'react-icons/io5';

import useBackgroundUpdater from '@/hooks/useBackgroundUpdater';

import { SettingsContext } from '../../context/settings/SettingsProvider';

import { backgroundMap } from '../../context/settings/settings.utils';
import { TEXT_INPUT_SETTINGS } from '../../utils/variables';
import { InitializeCreateRun } from './CreateRun.utils';

import Select from '../../components/Select';
import Input from '../../components/Input';
import Modal from '@/components/Modal';
import TeamFields from '@/components/TeamFields';
import TransitionWrapper from '../../components/TransitionWrapper';
import ConfirmPassInput from './components/ConfirmPassInput';

import { CreateRunFormState } from './CreateRun.types';
import { callRegex, ERegexHandler } from '@/utils/regex';

const CreateRun = () => {
  /**
   * Setting the background with a hook and access to the setting context
   */
  const { setSettingsState } = useContext(SettingsContext);
  useBackgroundUpdater({
    backgroundKey: 'createRun',
    backgroundMap,
    setSettingsState,
  });
  const [show, setShow] = useState<boolean>(false);
  const [formStateCreateRun, setFormStateCreateRun] =
    useState<CreateRunFormState>(InitializeCreateRun);

  const events = ['Event 1', 'Event 2', 'Event 3'];

  const submitRun = (e: React.MouseEvent<HTMLButtonElement>) => {
    //Refactor we should prob use a debouncer for this at some point so they don't get like 4 errors :')
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
            <Select
              value={formStateCreateRun.selectedEvent}
              state={formStateCreateRun}
              options={events}
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
            </div>{' '}
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
              {/* <Input
                id="confirm-password"
                className="input"
                value={formStateCreateRun.runPasswordConfirm}
                maxLength={TEXT_INPUT_SETTINGS.MAX_LENGTH}
                type="password"
                stateKey="runPasswordConfirm"
                setState={setFormStateCreateRun}
                placeholder="Confirm Password"
              /> */}
            </div>
          </div>
          {show && (
            <Modal>
              <button
                onClick={() => setShow((prev) => !prev)}
                className="modal-close-btn"
              >
                <IoClose size="24px" />
              </button>
              <div className="modal-title">Password Confirmation</div>
              <div className="banner-background">
                <p className="notice-text italic banner">
                  Make sure you remember this!{' '}
                </p>
                <p className="notice-text">
                  It currently cannot be reset, and this is how other managers
                  are added to your run. Everything else (but the chosen event)
                  can be changed later if you'd like to.
                </p>
              </div>
              <ConfirmPassInput state={formStateCreateRun} />
              <button
                className="submit-btn"
                onClick={() => alert('Submitted success')}
              >
                Submit
              </button>
              <button
                className="submit-btn"
                onClick={() => setShow((prev) => !prev)}
              >
                I don't like my password, let me redo it
              </button>
            </Modal>
          )}
          <button className="submit-btn" onClick={submitRun}>
            Submit!
          </button>
        </form>
        <div className="desktop-title">Create a new run</div>
      </div>
    </TransitionWrapper>
  );
};
export default CreateRun;
