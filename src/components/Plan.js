import React from 'react';
import { Button, Col } from 'antd';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { CardStyles } from '../App.style';

function Plan({ plan, index }) {
  return (
    <Col key={index} span={12}>
      <CardStyles>
        <h2>{plan.name}</h2>
        <div>{plan.description}</div>
        <h4>{plan.price}</h4>
        <NavLink to={{ pathname: `/subscribe/${plan.id}` }}>
          <Button type={'primary'}>SUBSCRIBE NOW!</Button>
        </NavLink>
      </CardStyles>
    </Col>
  );
}
Plan.defaultProps = {
  plan: {},
  index: 0,
};

Plan.propTypes = {
  plan: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
};
export default Plan;
