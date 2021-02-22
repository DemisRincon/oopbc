import { useState } from "react"

export const useInput = (initialValue,placeholder) => {
    const [value, setValue] = useState(initialValue)
    return [
        {
            value,
            onChange: ({ target: { value } }) => setValue(value),
            placeholder
        },
        () => setValue(initialValue)
    ]
}