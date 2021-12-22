import {deposit, withdraw} from '../../store/amount/action'
 
const Counter = () =>{
    return(
    <div>
        <h1>{`Amount`}</h1>
        <button onClick={() => deposit}>Deposit 10</button>
        <button onClick={() => withdraw }> Withdraw 10</button>
    </div>  
    )
}

export default Counter;