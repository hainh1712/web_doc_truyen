import { useEffect, useState } from 'react';
import { Select, Spin, Empty } from 'antd';

const ImageGallery = () => {
  const [selectedChapter, setSelectedChapter] = useState('1123');
  const [lengthChapter, setLengthChapter] = useState(0);
  const [imageInChapter, setImageInChapter] = useState([]);
  const [loaded, setLoaded] = useState(false);

  const handleChange = (value) => {
    console.log(`Selected ${value}`);
    setSelectedChapter(value);
    setLoaded(false); 
  };

  const options = Array.from({ length: 1123 }, (_, index) => ({
    value: `${index + 1}`,
    label: `Chapter ${index + 1}`,
  }));

  useEffect(() => {
    const fetchImageUrls = async () => {
      const response = await fetch(
        `https://be-manga.vercel.app/length_folder?bucket_name=itss-hedsocial&folder_prefix=conan%2Fchap_${selectedChapter}/`
      );
      const data = await response.json();
      console.log(data);
      setLengthChapter(data);

      if (data === 0 || data >= 40) {
        setImageInChapter([]); 
      } else {
        const newImageInChapter = Array.from({ length: data }, (_, index) => ({
          value: `https://itss-hedsocial.s3.amazonaws.com/conan/chap_${selectedChapter}/${index + 1}.jpg`,
          label: `Image ${index + 1}`,
        }));

        setImageInChapter(newImageInChapter);
      }
      setLoaded(true); 
    };

    fetchImageUrls();
  }, [selectedChapter]);

  return (
    <div className='bg-[#f4f4f4] w-screen h-screen overflow-y-auto'>
      <div className='w-4/5 mx-auto bg-white'>
        <div className='sticky top-0 items-center justify-center flex bg-gray-200 mt-4 py-2'>
          <Select
            showSearch
            value={selectedChapter}
            style={{ width: 360 }}
            placeholder="Select a chapter"
            optionFilterProp="label"
            onChange={handleChange}
            options={options}
            filterOption={(input, option) =>
              option.label.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
          />
        </div>
        {loaded ? (
          imageInChapter.length > 0 ? (
            imageInChapter.map((image) => (
              <div className='flex items-center justify-center' key={image.label}>
                <img src={image.value} alt={image.label} />
              </div>
            ))
          ) : (
            <div className='flex items-center justify-center py-4'>
              <Empty description='Not available' />
            </div>
          )
        ) : (
          <div className='flex items-center justify-center py-4'>
            <Spin size='large' />
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageGallery;
