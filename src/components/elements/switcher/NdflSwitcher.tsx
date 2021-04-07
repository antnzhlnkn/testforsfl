import React from 'react';
import { WrappedFieldInputProps } from 'redux-form';
import Form from 'react-bootstrap/Form';
import './NdflSwitcher.scss';

type TSalarySwitcherProps = {
  input: WrappedFieldInputProps;
};

export const Switcher: React.FC<TSalarySwitcherProps> = ({
  input: wrappedSwitcherProps,
  ...props
}: TSalarySwitcherProps) => {
  return (
    <Form.Group controlId="withoutndfl" className="d-flex">
      <Form.Label
        className={
          wrappedSwitcherProps.value ? 'pr-3 custom-control-label-inactive' : 'pr-3 custom-control-label-active'
        }
      >
        Указать с НДФЛ
      </Form.Label>
      <Form.Check type="switch" checked={wrappedSwitcherProps.value} {...wrappedSwitcherProps} {...props} />
      <Form.Label
        className={
          wrappedSwitcherProps.value ? 'pl-1 custom-control-label-active' : 'custom-control-label-inactive pl-1'
        }
      >
        Без НДФЛ
      </Form.Label>
    </Form.Group>
  );
};
