import React from 'react';
import { Row } from 'antd';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import Plan from '../components/Plan';

function Subscription() {
  const { plans } = useSelector((state) => state.Subscription);

  return (
    <div>
      <h1>Food delivery</h1>
      <Row gutter={[20, 20]}>
        {plans.map((plan, index) => (
          <Plan plan={plan} index={index} />
        ))}
      </Row>
    </div>
  );
}
Subscription.defaultProps = {
  plans: [],
};

Subscription.propTypes = {
  plans: PropTypes.array.isRequired,
};
export default Subscription;
