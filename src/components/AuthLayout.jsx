import { useState, useEffect } from "react";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function Protected({ children, authentication = true }) {
  const [loader, setloader] = useState(true);
  const navigate = useNavigate();
  const authStatus = useSelector((state) => state.auth.status);

  useEffect(() => {
    if (authentication && authStatus !== authentication) {
      navigate("/login");
    } else if (!authentication && authStatus !== authentication) {
      navigate("/");
    }
    setloader(false);

    return () => {
      second;
    };
  }, [authStatus, navigate, authentication]);

  return <div>Protected</div>;
}

export default Protected;
