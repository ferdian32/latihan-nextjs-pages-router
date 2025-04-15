import Link from "next/link";
import style from "@/views/auth/register/register.module.css";
import { useState } from "react";
import { useRouter } from "next/router";

const RegisterView = () => {
    const [isLoading,setIsLoading] = useState<boolean>(false);
    const [error,setError] = useState<string>("");
    const {push} = useRouter();
    const HandleSubmit = async (event:any) => {
        event.preventDefault();
        setError("");
        setIsLoading(true);
        const data = {
            email:event.target.email.value,
            fullname:event.target.fullname.value,
            password:event.target.password.value
        };
        const result = await fetch('/api/register',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(data)
        });
        if(result.status === 200) {
            event.target.reset();
            setIsLoading(false)
            push('/auth/login');
        }else {
            setIsLoading(false);
            setError(result.status === 400 ? "Email already exists":"")
        }
    }
    return (
        <div className={style.register}>
        
        <h1 className={style.register_title}>Register Page</h1>
        {error &&<p className={style.error}>{error}</p> }
        
        <div className={style.register_form}>
            <form action="" method="post" onSubmit={HandleSubmit}>
                <div className={style.form_group}>

                    <label htmlFor="email" className={style.form_label}>Email</label>
                    <input type="email" name="email" id="email" placeholder="Enter Your Email" className={style.form_input} />
                </div>
                <div className={style.form_group}>

                    <label htmlFor="fullname" className={style.form_label}>FullName</label>
                    <input type="text" name="fullname" id="fullname" placeholder="Full Name" className={style.form_input} />
                </div>
                <div className={style.form_group}>

                    <label htmlFor="password" className={style.form_label}>Password</label>
                    <input type="password" name="password" id="password" placeholder="Full Name" className={style.form_input} />
                </div>
                <button type="submit" className={style.form_button_submit} disabled={isLoading}>{isLoading ? "Loading..." : "Register"}</button>
            </form>
        </div>
        <p>Have an account? Sign in <Link href={'/auth/login'} className={style.register_link}>here</Link></p>
        </div>
    )
};

export default RegisterView;