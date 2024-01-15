import { useEffect, useState } from 'react';
import { Select } from 'antd';

const ImageGallery = () => {
  const [selectedChapter, setSelectedChapter] = useState('1123'); 
  const handleChange = (value) => {
    console.log(`Selected ${value}`);
    setSelectedChapter(value);
  };

  const options = Array.from({ length: 1123 }, (_, index) => ({
    value: `${index + 1}`, 
    label: `Chapter ${index + 1}`, 
  }));

  const imageUrl = `https://itss-hedsocial.s3.amazonaws.com/conan/chap_${selectedChapter}/1.jpg`;
  return (
    <div className='bg-[#f4f4f4] w-screen h-screen overflow-y-auto'>
      <div className='w-4/5 mx-auto bg-white'>
        <div className='sticky top-0 items-center justify-center flex bg-gray-200 mt-10'>
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
        <div className='flex items-center justify-center'>
          <img src={imageUrl} alt={`Chapter ${selectedChapter}`} />
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;
