import { useEffect, useState } from "react"
import { Servics } from "../apiCLient/services"

export function useFromServer(fromRouter:string,url:string) {
    const [riddles, setData] = useState<any[]>([])
    
    useEffect(() => {
        const getData = async () => {
            
            const crud = Servics(fromRouter)
            const riddles = await crud.get(url)
            setData(riddles)
        }
        getData()
    }, [])
    return riddles
}