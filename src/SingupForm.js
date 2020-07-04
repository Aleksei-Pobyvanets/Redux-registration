import React from 'react';
import required from './valodator';

class SingupForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            username: '',
            email: '',
            telephone: '',
            gps: '',
            password: '',
        }

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e){
        this.setState({ [e.target.name]: e.target.value});
    }
    onSubmit(e){
        e.preventDefault();
        console.log(this.state)
    }

    render() {
        return(
            <form onSubmit={this.onSubmit}>
                <h1>Join our comunity!</h1>
                <div className='form-group'>
                    <label className='control-label'>Username</label>
                    <input 
                        validate={[required, maxLength]}
                        value={this.state.username}
                        onChange={this.onChange}
                        name='username'
                        type='text'
                        className='form-control'
                    />
                </div>
                <div className='form-group'>
                    <label className='control-label'>Email</label>
                    <input 
                        value={this.state.email}
                        onChange={this.onChange}
                        name='email'
                        type='text'
                        className='form-control'
                    />
                </div>
                <div className='form-group'>
                    <label className='control-label'>Telephone</label>
                    <input 
                        
                        value={this.state.telephone}
                        onChange={this.onChange}
                        name='telephone'
                        type='numbers'
                        className='form-control'
                    />
                </div>
                <div className='form-group'>
                    <label className='control-label'>GPS</label>
                    <input 
                        value={this.state.gps}
                        onChange={this.onChange}
                        name='gps'
                        type='text'
                        className='form-control'
                    />
                </div>
                <div className='form-group'>
                    <label className='control-label'>Password</label>
                    <input 
                        value={this.state.password}
                        onChange={this.onChange}
                        name='password'
                        type='password'
                        className='form-control'
                    />
                </div>
                <div className='form-group'>
                    <button className='btn btn-primary btn-lg'>Sing up</button>
                </div>
            </form>
        );
    }
}

export default SingupForm