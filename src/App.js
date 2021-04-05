import React from "react";
import { GoogleLogin } from "react-google-login";
import StripeContainer from "./Stripe/StripeContainer";

function App() {
  return (
    <>
      <div>
        <GoogleLogin
          clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
          buttonText="Log in with Google"
          onSuccess={handleLogin}
          onFailure={handleLogin}
          cookiePolicy={"single_host_origin"}
        />
      </div>
      <div className="App">
        <StripeContainer />
      </div>
    </>
  );
}

const handleLogin = async ({ tokenId }) => {
  const res = await fetch("http://localhost:9000/auth/user/login/google", {
    method: "POST",
    body: JSON.stringify({
      tokenId,
    }),
    headers: {
      "Content-Type": "application/json",
      "x-storename": "store_one",
    },
  });
  const data = await res.json();
  console.log(data);
};

export default App;
