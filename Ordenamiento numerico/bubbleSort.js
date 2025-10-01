#sigue evaluando elementos ya ordenados
const bubbleSort = (arr)=>{
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr.length - 1; j++){
            console.log(arr, arr[j], arr[j+1])
            if(arr[j]> arr[j+1]){
                let temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
            }
        }
    }
    return arr
}
#no evalúa elementos ordenados
function bubbleSort2(arr){
  for(let i = 0; i <= arr.length;i++){
     for(let j = 0; j<= arr.length-i;j++){
        if(arr[j] > arr[j+1]){
             let temp = arr[j]
             arr[j] = arr[j+1]
             arr[j+1] = temp
          }
       }
    }
  return arr
}



console.log(bubbleSort([5, 3, 8, 4, 2]))