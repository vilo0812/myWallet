import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';

function Example() {
    return (
    <Fragment>
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-12 m-t-md">
                    <p className="title">$ 1000</p> 
                </div>
                <div className="col-md-12">
                    
                </div>
            </div>
            <div className="m-t-md">
            <table className="table">
                <tbody>
                    <tr>
                        <td>Ejemplo</td>
                        <td>1200.00</td>
                    </tr>
                </tbody>    
            </table>
            </div>
        </div>
    </Fragment>
    );
}

export default Example;

// if (document.getElementById('example')) {
//     ReactDOM.render(<Example />, document.getElementById('example'));
// }
