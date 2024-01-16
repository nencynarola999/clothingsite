import axios from "axios"
import { getbeauty, getethincfusion, getsportswear, getwesternwear } from "../slice/userslice";

export const getethincfusionApi = () => {
    return (dispatch) => {
        axios.get("http://localhost:3000/ethincfusion").then((res) => {
            dispatch(getethincfusion(res?.data));
            console.log(res.data, "res")
        })
    }
}
export const getwesternwearApi = () => {
    return (dispatch) => {
        axios.get("http://localhost:3000/westernwear").then((res) => {
            dispatch(getwesternwear(res?.data));
        })
    }

}
export const getsportswearApi = () => {
    return (dispatch) => {
        axios.get("http://localhost:3000/sportswear").then((res) => {
            dispatch(getsportswear(res?.data))
        })
    }
}