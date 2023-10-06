

export const sleep = async (duration: number) => new Promise<void>(
    resolve => setTimeout(() => {
        resolve()
    }, duration)
)

export const isIn = (element: any, array: any[] | undefined, property?: string | undefined) => {
    if (array === undefined)
        return false
    if (property) {

        if (typeof array.find(theElement => theElement[property] === element) !== "undefined")
            return true
        else
            return false

    } else {

        if (typeof array.find(theElement => theElement === element) !== "undefined")
            return true
        else
            return false

    }

}

