// import { useState } from "react";
// import { registerUserService } from "../services/authService";

// export const useRegisterUser = () => {
//     const [isLoading, setIsLoading] = useState(false);
//     const [error, setError] = useState(null);
//     const [data, setData] = useState(null);

//     const register = async (formData) => {
//         // when user click an event 
//         setIsLoading(true)
//         setError(null) // clear state
//         setData(null) // clear state

//         try {
//             const response = await registerUserService(formData)
//             setData(response)
//             return response
//         } catch (err) {
//             setError(err)
//             return null
//         } finally {
//             setIsLoading(false)
//         }
//     }

//     return {
//         register,
//         isLoading,
//         data,
//         error
//     }
// }

import { registerUserService } from "../services/authService";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";

export const useRegisterUser = () => {
    return useMutation(
        {
            mutationFn: registerUserService,
            mutationKey: ["register-key"],
            onSuccess: (data) => {
                toast.success(data?.message || "Registration Success")
            },
            onError: (err) => {
                toast.error(err?.message || "Registration Failed")
            }
        }
    )
}