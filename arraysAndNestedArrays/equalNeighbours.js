function equalNeighbors(arr) {
    let count = [];
    for (let i = 1; i < arr.length; i++) {
        let filteredArray = arr[i].filter((number, index) => {
            return arr[i - 1].indexOf(number, index) === index

        })
        count.push(...filteredArray)
        let filteredArray1 = arr[i - 1].filter((element, index) => {
            return element === arr[i - 1][index - 1]
        })
        count.push(...filteredArray1)
    }
    let filteredArray2 = arr[arr.length - 1].filter((element, index) => {
        return element === arr[arr.length - 1][index - 1]
    })
    count.push(...filteredArray2)

    console.log(count.length)
}