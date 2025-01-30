import {create} from "zustand";

const useUserStore = create((set) => ({
    users: [],
    addUsers: (user) => 
        set((state) => ({
            users: [
                {email: user.email, id: Math.random()* 100, password: user.password}, 
                ... state.users,
            ]
        })),
        
}));

export default useUserStore;