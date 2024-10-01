import React from "react";
import { FaGraduationCap, FaUserCircle } from "react-icons/fa";
import { useAuth } from "./AuthContext";

const Header = () => {
  const { userInfo } = useAuth();

  console.log(userInfo);

  return (
    <header className="Header">
      <div className="header-title">
        <FaGraduationCap size={30} />
        &ensp;
        <span>OJT Management Portal</span>
      </div>
      <div className="header-user">
        <span className="user-name">{userInfo.user.firstName} {userInfo.user.lastName}</span>
        <FaUserCircle size={20} />
      </div>
    </header>
  );
};

export default Header;
