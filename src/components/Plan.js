import React from 'react';
import { Button, Card, Col } from 'antd';
import { NavLink } from 'react-router-dom';

function Plan({ plan, index }) {
  return (
    <Col key={index} span={12}>
      <Card>
        <h3>{plan.name}</h3>
        <div>{plan.description}</div>
        <h4>{plan.price}</h4>
        <NavLink to={{ pathname: `/subscribe/${plan.id}` }}>
          <Button type={'primary'}>SUBSCRIBE NOW!</Button>
        </NavLink>
      </Card>
    </Col>
  );
}
export default Plan;
