// @babel/plugin-proposal-private-property-in-object
import { useEffect, useState } from 'react';
import { getListRoom } from '../../services/roomsService';
import RoomGrid from './RoomGrid';
import { Button } from 'antd';
import { AppstoreOutlined, TableOutlined } from '@ant-design/icons';
import RoomTable from './RoomTable';


export default function RoomList() {
    const [rooms, setRoom] = useState([]);
    const [isGrid, setGrid] = useState(true);

    const handleClick = () => {
        setGrid(!isGrid)
    }

    const fetchApi = async () => {
        const response = await getListRoom();
        setRoom(response);
        // console.log(response);
    };

    useEffect(() => {
        fetchApi();
    }, []);

    const handleReload = () => {
        fetchApi();
    }

    return (
        <>
            {isGrid ? (<>
                <Button type='default' onClick={handleClick} icon={<TableOutlined />}>Xem dạng bảng</Button>
                <RoomGrid rooms={rooms} onReload={handleReload}/>
            </>) : (<>
                <Button type='default' onClick={handleClick} icon={<AppstoreOutlined />}>Xem dạng lưới</Button>
                <RoomTable rooms={rooms} onReload={handleReload}/>
            </>)}
        </>
    )
}