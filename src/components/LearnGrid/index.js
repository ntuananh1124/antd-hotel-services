import { Col, Row, Carousel } from "antd";
import CardItem from "../CardItem";
import "./LearnGrid.scss";

export default function LearnGrid() {
    const height = {
        height: "400px"
    }
    return (
        <>
            <div className="grid-component">
                {/* <h3>Grid Component</h3> */}
                {/* <p>Grid chia Layout thành 24 cột</p> */}
                <Row gutter={[10, 30]}> {/** gutter:[col, row]:  khoảng cách giữa các cột (px) */}
                    <Col xxl={6} lg={6} md={12} sm={24} xs={24}>
                        <CardItem title="box-1"/>
                    </Col>
                    <Col xxl={6} lg={6} md={12} sm={24} xs={24}>
                        <CardItem title="box-2"/>
                    </Col>
                    <Col xxl={6} lg={6} md={12} sm={24} xs={24}>
                        <CardItem title="box-3"/>
                    </Col>
                    <Col xxl={6} lg={6} md={12} sm={24} xs={24}>
                        <CardItem title="box-4"/>
                    </Col>
                </Row>

                <Row gutter={[20,20]} className="mt-20">
                    <Col xxl={16} lg={16} md={24} sm={24} xs={24}>
                        <CardItem title="box-5" style={height}/>
                    </Col>
                    <Col xxl={8} lg={8} md={24} sm={24} xs={24}>
                        <CardItem title="box-6" style={height}/>
                    </Col>
                </Row>

                {/* <Row>
                    <Col span={24}>
                        <Carousel autoplay>
                            <div className="slider__item">1</div>
                            <div className="slider__item">2</div>
                            <div className="slider__item">3</div>
                            <div className="slider__item">4</div>
                        </Carousel>
                    </Col>
                </Row> */}
            </div>
        </>
    )
}