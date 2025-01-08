import { useEffect, useState } from "react";

export function useLocalStorage(key, initialData) {
    const [storageData, setStorageData] = useState(initialData)
    
    
    useEffect(() => {
        const existingData = JSON.parse(localStorage.getItem(key))

        if (existingData) {
            setStorageData(existingData)
        } else {
            localStorage.setItem(key, JSON.stringify(initialData))
        }
    }, [])


    const updateLocalStorage = (newData) => {
        if (typeof newData === 'function'){
        localStorage.setItem(key, JSON.stringify(newData(storageData)))
        } else {
            localStorage.setItem(key, JSON.stringify(newData))
        }
        setStorageData(newData)
    }
    return [storageData, updateLocalStorage]
}