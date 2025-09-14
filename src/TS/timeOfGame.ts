import { useEffect, useState } from "react"

export function useTime() {
    const [count, setCount] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setCount(prev => prev + 1)
        }, 1000)

        return () => clearInterval(interval)
    }, [])
   

    return [Math.floor(count / 60), count% 60]
}


