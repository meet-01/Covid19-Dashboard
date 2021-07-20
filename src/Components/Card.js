import React from "react";
import { Card, Col, Row } from "antd";
import CountUp from "react-countup";
import check from "../images/check.png";
export default function CardComponent({ totalIndiaCase }) {
  return totalIndiaCase.map((item, index) => (
    <div className="row" key={index}>
      <div className="col-lg-12">
        <div key={index} style={{ padding: "10px", background: "#ececec" }}>
          <Row gutter={16}>
            <Col span={6}>
              <Card
                title="Confirmed Cases"
                bordered={false}
                style={{ width: 360, height: 215 }}
              >
                <img src={check} alt="confirmedi" style={{ height: "50px" }} />
                <br />
                <i className="fas fa-arrow-up" />
                <CountUp
                  className="count"
                  start={0}
                  end={Number(item.deltaconfirmed)}
                  duration={2.75}
                  separator=","
                />
                <h2 className="text-danger"> {item.confirmed}</h2>
              </Card>
            </Col>
            <Col span={6}>
              <Card
                title="Active"
                bordered={false}
                style={{ width: 360, height: 215 }}
              >
                <span style={{ color: "mediumslateblue" }}>
                  <i className="fab fa-creative-commons-sampling fa-3x" />
                </span>
                <br />

                <h2 className="text-info"> {item.active}</h2>
              </Card>
            </Col>
            <Col span={6}>
              <Card
                title="Recovered"
                bordered={false}
                style={{ width: 360, height: 215 }}
              >
                <span style={{ color: "green" }}>
                  <i className="fab fa-creative-commons-sampling fa-3x" />
                </span>
                <br />
                <i className="fas fa-arrow-up" />
                <CountUp
                  className="count"
                  start={0}
                  end={Number(item.deltarecovered)}
                  duration={2.75}
                  separator=","
                />

                <h2 className="text-success"> {item.recovered}</h2>
              </Card>
            </Col>
            <Col span={6}>
              <Card
                title="Death"
                bordered={false}
                style={{ width: 360, height: 215 }}
              >
                <i className="fas fa-skull-crossbones fa-3x" />
                <br />
                <i className="fas fa-arrow-up" />
                <CountUp
                  className="count"
                  start={0}
                  end={Number(item.deltadeaths)}
                  duration={2.75}
                  separator=","
                />

                <h2 className="text-dark"> {item.deaths}</h2>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  ));
}
