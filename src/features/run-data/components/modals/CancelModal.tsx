import Modal from '@/components/Modal';
import { SetStateAction } from 'react';

interface CancelModalProps {
  confirmCancel: () => void;
  setShow: React.Dispatch<SetStateAction<boolean>>;
}

const CancelModal: React.FC<CancelModalProps> = ({
  confirmCancel,
  setShow,
}) => {
  return (
    <Modal>
      <div>Discard these changes?</div>
      <button className="submit-btn" onClick={confirmCancel}>
        Yeah
      </button>
      <button className="submit-btn" onClick={() => setShow(false)}>
        Wait, no, go back
      </button>
    </Modal>
  );
};

export default CancelModal;
