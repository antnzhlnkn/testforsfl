import React, { useRef, useState } from 'react';
import { WrappedFieldInputProps } from 'redux-form';
import Form from 'react-bootstrap/Form';
import Overlay from 'react-bootstrap/Overlay';
import './RadioButtons.scss';
import { SALARY_TYPES_OPTIONS, tooltipTypeOfSalaryId } from '../../../constants/SalaryForm';
import { InfoCircle, XCircle } from 'react-bootstrap-icons';

type TSalaryRadioButtonsProps = {
  input: WrappedFieldInputProps;
};

export const RadioButtons: React.FC<TSalaryRadioButtonsProps> = ({
  input: wrappedRadioButtonProps,
  ...props
}: TSalaryRadioButtonsProps) => {
  const [showTooltip, setShowTooltip] = useState(false);
  const target = useRef(null);

  const handleCloseShowTooltip = () => setShowTooltip(false);
  const handleOpenShowTooltip = () => setShowTooltip(true);

  return (
    <Form.Group controlId="typeOfSalary">
      {SALARY_TYPES_OPTIONS.map(({ id, name }) => (
        <div key={id} className="d-flex">
          <Form.Check
            label={name}
            type="radio"
            id={`${name}-${id}`}
            checked={wrappedRadioButtonProps.value === id}
            {...wrappedRadioButtonProps}
            value={id}
            {...props}
          />
          {tooltipTypeOfSalaryId === id && (
            <div
              ref={target}
              onMouseEnter={handleOpenShowTooltip}
              onClick={handleCloseShowTooltip}
              style={{ cursor: 'pointer' }}
            >
              {showTooltip ? <XCircle color="royalblue" size={20} /> : <InfoCircle color="royalblue" size={20} />}
            </div>
          )}
        </div>
      ))}
      <Overlay target={target.current} show={showTooltip} placement="bottom-start">
        {({ placement, arrowProps, show: _show, popper, ...props }) => (
          <div
            className="tooltip-text"
            {...props}
            style={{
              ...props.style,
            }}
          >
            МРОТ -минимальный размер оплаты труда. Разный для разных регионов.
          </div>
        )}
      </Overlay>
    </Form.Group>
  );
};
