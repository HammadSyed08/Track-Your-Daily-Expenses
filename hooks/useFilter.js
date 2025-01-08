import { useState } from "react"
import { useLocalStorage } from "./useLocalStorage"

export const useFilter = (data, callBack) => {

    const [filterItem, setFilterItem] = useLocalStorage('filterItem','')

    // console.log(callBack);

    const filterData = data.filter((expense) => 
        callBack(expense).toLowerCase().includes(filterItem))

    return [filterData, setFilterItem]
}