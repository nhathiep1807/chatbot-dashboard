import { useMutation } from "@tanstack/react-query";
import axiosClient from "axios-client";

const loginApi = {
  login: ({ email, password }) => {
    return axiosClient.post("/auth/login", { email, password });
  },
};

const useLogin = () => {
  return useMutation({
    mutationFn: loginApi.login,
  });
};

export const authQuery = {
  mutation: {
    useLogin,
  },
};
