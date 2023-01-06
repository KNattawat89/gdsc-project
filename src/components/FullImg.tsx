import React, { FC } from "react";
import styled from "../pages/gallery/fullimages.module.css";

const FullImg: FC<{
  onClosePhoto: Function;
  selectPhoto: {
    thumbnail_url: string | null;
    full_url: string | null;
    date: string | null;
  };
}> = ({ onClosePhoto, selectPhoto }) => {
  return (
    <div className={styled.post}>
      <div className={styled.postBg} onClick={() => onClosePhoto()} />
      <div className={styled.postContent}>
        <img
          src={selectPhoto.full_url+""}
        />
      </div>
    </div>
  );
};

export default FullImg;
