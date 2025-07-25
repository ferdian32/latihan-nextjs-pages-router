import {addDoc, collection, doc, getDoc, getDocs, getFirestore, query, where} from "firebase/firestore";
import app from "./firebase";
import bcrypt from "bcrypt";

const firestore = getFirestore(app);
export const retrieveData = async(collectionName:string) => {
    const snapshot = await getDocs(collection(firestore,collectionName));
    const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
    }))
    return data;
};

export const retrieveDataById = async(collectionName:string,id:string) => {
    const snapshot = await getDoc(doc(firestore,collectionName,id));
    const data = snapshot.data();
    return data;
}

export async function signUp(
    userData: {
        email:string,
        fullname:string,
        password:string
        role ?:string;
    },
    callback:Function
) {
    const q = query(collection(firestore,"users"),where("email","==",userData?.email))
    const snapshot = await getDocs(q);
    const data = snapshot.docs.map((doc) => ({
        id: doc?.id,
        ...doc.data()
    }));
    if(data.length > 0) {
        callback({status:false,message:'Email already exists'});
    }else {
        userData.password  = await bcrypt.hash(userData.password,10);
        userData.role = "member";
        await addDoc(collection(firestore,"users"),userData).then(() => {
            callback({status:true,message:'Success'});
        }).catch((error) => {
            callback({status:false,message: error});
        });
        callback({status:false,message:'Success'});
    };
};
export async function signIn(userData:{email:string,password:string}) {
    const q = query(collection(firestore,"users"),where("email","==",userData?.email));
    const snapshot = await getDocs(q);
    const data = snapshot.docs.map((doc) => ({
        id: doc?.id,
        ...doc.data()
    }));
    if(data) {
        return data[0];
    }else {
        return null;
    }
}