import React from "react";
import { Layout, Typography, Button, Row, Col, Image } from "antd";
import { Link } from "react-router-dom";
import posBg from "../images/pos-bg.png";

const { Header, Content } = Layout;
const { Title, Text } = Typography;

const Home = () => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Header style={{ display: "flex", alignItems: "center", justifyContent: "space-between", background: "white" }}>
        <div className="logo" style={{ fontSize: 44, fontWeight: "bold" }}>
          Khao <span style={{ color: "#1890ff" }}>Piyo</span>
        </div>
      </Header>

      <Content style={{ padding: "50px 100px", background: "#f0f2f5" }}>
        <Row gutter={[48, 48]} align="middle">
          <Col xs={24} md={12}>
            <Title level={1} style={{ textAlign:"left",color: "#001529" }}>
              Resturant <span style={{ color: "#1890ff" }}>POS System</span>
            </Title>
            <Text style={{ fontSize: 18, lineHeight: 1.8, color: "#595959" }}>
              - Easy to manage interface.
              <br />- Ability to easily track and categorize products.
              <br />- Creating orders and invoicing created orders.
              <br />- Ability to edit and delete products and orders according
              to authorization status.
            </Text>
            <div style={{ marginTop: 24 }}>
              <Button type="primary" size="large" style={{ marginRight: 16 }}>
                <Link to="/login">Login</Link>
              </Button>
              <Button size="large" type="default">
                <Link to="https://junaid.tech">Contact Developer</Link>
              </Button>
            </div>
          </Col>

          <Col xs={16} md={8}>
            <Image
              src={posBg}
              alt="POS System Background"
              preview={false}
              style={{ borderRadius: 16 }}
            />
          </Col>
        </Row>
      </Content>
    </Layout>
  );
};

export default Home;
