import { Button, Popconfirm, Tooltip } from "antd";
import { DeleteOutlined } from '@ant-design/icons';
import { deleteRoom } from "../../services/roomsService";

export default function DeleteRoom({record, onReload, id, onMessage}) {
    const handleDelete = async () => {
        const response = await deleteRoom(id || record.key);
        if (response) {
            onReload();
            onMessage('success', 'Xóa phòng thành công!')
        }
        else onMessage('error', 'Xóa phòng không thành công!')
    }

    return (
        <>
            <Popconfirm title="Bạn có chắc muốn xóa phòng này?" onConfirm={handleDelete}>
                <Tooltip title="Xóa phòng" color="red">
                    <Button size="small" danger icon={<DeleteOutlined />}/>
                </Tooltip>
            </Popconfirm>
        </>
    )
}