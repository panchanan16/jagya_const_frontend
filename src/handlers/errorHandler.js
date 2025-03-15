import toast from "react-hot-toast";

export function errorHandler(error) {
    console.log(error)
    toast.error(error.response.data.msg)
    return error.response.data;
}