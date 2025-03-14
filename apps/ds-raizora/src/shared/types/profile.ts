import { RequestGetAllUserResponse } from '../modules/profile/dto';
import { getProfileById } from '../modules/profile/services';
import { create } from 'zustand';

interface UserState {
    user: RequestGetAllUserResponse | null;
    isLoading: boolean;
    error: string | null;
    fetchUser: (id: string) => Promise<void>;
}

export const useUserStore = create<UserState>((set) => ({
    user: null,
    isLoading: false,
    error: null,
    fetchUser: async (id: string) => {
        set(() => ({ isLoading: true, error: null }));
        try {
            const userData = await getProfileById(id);
            console.log(userData)
            set(() => ({ user: userData, isLoading: false }));
        } catch (error: unknown) {
            const errorMessage = error instanceof Error ? error.message : 'An unexpected error occurred';
            set(() => ({ error: errorMessage, isLoading: false }));
        }
    }
}));
