import { post } from "../untils/request";

export const postData = async (options) => {
    const result = await post(`book-room`, options);
    return result;
}