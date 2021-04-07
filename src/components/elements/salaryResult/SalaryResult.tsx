import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import './SalaryResult.scss';

const ndflValue = 0.13;
const hundredPercent = 1;

type TSalaryResultProps = {
  withoutndfl?: boolean;
  salary: number;
};

export const SalaryResult: React.FC<TSalaryResultProps> = ({ withoutndfl, salary }) => {
  const salaryForEmployeeWithNdfl = (salary * (hundredPercent - ndflValue)).toFixed(0);
  const TaxWithNdfl = (salary * ndflValue).toFixed(0);
  const TaxWithoutNdfl = (salary * (ndflValue / (hundredPercent - ndflValue))).toFixed(0);
  const salaryForEmployeeWithoutNdfl = (salary / (hundredPercent - ndflValue)).toFixed(0);
  return (
    <Container fluid className="salary-result-bg m-0 p-3">
      <Row className="m-0 p-1">
        <div>
          <span>{withoutndfl ? salary : salaryForEmployeeWithNdfl} &#8381; </span>
          сотрудник будет получать на руки
        </div>
      </Row>
      <Row className="m-0 p-1">
        <div>
          <span>{withoutndfl ? TaxWithoutNdfl : TaxWithNdfl} &#8381; </span> НДФЛ, 13% от оклада
        </div>
      </Row>
      <Row className="m-0 p-1">
        <div>
          <span>{withoutndfl ? salaryForEmployeeWithoutNdfl : salary} &#8381; </span> за сотрудника в месяц
        </div>
      </Row>
    </Container>
  );
};
