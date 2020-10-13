import React from 'react';
import { CheckCircleFilled, DownloadOutlined } from '@ant-design/icons';
import { SuccessStyles } from '../App.style';

function Success() {
  return (
    <SuccessStyles>
      <CheckCircleFilled style={{ color: '#52c41a' }} />
      <h3>Your have successfully purchased the subscription</h3>
      <h4>You'll get notified by SMS</h4>
      <a href={'receipt.txt'} download>
        {' '}
        <DownloadOutlined /> Download Receipt
      </a>
    </SuccessStyles>
  );
}
export default Success;
