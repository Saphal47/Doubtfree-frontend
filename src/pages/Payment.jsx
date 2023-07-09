import React from "react";
import { Modal, Form, Input, Button } from "antd";
import { CreditCardFill, Paypal, Google, Apple } from "react-bootstrap-icons";

const Payment = ({ visible, onCancel }) => {
  const handlePayment = () => {
    // Add your payment logic here
  };

  return (
    <Modal
      className="text-4xl text-center font-bold"
      title="PAYMENT DIALOG"
      visible={visible}
      onCancel={onCancel}
      footer={[
        <Button key="cancel" onClick={onCancel}>
          Cancel
        </Button>,
        <Button key="payment" type="primary" onClick={handlePayment} style={{ backgroundColor: '#1890ff', borderColor: '#1890ff' }}>
          Pay Now
        </Button>,
      ]}
    >
      <Form>
        <Form.Item label="Card Number">
          <Input placeholder="Enter your card number" />
        </Form.Item>
        <Form.Item label="Name on Card">
          <Input placeholder="Enter the name on the card" />
        </Form.Item>
        <Form.Item label="Expiry Date">
          <Input placeholder="Enter the expiry date" />
        </Form.Item>
        <Form.Item label="CVV">
          <Input placeholder="Enter the CVV" />
        </Form.Item>
        <Form.Item label="">
          <div className="payment-methods flex mt-2">
            <div className="payment-option mr-4">
              <CreditCardFill size={40} style={{ color: '#1890ff', cursor: 'pointer' }} />
            </div>
            <div className="payment-option mr-4">
              <Paypal size={40} style={{ color: '#1890ff', cursor: 'pointer' }} />
            </div>
            <div className="payment-option mr-4">
              <Google size={40} style={{ color: '#1890ff', cursor: 'pointer' }} />
            </div>
            <div className="payment-option">
              <Apple size={40} style={{ color: '#1890ff', cursor: 'pointer' }} />
            </div>
          </div>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default Payment;
