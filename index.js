function myEach (collection, alert){
    const iterateArray = array => {
        for (let i=0; i<array.length; i++){
            alert(array[i])
        }
    }
    if (Array.isArray(collection)){
        iterateArray(collection)
    } else {
        let valuesArray = Object.values(collection)
        iterateArray(valuesArray)
    }
    return collection
}

function myMap(collection, transform){
    const newArray = []
    const iterateArray = array => {
        for (let i=0; i<array.length; i++){
            newArray.push(transform(array[i]))
        }
        return newArray
    }
    if (Array.isArray(collection)){
        iterateArray(collection)
    } else {
        let valuesArray = Object.values(collection)
        iterateArray(valuesArray)
    }
    return newArray
}

function myReduce(collection, transform, acc){
    const iterateArray = array => {
        let start = 0
        if (acc === undefined){
            acc = array[0]
            start = 1
        }
        for (let i=start; i<array.length; i++){
            acc = transform(acc, array[i], collection)

        }
    }

    if(Array.isArray(collection)){
        iterateArray(collection)
    } else {
        let valuesArray = Object.values(collection)
        iterateArray(valuesArray)
    }
    return acc
}

function myFind(collection, predicate){
    let found = undefined
    const findElement = array => {
        for (let elem of array){
            if (predicate(elem)){
                return found = elem
            }
        }
    }

    if (Array.isArray(collection)){
        findElement(collection)
    } else {
        let valuesArray = Object.assign(collection)
        findElement(valuesArray)
    }
    return found
}

function myFilter(collection, predicate){
    let newArray = []

    const filterArray = array => {
        for (let val of array){
            if (predicate(val)){
                newArray.push(val)
            }
        }
    }

    if (Array.isArray(collection)){
        filterArray(collection)
    } else {
        let valuesArray = Object.values(collection)
        filterArray(valuesArray)
    }
    return newArray
}

function mySize(collection){
    if (Array.isArray(collection)){
        return collection.length
    } else {
        return Object.keys(collection).length
    }
}

function myFirst(array, int){
    if (int === undefined){
        return array[0]
    } else {
        return [...array.slice(0, int)]
    }
}

function myLast(array, int){
    if (int === undefined){
        return array[array.length - 1]
    } else {
        return [...array.slice(-int)]
    }
}

function myKeys(object){
    return Object.keys(object)
}

function myValues(object){
    return Object.values(object)
}

function mySortBy(array, callback){
    const newArray = [...array]

    newArray.sort((a, b) => {
        const aValue = callback(a)
        const bValue = callback(b)

        if (aValue<bValue){
            return -1
        } else if (aValue>bValue){
            return 1
        } else {
            return 0
        }
    })
    return newArray
}

function myFlatten(array, shallow = false, newArr = []){
    
    function nestedArray(array) {
        for (let val of array){
            if (Array.isArray(val) && !shallow){
                nestedArray(val)
            } else if (Array.isArray(val) && shallow){
                for (let elem of val){
                    newArr.push(elem)
                }
            } else {
                newArr.push(val)
            }
        }
    }
    nestedArray(array)
    return newArr
} 

