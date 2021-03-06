import React from 'react';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import { DefaultRootState, useSelector } from 'react-redux';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { SalaryResult } from '../../elements/salaryResult/SalaryResult';
import { NumberInput } from '../../elements/input/SalaryNumberInput';
import { Switcher } from '../../elements/switcher/NdflSwitcher';
import { RadioButtons } from '../../elements/radioButtons/RadioButton';
import { INITIAL_SALARY_VALUES, salaryFormFieldNames, salaryFormName } from '../../../constants/SalaryForm';
import { ISalary } from '../../../interfaces/Salary';

const SalaryFormTemplate: React.FC = () => {
  const selector = formValueSelector(salaryFormName);
  const { salary, withoutndfl, typeOfSalary } = useSelector<DefaultRootState, ISalary>((state) =>
    selector(state, 'salary', 'withoutndfl', 'typeOfSalary'),
  );
  return (
    <Container fluid>
      <Form>
        <Row className="justify-content-md-center">
          <Col xs={6}>
            <Row>
              <Form.Label className="text-secondary">Сумма</Form.Label>
            </Row>
            <Row className="pl-4">
              <Field name={salaryFormFieldNames.typeOfSalary} component={RadioButtons} />
            </Row>
            <Row className="pl-4">
              <Field name={salaryFormFieldNames.withoutndfl} component={Switcher} />
            </Row>
            <Row className="pl-4">
              <Field name={salaryFormFieldNames.salary} component={NumberInput} />
            </Row>
            <Row>
              {typeOfSalary === INITIAL_SALARY_VALUES.typeOfSalary && (
                <SalaryResult withoutndfl={withoutndfl} salary={salary} />
              )}
            </Row>
          </Col>
        </Row>
      </Form>
    </Container>
  );
};

export const SalaryForm = reduxForm<ISalary>({
  form: salaryFormName,
  initialValues: INITIAL_SALARY_VALUES,
})(SalaryFormTemplate);
