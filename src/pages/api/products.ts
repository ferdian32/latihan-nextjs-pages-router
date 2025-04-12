import { retrieveData } from "@/utils/db/service";
import { NextApiRequest, NextApiResponse } from "next";

type initialTypeProduct = {
    status : number;
    statusCode : boolean;
    data : any;
}
export default async function handler(req : NextApiRequest, res : NextApiResponse<initialTypeProduct>) {
    const Data = await retrieveData('products');
    res.status(200).json({status : 200, data: Data,statusCode:true});
}