import { Servics } from "../apiCLient/services.ts";
export async function AddTime(name:any ,time:any) {
    try{
        const servics = Servics("/resultgame")
        console.log(name);
        
        const data = { "name":name,"allTime": time }
        await servics.post("/addresultgame",data)
    }catch(err){
        console.log(err);
        return
    }
}