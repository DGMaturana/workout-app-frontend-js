import React from "react";
import RegisterForm from "../components/RegisterForm";
import Card from "../components/ui/Card";
import PageTitle from "../components/ui/text/PageTitle";

const Register = () => {
  return (
    <Card>
      <PageTitle>Registro</PageTitle>
      <RegisterForm />
    </Card>
  );
};

export default Register;
