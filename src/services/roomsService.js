import { del, get, patch, post } from "../untils/request";

export const createRoom = async (options) => {
    const result = await post(`rooms`, options);
    return result;
}

export const getListRoom = async () => {
    const result = await get(`rooms`);
    return result;
}

export const deleteRoom = async (id) => {
    const result = await del(`rooms/${id}`);
    return result;
}

export const updateRoom = async (id, option) => {
    const result = await patch(`rooms/${id}`, option)
    return result;
}