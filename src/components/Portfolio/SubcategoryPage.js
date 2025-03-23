import React from 'react';
import { useParams, Link } from 'react-router-dom';
import styled from 'styled-components';

const Gallery = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin: 50px auto;
  max-width: 1000px;
`;

const GalleryItem = styled(Link)`
  position: relative;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  text-decoration: none;

  img, video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }

  &:hover img, &:hover video {
    transform: scale(1.1);
  }

  .overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.6);
    color: #fff;
    padding: 20px;
    text-align: center;
  }
`;

const subcategories = {
  'social-media': [
    { name: 'Social Media Posts', type: '/images/portfolio/social-media/posts/DONOR DAY.png' }, 
    { name: 'Social Media Reels', type: 'video' }
  ],
  'animations': [
    { name: '2D Animations', type: 'video' },
    { name: '3D Animations', type: 'video' }
  ],
  'photography': [
    { name: 'Photography', type: 'image' },
    { name: 'Videography', type: 'video' }
  ],
  'website': [
    { name: 'Landing Pages', type: 'image' },
    { name: 'E-commerce', type: 'image' }
  ]
};

const SubcategoryPage = () => {
  const { categoryId } = useParams();
  const categorySubcategories = subcategories[categoryId] || [];

  return (
    <div>
      <h2 style={{ textAlign: 'center', marginTop: '20px' }}>
        {categoryId.replace('-', ' ').toUpperCase()}
      </h2>
      <Gallery>
        {categorySubcategories.map((sub, index) => {
          const mediaPath = `/images/portfolio/${categoryId}/${sub.name.toLowerCase().replace(/ /g, '-')}`;
          return (
            <GalleryItem key={index} to={`/portfolio/${categoryId}/${sub.name.toLowerCase().replace(/ /g, '-')}`}>
              {sub.type === 'image' ? (
                <img src={`${mediaPath}.jpg`} alt={sub.name} />
              ) : sub.type === 'video' ? (
                <video autoPlay loop muted>
                  <source src={`${mediaPath}.mp4`} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ) : null}
              <div className="overlay">
                <h4>{sub.name}</h4>
              </div>
            </GalleryItem>
          );
        })}
      </Gallery>
    </div>
  );
};

export default SubcategoryPage;
