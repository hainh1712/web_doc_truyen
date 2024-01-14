import { useState } from 'react';
import { Select } from 'antd';

const ImageGallery = () => {
  const [selectedChapter, setSelectedChapter] = useState('1'); 

  const handleChange = (value) => {
    console.log(`Selected ${value}`);
    setSelectedChapter(value);
  };

  const options = Array.from({ length: 1123 }, (_, index) => ({
    value: `${index + 1}`, 
    label: `Chapter ${index + 1}`, 
  }));

  return (
    <div className='bg-[#f4f4f4] w-screen h-screen overflow-y-auto'>
      <div className='w-4/5 mx-auto bg-white'>
        <div className=''>
          <Select
            value={selectedChapter}
            style={{ width: 360 }}
            onChange={handleChange}
            options={options}
          />
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;
