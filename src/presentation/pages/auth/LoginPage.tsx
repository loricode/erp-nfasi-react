import { authService } from "../../../application/container";
import { useLogin } from "../../hook/useLogin";

export const LoginPage = () => {

    const { handleChange, handleLogin } = useLogin(authService);

    return (
        <>
            <input name="email" onChange={handleChange} />
            <input name="password" type="password" onChange={handleChange} />
            <button onClick={handleLogin}>Login</button>
        </>
    );
}