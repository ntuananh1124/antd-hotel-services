import { Input, Row, Col, Button, Checkbox, Space, DatePicker, Radio, Select } from 'antd';
import { useState } from 'react';
import { postData } from '../../services/bookingService';

const { RangePicker } = DatePicker;

export default function BookRoom() {
    const [data, setData] = useState({});
    const handleChangeInput = (e) => {
        const object = {
            ...data,
            [e.target.name]: e.target.value
        }
        setData(object);
    }

    const handleClick = async () => {
        const result = await postData(data);
        if (result) {
            alert("Chúc mừng bạn đã đặt phòng thành công!")
        }
        else alert("Vui lòng đặt lại sau")

        console.log("Submit to JSON-SERVER", result);
    }

    const handleCheckbox = (e) => {
        const object = {
            ...data,
            services: e
        }
        setData(object);
    }

    // Của RangePicker: chọn ngày đi ngày về
    const handleChange = (date, dateString) => {
        const object = {
            ...data,
            date: dateString
        }
        setData(object);
    }

    // options booking Time:
    const options = [];
    for (let i = 7; i <= 24; i++) {
        options.push({
            value: `${i} giờ`,
            label: `${i} giờ`
        })
    }

    const handleOptionsChange = (optionValue) => {
        const object = {
            ...data,
            bookingTime: optionValue
        }
        setData(object);
    }

    const handleRadio = (e) => {
        const object = {
            ...data,
            [e.target.name]: e.target.value
        }
        setData(object);
    }

    return (
        <>
            <div className="book-room">
                <h2 className="book-room__name">Đặt Phòng</h2>
                <form className='book-room__form'>
                    <Row gutter={[20,20]}>
                        <Col span={24}>
                            <p>Họ và tên:</p>
                            <Input name='fullName' placeholder='Ví dụ: Le Van A' onChange={handleChangeInput}/>
                        </Col>
                        <Col span={12}>
                            <p>Số điện thoại:</p>
                            <Input name='phone' placeholder='Ví dụ: 0123xxxxxxx' onChange={handleChangeInput}/>
                        </Col>
                        <Col span={12}>
                            <p>Email:</p>
                            <Input name='email' placeholder='levana@gmail.com' onChange={handleChangeInput}/>
                        </Col>

                        <Col span={12}>
                            <p>Dịch vụ thêm:</p>
                            <Checkbox.Group onChange={handleCheckbox}>
                                <Space direction='vertical'>
                                    <Checkbox value="Thuê xe máy">Thuê xe máy</Checkbox>
                                    <Checkbox value="Thuê ô tô 4 chỗ">Thuê ô tô 4 chỗ</Checkbox>
                                    <Checkbox value="Thuê ô tô 7 chỗ">Thuê ô tô 7 chỗ</Checkbox>
                                    <Checkbox value="Thuê ô tô 16 chỗ">Thuê ô tô 16 chỗ</Checkbox>
                                    <Checkbox value="Thuê xe đạp">Thuê xe đạp</Checkbox>
                                </Space>
                            </Checkbox.Group>
                        </Col>

                        <Col span={12}>
                            <p>Chọn ngày:</p>
                            <RangePicker format="DD/MM/YYYY" onChange={handleChange} placeholder={['Ngày nhận phòng', 'Ngày trả phòng']}/>
                        </Col>

                        <Col span={12}>
                            <p>Chọn giờ nhận phòng</p>
                            <Select defaultValue="Chọn giờ" style={{ width: 120 }} options={options} onChange={handleOptionsChange}/>
                        </Col>

                        <Col span={12}>
                            <p>Quà Tặng:</p>
                            <Radio.Group name='gift' onChange={handleRadio}>
                                <Space direction='vertical'>
                                    <Radio value="Áo cộc">Áo cộc</Radio>
                                    <Radio value="Mũ">Mũ</Radio>
                                    <Radio value="Kem chống nắng">Kem chống nắng</Radio>
                                </Space>
                            </Radio.Group>
                        </Col>

                        <Col span={24}>
                            <Button type='primary' onClick={handleClick}>Đặt Phòng</Button>
                        </Col>
                    </Row>
                </form>
            </div>
        </>
    )
}