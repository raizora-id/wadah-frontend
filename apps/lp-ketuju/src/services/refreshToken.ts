import { axiosClient } from '../api/axiosClient';

interface ILogin {
    username: string;
    password: string;
    expiresInMins?: number; // optional
}

export const login = (payload: ILogin) => {
    return axiosClient.post(`/auth/login`, payload, {});
};
