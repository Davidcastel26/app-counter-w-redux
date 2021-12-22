import { connect } from 'react-redux';

import {deposit, withdraw} from '../../store/amount/action'
 
const mapStateToProps = (state) =>{
    return{
        amount: state.reducer.amount,
    }
}
const Counter = ({amount, deposit, withdraw}) =>{

    return(
    <div>
        <h1>{amount}</h1>
        <button onClick={() => deposit()}>Deposit 10</button>
        <button onClick={() => withdraw() }> Withdraw 10</button>
    </div>  
    )
}

// export default Counter;
export default connect(mapStateToProps, {deposit, withdraw})(Counter)