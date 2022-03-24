import './Sign_up.css';

const SignUp = () => {
    return (
      <div className="container-center-horizontal">
        <div className="sign-upscreen">
          <div className="overlap-group4">
            <img className="sign-up-amico-2animate-enter" src={require('./amico-2.png')} />
            <img className="line-54" src="line-54.svg" />
            <div className="flex-col">
              <img className="group-2" src={require('./group-2.png')} />
              <div className="welcome-get-startedh1">
                Welcome.Get started by providing your details.
              </div>
              <div className="group-1864">
                <div className="overlap-group">
                  <input className="full-nameh2" name="fullname" placeholder="Full Name" type="text" required />
                </div>
              </div>
              <div className="group-1863">
                <div className="overlap-group">
                  <input className="phone-numberh2" name="phonenumber" placeholder="Phone Number" type="number" required />
                </div>
              </div>
              <div className="group-1912">
                <div className="overlap-group3">
                  <div className="overlap-group-1">
                    <input className="passwordh2" name="password" placeholder="Password" type="password" required />
                  </div>
                  <img className="visibility_off_black_24dp-2" src="visibility-off-black-24dp-2.svg" />
                </div>
              </div>
              <div className="group-1866">
                <div className="overlap-group2">
                  <div className="sign-up-1valign-text-middleh1">
                    Sign up
                  </div>
                </div>
              </div>
              <div className="flex-row">
                <div className="group-1910">
                  <img className="group-358" src={require('./group-358.png')} />
                  {/* <div className="sign-up-with-googlevalign-text-middleh2">
                    Sign up with Google
                  </div> */}
                </div>
                <p className="already-have-an-account-sign-invalign-text-middleh2">
                  <span>
                    <span className="span0h2">Already have an account? </span>
                    <span className="span1h2">Sign In</span>
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default SignUp;