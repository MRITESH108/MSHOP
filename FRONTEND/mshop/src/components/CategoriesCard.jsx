import React from 'react'
import '../styles/CategoriesCard.css'
import CategoriesCardItem from './CategoriesCardItem'

const categories = [

  {
    title: 'Electronics',
    imgUrl: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c',
  },
  {
    title: 'Bike',
    imgUrl: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c',
  },
  {
    title: 'Toys',
    imgUrl: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c',
  },
  {
    title: 'Clothes',
    imgUrl: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c',
  },
  {
    title: 'Sports',
    imgUrl: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c',
  },
  {
    title: 'Cosmetics',
    imgUrl: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c',
  },
  {
    title: 'Mobiles',
    imgUrl: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c',
  },

];


const CategoriesCard = () => {
  return (
    <div className='categoriesCardContainer1'>
      <div className='categoriesCardContainer2'>
        {categories.map((category, index) => (
          <CategoriesCardItem key={index} categoryDetail={category} />
        ))}

      </div>
    </div>
  )
}

export default CategoriesCard
