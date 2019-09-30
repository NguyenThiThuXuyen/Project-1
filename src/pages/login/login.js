import React from 'react';
import './login.scss';
import { Button } from 'react-bootstrap';
import Cookies from 'universal-cookie';
import { Redirect } from 'react-router-dom';
import { locale } from '../../config/locale';

class LoginPage extends React.Component {
  constructor() {
    super()
    this.state = {
      logined: false
    }
  }
  onClick = (event) => {
    console.log(event)
    console.log(event.currentTarget)
    let cookie = new Cookies()
    cookie.set('isLogin', 'true')
    this.setState({
      logined: cookie.get('isLogin') === 'true'
    })
  }

  renderDirectTo() {
    if (this.state.logined) {
      return <Redirect to='/home'> </Redirect>
    }
  }


  render() {
    return (
      <React.Fragment>
        {this.renderDirectTo()}
        <div className='main'>

          <div className='login'>

            <div className='circle'>
            </div>

            <div className="form">
              <form>

                <div className="input-group mb-3">
                  <input type="text" name="" className="form-control input_user" value=""
                    placeholder="username"></input>
                </div>

                <div className="input-group mb-2">
                  <input type="password" name="" className="form-control input_pass" value=""
                    placeholder="password"></input>
                </div>

                <div className="form-group">
                  <div className="custom-control custom-checkbox">
                    <input type="checkbox" class="custom-control-input" id="customControlInline"></input>
                    <label className="custom-control-label" for="customControlInline"> Remember me </label>
                  </div>
                </div>

                <div className="d-flex justify-content-center mt-3 login_container">
                  <button type="button" name="button" className="btn btn-danger"> {locale.login} </button>
                </div>

              </form>
              <div className="mt-4">
                <div className="d-flex justify-content-center links">
                  Don't have an account? <a href="#" className="ml-2">Sign Up</a>
                </div>

                <div className="d-flex justify-content-center links">
                  <a href="#">Forgot your password?</a>
                </div>
              </div>

            </div>

          </div>

        </div>


      </React.Fragment>
    )
  }
}


export default LoginPage