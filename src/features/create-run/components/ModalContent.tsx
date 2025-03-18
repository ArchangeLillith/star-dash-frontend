import Modal from '@/components/Modal';
import { IoClose } from 'react-icons/io5';
import ConfirmPassInput from './ConfirmPassInput';
import { SetStateAction, useContext } from 'react';
import { CreateRunFormState } from '../CreateRun.types';
import { submitRun } from '../CreateRun.utils';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '@/context/auth/AuthProvider';
import { EventsContext } from '@/context/events/EventsProvider';

interface ModalContentProps {
  state: CreateRunFormState;
  setShow: React.Dispatch<SetStateAction<boolean>>;
}
export const ModalContent: React.FC<ModalContentProps> = ({
  state,
  setShow,
}) => {
  const { setEventsState } = useContext(EventsContext);
  const { authState } = useContext(AuthContext);
  const navigate = useNavigate();

  //Call to the util, pass in all the needed data and the util function handles the rest
  const submit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    submitRun(state, authState, setEventsState, navigate);
  };

  return (
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
          It currently cannot be reset, and this is how other managers are added
          to your run. <br />
          <br />
          Everything else (except for the chosen event) can be changed later if
          you'd like to.
        </p>
      </div>
      <ConfirmPassInput runPassword={state.runPassword} />
      <button className="submit-btn" onClick={submit}>
        Submit
      </button>
      <button className="submit-btn" onClick={() => setShow((prev) => !prev)}>
        I don't like my password, let me redo it
      </button>
    </Modal>
  );
};

export default ModalContent;
