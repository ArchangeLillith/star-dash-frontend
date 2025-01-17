import React, { useContext, useState } from 'react';
import { IoClose } from 'react-icons/io5';

import useBackgroundUpdater from '@/hooks/useBackgroundUpdater';

import { SettingsContext } from '../../context/settings/SettingsProvider';

import { backgroundMap } from '../../context/settings/settingsProvider.utils';
import { TEXT_INPUT_SETTINGS } from '../../utils/variables';
import { InitializeCreateRun } from './CreateRun.utils';

import Input from '../../components/Input';
import Modal from '@/components/Modal';
import TeamFields from '@/components/TeamFields';
import TransitionWrapper from '../../components/TransitionWrapper';
import ConfirmPassInput from './components/ConfirmPassInput';

import { CreateRunFormState } from './CreateRun.types';
import { callRegex, ERegexHandler } from '@/utils/regex';
import EventSelect from '@/components/select/EventSelect';
import runService from '../../services/run';
import { AuthContext } from '@/context/auth/AuthProvider';
import { EventsContext } from '@/context/events/EventsProvider';
import { useNavigate } from 'react-router-dom';

const CreateRun = () => {
  /**
   * Setting the background with a hook and access to the setting context
   */
  const { setSettingsState } = useContext(SettingsContext);
  const { eventsState, setEventsState } = useContext(EventsContext);
  useBackgroundUpdater({
    backgroundKey: 'createRun',
    backgroundMap,
    setSettingsState,
  });
  const { authState } = useContext(AuthContext);
  const [show, setShow] = useState<boolean>(false);
  const [formStateCreateRun, setFormStateCreateRun] =
    useState<CreateRunFormState>(InitializeCreateRun);
  const navigate = useNavigate();

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

  const submitRun = async () => {
    const run_info = await runService.createRun(formStateCreateRun, authState);
    console.log(`run info`, run_info);
    console.log(`current info`, eventsState.allEvents);
    setEventsState((prev) => ({
      ...prev,
      activeEvents: [
        ...prev.activeEvents,
        {
          event_id: run_info.event_id,
          event_name: formStateCreateRun.selectedEvent.event_name,
          event_type: formStateCreateRun.selectedEvent.event_type,
        },
      ],
      selectedEvent: {
        //Use the default values from the pre-intiialized teams and fillers per hour
        ...prev.selectedEvent,
        //Not ideal, but we ! here because there should be no way to get here without breaking everything if you're not a manager
        lead_manager: authState.managerData!.id,
        lead_name: authState.managerData!.username,
        run_id: run_info.run_id,
        event_id: run_info.event_id,
        event_type: formStateCreateRun.selectedEvent.event_type,
        event_name: formStateCreateRun.selectedEvent.event_name,
        notesPerHour: [],
        finishedHours: [],
        fillersAvaliable: [],
      },
    }));
    console.log(formStateCreateRun.selectedEvent.event_name);
    navigate('/schedule');
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
                  are added to your run. <br />
                  <br />
                  Everything else (except for the chosen event) can be changed
                  later if you'd like to.
                </p>
              </div>
              <ConfirmPassInput state={formStateCreateRun} />
              <button className="submit-btn" onClick={submitRun}>
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

export type runnerDTO_type = {
  runner: {
    runner_name: string;
    team: {
      isv1: number;
      isv2: number;
      bp: number;
    };
  };
};
