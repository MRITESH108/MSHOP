import React from 'react';
import '../styles/CategoriesCardItem.css'

const CategoriesCardItem = ({ categoryDetail }) => {
  if (!categoryDetail) return null;

  return (
    <div className="categoriesCardItem">
      <div className="imageWrapper">
        <img src={categoryDetail.imgUrl} alt="Category" />
      </div>
      <div className="titleWrapper">
        <span>{categoryDetail.title}</span>
      </div>
    </div>
  );
};

export default CategoriesCardItem;