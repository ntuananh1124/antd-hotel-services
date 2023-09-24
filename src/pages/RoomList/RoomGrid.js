import { Card, Col, Row, Badge, message } from 'antd';
import DeleteRoom from './DeleteRoom';
import './RoomGrid.scss';

export default function RoomGrid({rooms, onReload}) {
    // message component:
    const [messageApi, contextHolder] = message.useMessage();
    // Custom lại hàm của Message:
    const messageCustom = (type, content) => {
        messageApi.open({
            type: type,
            content: content,
            duration: 2
        });
    };

    return (
        <>
        {contextHolder}
            {rooms.length > 0 ? (
                <Row gutter={[20,20]}>
                    {rooms.map((roomItem, roomIndex) => {
                        let status = "";
                        let text = "";
                        if (roomItem.status === true) {
                            status = "success";
                            text = "Còn phòng";
                        }
                        else {
                            status = "error";
                            text = "Hết phòng";
                        }
                        return (
                            <Col span={6} key={roomItem.id}>
                                <Badge.Ribbon color={roomItem.type ? "yellow" : "gray"} size="small" text={roomItem.type ? "VIP" : "Thường"} placement="end">
                                    <Card title={roomItem.roomName}>
                                        <p>Số giường: <strong>{roomItem.bedQuantity}</strong></p>
                                        <p>Số người: <strong>{roomItem.maxPeople}</strong></p>
                                        <p><Badge status={status} text={text}/></p>
                                        <div className='room__actions'>
                                            <DeleteRoom onReload={onReload} id={roomItem.id} onMessage={messageCustom}/>
                                        </div>
                                    </Card>
                                </Badge.Ribbon>
                            </Col>)
                        })}
                </Row>
            ) : (
                <>
                    <h2>Chưa có phòng</h2>
                </>
            )}
        </>
    )
}