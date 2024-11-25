import { Link } from 'react-router-dom';
import TransitionWrapper from '../../../components/TransitionWrapper';
import { useContext, useEffect, useState } from 'react';
import { SettingsContext } from '../../../context/settings/SettingsProvider';
import { backgroundMap } from '../../../context/settings/utils';
import Input from '../../../components/Input';
import { MarathonFormState } from '../../../utils/state-types';
import { GenericInputConfigs } from './utils';
import {
  TEAM_NUMBER_INPUT_SETTINGS,
  TEXT_INPUT_SETTINGS,
} from '../../../utils/variables';
import React from 'react';

const JoinMarathon: React.FC = () => {
  const { setSettingsState } = useContext(SettingsContext);

  const [formStateMarathon, setFormStateMarathon] = useState<MarathonFormState>(
    {
      fillerName: '',
      managerName: '',
      isv1: undefined,
      isv2: undefined,
      bp: undefined,
      event: '',
    }
  );

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSettingsState((prev) => ({
        ...prev,
        currentPageBackground: backgroundMap['marathon'],
      }));
    }, 500);
    return () => clearTimeout(timeout);
  }, []);

  const submitFillerInfo = () => {};

  return (
    <TransitionWrapper newBackgroundImage={backgroundMap.marathon}>
      <div className="join-run-page-marathon">
        <div>
          <Link to="/carnival">Carnival!</Link>
        </div>
        <form className="filler-registration-form">
          <div className="form-title">Filler Registration</div>
          <div className="top-content">
            <div className="manager-container">
              <label className="banner" htmlFor="manager-input">
                Manager Name
              </label>
              <Input
                id="manager-input"
                className="input"
                value={formStateMarathon.managerName}
                maxLength={TEXT_INPUT_SETTINGS.MAX_LENGTH}
                setState={setFormStateMarathon}
                stateKey={'managerName'}
                placeholder="Your manager..."
                type="text"
              />
            </div>
            <div className="manager-container">
              {/* //Refactor add a tooltip here as to why we need this */}
              <label className="banner" htmlFor="discord-input">
                Discord Name
              </label>
              <Input
                id="discord-input"
                className="input"
                value={formStateMarathon.fillerName}
                maxLength={TEXT_INPUT_SETTINGS.MAX_LENGTH}
                setState={setFormStateMarathon}
                placeholder="Your Discord..."
                type="text"
                stateKey={'fillerName'}
              />
            </div>
          </div>

          <div className="team-content">
            <div
              role="group"
              aria-labelledby="fill-team-label"
              className="team-container"
            >
              <div className="banner">Fill Team</div>
              <div className="input-container">
                {GenericInputConfigs.map(({ id, stateKey, placeholder }) => (
                  <Input
                    key={id}
                    value={
                      formStateMarathon[
                        stateKey as keyof typeof formStateMarathon
                      ]
                    }
                    valueRange={TEAM_NUMBER_INPUT_SETTINGS}
                    type="number"
                    className="input"
                    stateKey={stateKey as keyof typeof formStateMarathon}
                    setState={setFormStateMarathon}
                    id={id}
                    placeholder={placeholder}
                  />
                ))}
              </div>
            </div>
          </div>
          <button className="submit-btn" onClick={submitFillerInfo}>
            Submit!
          </button>
        </form>
        <h2 className="desktop-title">Filler Registration</h2>
      </div>
    </TransitionWrapper>
  );
};

export default JoinMarathon;
