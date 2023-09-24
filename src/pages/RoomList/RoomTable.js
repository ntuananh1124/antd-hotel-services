import { Table, Badge, Tag, Tooltip, message } from "antd"
import DeleteRoom from "./DeleteRoom";
import EditRoom from "./EditRoom";

export default function RoomTable({rooms, onReload}) {
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
    
    const dataSource = rooms.map((roomItem, roomIndex) => {
        return {
            id: roomItem.id,
            roomName: roomItem.roomName,
            bedQuantity: roomItem.bedQuantity,
            maxPeople: roomItem.maxPeople,
            note: roomItem.note,
            type: roomItem.type,
            status: roomItem.status,
            utilities: roomItem.utilities
        }
    })

    const columns = [
        {
            title: 'Tên phòng',
            dataIndex: 'roomName',
            key: 'roomName',
        },
        {
            title: 'Số giường',
            dataIndex: 'bedQuantity',
            key: 'bedQuantity',
        },
        {
            title: 'Phòng dành cho (người)',
            dataIndex: 'maxPeople',
            key: 'maxPeople',
        },
        {
            title: 'Loại phòng',
            dataIndex: 'type',
            key: 'type',
            render: (_, record) => {
                // console.log(record);
                return <>
                    {record.type ? (
                    <>
                        <Tooltip placement="top" title="Phòng VIP chuẩn 5 sao">
                            <Tag color="warning">VIP</Tag>
                        </Tooltip>
                    </>
                    ) : (
                    <>
                        <Tooltip placement="top" title="Phòng Thường chuẩn 3 sao">
                            <Tag color="default">Thường</Tag>
                        </Tooltip>
                    </>
                    )}
                </>
            }
        },
        {
            title: 'Tình trạng',
            dataIndex: 'status',
            key: 'status',
            render: (_, record) => {
                return <>
                    {record.status ? (<Badge status="success" text="Còn phòng" />) : (<Badge status="error" text="Hết phòng" />)}
                </>
            }
        },
        {
            title: 'Hành động',
            dataIndex: 'actions',
            key: 'actions',
            render: (_, record) => { // record là dữ liệu trả về từ dataSource
                // console.log(record);
                return <>
                    <DeleteRoom record={record} onReload={onReload} onMessage={messageCustom}/>
                    <EditRoom record={record} onReload={onReload}  />
                </>
            }
        }
    ];

    return (
        <>
            {contextHolder}
            <Table dataSource={dataSource} columns={columns} />
        </>
    )
}