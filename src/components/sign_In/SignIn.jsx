import React from "react";
import './SignIn.css';

function Sign() {
  return <SignIn {...signInData} />;
}

export default Sign;

function SignIn(props) {
  const {
    signInAmico12,
    line55,
    ellipse1,
    ellipse2,
    ellipse3,
    ellipse4,
    careerClutch,
    welcomeGetStarted,
    phoneNumber,
    password,
    visibility_Off_Black_24Dp1,
    forgotPassword,
    signIn,
    group358,
    signInWithGoogle,
    spanText1,
    spanText2,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="sign-inscreen">
        <div className="overlap-group3">
          <img className="sign-in-amico-1-2" src={signInAmico12} />
          <img className="line-55" src={line55} />
          <div className="flex-col">
            <div className="group-2">
              <div className="group-1916">
                <div className="group-1">
                  <div className="ellipse-container">
                    <img className="ellipse-1" src={ellipse1} />
                    <img className="ellipse-2" src={ellipse2} />
                    <img className="ellipse-3" src={ellipse3} />
                    <img className="ellipse-4" src={ellipse4} />
                  </div>
                </div>
                <div className="career-clutch">
                  {careerClutch}
                </div>
              </div>
            </div>
            <div className="welcome-get-startedh1">
              {welcomeGetStarted}
            </div>
            <div className="overlap-group">
              <div className="phone-numbervalign-text-middleh2">
                {phoneNumber}
              </div>
            </div>
            <div className="overlap-group2">
              <div className="passwordvalign-text-middleh2">
                {password}
              </div>
              <img className="visibility_off_black_24dp-1" src={visibility_Off_Black_24Dp1} />
            </div>
            <div className="forgot-passwordvalign-text-middleh3">
              {forgotPassword}
            </div>
            <div className="overlap-group1">
              <div className="sign-in-1valign-text-middleh1">
                {signIn}
              </div>
            </div>
            <div className="flex-row">
              <div className="group-1911">
                <div className="group-1909">
                  <img className="group-358" src={group358} />
                  <div className="sign-in-with-googlevalign-text-middleh2">
                    {signInWithGoogle}
                  </div>
                </div>
              </div>
              <p className="dont-have-an-account-sign-upvalign-text-middleh2">
                <span>
                  <span className="span0h2">{spanText1}</span>
                  <span className="span1h2">{spanText2}</span>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const signInData = {
  signInAmico12: "amico-1-2.png",
  line55: "line-55.png",
  ellipse1: "ellipse-1.png",
  ellipse2: "ellipse-2.png",
  ellipse3: "ellipse-3.png",
  ellipse4: "ellipse-4.png",
  careerClutch: "Career Clutch",
  welcomeGetStarted: "Welcome.Get started by providing your details.",
  phoneNumber: "Phone Number",
  password: "Password",
  visibility_Off_Black_24Dp1: "visibility-off-black-24dp-1.png",
  forgotPassword: "Forgot password?",
  signIn: "Sign In",
  group358: "group-358.png",
  signInWithGoogle: "Sign In with Google",
  spanText1: "Don’t have an account? ",
  spanText2: "Sign Up",
};