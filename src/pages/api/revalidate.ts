import { NextApiRequest, NextApiResponse } from "next";
type Data = {
    revalidated: boolean;
    message?:string;
}
async function handler(req : NextApiRequest,res : NextApiResponse<Data> ) {
    if(req.query.token !== 'ferdian') return res.status(401).json({ revalidated: false });
    if(req.query.data === 'product') {
    try {
        // arah ke url yang datanya menggunakan static side generation

            await res.revalidate("/product/static");
            res.json({revalidated:true})
            
        } catch (error) {
            res.status(500).send({ revalidated:false });
        }
    }
    return res.json({ revalidated: true ,message:'berikan data untuk di revalidate'})
};

export default handler;