let arrayList = [1,52,3,69,32,5,78,36,14,25,321,123,2,9,7,91,5,25,32,45,10]
function quickSort(array){
    if(array.length < 2){
        return array
    }
    let pivotNum = Math.round(Math.random()*(array.length-1))
    let pivot = array[pivotNum]
    let leftArray = []
    let rightArray = []
    array.forEach((element, index) => {
        if(element >= pivot && index != pivotNum){
            rightArray.push(element)
        }
        else if(element < pivot && index != pivotNum){
            leftArray.push(element)
        }

    });
    return [...quickSort(leftArray), pivot, ...quickSort(rightArray)]
    
    
}
console.log(quickSort(arrayList))