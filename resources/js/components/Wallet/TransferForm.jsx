import React, {Fragment, useState} from 'react';
import ReactDOM from 'react-dom';
import { useForm } from 'react-hook-form'

const TranferForm= ({addWallet, wallet}) =>{
const {register, errors, handleSubmit, setValue} = useForm();
const [errorsAmountNumber, setErrorsAmountNumber] = useState({
    errors: false,
    message: 'Amount has to be number'
})
//start wallet submit
    const onSubmit = (data, e) => {
        //start validamos que amount sea un numero
            var amount = e.target.amount.value.split('');
              var numero = "- 0 1 2 3 4 5 6 7 8 9";
              var i;
              for(i in amount){
                 if (numero.indexOf(amount[i]) == -1){
                  setErrorsAmountNumber({
                    ...errorsAmountNumber,
                    errors:true,
                  });
                  return;
                 }else{
                    setErrorsAmountNumber({
                    ...errorsAmountNumber,
                    errors:false,
                  });
                 }
              }
        //end validamos que amount sea un numero
        data = {
            description:data.description,
            amount:data.amount,
            wallet_id:wallet}
        addWallet(data)
        e.target.reset()
    }
//end wallet submit
return (
    <Fragment>
        <form onSubmit={handleSubmit(onSubmit)} className="form-inline justify-content-center">
	        <div className="form-group mb-2">
	            <input 
	            type="text"
	            className="form-control"
	            placeholder="Description"
	            name="description"
                ref={
                register({
                    required: {value:true, message:'description is required'},
                })
                }/>

	        </div>
            <div className="input-group mx-sm-2 mb-2">
                <div className="input-group-prepend">
                    <p className="input-group-text">$</p> 
                </div>
                <input 
                type="text"
                className="form-control"
                placeholder="Amount"
                name="amount"
                ref={
                register({
                    required: {value:true, message:'amount is required'},
                })
              }/>
            </div>
            <button
            type="submit"
            className="btn btn-primary mb-2">
            Add
            </button>
        </form>
        <span className="text-danger">
            <ul>
                <li className="list-unstyled">{errors?.description?.message}</li>
                <li className="list-unstyled">{errors?.amount?.message}</li>
                <li className="list-unstyled">{errorsAmountNumber.errors ? errorsAmountNumber.message : ''}</li>
            </ul>
        </span>
    </Fragment>
);
}
export default TranferForm;