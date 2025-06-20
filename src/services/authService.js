import { formToJSON } from 'axios';
import { loginUserApi, registerUserApi, requestResetPasswordApi, resetPasswordApi } from '../api/authApi';

export const registerUserService = async (formData) => {
  try {
    const response = await registerUserApi(formData);
    return response.data; // body of the response
  } catch (error) {
    throw error.response?.data || {
       message: "Registration failed",
    }
  }
}

export const loginUserService = async (formData) => {
  try {
    const response = await loginUserApi(formData)
    return response.data  
  } catch (err) {
    throw err.response?.data || {
      message: "Login Failed",
    }
  }
}

export const requestResetPasswordService = async (formData) => {
  try {
    const response = await requestResetPasswordApi(formData)
    return response.data 
  } catch (err) {
    throw err.response?.data || {
      message: "Request Password Failed",
    }
  }
}

export const resetPasswordService = async (formData, token) => {
  try {
    const response = await resetPasswordApi(formData, token)
    return response.data  
  } catch (err) {
    throw err.response?.data || {
      message: "Reset Password Failed",
    }
  }
}