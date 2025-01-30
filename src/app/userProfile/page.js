"use client";

import useUserStore from "../store/userStore";

export default function userProfile(){
    const users = useUserStore((state) => state.users);
    return (
        <div>
            {users.map((user) => (
                <div key={user.id}>
                <p>Email: {user.email}</p>
                <p>Password: {user.password}</p>
            </div>
            ))}
        </div>
    );
}