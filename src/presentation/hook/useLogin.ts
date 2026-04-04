import { useState, type ChangeEvent } from "react";
import type { AuthService } from "../../application/services/AuthService";

export const useLogin = (authService: AuthService) => {

    const [state, setState] = useState({ email: '', password: '' })

    const handleLogin = async () => {
        const { email, password } = state;
        const user = await authService.login(email, password);
        console.log(user);
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setState(prev => ({ ...prev, [name]: value }));
    }

    return { handleLogin, handleChange }
}