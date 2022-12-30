import React, {useState} from 'react';
import './App.css';

function App() {
  const [mstyle, setMstyle] = useState("")
  const [fstyle, setFstyle] = useState("")

  const [height, setHeight] = useState(0)
  const [weight, setWeight] = useState(0)
  const [bmi, setBmi] = useState("0")
  const [message, setMessage] = useState("")

  const fFunc = () =>{
    if(fstyle === ""){
       setFstyle("femaleStyle")
       setMstyle("")
    }
  }
  const mFunc = () =>{
    if(mstyle === ""){
       setMstyle("maleStyle")
       setFstyle("")
    }
  }
  const calculateBmi = (e)=>{
    e.preventDefault()
    // e.target[0].value);
    if((weight === 0 && height === 0) || (weight === "" && height === "") || (height === "" || weight === "")){
      alert("Please enter valid Height and Weight :') ")
    }else{
      let bmi = weight / (height * height) * 10000;
      bmi = bmi.toFixed(1)
      setBmi(bmi)
      if (bmi < 25) {
        setMessage('You are underweight')
      } else if (bmi >= 25 && bmi < 30) {
        setMessage('You are a healthy weight')
      } else {
        setMessage('You are overweight')
      }
    }
  }
  return (
    <div className="h-[100vh] w-[100vw] flex justify-center items-center bg-[#3C3F52]">
      <div className="box h-auto bg-[#12142B] rounded-xl flex flex-col items-center w-[90%]
       md:w-[300px] py-2 px-4">
        <div className="heading text-center text-xl mb-9 text-white">BMI Calculator</div>
        <div className="calc w-full h-auto">
          <div className="gender flex h-[100px] mb-7 justify-center items-center">
            <div className="female"><i className={`text-[55px] bi bi-gender-female bg-[#171834]
             text-pink-700 md:text-7xl shadow-2xl p-4 rounded-lg mx-4 cursor-pointer hover:text-6xl 
             transition-all ${fstyle}`} onClick={fFunc}></i></div>
            <div className="male"><i className={`text-[55px] bi bi-gender-male bg-[#171834]
             text-sky-700 md:text-7xl shadow-2xl p-4 rounded-lg mx-4 hover:text-6xl cursor-pointer
              transition-all ${mstyle}`} onClick={mFunc}></i></div>
          </div>
          <form onSubmit={calculateBmi}>
          <div className="flex flex-col w-full shadow-2xl bg-[#191A36] text-white my-3 rounded-xl 
          justify-center items-center">
            <span className='text-xl my-1'>Your Height in Cm</span>
          <input type="number" value={height} onChange={(e)=> setHeight(e.target.value)}
           className='bg-transparent outline-none md:pb-2 px-8 text-center text-3xl w-full'/>
          </div>
          <div className="flex flex-col w-full shadow-2xl bg-[#191A36] text-white my-3 rounded-xl 
          justify-center items-center">
            <span className='text-xl my-1'>Your Weight in Kg</span>
          <input type="number" value={weight} onChange={(e)=> setWeight(e.target.value)} 
          className='bg-transparent outline-none md:pb-2 px-8 text-center text-3xl w-full' />
          </div>
          <div className="result text-white flex flex-col justify-center h-[150px]">
            <p className='text-4xl text-center'>Your BMI</p>
            <p className='text-7xl text-center mt-2 flex justify-center'>{bmi} <span 
            className='text-xl inline-block w-28 text-center my-auto mx-3 empty:hidden'>{message}</span></p>
          </div>
          <button type='submit' className="btn cursor-pointer hover:bg-[#232865] 
          transition-all font-semibold text-2xl w-full
           text-white bg-[#313880] text-center
           rounded-lg py-2 my-3">Calculate</button>
           </form>
        </div>
      </div>
    </div>
  );
}

export default App;
