let arrayList = [1,25,3,69,32,5,78,36,14,25,321,123,2,9,7,5]

function mergeSort(array){
    if(array.length < 2){
        return array
    }
    let midle = Math.round(array.length / 2)
    let leftArray = [...array].splice(0, midle)
    let rightArray = [...array].splice(midle, midle)
    return merge(mergeSort(leftArray), mergeSort(rightArray))
}
function merge(left, right){
    let mergedArray = []

    while(left.length > 0 && right.length > 0){
        if(left[0] < right[0]) {
            mergedArray.push(left.shift())
        }else{
            mergedArray.push(right.shift())
        }
    }
    return [...mergedArray, ...left, ...right]
}
console.log(arrayList)
arrayList = mergeSort(arrayList)
console.log(arrayList)