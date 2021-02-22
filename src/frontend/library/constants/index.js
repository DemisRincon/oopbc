const newNumber = (number, height, width) => {
    if (width > 1) {
        number.map(item => {
            for (let index = 1; index < width; index++) {
                item.splice(2, 0, item[1])
            }
        })
    }

    if (height > 1) {
        const newArr = (num) => num.map((item, index) => {
            if (index === 0 || index === number[1].length - 1) {
                return item
            }
            else {
                return "\u00A0 \u00A0"
            }
        })
        for (let index = 1; index < height; index++) {
            number.splice(1, 0, newArr(number[1]))
            number.splice(number.length - 1, 0, newArr(number[number.length - 1]))
        }
    }
    return number
}


export const Number0 = (height, width) => {

    let number = [
        ["\u00A0", "_", "\u00A0"],
        ["|", "\u00A0 \u00A0", "|"],
        ["|", "_", "|"]
    ]

    const newNumberToShow = newNumber(number, height, width)

    return newNumberToShow
}
export const Number1 = (height, width) => {

    let number = [
        ["\u00A0", "\u00A0", "\u00A0"],
        ["\u00A0", "\u00A0", "|"],
        ["\u00A0", "\u00A0", "|"]
    ]
    const newNumberToShow = newNumber(number, height, width)

    return newNumberToShow
}
export const Number2 = (height, width) => {

    let number = [
        ["\u00A0", "_", "\u00A0"],
        ["\u00A0", "_", "|"],
        ["|", "_", "\u00A0"]
    ]
    const newNumberToShow = newNumber(number, height, width)

    return newNumberToShow
}
export const Number3 = (height, width) => {

    let number = [
        ["\u00A0", "_", "\u00A0"],
        ["\u00A0", "_", "|"],
        ["\u00A0", "_", "|"]
    ]
    const newNumberToShow = newNumber(number, height, width)

    return newNumberToShow
}
export const Number4 = (height, width) => {

    let number = [
        ["\u00A0", "\u00A0", "\u00A0"],
        ["|", "_", "|"],
        ["\u00A0 ", "\u00A0 \u00A0",  "|"]
    ]
    const newNumberToShow = newNumber(number, height, width)

    return newNumberToShow
}
export const Number5 = (height, width) => {

    let number = [
        ["\u00A0", "_", "\u00A0"],
        ["|", "_", " "],
        ["\u00A0", "_", "|"]
    ]
    const newNumberToShow = newNumber(number, height, width)

    return newNumberToShow
}
export const Number6 = (height, width) => {

    let number = [
        ["", "_", "\u00A0"],
        ["|", "_", "\u00A0 "],
        ["|", "_", "|"]
    ]
    const newNumberToShow = newNumber(number, height, width)

    return newNumberToShow
}
export const Number7 = (height, width) => {

    let number = [
        ["\u00A0", "_", "\u00A0"],
        ["\u00A0", "\u00A0 \u00A0", "|"],
        ["\u00A0", "\u00A0 \u00A0", "|"]
    ]
    const newNumberToShow = newNumber(number, height, width)

    return newNumberToShow
}
export const Number8 = (height, width) => {

    let number = [
        ["", "_", ""],
        ["|", "_", "|"],
        ["|", "_", "|"]
    ]
    const newNumberToShow = newNumber(number, height, width)

    return newNumberToShow
}
export const Number9 = (height, width) => {

    let number = [
        ["", "_", ""],
        ["|", "_", "|"],
        ["\u00A0", "_", "|"]
    ]
    const newNumberToShow = newNumber(number, height, width)

    return newNumberToShow
} 