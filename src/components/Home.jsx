import Header from "./Header";
import React, { useEffect, useState } from 'react';
const Home = () => {
  // const [images, setImages] = useState([]);

  // useEffect(() => {
  //   const fetchImages = async () => {
  //     try {
  //       const response = await fetch('/');
  //       const fileNames = await response.json();

  //       const imageList = fileNames.map((fileName) => ({
  //         url: `/images/${fileName}`,
  //         alt: fileName,
  //       }));

  //       setImages(imageList);
  //     } catch (error) {
  //       console.error('Error fetching images:', error);
  //     }
  //   };

  //   fetchImages();
  // }, []);
  const images = [
    {
      "url": "https://itss-hedsocial.s3.us-east-1.amazonaws.com/manga_name/conan.jpg",
      "alt": "manga_name/conan.jpg"
    },
    {
      "url": "https://itss-hedsocial.s3.us-east-1.amazonaws.com/manga_name/onepiece.jpg",
      "alt": "manga_name/onepiece.jpg"
    },
    {
      "url": "https://itss-hedsocial.s3.us-east-1.amazonaws.com/manga_name/yugioh.jpg",
      "alt": "manga_name/yugioh.jpg"
    }
  ]
  return (
    <div className="bg-[#e8f1fd] h-screen w-full">
      <Header />
      <div className="w-3/5 mx-auto mt-10">
        <div className="grid grid-cols-2 gap-4">
          {images.map((image, index) => (
            <div key={index} className="w-full h-96 relative">
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-full object-cover"
                style={{ objectFit: 'cover' }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Home;
