import { useState } from 'react'

function useName() {
    const [name, setName] = useState<string>('User')
    return { name, setName }
}

export default useName