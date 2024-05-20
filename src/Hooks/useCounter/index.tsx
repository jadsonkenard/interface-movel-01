import { useState } from "react"

export default function useCount(){
    const [count, setCount] = useState(1);

    function inc() {
        setCount(count + 1)
    }

    function dec() {
        setCount(count - 1)
    }

    return [count, inc, dec]
}
