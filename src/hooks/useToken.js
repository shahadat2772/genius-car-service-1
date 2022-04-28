import { async } from "@firebase/util";
import axios from "axios";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase.init";

const useToken = (user) => {
  const [token, setToken] = useState("");
  const email = user?.user?.email;
  useEffect(() => {
    const getToken = async () => {
      //   console.log(user);
      if (email) {
        const { data } = await axios.post(
          "https://peaceful-cove-33691.herokuapp.com/login",
          { email }
        );
        setToken(data);
        localStorage.setItem("accessToken", data);

        // console.log(data);
        //   const { data } = await axios.post(
        //     "https://peaceful-cove-33691.herokuapp.com/login",
        //     { email }
        //   );
        //   localStorage.setItem("accessToken", data);
      }
    };
    getToken();
  }, [user]);

  return [token];
};

export default useToken;
