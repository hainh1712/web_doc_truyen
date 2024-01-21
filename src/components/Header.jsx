import { Input, Space } from 'antd';
const Header = () => {
  const { Search } = Input;
  const handleSearch = (value) => {
    console.log(value)
  };

  return (
    <div className="bg-[#fdcf76] h-16 flex sticky top-0 z-10">
      <div className='flex w-3/5 mx-auto items-center'>
        <div className='pl-10 pr-20'>
          <a href="/">
            <img src="/cat.jpg" alt="" width={40} height={40} />
          </a>
        </div>
        <div>
          <Search placeholder="Search manga" allowClear style={{ width: 600 }} onSearch={handleSearch}/>
        </div>
      </div>
      
    </div>
  );
}
export default Header;