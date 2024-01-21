import Header from "./Header";
import { useEffect, useState } from 'react';
const Home = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImageManga = async () => {
      try {
        const response = await fetch("https://be-manga.vercel.app/images/manga_name");
        if (response.ok) {
          const data = await response.json();
          setImages(data);
        } else {
          console.error("Failed to fetch posts");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchImageManga();
  }, []);
  return (
    <div className="bg-[#e8f1fd] h-full w-full">
      <Header />
      <div className="w-3/5 mx-auto mt-10">
        <div className="grid grid-cols-2 gap-4">
          {images.map((image, index) => (
            <div key={index} className="w-full h-96 relative">
              <a href={`/${image.name}`}>
                <img
                  src={image.url}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                  style={{ objectFit: 'cover' }}
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Home;
