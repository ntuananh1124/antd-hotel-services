// eslint-disable-next-line
// @babel/plugin-proposal-private-property-in-object
import { Button, Modal, Tooltip, Form, InputNumber, Select, Switch, Input, message, Spin } from "antd";
import { EditOutlined } from '@ant-design/icons';
import { useState } from "react";
import { updateRoom } from "../../services/roomsService";
import './EditRoom.scss'

export default function EditRoom({record, onReload}) {
    const [messageApi, contextHolder] = message.useMessage();
    const [showModal, setShowModal] = useState(false);
    const [spinning, setSpinning] = useState(false);
    const selectOptions = [
        {
            value: 'nóng lạnh',
            label: 'Nóng lạnh'
        },
        {
            value: 'wifi',
            label: 'Wifi'
        },
        {
            value: 'ăn sáng',
            label: 'Ăn sáng'
        },
        {
            value: 'xông hơi',
            label: 'Xông hơi'
        },
        {
            value: 'massage',
            label: 'Massage'
        },
        {
            value: 'xe đưa đón',
            label: 'Xe đưa đón'
        },
        {
            value: 'buffet',
            label: 'Buffet'
        },
        {
            value: 'chăm sóc trẻ',
            label: 'Chăm sóc trẻ'
        }
    ];

    // console.log(record);

    // Reset Form sau khi submit:
    const [form] = Form.useForm(); // b1

    const rules = [
        {
            required: true,
            message: 'Bắt buộc !',
        }
    ]

    const messageCustom = (type, content) => {
        messageApi.open({
            type: type,
            content: content,
            duration: 2
        });
    };

    const handleShowModal = () => {
        setShowModal(true);
    }

    // Khi bấm Cancel, Close button ở Modal thì sẽ chạy vô đây:
    const handleCancel = () => {
        setShowModal(false);
        form.resetFields();
    }

    // Khi bấm OK ở Modal thì sẽ chạy vô đây:
    const handleOk = async (data) => {
        setSpinning(true);
        // console.log(data);
        // const response = undefined
        const response = await updateRoom(record.id, data);
        setTimeout(() => {
            if (response) {
                messageCustom("success", "Cập nhật thông tin phòng thành công");
                setShowModal(false);
                setSpinning(false);
                onReload();
            }
            else {
                messageCustom("error", "Cập nhật thông tin không thành công");
                setSpinning(false);
            } 
        }, 500)
    }

    return (
        <>
        {contextHolder}
            <Tooltip title="Chỉnh sửa phòng">
                <Button size="small" type="text" icon={<EditOutlined />} onClick={handleShowModal}/>
            </Tooltip>

            <Modal open={showModal} title="Chỉnh sửa phòng" footer={null} onCancel={handleCancel}>
                <Spin spinning={spinning} tip="Đang cập nhật">
                    <Form form={form} onFinish={handleOk} initialValues={record}> {/**trả ra 1 object có key là name và value chính là value của ô input */}
                        <Form.Item label="Tên phòng" name="roomName" rules={rules}>
                            <Input placeholder="Nhập tên phòng của bạn" allowclear="true"/>
                        </Form.Item>

                        <Form.Item label="Số lượng giường" name="bedQuantity" rules={rules}>
                            <InputNumber min={1} max={10} allowclear="true"/>
                        </Form.Item>

                        <Form.Item label="Số người tối đa" name="maxPeople"
                            rules={rules}>
                            <InputNumber min={1} max={10} allowclear="true"/>  
                        </Form.Item>

                        <Form.Item label="Ghi chú" name="note">
                            <Input.TextArea placeholder="Nhập ghi chú của bạn" allowclear="true"/>
                        </Form.Item>

                        <Form.Item label="Tiện ích" name="utilities" rules={rules}>
                            <Select
                                mode="multiple"
                                style={{width: "100%"}}
                                placeholder="Xin mời chọn các tiện ích"
                                options={selectOptions}
                                allowClear
                            />
                        </Form.Item>

                        <Form.Item label="Loại phòng" name="type" valuePropName="checked">
                            <Switch checkedChildren="VIP" unCheckedChildren="Thường" />
                        </Form.Item>

                        <Form.Item label="Trạng thái" name="status" valuePropName="checked">
                            <Switch checkedChildren="Mở phòng" unCheckedChildren="Đóng phòng" />
                        </Form.Item>

                        <Button type="primary" htmlType="submit">Cập nhật</Button>
                    </Form>
                </Spin>
            </Modal>
        </>
    )
}