import { useEffect } from "react";
import { useNavigate, Outlet } from "react-router-dom";

const Protected = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      return navigate("/");
    }
  }, []);

  return <Outlet />;
};

export default Protected;
