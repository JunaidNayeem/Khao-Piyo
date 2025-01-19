import React, { useEffect } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { login, reset } from "../features/auth/authSlice";
import { Form, Input, Button, Typography, Card } from "antd";

const { Title, Text } = Typography;

const Login = () => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user, error, success, message } = useSelector((state) => state.auth);

  useEffect(() => {
    if (error) {
      toast.error(message);
    }
    if (success || user) {
      navigate("/dashboard");
    }
    dispatch(reset());
  }, [error, success, user, message, navigate, dispatch]);

  const handleSubmit = (values) => {
    dispatch(login(values));
  };

  return (
    <div className="auth-container" style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", backgroundColor: "#f0f2f5" }}>
      <Card style={{ width: 400, padding: 24, borderRadius: 8, boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}>
        <Title level={3} style={{ textAlign: "center", marginBottom: 24 }}>
          Login
        </Title>
        <Form
          form={form}
          layout="vertical"
          onFinish={handleSubmit}
          initialValues={{ email: "", password: "" }}
        >
          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: "Please enter your email!", type: "email" }]}
          >
            <Input placeholder="Enter your email" />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please enter your password!" }]}
          >
            <Input.Password placeholder="Enter your password" />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" block>
              Log In
            </Button>
          </Form.Item>
        </Form>

        <Text style={{ display: "block", textAlign: "center", marginTop: 16 }}>
          <a href="/">Go to Home Page</a>
        </Text>
      </Card>
    </div>
  );
};

export default Login;
