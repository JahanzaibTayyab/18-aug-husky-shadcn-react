import React from "react";

function ConditionalRendering() {
  function Admin() {
    return <h1>Admin</h1>;
  }

  function Login() {
    return <h1>Login</h1>;
  }

  //   let content;
  let isLoggedIn = false;
  //   if (isLoggedIn) {
  //     content = <Admin />;
  //   } else {
  //     content = <Login />;
  //   }

  return (
    <div className="p-5">
      ConditionalRendering
      <div>{isLoggedIn ? <Admin /> : <Login />}</div>
    </div>
  );
}

export default ConditionalRendering;
