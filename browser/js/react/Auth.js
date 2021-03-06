import React from 'react';

/* -----------------    COMPONENT     ------------------ */

class Auth extends React.Component {
  constructor() {
    super();
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit (event) {
      event.preventDefault();
      const cred = {
          email : event.target.email.value,
          password : event.target.password.value
      };
      this.props.login(cred);
  }

  render() {
    const { message, onSubmit } = this.props;
    return (
      <div className="signin-container">
        <div className="buffer local">
          <form onSubmit={this.onSubmitButton}>
            <div className="form-group">
              <label>email</label>
              <input
                name="email"
                type="email"
                className="form-control"
                required
              />
            </div>
            <div className="form-group">
                <label>password</label>
                <input
                  name="password"
                  type="password"
                  className="form-control"
                  required
                />
            </div>
            <button 
                type="submit" 
                className="btn btn-block btn-primary"
            >{message}</button>
          </form>
        </div>
        <div className="or buffer">
          <div className="back-line">
            <span>OR</span>
          </div>
        </div>
        <div className="buffer oauth">
          <p>
            <a
              target="_self"
              href="/auth/google"
              className="btn btn-social btn-google">
              <i className="fa fa-google" />
              <span>{message} with Google</span>
            </a>
          </p>
        </div>
      </div>
    );
  }

}

/* -----------------    CONTAINER     ------------------ */

export default Auth;
