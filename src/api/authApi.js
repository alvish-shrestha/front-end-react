import { data } from "autoprefixer";
import axios from "./api";

export const registerUserApi = (data) => axios.post("/auth/register", data)
export const loginUserApi = (data) => axios.post("/auth/login", data)

export const requestResetPasswordApi = (data) =>
    axios.post("/auth/request-reset", data)

export const resetPasswordApi = (data) =>
    axios.post("/auth/reset-password/" + token, data)