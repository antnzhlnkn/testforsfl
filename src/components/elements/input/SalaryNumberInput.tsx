import React from 'react';
import { WrappedFieldInputProps } from 'redux-form';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import './SalaryInput.scss';

type TSalaryNumberInputProps = {
  input: WrappedFieldInputProps;
};

export const NumberInput: React.FC<TSalaryNumberInputProps> = ({
  input: wrappedFieldInputProps,
  ...props
}: TSalaryNumberInputProps) => {
  return (
    <Form.Group controlId="salary">
      <InputGroup.Append>
        <Form.Control className="salary-input" placeholder="З/П" type="number" {...wrappedFieldInputProps} {...props} />
        <InputGroup.Text>&#8381;</InputGroup.Text>
      </InputGroup.Append>
    </Form.Group>
  );
};
