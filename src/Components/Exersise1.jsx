import React ,{useState,useEffect} from 'react'

function Exersise1() {
    const [count, setCount] = useState(0)
    useEffect(() => {
        // effect
        document.addEventListener('mousedown',incrementCount)
        return () => {
        document.removeEventListener('mousedown')
        }
    }, [])

    const incrementCount =()=>{
        setCount(prevCount=>prevCount+1)
    }
    return (
        <div className='conatiner'>
             <span style={{color:'red',fontSize:'22px'}}>Count : {count}</span>

        </div>
    )
}

export default Exersise1
