const selectionSort = (array)=>{
    for(let i=0;i < array.length; i ++)
{
    let minINdex = i
    for(let j = i +1; j <array.length; j++){
        console.log(array, array[i], array[j])
        if(array[j] < array[minINdex]){
            minINdex = j
        }
    }
    let temp = array[i];
    array[i] = array[minINdex];
    array[minINdex] = temp;
}
return array
}
console.log(selectionSort([5, 3, 8, 4, 2]))