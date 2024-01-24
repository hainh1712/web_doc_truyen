import { Input, Space } from 'antd';
const Header = ({ onSearch }) => {
  const { Search } = Input;
  const handleSearch = (value) => {
    console.log(value)
  };

  return (
    <div className="bg-[#fdcf76] h-16 flex sticky top-0 z-10">
      <div className='flex md:w-3/5 w-4/5 mx-auto items-center'>
        <div className='pr-4'>
          <a href="/">
            <img src="/cat.jpg" alt="" width={40} height={40} />
          </a>
        </div>
        <div style={{ width: "80%" }}>
          <Search placeholder="Search manga" allowClear onSearch={onSearch}/>
        </div>
      </div>
      
    </div>
  );
}
export default Header;