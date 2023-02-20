import React from "react";
import PageTitle from "../components/ui/text/PageTitle";
import { useAuth } from "../context/Auth";

const Profile = () => {
  const { user } = useAuth();
  const { nombre, email } = user;
  console.log(user);
  return (
    <div>
      <PageTitle>Profile</PageTitle>

      <p>{nombre}</p>
      <p>{email}</p>
    </div>
  );
};

export default Profile;
