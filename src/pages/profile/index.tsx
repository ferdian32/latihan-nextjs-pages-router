import { useSession } from "next-auth/react";

const ProfilePage = () => {
    const {data} : any = useSession();
    return (
        <div>
            <h1>Profile Page</h1>
            <h6>Name : {data && data?.user.fullName}</h6>
        </div>
    )
};

export default ProfilePage;