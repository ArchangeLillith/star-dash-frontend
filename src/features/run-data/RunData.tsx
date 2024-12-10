import TransitionWrapper from '@/components/TransitionWrapper';
import { SettingsContext } from '@/context/settings/SettingsProvider';
import { backgroundMap } from '@/context/settings/utils';
import useBackgroundUpdater from '@/hooks/useBackgroundUpdater';
import { useContext, useEffect, useState } from 'react';
import TeamContainer from './components/TeamContainer';
import { Filler, Manager, Teams } from '@/utils/types';
import { DummyFillerData, DummyManagerData } from '@/utils/variables';
import { createTempTeams } from './utils';
//REFACTOR when we have a backend this is the initialiaztion data
// import { InitializeFillerData } from '@/utils/variables';

const RunData = () => {
  /** Setting the background with a hook and access to the setting context */
  const { setSettingsState } = useContext(SettingsContext);
  useBackgroundUpdater({
    backgroundKey: 'runData',
    backgroundMap,
    setSettingsState,
  });
  /** Which dataset the page will read from, manager data or filler data */
  const [dataSet, setDataSet] = useState<'manager' | 'filler'>('filler');
  /** Data from the database, only written into when data is saved back to the database */
  const [fillerData, setFillerData] = useState<Filler[]>([]);
  /** Temporary teams so the user can revert changes if they want, also can be compared to fillerData and shows the changes */
  const [tempTeams, setTempTeams] = useState<Teams[]>([]);
  /** Manager data from the database */
  const [managerData, setManagerData] = useState<Manager[]>([]);
  /** The handler for edit state of fillers */
  const [editState, setEditState] = useState<boolean>(false);

  /** Changes the state between filler and manager data onclick */
  const toggleDataSet = () =>
    setDataSet((prev) => (prev === 'filler' ? 'manager' : 'filler'));

  /**
   * Setting all the states after a fetch, also calls to create the tempTeams
   */
  useEffect(() => {
    //This const will come from a FETCH eventually
    setManagerData(DummyManagerData);
    setFillerData(DummyFillerData);
    setTempTeams(createTempTeams(DummyFillerData));
  }, []);

  /** Renders the shared JSX dynamically for manager and filler  */
  const renderGridContainer = (
    data: Filler[] | Manager[],
    renderContent: (item: Filler | Manager, index?: number) => JSX.Element
  ) => (
    <div className="scrollable-container">
      <div className="page-title">
        {dataSet === 'filler' ? 'Filler Data' : 'Manager Data'}
      </div>
      {!editState && <button onClick={toggleDataSet}>Switch DataSet</button>}
      {data.map((item, index) => (
        <div
          className="grid-container"
          key={`grid-container-${'name' in item ? item.name : item.username}`}
        >
          {renderContent(item, index)}
        </div>
      ))}
    </div>
  );

  return (
    <TransitionWrapper newBackgroundImage={backgroundMap.runData}>
      <div className="transition-base run-data">
        {dataSet === 'filler'
          ? renderGridContainer(fillerData, (filler, index) => (
              <div className="row">
                <div className="banner-background">
                  <div className="name">{(filler as Filler).name}</div>
                </div>
                <TeamContainer
                  index={index!}
                  filler={filler as Filler}
                  fillerData={fillerData}
                  setFillerData={setFillerData}
                  tempTeams={tempTeams}
                  setTempTeams={setTempTeams}
                  editState={editState}
                  setEditState={setEditState}
                />
              </div>
            ))
          : renderGridContainer(managerData, (manager) => (
              <div className="row">
                <div className="banner-background">
                  <div className="name">{(manager as Manager).username}</div>
                </div>
                <div className="number-container">
                  {(manager as Manager).id}
                </div>
                <button className="submit-btn">Remove Manager</button>
              </div>
            ))}
      </div>
    </TransitionWrapper>
  );
};

export default RunData;
