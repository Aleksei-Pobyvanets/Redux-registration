import React from 'react'
import SingupForm from './SingupForm'

class SingupPage extends React.Component{
    render() {
        return(
            <div className="row">
                <div className="col-md-4 col-md-offset-4">
                    <SingupForm /> 
                </div>
                <h1>Sing up page</h1>
            </div>            
        );
    }
}


export default SingupPage