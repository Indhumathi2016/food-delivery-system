import React, { useState } from 'react';
import { Button, Col, DatePicker, Form, Input, Row, TimePicker } from 'antd';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { store, history } from '../redux/store';
import actions from '../redux/subscription/actions';
import { CardStyles } from '../App.style';

function Subscribe() {
  const { planId } = useParams(),
    { plans } = useSelector((state) => state.Subscription),
    currentPlan = plans.find((plan) => plan.id === parseInt(planId)),
    [userDetails, setUserDetails] = useState({});
  function handleConfirm(values) {
    setUserDetails(values);
  }
  function handlePayment(paymentDetails) {
    store.dispatch({
      type: actions.SET_PAYMENT_DETAILS,
      payload: { userDetails, paymentDetails },
    });
    localStorage.setItem(
      'payment',
      JSON.stringify({ userDetails, paymentDetails }),
    );
    history.push('/success');
  }
  return (
    <Row justify={'center'}>
      <Col span={8}>
        <CardStyles>
          <h2>Subscription Details</h2>
          <h3>{currentPlan?.name}</h3>
          <h4>{currentPlan?.price}</h4>
          {Object.keys(userDetails).length ? (
            <Form
              id="payment-details"
              onFinish={handlePayment}
              colon={false}
              layout={'vertical'}
              hideRequiredMark={true}
              name={'user'}
              className={'m-t-10'}
            >
              <Form.Item
                label={<>Credit/Debit Card</>}
                name={'card'}
                validateTrigger={'onBlur'}
                rules={[
                  {
                    required: true,
                    whitespace: true,
                    message: 'This field cannot be blank',
                  },
                ]}
              >
                <Input placeholder={'Card No.'} autoComplete={'off'} />
              </Form.Item>
              <div>
                <Form.Item
                  label={<>Expiry Date</>}
                  name={'expiry_date'}
                  validateTrigger={'onBlur'}
                  rules={[
                    {
                      required: true,
                      whitespace: true,
                      message: 'This field cannot be blank',
                    },
                  ]}
                >
                  <Input placeholder={'YY/MM'} autoComplete={'off'} />
                </Form.Item>
                <Form.Item
                  label={<>CVV</>}
                  name={'cvv'}
                  validateTrigger={'onBlur'}
                  rules={[
                    {
                      required: true,
                      whitespace: true,
                      message: 'This field cannot be blank',
                    },
                  ]}
                >
                  <Input.Password placeholder={'CVV'} autoComplete={'off'} />
                </Form.Item>
              </div>
              <Form.Item
                label={<>Name on Card</>}
                name={'name_on_card'}
                validateTrigger={'onBlur'}
                rules={[
                  {
                    required: true,
                    whitespace: true,
                    message: 'This field cannot be blank',
                  },
                ]}
              >
                <Input placeholder={'Card Holder Name'} autoComplete={'off'} />
              </Form.Item>
              <Form.Item>
                <Button
                  form="payment-details"
                  key="submit"
                  type="primary"
                  htmlType="submit"
                  className={'m-t-10'}
                >
                  Pay Now!
                </Button>
              </Form.Item>
            </Form>
          ) : (
            <Form
              id="user-details"
              onFinish={handleConfirm}
              colon={false}
              layout={'vertical'}
              hideRequiredMark={true}
              name={'user'}
              className={'m-t-10'}
            >
              <h2 className={'m-b-10'}>Share your details</h2>
              <Form.Item
                label={<>Name</>}
                name={'name'}
                validateTrigger={'onBlur'}
                rules={[
                  {
                    required: true,
                    whitespace: true,
                    message: 'This field cannot be blank',
                  },
                ]}
              >
                <Input placeholder={'Name'} autoComplete={'off'} />
              </Form.Item>
              <Form.Item
                label={<>Email</>}
                name={'email'}
                validateTrigger={'onBlur'}
                rules={[
                  {
                    required: true,
                    whitespace: true,
                    message: 'This field cannot be blank',
                  },
                  { type: 'email', message: 'please enter a valid email!' },
                ]}
              >
                <Input placeholder={'Email'} autoComplete={'off'} />
              </Form.Item>
              <Form.Item
                label={<>Phone</>}
                name={'phone'}
                validateTrigger={'onBlur'}
                rules={[
                  {
                    required: true,
                    whitespace: true,
                    message: 'This field cannot be blank',
                  },
                ]}
              >
                <Input placeholder={'Phone No.'} autoComplete={'off'} />
              </Form.Item>
              <Form.Item
                label={<>Subscription Date</>}
                name={'subscriptionDate'}
                validateTrigger={'onBlur'}
                rules={[
                  {
                    required: true,
                    message: 'This field cannot be blank',
                  },
                ]}
              >
                <DatePicker
                  style={{ width: '100%' }}
                  placeholder={'Select the subscription Date'}
                />
              </Form.Item>
              <Form.Item
                label={<>Delivery Time</>}
                name={'deliveryTime'}
                validateTrigger={'onBlur'}
                rules={[
                  {
                    required: true,
                    message: 'This field cannot be blank',
                  },
                ]}
              >
                <TimePicker
                  style={{ width: '100%' }}
                  placeholder={'Select the delivery time'}
                />
              </Form.Item>
              <Form.Item>
                <Button
                  form="user-details"
                  key="submit"
                  type="primary"
                  htmlType="submit"
                  className={'m-t-10'}
                >
                  Pay Now!
                </Button>
              </Form.Item>
            </Form>
          )}
        </CardStyles>
      </Col>
    </Row>
  );
}
export default Subscribe;
