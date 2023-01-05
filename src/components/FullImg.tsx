import React from "react";
import styled from "../pages/gallery/fullimages.module.css";

const FullImg = () => {
  return (
    <div className={styled.post}>
      <div className={styled.postBg} />
      <div className={styled.postContent}>
        <img src="https://images.unsplash.com/photo-1672843386042-ec530be0a5f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80" />
      </div>
    </div>
  );
};

export default FullImg;
