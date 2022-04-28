import { async } from "@firebase/util";
import React from "react";
import {
  useAuthState,
  useSendEmailVerification,
} from "react-firebase-hooks/auth";
import toast, { Toaster } from "react-hot-toast";
import { Navigate, useLocation } from "react-router-dom";
import { auth } from "../../../firebase.init";
import Loading from "../../Shared/Loading/Loading";

const RequireAuth = ({ children }) => {
  const location = useLocation();

  const [sendEmailVerification, sending, error] =
    useSendEmailVerification(auth);

  const [user, loading] = useAuthState(auth);
  console.log(user, "insied require auth");

  if (loading) {
    return <Loading></Loading>;
  }

  if (!user) {
    return <Navigate to={`/login`} state={{ from: location }} replace />;
  }
  console.log(user);
  if (user.providerData[0]?.providerId === "password" && !user?.emailVerified) {
    return (
      <div className="text-center mt-4">
        <h6>Your email is not verified</h6>
        <p>Please verify your email</p>
        <button
          onClick={async () => {
            await sendEmailVerification();
            toast("Verification Email Sended");
          }}
        >
          Send Verification Email
        </button>
      </div>
    );
  }

  return children;
};

export default RequireAuth;
