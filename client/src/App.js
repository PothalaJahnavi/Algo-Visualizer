import Header from './components/Header/Header'
import {BrowserRouter as Router,Route,Routes} from "react-router-dom"
import Sort from './components/Sort';
import { createContext } from 'react';
import { useState } from 'react';
import Visualizer from './components/Visualizer';

export const AppContext=createContext()
function App() {
  return (
    <div className="App">
    <Router>
        <Routes>
        <Route exact path="/" element={<Header/>}>
        </Route>
        <Route path="/Sort" element={<Sort/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;




// const solve=()=>{

//   let timer=0;

//    console.log(speed,play,algo)

//    for(let i = 0; i < arr.length-1; i++){
//     let ind = i+1;

//     while(ind>0 && arr[ind]<arr[ind-1]){

//        let j = ind;

//        let temp = arr[j];
//        arr[j] = arr[j-1];
//        arr[j-1] = temp;


       
//        setTimeout(() => {
          
//         document.getElementById(j).childNodes[2].childNodes[0].style.height= `${arr[j]}vh`
//         document.getElementById(j).childNodes[3].childNodes[0].style.height= `${arr[j]}vh`
//         document.getElementById(j).childNodes[4].childNodes[0].style.height= `${arr[j]}vh`
//         document.getElementById(j).childNodes[5].childNodes[0].style.height= `${arr[j]}vh`
  
  
//         document.getElementById(j).childNodes[2].childNodes[0].style.transform =`translateY(${70 - arr[j]}vh)`
//         document.getElementById(j).childNodes[3].childNodes[0].style.transform =`translateY(${70 - arr[j]}vh)`
//         document.getElementById(j).childNodes[4].childNodes[0].style.transform =`translateY(${70 - arr[j]}vh)`
//         document.getElementById(j).childNodes[5].childNodes[0].style.transform =`translateY(${70 - arr[j]}vh)`
  
       

//         document.getElementById(j).childNodes[2].childNodes[0].style.backgroundColor="orange"
//         document.getElementById(j).childNodes[3].childNodes[0].style.backgroundColor="orange"
//         document.getElementById(j).childNodes[4].childNodes[0].style.backgroundColor="orange"
//         document.getElementById(j).childNodes[5].childNodes[0].style.backgroundColor="orange"
  
//         document.getElementById(j-1).childNodes[2].childNodes[0].style.backgroundColor="orange"
//         document.getElementById(j-1).childNodes[3].childNodes[0].style.backgroundColor="orange"
//         document.getElementById(j-1).childNodes[4].childNodes[0].style.backgroundColor="orange"
//         document.getElementById(j-1).childNodes[5].childNodes[0].style.backgroundColor="orange"
          
//           setTimeout(() => {
//             document.getElementById(j).childNodes[2].childNodes[0].style.backgroundColor="rgba(225, 0, 120, 0.5)"
//             document.getElementById(j).childNodes[3].childNodes[0].style.backgroundColor="rgba(225, 0, 120, 0.5)"
//             document.getElementById(j).childNodes[4].childNodes[0].style.backgroundColor="rgba(225, 0, 120, 0.5)"
//             document.getElementById(j).childNodes[5].childNodes[0].style.backgroundColor="rgba(225, 0, 120, 0.5)"

//             document.getElementById(j-1).childNodes[2].childNodes[0].style.backgroundColor="rgba(225, 0, 120, 0.5)"
//             document.getElementById(j-1).childNodes[3].childNodes[0].style.backgroundColor="rgba(225, 0, 120, 0.5)"
//             document.getElementById(j-1).childNodes[4].childNodes[0].style.backgroundColor="rgba(225, 0, 120, 0.5)"
//             document.getElementById(j-1).childNodes[5].childNodes[0].style.backgroundColor="rgba(225, 0, 120, 0.5)"
//           },speed-10);
          

//           document.getElementById(j-1).childNodes[2].childNodes[0].style.height= `${arr[j-1]}vh`
//         document.getElementById(j-1).childNodes[3].childNodes[0].style.height= `${arr[j-1]}vh`
//         document.getElementById(j-1).childNodes[4].childNodes[0].style.height= `${arr[j-1]}vh`
//         document.getElementById(j-1).childNodes[5].childNodes[0].style.height= `${arr[j-1]}vh`

//           document.getElementById(j-1).childNodes[2].childNodes[0].style.transform =`translateY(${70 - arr[j-1]}vh)`
//           document.getElementById(j-1).childNodes[3].childNodes[0].style.transform =`translateY(${70 - arr[j-1]}vh)`
//           document.getElementById(j-1).childNodes[4].childNodes[0].style.transform =`translateY(${70 - arr[j-1]}vh)`
//           document.getElementById(j-1).childNodes[5].childNodes[0].style.transform =`translateY(${70 - arr[j-1]}vh)`



//        },timer*speed);

//        timer++;
//        ind--;
//     }
// }
// }





// for(let i = arr.length,timer = 0; i > 0;timer += i-1, i--){
//   setTimeout(() => {
//      for(let j = 1; j < i; j++){
//         setTimeout(() => {
//           document.getElementById(j).childNodes[2].childNodes[0].style.backgroundColor="orange"
//                       document.getElementById(j).childNodes[3].childNodes[0].style.backgroundColor="orange"
//                       document.getElementById(j).childNodes[4].childNodes[0].style.backgroundColor="orange"
//                       document.getElementById(j).childNodes[5].childNodes[0].style.backgroundColor="orange"
                
//                       document.getElementById(j-1).childNodes[2].childNodes[0].style.backgroundColor="orange"
//                       document.getElementById(j-1).childNodes[3].childNodes[0].style.backgroundColor="orange"
//                       document.getElementById(j-1).childNodes[4].childNodes[0].style.backgroundColor="orange"
//                       document.getElementById(j-1).childNodes[5].childNodes[0].style.backgroundColor="orange"
           
//            setTimeout(() => {
             
//             document.getElementById(j).childNodes[2].childNodes[0].style.backgroundColor="rgba(225, 0, 120, 0.5)"
//             document.getElementById(j).childNodes[3].childNodes[0].style.backgroundColor="rgba(225, 0, 120, 0.5)"
//             document.getElementById(j).childNodes[4].childNodes[0].style.backgroundColor="rgba(225, 0, 120, 0.5)"
//             document.getElementById(j).childNodes[5].childNodes[0].style.backgroundColor="rgba(225, 0, 120, 0.5)"
      
//             document.getElementById(j-1).childNodes[2].childNodes[0].style.backgroundColor="rgba(225, 0, 120, 0.5)"
//             document.getElementById(j-1).childNodes[3].childNodes[0].style.backgroundColor="rgba(225, 0, 120, 0.5)"
//             document.getElementById(j-1).childNodes[4].childNodes[0].style.backgroundColor="rgba(225, 0, 120, 0.5)"
//             document.getElementById(j-1).childNodes[5].childNodes[0].style.backgroundColor="rgba(225, 0, 120, 0.5)"
//            },speed-10);
              
//            if(arr[j]<arr[j-1]){
//               let temp = arr[j];
//               arr[j] = arr[j-1];
//               arr[j-1] = temp;
              
//               document.getElementById(j).childNodes[2].childNodes[0].style.height= `${arr[j]}vh`
//                     document.getElementById(j).childNodes[3].childNodes[0].style.height= `${arr[j]}vh`
//                     document.getElementById(j).childNodes[4].childNodes[0].style.height= `${arr[j]}vh`
//                     document.getElementById(j).childNodes[5].childNodes[0].style.height= `${arr[j]}vh`
              
//                     document.getElementById(j-1).childNodes[2].childNodes[0].style.height= `${arr[j-1]}vh`
//                     document.getElementById(j-1).childNodes[3].childNodes[0].style.height= `${arr[j-1]}vh`
//                     document.getElementById(j-1).childNodes[4].childNodes[0].style.height= `${arr[j-1]}vh`
//                     document.getElementById(j-1).childNodes[5].childNodes[0].style.height= `${arr[j-1]}vh`
              
//                     document.getElementById(j).childNodes[2].childNodes[0].style.transform =`translateY(${70 - arr[j]}vh)`
//                     document.getElementById(j).childNodes[3].childNodes[0].style.transform =`translateY(${70 - arr[j]}vh)`
//                     document.getElementById(j).childNodes[4].childNodes[0].style.transform =`translateY(${70 - arr[j]}vh)`
//                     document.getElementById(j).childNodes[5].childNodes[0].style.transform =`translateY(${70 - arr[j]}vh)`
              
//                     document.getElementById(j-1).childNodes[2].childNodes[0].style.transform =`translateY(${70 - arr[j-1]}vh)`
//                     document.getElementById(j-1).childNodes[3].childNodes[0].style.transform =`translateY(${70 - arr[j-1]}vh)`
//                     document.getElementById(j-1).childNodes[4].childNodes[0].style.transform =`translateY(${70 - arr[j-1]}vh)`
//                     document.getElementById(j-1).childNodes[5].childNodes[0].style.transform =`translateY(${70 - arr[j-1]}vh)`
                 
//            }
//         },(j-1)*(speed));
        
//      }
    
//   }
//   ,(timer)*(speed))
 
// }
// setTimeout(() => {
// dispatch({
//    type:'PLAY_PAUSE',
//    _play:false
// })

// },(((arr.length)*(arr.length)))*speed+50);