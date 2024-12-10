import { useState } from 'react';
import { questionsAndAnswers } from '../public-help/utils';

const Accordion = () => {
  const items = questionsAndAnswers;
  return (
    <div className="accordion">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          question={item.question}
          answer={item.answer}
        />
      ))}
    </div>
  );
};

const AccordionItem = ({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className={`accordion-item ${isOpen ? 'open' : ''}`}>
      <button className="accordion-header" onClick={toggleAccordion}>
        {question}
        <span className="accordion-icon">{isOpen ? '-' : '+'}</span>
      </button>
      <div
        className="accordion-content"
        style={{ maxHeight: isOpen ? 'fit-content' : '0' }}
      >
        <p>{answer}</p>
      </div>
    </div>
  );
};

export default Accordion;
