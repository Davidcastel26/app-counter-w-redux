import { connect } from 'react-redux';

import {deposit, withdraw} from '../../store/amount/action'
 
const Counter = ({deposit, withdraw}) =>{
    return(
    <div>
        <h1>{``}</h1>
        <button onClick={() => deposit()}>Deposit 10</button>
        <button onClick={() => withdraw() }> Withdraw 10</button>
    </div>  
    )
}

// export default Counter;
export default connect(null, {deposit, withdraw})(Counter)