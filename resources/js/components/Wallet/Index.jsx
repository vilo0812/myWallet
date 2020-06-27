import React, {Fragment,useState,useEffect} from 'react';
import ReactDOM from 'react-dom';
import TransferForm from './TransferForm'
import TransferList from './TransferList'

const Wallet = () => {
	//start state
	const [wallet, setWallet] = useState({
		money: 0.0,
		transfers:[],
		error: null
	})
	//end state
	//start useEffect
	useEffect(() => {
    // consumimos la api/tranfers
        const getWallet = async () => {
            const data = await fetch(`api/wallet`)
            const dataWallet = await data.json()
            setWallet(dataWallet)
        }
        try{
        	getWallet()
        }catch(error){
        	getWallet(error)
        }
  	});
	//end useEffect
    //start store wallet
    const addWallet = (data) => {
        const storeWallet = async (config) => {
        const data = await fetch(`api/transfer`, config)
        const dataWallet = await data.json()
        setWallet({...wallet,
        transfers:wallet.transfers.concat(dataWallet),
        money:wallet.money + (parseInt(data.amount))})
        }
        try{
            let config = {
                method: 'POST',
                headers:{
                    'Accept':'application/json',
                    'Content-Type':'application/json'
                },
                body: JSON.stringify(data)
            }
            storeWallet(config)
        }catch(error){
            storeWallet(error)
        }
        }
    //end store wallet
    return (
    <Fragment>
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-12 m-t-md">
                    <p className="title">$ {wallet.money}</p> 
                </div>
                <div className="col-md-12">
                    <TransferForm addWallet={addWallet} wallet={wallet.id}></TransferForm>
                </div>
            </div>
            <div className="m-t-md">
            	<TransferList
                transfers={wallet.transfers}
                ></TransferList>
            </div>
        </div>
    </Fragment>
    );
}

export default Wallet;

if (document.getElementById('app')) {
	 ReactDOM.render(<Wallet />, document.getElementById('app'));
}