import { useState, type ChangeEvent } from "react";
import type { AuthService } from "../../application/services/AuthService";
import { useAuthStore } from "../store/auth/useAuthStore";
import { executeWithLoading } from "../shared/executeWithLoading";

export const useLogin = (authService: AuthService) => {

    const [state, setState] = useState({ email: '', password: '' })

    const handleLogin = async () => {
        const { email, password } = state;
        const user = await executeWithLoading("login",
             () => authService.login(email, password)
        );
        console.log(user);

         useAuthStore.getState().setAuthState({
            email: user.email,
            fullname: '',
            userId: '667467',
            token: 'bhjgbubuib677vv',
        });

    };

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setState(prev => ({ ...prev, [name]: value }));
    }

    return { handleLogin, handleChange }
}