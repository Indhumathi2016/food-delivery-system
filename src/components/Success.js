import React from 'react';

function Success() {
  return (
    <div>
      <h3>Your have successfully purchased the subscription</h3>
      <h4>You'll get notified by SMS</h4>
      <a href={'receipt.txt'} download>
        {' '}
        Get Receipt
      </a>
    </div>
  );
}
export default Success;
