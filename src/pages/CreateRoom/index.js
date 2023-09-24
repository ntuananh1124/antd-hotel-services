import { Button, Form, Input, InputNumber, Switch, message } from "antd";
import { Select } from 'antd';
import { createRoom } from "../../services/roomsService"

export default function CreateRoom() {
    const [messageApi, contextHolder] = message.useMessage();
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

    // Reset Form sau khi submit:
    const [form] = Form.useForm(); // b1

    const handleSubmit = async (dataObject) => {
        const roomDetails = await createRoom(dataObject);
        if (roomDetails) {
            // console.log(roomDetails);
            messageCustom('success','Bạn đã tạo phòng thành công !')
            form.resetFields(); // b2: set attribute form={Form} ở <Form>, b3: gọi đến method resetFields
        }
        else {
            // console.log(dataObject)
            messageCustom('error', 'Tạo phòng thất bại !')
        }
    }
    return (
        <>
            {contextHolder}
            <h2>Tạo phòng mới</h2>
            <Form form={form} onFinish={handleSubmit}> {/**trả ra 1 object có key là name và value chính là value của ô input */}
                <Form.Item label="Tên phòng" name="roomName"
                    rules={rules}>
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

                {/**Button Submit */}
                <Button type="primary" htmlType="submit">Tạo mới</Button>
            </Form>
        </>
    )
}