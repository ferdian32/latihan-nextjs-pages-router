import { retrieveData, retrieveDataById } from "@/utils/db/service";
import { NextApiRequest, NextApiResponse } from "next";

type initialTypeProduct = {
    status : number;
    statusCode : boolean;
    data : any;
}
export default async function handler(req : NextApiRequest, res : NextApiResponse<initialTypeProduct>) {
    const query = req.query.products ? req.query.products[1] : "";
    // atau bisa juga dengan menambahkan ! contoh seperti req.query.products![1]
    if(query) {
        const Data = await retrieveDataById('products',query);
        res.status(200).json({status : 200, data: Data,statusCode:true});
    }else {

        const Data = await retrieveData('products');
        res.status(200).json({status : 200, data: Data,statusCode:true});
    }
}