import React from "react";
import LoginForm from "../components/LoginForm";
import PageTitle from "../components/ui/text/PageTitle";
import Card from "../components/ui/Card";

const Login = () => {
  return (
    <Card>
      <PageTitle>Log In</PageTitle>
      <LoginForm />
    </Card>
  );
};

export default Login;
