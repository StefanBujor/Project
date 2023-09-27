import axios from "axios";

export const sendDiscount = async (phoneNum) => {
    const res = await axios.post("http://localhost:3333/sale/send", phoneNum);
    console.log(res.data);
    return res.data;
}