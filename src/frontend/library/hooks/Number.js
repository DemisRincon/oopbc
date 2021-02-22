import { useEffect, useState } from "react"
import { Number0, Number1, Number2, Number3, Number4, Number5, Number6, Number7, Number8, Number9 } from '../constants'
export const useArrayConvertion = (number, initalValue, height = 1, width = 1) => {
    const [numbers, setNumbers] = useState(initalValue)
    const [numbersConsole, setNumbersConsole] = useState(initalValue)

    useEffect(() => {
        let array = Array.from(number)
        let newArray = []
        let arrayToConsole = []
        array.map((item) => {
            switch (item) {
                case "0":
                    newArray = [...newArray, "Cero"]
                    arrayToConsole = [...arrayToConsole, Number0(height, width)]
                    break;
                case "1":
                    newArray = [...newArray, "One"]
                    arrayToConsole = [...arrayToConsole, Number1(height, width)]
                    break;
                case "2":
                    newArray = [...newArray, "Two"]
                    arrayToConsole = [...arrayToConsole, Number2(height, width)]
                    break;
                case "3":
                    newArray = [...newArray, "Three"]
                    arrayToConsole = [...arrayToConsole, Number3(height, width)]
                    break;
                case "4":
                    newArray = [...newArray, "Four"]
                    arrayToConsole = [...arrayToConsole, Number4(height, width)]
                    break;
                case "5":
                    newArray = [...newArray, "Five"]
                    arrayToConsole = [...arrayToConsole, Number5(height, width)]
                    break;
                case "6":
                    newArray = [...newArray, "Six"]
                    arrayToConsole = [...arrayToConsole, Number6(height, width)]
                    break;
                case "7":
                    newArray = [...newArray, "Seven"]
                    arrayToConsole = [...arrayToConsole, Number7(height, width)]
                    break;
                case "8":
                    newArray = [...newArray, "Eight"]
                    arrayToConsole = [...arrayToConsole, Number8(height, width)]
                    break;
                case "9":
                    newArray = [...newArray, "Nine"]
                    arrayToConsole = [...arrayToConsole, Number9(height, width)]
                    break;
                default:
                    break;
            }
        })
        setNumbers(newArray)
        setNumbersConsole(arrayToConsole)
    }, [number, height, width])
    return [{ numbers, numbersConsole }]
}