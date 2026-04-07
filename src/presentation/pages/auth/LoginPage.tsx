import { authService } from "../../../application/container";
import { FloatingInput } from "../../components/inputs/FloatingInput";
import { useLogin } from "../../hook/useLogin";

export  default function LoginPage(){

    const { handleChange, handleLogin } = useLogin(authService);

    return (
        <>
            <FloatingInput value="" label="Email" onChange={handleChange} />
            <input name="password" type="password" onChange={handleChange} />
            <button onClick={handleLogin}>Login</button>
        </>
    );
}