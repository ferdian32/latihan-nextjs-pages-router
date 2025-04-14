import { useSession } from "next-auth/react";

const ProfilePage = () => {
    const number = 30;
    console.log(number)
    const {data} : any = useSession();
    return (
        <div>
            <h1>Profile Page</h1>
            <h6>Name : {data && data?.user.fullName}</h6>
        </div>
    )
};

export default ProfilePage;