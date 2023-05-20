import React, { useState, useEffect } from 'react'
import Button from './Button'
import Dropdown from './Dropdown'
import Slider from './Slider'
import './Visualizer.css'
const ARRAYSIZE = 16
const Visualizer = () => {
    const [primaryArray, setPrimaryArray] = useState([])
    const [algorithm, setAlgorithm] = useState('bubbleSort')
    const [animationSpeed, setAnimationSpeed] = useState(50)
    const [disableOptions, setDisableOptions] = useState(false)

    
  const generateArray=()=>{
    const values=[]
     for(let i=0;i<ARRAYSIZE;i++)
     {
        let x = Math.floor((Math.random() * 70) + 1);
        values.push(x)
     }
    setPrimaryArray(values)
  }  

  const sleep = (milliSeconds) => {
    return new Promise((resolve) => setTimeout(resolve, milliSeconds))
  }

  const handleSorting = () => {
    setDisableOptions(true)
    switch (algorithm) {
      case 'bubbleSort':
        bubbleSort()
        break
      case 'selectionSort':
        selectionSort()
        break
      case 'insertionSort':
        insertionSort()
        break
      case 'mergeSort':
        mergeSort()
        break
      case 'quickSort':
        quickSort()
        break
      case 'heapSort':
        heapSort()
        break
      default:
        break
    }
  }
  
  const finishedAnimation = async () => {
    for (let i = 0; i < primaryArray.length; i++) {
      document.getElementById(i).childNodes[2].childNodes[0].style.backgroundColor= 'green'
      document.getElementById(i).childNodes[3].childNodes[0].style.backgroundColor= 'green'
      document.getElementById(i).childNodes[4].childNodes[0].style.backgroundColor= 'green'
      document.getElementById(i).childNodes[5].childNodes[0].style.backgroundColor= 'green'       

      await sleep(animationSpeed)
    }
    // await sleep(5000)
    setDisableOptions(false)
    // window.location.reload()
  }

// bubble
const bubbleSort=async()=>{
 let currentArr = primaryArray
 let sorted = false
 setAlgorithm({ name: 'Bubble Sort', timeComplexity: 'O(n^2)' })

 while (!sorted) {
   sorted = true
   for (let i = 0; i < currentArr.length ; i++) {
     for (let j = 0; j < currentArr.length - i - 1; j++) {
       if (currentArr[j] > currentArr[j + 1]) {
         let temp = currentArr[j]
         currentArr[j] = currentArr[j + 1]
         currentArr[j + 1] = temp
         setPrimaryArray([...primaryArray, currentArr])
    
         document.getElementById(j).childNodes[2].childNodes[0].style.backgroundColor= '#6A5ACD'
         document.getElementById(j).childNodes[3].childNodes[0].style.backgroundColor= '#6A5ACD'
         document.getElementById(j).childNodes[4].childNodes[0].style.backgroundColor= '#6A5ACD'
         document.getElementById(j).childNodes[5].childNodes[0].style.backgroundColor= '#6A5ACD'       
   
         document.getElementById(j+1).childNodes[2].childNodes[0].style.backgroundColor='#DC143C'
         document.getElementById(j+1).childNodes[3].childNodes[0].style.backgroundColor= '#DC143C'
         document.getElementById(j+1).childNodes[4].childNodes[0].style.backgroundColor='#DC143C'
         document.getElementById(j+1).childNodes[5].childNodes[0].style.backgroundColor= '#DC143C'


         await sleep(animationSpeed)
      
         document.getElementById(j).childNodes[2].childNodes[0].style.backgroundColor= 'orange'
         document.getElementById(j).childNodes[3].childNodes[0].style.backgroundColor= 'orange'
         document.getElementById(j).childNodes[4].childNodes[0].style.backgroundColor= 'orange'
         document.getElementById(j).childNodes[5].childNodes[0].style.backgroundColor='orange'       
   
         document.getElementById(j+1).childNodes[2].childNodes[0].style.backgroundColor= 'orange'
         document.getElementById(j+1).childNodes[3].childNodes[0].style.backgroundColor= 'orange'
         document.getElementById(j+1).childNodes[4].childNodes[0].style.backgroundColor= 'orange'
         document.getElementById(j+1).childNodes[5].childNodes[0].style.backgroundColor= 'orange'

         sorted = false
       }
     }
   }
   if (sorted) finishedAnimation()
 }
}
// insertion
const insertionSort=async()=>{
 console.log("insertion")
 let currentArr = primaryArray
 let sorted = false
 setAlgorithm({ name: 'Insertion Sort', timeComplexity: 'O(n^2)' })

 while (!sorted) {
   sorted = true

   for (let i = 1; i < currentArr.length; i++) {
     let current = currentArr[i]
     let j = i - 1
     while (j >= 0 && currentArr[j] > current) {
       currentArr[j + 1] = currentArr[j]
       setPrimaryArray([...primaryArray, currentArr])

       document.getElementById(j).childNodes[2].childNodes[0].style.backgroundColor= '#6A5ACD'
       document.getElementById(j).childNodes[3].childNodes[0].style.backgroundColor= '#6A5ACD'
       document.getElementById(j).childNodes[4].childNodes[0].style.backgroundColor= '#6A5ACD'
       document.getElementById(j).childNodes[5].childNodes[0].style.backgroundColor= '#6A5ACD'       
 
       document.getElementById(j+1).childNodes[2].childNodes[0].style.backgroundColor='#DC143C'
       document.getElementById(j+1).childNodes[3].childNodes[0].style.backgroundColor= '#DC143C'
       document.getElementById(j+1).childNodes[4].childNodes[0].style.backgroundColor='#DC143C'
       document.getElementById(j+1).childNodes[5].childNodes[0].style.backgroundColor= '#DC143C'

       await sleep(animationSpeed)

       document.getElementById(j).childNodes[2].childNodes[0].style.backgroundColor= 'orange'
         document.getElementById(j).childNodes[3].childNodes[0].style.backgroundColor= 'orange'
         document.getElementById(j).childNodes[4].childNodes[0].style.backgroundColor= 'orange'
         document.getElementById(j).childNodes[5].childNodes[0].style.backgroundColor='orange'       
   
         document.getElementById(j+1).childNodes[2].childNodes[0].style.backgroundColor= 'orange'
         document.getElementById(j+1).childNodes[3].childNodes[0].style.backgroundColor= 'orange'
         document.getElementById(j+1).childNodes[4].childNodes[0].style.backgroundColor= 'orange'
         document.getElementById(j+1).childNodes[5].childNodes[0].style.backgroundColor= 'orange'

       j--
       sorted = false
      
     }
     currentArr[j + 1] = current
     setPrimaryArray([...primaryArray, currentArr])
    //  
   }
   if (sorted) finishedAnimation()
 }
}
// selection
const selectionSort=async()=>{
    console.log("selection")
    let currentArr = primaryArray
    let sorted = false
    setAlgorithm({ name: 'Selection Sort', timeComplexity: 'O(n^2)' })

    while (!sorted) {
      sorted = true

      for (let i = 0; i < currentArr.length - 1; i++) {
        for (let j = i + 1; j < currentArr.length; j++) {
          if (currentArr[i] > currentArr[j]) {
            let swap1 = currentArr[i]
            let swap2 = currentArr[j]
            currentArr[i] = swap2
            currentArr[j] = swap1
            setPrimaryArray([...primaryArray, currentArr])

            document.getElementById(j).childNodes[2].childNodes[0].style.backgroundColor= '#6A5ACD'
            document.getElementById(j).childNodes[3].childNodes[0].style.backgroundColor= '#6A5ACD'
            document.getElementById(j).childNodes[4].childNodes[0].style.backgroundColor= '#6A5ACD'
            document.getElementById(j).childNodes[5].childNodes[0].style.backgroundColor= '#6A5ACD'       
      
            document.getElementById(i).childNodes[2].childNodes[0].style.backgroundColor='#DC143C'
            document.getElementById(i).childNodes[3].childNodes[0].style.backgroundColor= '#DC143C'
            document.getElementById(i).childNodes[4].childNodes[0].style.backgroundColor='#DC143C'
            document.getElementById(i).childNodes[5].childNodes[0].style.backgroundColor= '#DC143C'

            await sleep(animationSpeed)


            document.getElementById(j).childNodes[2].childNodes[0].style.backgroundColor= '#FF7F50'
            document.getElementById(j).childNodes[3].childNodes[0].style.backgroundColor= '#FF7F50'
            document.getElementById(j).childNodes[4].childNodes[0].style.backgroundColor= '#FF7F50'
            document.getElementById(j).childNodes[5].childNodes[0].style.backgroundColor= '#FF7F50'       
      
            document.getElementById(i).childNodes[2].childNodes[0].style.backgroundColor='#FF7F50'
            document.getElementById(i).childNodes[3].childNodes[0].style.backgroundColor= '#FF7F50'
            document.getElementById(i).childNodes[4].childNodes[0].style.backgroundColor='#FF7F50'
            document.getElementById(i).childNodes[5].childNodes[0].style.backgroundColor= '#FF7F50'

            sorted = false
          }
        }
      }
      if (sorted) finishedAnimation()
    }
}
// merge
const mergeSort=async()=>{
    console.log("merge")
    let currentArr = primaryArray
    setAlgorithm({ name: 'Merge Sort', timeComplexity: 'O(n log(n))' })

    await sort(currentArr, 0, currentArr.length - 1)
    finishedAnimation()
}
const sort = async (arr, low, high) => {
  if (low < high) {
    let mid = Math.floor((low + high) / 2)
    await sort(arr, low, mid)
    await sort(arr, mid + 1, high)
    await merge(arr, low, mid, high)
  }
}


const merge = async (arr, low, mid, high) => {
  let i = low
  let j = mid + 1
  let k = 0
  let tempArr = []

  while (i <= mid && j <= high) {
    if (arr[i] < arr[j]) {
      tempArr[k] = arr[i]
      i++
      k++
    } else {
      tempArr[k] = arr[j]
      j++
      k++
    }
    setPrimaryArray([...primaryArray, tempArr])

    document.getElementById(j).childNodes[2].childNodes[0].style.backgroundColor= '#6A5ACD'
    document.getElementById(j).childNodes[3].childNodes[0].style.backgroundColor= '#6A5ACD'
    document.getElementById(j).childNodes[4].childNodes[0].style.backgroundColor= '#6A5ACD'
    document.getElementById(j).childNodes[5].childNodes[0].style.backgroundColor= '#6A5ACD'       

    document.getElementById(i).childNodes[2].childNodes[0].style.backgroundColor='#DC143C'
    document.getElementById(i).childNodes[3].childNodes[0].style.backgroundColor= '#DC143C'
    document.getElementById(i).childNodes[4].childNodes[0].style.backgroundColor='#DC143C'
    document.getElementById(i).childNodes[5].childNodes[0].style.backgroundColor= '#DC143C'


    await sleep(animationSpeed)

    document.getElementById(j).childNodes[2].childNodes[0].style.backgroundColor= '#FF7F50'
    document.getElementById(j).childNodes[3].childNodes[0].style.backgroundColor= '#FF7F50'
    document.getElementById(j).childNodes[4].childNodes[0].style.backgroundColor= '#FF7F50'
    document.getElementById(j).childNodes[5].childNodes[0].style.backgroundColor= '#FF7F50'       

    document.getElementById(i).childNodes[2].childNodes[0].style.backgroundColor='#FF7F50'
    document.getElementById(i).childNodes[3].childNodes[0].style.backgroundColor= '#FF7F50'
    document.getElementById(i).childNodes[4].childNodes[0].style.backgroundColor='#FF7F50'
    document.getElementById(i).childNodes[5].childNodes[0].style.backgroundColor= '#FF7F50'

    // ()
  }

  while (i <= mid) {
    tempArr[k] = arr[i]

    setPrimaryArray([...primaryArray, tempArr])

    document.getElementById(j).childNodes[2].childNodes[0].style.backgroundColor= '#6A5ACD'
    document.getElementById(j).childNodes[3].childNodes[0].style.backgroundColor= '#6A5ACD'
    document.getElementById(j).childNodes[4].childNodes[0].style.backgroundColor= '#6A5ACD'
    document.getElementById(j).childNodes[5].childNodes[0].style.backgroundColor= '#6A5ACD'       

    document.getElementById(i).childNodes[2].childNodes[0].style.backgroundColor='#DC143C'
    document.getElementById(i).childNodes[3].childNodes[0].style.backgroundColor= '#DC143C'
    document.getElementById(i).childNodes[4].childNodes[0].style.backgroundColor='#DC143C'
    document.getElementById(i).childNodes[5].childNodes[0].style.backgroundColor= '#DC143C'


    await sleep(animationSpeed)

    document.getElementById(j).childNodes[2].childNodes[0].style.backgroundColor= '#FF7F50'
    document.getElementById(j).childNodes[3].childNodes[0].style.backgroundColor= '#FF7F50'
    document.getElementById(j).childNodes[4].childNodes[0].style.backgroundColor= '#FF7F50'
    document.getElementById(j).childNodes[5].childNodes[0].style.backgroundColor= '#FF7F50'       

    document.getElementById(i).childNodes[2].childNodes[0].style.backgroundColor='#FF7F50'
    document.getElementById(i).childNodes[3].childNodes[0].style.backgroundColor= '#FF7F50'
    document.getElementById(i).childNodes[4].childNodes[0].style.backgroundColor='#FF7F50'
    document.getElementById(i).childNodes[5].childNodes[0].style.backgroundColor= '#FF7F50'

    // ()

    i++
    k++
  }

  while (j <= high) {
    tempArr[k] = arr[j]

    setPrimaryArray([...primaryArray, tempArr])

    document.getElementById(j).childNodes[2].childNodes[0].style.backgroundColor= '#6A5ACD'
    document.getElementById(j).childNodes[3].childNodes[0].style.backgroundColor= '#6A5ACD'
    document.getElementById(j).childNodes[4].childNodes[0].style.backgroundColor= '#6A5ACD'
    document.getElementById(j).childNodes[5].childNodes[0].style.backgroundColor= '#6A5ACD'       

    document.getElementById(i).childNodes[2].childNodes[0].style.backgroundColor='#DC143C'
    document.getElementById(i).childNodes[3].childNodes[0].style.backgroundColor= '#DC143C'
    document.getElementById(i).childNodes[4].childNodes[0].style.backgroundColor='#DC143C'
    document.getElementById(i).childNodes[5].childNodes[0].style.backgroundColor= '#DC143C'


    await sleep(animationSpeed)

    document.getElementById(j).childNodes[2].childNodes[0].style.backgroundColor= '#FF7F50'
    document.getElementById(j).childNodes[3].childNodes[0].style.backgroundColor= '#FF7F50'
    document.getElementById(j).childNodes[4].childNodes[0].style.backgroundColor= '#FF7F50'
    document.getElementById(j).childNodes[5].childNodes[0].style.backgroundColor= '#FF7F50'       

    document.getElementById(i).childNodes[2].childNodes[0].style.backgroundColor='#FF7F50'
    document.getElementById(i).childNodes[3].childNodes[0].style.backgroundColor= '#FF7F50'
    document.getElementById(i).childNodes[4].childNodes[0].style.backgroundColor='#FF7F50'
    document.getElementById(i).childNodes[5].childNodes[0].style.backgroundColor= '#FF7F50'

    // ()

    j++
    k++
  }

  for (let i = low; i <= high; i++) {
    arr[i] = tempArr[i - low]
    setPrimaryArray([...primaryArray, arr])
    // 
  }
}

// quick
const quickSort=async()=>{
  console.log("quick")
  setAlgorithm({ name: 'Quick Sort', timeComplexity: 'O(n log(n))' })
  let currentArr = primaryArray

  await sorts(currentArr, 0, currentArr.length - 1)
  finishedAnimation()
}

const sorts = async (arr, left, right) => {
  if (left < right) {
    let partitionIndex = partition(arr, left, right)

    setPrimaryArray([...primaryArray, arr])
    await sleep(animationSpeed)
    // 
    await sorts(arr, left, partitionIndex - 1)
    await sorts(arr, partitionIndex + 1, right)
  }
}
const partition = (arr, left, right) => {
  let pivot = arr[right]
  let i = left - 1
  // ()
  for (let j = left; j < right; j++) {
    if (arr[j] < pivot) {
      i++
      let temp = arr[i]
      arr[i] = arr[j]
      arr[j] = temp

      document.getElementById(j).childNodes[2].childNodes[0].style.backgroundColor= '#6A5ACD'
      document.getElementById(j).childNodes[3].childNodes[0].style.backgroundColor= '#6A5ACD'
      document.getElementById(j).childNodes[4].childNodes[0].style.backgroundColor= '#6A5ACD'
      document.getElementById(j).childNodes[5].childNodes[0].style.backgroundColor= '#6A5ACD'       

      document.getElementById(i).childNodes[2].childNodes[0].style.backgroundColor='#DC143C'
      document.getElementById(i).childNodes[3].childNodes[0].style.backgroundColor= '#DC143C'
      document.getElementById(i).childNodes[4].childNodes[0].style.backgroundColor='#DC143C'
      document.getElementById(i).childNodes[5].childNodes[0].style.backgroundColor= '#DC143C'

      setTimeout(() => {
       
        document.getElementById(j).childNodes[2].childNodes[0].style.backgroundColor= '#FF7F50'
        document.getElementById(j).childNodes[3].childNodes[0].style.backgroundColor= '#FF7F50'
        document.getElementById(j).childNodes[4].childNodes[0].style.backgroundColor= '#FF7F50'
        document.getElementById(j).childNodes[5].childNodes[0].style.backgroundColor= '#FF7F50'       
  
        document.getElementById(i).childNodes[2].childNodes[0].style.backgroundColor='#FF7F50'
        document.getElementById(i).childNodes[3].childNodes[0].style.backgroundColor= '#FF7F50'
        document.getElementById(i).childNodes[4].childNodes[0].style.backgroundColor='#FF7F50'
        document.getElementById(i).childNodes[5].childNodes[0].style.backgroundColor= '#FF7F50'
      }, 200)

      setPrimaryArray([...primaryArray, arr])
    }
  }

  let temp = arr[i + 1]
  arr[i + 1] = arr[right]
  arr[right] = temp

  return i + 1
}

// heap
const heapSort=async()=>{
    console.log("Heap")
    let arr = primaryArray
    let length = arr.length
    let index = Math.floor(length / 2 - 1)
    let lastChild = length - 1

    setAlgorithm({ name: 'Heap Sort', timeComplexity: 'O(n log(n))' })

    while (index >= 0) {
      await heapify(arr, length, index)
      index--

      setPrimaryArray([...primaryArray, arr])

      if (index >= 0) {
             
      
        document.getElementById(index).childNodes[2].childNodes[0].style.backgroundColor='#6A5ACD'
        document.getElementById(index).childNodes[3].childNodes[0].style.backgroundColor= '#6A5ACD'
        document.getElementById(index).childNodes[4].childNodes[0].style.backgroundColor='#6A5ACD'
        document.getElementById(index).childNodes[5].childNodes[0].style.backgroundColor='#6A5ACD'

            document.getElementById(index+1).childNodes[2].childNodes[0].style.backgroundColor='#DC143C'
            document.getElementById(index+1).childNodes[3].childNodes[0].style.backgroundColor= '#DC143C'
            document.getElementById(index+1).childNodes[4].childNodes[0].style.backgroundColor='#DC143C'
            document.getElementById(index+1).childNodes[5].childNodes[0].style.backgroundColor= '#DC143C'
        await sleep(animationSpeed)


        document.getElementById(index).childNodes[2].childNodes[0].style.backgroundColor='#FF7F50'
        document.getElementById(index).childNodes[3].childNodes[0].style.backgroundColor= '#FF7F50'
        document.getElementById(index).childNodes[4].childNodes[0].style.backgroundColor='#FF7F50'
        document.getElementById(index).childNodes[5].childNodes[0].style.backgroundColor= '#FF7F50'     
      
            document.getElementById(index+1).childNodes[2].childNodes[0].style.backgroundColor='#FF7F50'
            document.getElementById(index+1).childNodes[3].childNodes[0].style.backgroundColor= '#FF7F50'
            document.getElementById(index+1).childNodes[4].childNodes[0].style.backgroundColor='#FF7F50'
            document.getElementById(index+1).childNodes[5].childNodes[0].style.backgroundColor= '#FF7F50'
      } else {
        await sleep(animationSpeed)
      }
    }

    while (lastChild >= 0) {
      let swap1 = arr[0]
      let swap2 = arr[lastChild]

      arr[0] = swap2
      arr[lastChild] = swap1
      await heapify(arr, lastChild, 0)
      lastChild--

      setPrimaryArray([...primaryArray, arr])

      if (index >= 0) {
        document.getElementById(lastChild).childNodes[2].childNodes[0].style.backgroundColor='#6A5ACD'
        document.getElementById(lastChild).childNodes[3].childNodes[0].style.backgroundColor= '#6A5ACD'
        document.getElementById(lastChild).childNodes[4].childNodes[0].style.backgroundColor='#6A5ACD'
        document.getElementById(lastChild).childNodes[5].childNodes[0].style.backgroundColor='#6A5ACD'

            document.getElementById(0).childNodes[2].childNodes[0].style.backgroundColor='#DC143C'
            document.getElementById(0).childNodes[3].childNodes[0].style.backgroundColor= '#DC143C'
            document.getElementById(0).childNodes[4].childNodes[0].style.backgroundColor='#DC143C'
            document.getElementById(0).childNodes[5].childNodes[0].style.backgroundColor= '#DC143C'


        document.getElementById(lastChild).childNodes[2].childNodes[0].style.backgroundColor='#FF7F50'
        document.getElementById(lastChild).childNodes[3].childNodes[0].style.backgroundColor= '#FF7F50'
        document.getElementById(lastChild).childNodes[4].childNodes[0].style.backgroundColor='#FF7F50'
        document.getElementById(lastChild).childNodes[5].childNodes[0].style.backgroundColor= '#FF7F50'     
      
            document.getElementById(0).childNodes[2].childNodes[0].style.backgroundColor='#FF7F50'
            document.getElementById(0).childNodes[3].childNodes[0].style.backgroundColor= '#FF7F50'
            document.getElementById(0).childNodes[4].childNodes[0].style.backgroundColor='#FF7F50'
            document.getElementById(0).childNodes[5].childNodes[0].style.backgroundColor= '#FF7F50'
      } else {
        await sleep(animationSpeed)
      }
    }

    finishedAnimation()
}

const heapify = async (arr, length, index) => {
  let largest = index
  let leftNode = index * 2 + 1
  let rightNode = leftNode + 1

  if (arr[leftNode] > arr[largest] && leftNode < length) {
    largest = leftNode
  }

  if (arr[rightNode] > arr[largest] && rightNode < length) {
    largest = rightNode
  }

  if (largest !== index) {
    let swap1 = arr[index]
    let swap2 = arr[largest]
    arr[index] = swap2
    arr[largest] = swap1

    document.getElementById(index).childNodes[2].childNodes[0].style.backgroundColor='#6A5ACD'
        document.getElementById(index).childNodes[3].childNodes[0].style.backgroundColor= '#6A5ACD'
        document.getElementById(index).childNodes[4].childNodes[0].style.backgroundColor='#6A5ACD'
        document.getElementById(index).childNodes[5].childNodes[0].style.backgroundColor='#6A5ACD'

            document.getElementById(largest).childNodes[2].childNodes[0].style.backgroundColor='#DC143C'
            document.getElementById(largest).childNodes[3].childNodes[0].style.backgroundColor= '#DC143C'
            document.getElementById(largest).childNodes[4].childNodes[0].style.backgroundColor='#DC143C'
            document.getElementById(largest).childNodes[5].childNodes[0].style.backgroundColor= '#DC143C'

        await sleep(animationSpeed)


        document.getElementById(index).childNodes[2].childNodes[0].style.backgroundColor='#FF7F50'
        document.getElementById(index).childNodes[3].childNodes[0].style.backgroundColor= '#FF7F50'
        document.getElementById(index).childNodes[4].childNodes[0].style.backgroundColor='#FF7F50'
        document.getElementById(index).childNodes[5].childNodes[0].style.backgroundColor= '#FF7F50'     
      
            document.getElementById(largest).childNodes[2].childNodes[0].style.backgroundColor='#FF7F50'
            document.getElementById(largest).childNodes[3].childNodes[0].style.backgroundColor= '#FF7F50'
            document.getElementById(largest).childNodes[4].childNodes[0].style.backgroundColor='#FF7F50'
            document.getElementById(largest).childNodes[5].childNodes[0].style.backgroundColor= '#FF7F50'


    await heapify(arr, length, largest)
  }

  return arr
}

    useEffect(()=>{
        generateArray()
        
    },[])


  return (
    <div>
    <div className='header'>
        <Button
          type='NEWARRAY'
          name='New Array'
          onClick={generateArray}
          disabled={disableOptions}
        />
        <Dropdown
          onChange={(e) => setAlgorithm(e.target.value)}
          disabled={disableOptions}
        />
        <Slider
          onChange={(e) => setAnimationSpeed(e.target.value)}
          disabled={disableOptions}
        />
        <Button
          onClick={handleSorting}
          type='SORT'
          name='Sort'
          disabled={disableOptions}
        />
      </div>
    <div className="visualizer">
    <div className="visual-items">
      {primaryArray&&primaryArray.map((value,i)=>{
       return(
         <>
         <div className="visual-item" id={i} key={i}
         >
         <div className="side top "></div>
         <div className="side bottom"></div>
         <div className="side right">
           <div
             className="color-bar right-color-bar "
             style={{
               height: `${value}vh`,
               transform: `translateY(${70 - value}vh)`,
             }}
           ></div>
         </div>
         <div className="side left">
           <div
             className="color-bar left-color-bar"
             style={{
               height: `${value}vh`,
               transform: `translateY(${70 - value}vh)`,
             }}
           ></div>
         </div>
         <div className="side front">
           <div
             className="color-bar front-color-bar"
             style={{
               height: `${value}vh`,
               transform: `translateY(${70 - value}vh)`,
             }}
           ></div>
         </div>
         <div className="side back">
           <div
             className="color-bar back-color-bar"
             style={{
               height: `${value}vh`,
               transform: `translateY(${70 - value}vh)`,
             }}
           ></div>
         </div>
         </div>
         </>
       )
      })}
   </div> 
 </div>
 {algorithm.name !== undefined && (
  <div className='algoInfo'>
    <div>Algorithm: {algorithm.name}</div>
    <div>Time Complexity: {algorithm.timeComplexity}</div>
  </div>
)}
    </div>
  )
}

export default Visualizer
