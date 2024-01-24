import Header from "./Header";
import { useEffect, useState } from 'react';
const Home = () => {
  const [images, setImages] = useState([]);
  const [filteredImages, setFilteredImages] = useState([]);
  let dataTest = [{"url":"https://itss-hedsocial.s3.us-east-1.amazonaws.com/manga_name/conan.jpg","alt":"manga_name/conan.jpg","name":"conan"},{"url":"https://itss-hedsocial.s3.us-east-1.amazonaws.com/manga_name/onepiece.jpg","alt":"manga_name/onepiece.jpg","name":"onepiece"},{"url":"https://itss-hedsocial.s3.us-east-1.amazonaws.com/manga_name/yugioh.jpg","alt":"manga_name/yugioh.jpg","name":"yugioh"}]
  useEffect(() => {
    setImages(dataTest);
    setFilteredImages(dataTest);
  }, [])
  // useEffect(() => {
  //   const fetchImageManga = async () => {
  //     try {
  //       const response = await fetch("https://be-manga.vercel.app/images/manga_name");
  //       if (response.ok) {
  //         const data = await response.json();
  //         if(data.length === 0) {
  //           setImages(dataTest);
  //           setFilteredImages(dataTest);
  //         }
  //         setImages(data);
  //         setFilteredImages(data); 
  //       } else {
  //         console.error("Failed to fetch posts");
  //       }
  //     } catch (error) {
  //       console.error("Error:", error);
  //     }
  //   };

  //   fetchImageManga();
  // }, []);
  const handleSearch = (value) => {
    if (value.trim() === "") {
      setFilteredImages(images); 
    } else {
      const filtered = images.filter((image) =>
        image.name.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredImages(filtered);
    }
  };
  return (
    <div className="bg-[#e8f1fd] h-full w-full">
      <Header onSearch={handleSearch}/>
      <div className="w-3/5 mx-auto mt-10">
        <div className="flex flex-col md:grid md:grid-cols-2 gap-4">
          {filteredImages.map((image, index) => (
            <div key={index} className="w-full h-96 relative">
              <a href={`/${image.name}`}>
                <img
                  src={image.url}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                  style={{ objectFit: 'cover' }}
                />
              </a>
              <div className="absolute top-0 left-0 p-4">
                <p className="text-[#e17e76]  uppercase text-[24px] font-bold">{image.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Home;
