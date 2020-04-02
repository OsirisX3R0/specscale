import { useState } from "react"

const useLocalStorage = key => {
    const [storageKey] = useState(key);

    const value = JSON.parse(localStorage.getItem(storageKey));

    const setValue = newValue => {
        localStorage.setItem(storageKey, JSON.stringify(newValue));
    }

    return [value, setValue];
}

export default useLocalStorage;