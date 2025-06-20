import { loginUserService, resetPasswordService, requestResetPasswordService } from "../services/authService";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { AuthContext } from "../auth/AuthProvider";
import { useContext } from "react";
import { data } from "autoprefixer";

export const useLoginUser = () => {
    const { login } = useContext(AuthContext)
    return useMutation(
        {
            mutationFn: loginUserService,
            mutationKey: ["login-key"],
            onSuccess: (data) => { // (data) is body
                login(data?.data, data?.token)
                toast.success(data?.message || "Login Success")
            },
            onError: (err) => {
                toast.error(err?.message || "Login Failed")
            }
        }
    )
}

export const useRequestResetPassword = () => {
    return useMutation(
        {
            mutationFn: requestResetPasswordService,
            mutationKey: ["request-reset"],
            onSuccess: (data) => {
                toast.success(data?.message || "Email sent")
            },
            onError: (err) => {
                toast.error(err?.message || "Request failed")
            }
        }
    )
}

export const useResetPassword = () => {
    return useMutation(
        {
            mutationKey: ["reset-password"],
            mutationFn: ({ data, token }) => resetPasswordService(data, token),
            onSuccess: (data) => {
                toast.success(data?.message || "Reset successful")
            },
            onError: (err) => {
                toast.err(err?.message || "Reset failed")
            }
        }
    )
}