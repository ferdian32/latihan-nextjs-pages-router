import Link from "next/link";
import style from "@/views/auth/login/Login.module.css";
import { useState } from "react";
import { useRouter } from "next/router";
import { redirect } from "next/dist/server/api-utils";
import { signIn } from "next-auth/react";
// import { query } from "firebase/firestore";

const LoginView = () => {
    const [isLoading,setIsLoading] = useState<boolean>(false);
    const [error,setError] = useState<string>("");
    const {push} = useRouter();
    const HandleSubmit = async (event:any) => {
        event.preventDefault();
        setError("");
        setIsLoading(true);
        const callbackUrl = '/product';
        const data = {
            email:event.target.email.value,
            password:event.target.password.value
        };
      try {
        const res = await signIn('credentials',{
            redirect:false,
            email: data?.email,
            password: data?.password,
            callbackUrl
        })
        if(!res?.error) {
            setIsLoading(false);
            push(callbackUrl)
        }else {
            setIsLoading(false);
            // setError(res?.error)
            setError("Email or password is incorrect");
        }
      } catch (error :any) {
        setIsLoading(false);
        setError("Email or password is incorrect");
      }
    }
    return (
        <div className={style.login}>
        
        <h1 className={style.login_title}>login Page</h1>
        {error &&<p className={style.error}>{error}</p> }
        
        <div className={style.login_form}>
            <form action="" method="post" onSubmit={HandleSubmit}>
                <div className={style.form_group}>

                    <label htmlFor="email" className={style.form_label}>Email</label>
                    <input type="email" name="email" id="email" placeholder="Enter Your Email" className={style.form_input} />
                </div>
                <div className={style.form_group}>

                    <label htmlFor="password" className={style.form_label}>Password</label>
                    <input type="password" name="password" id="password" placeholder="Full Name" className={style.form_input} />
                </div>
                <button type="submit" className={style.form_button_submit} disabled={isLoading}>{isLoading ? "Loading..." : "login"}</button>
            </form>
        </div>
        <p>Have an account? Sign in <Link href={'/auth/register'} className={style.login_link}>here</Link></p>
        </div>
    )
};

export default LoginView;