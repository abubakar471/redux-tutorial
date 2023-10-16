const Sidebar = () => {
  return (
    <div className="w-full h-full px-6">
      <div>
        <h1>Categories</h1>
        <ul className="mt-4">
          <li className="text-[12px] text-gray-500 px-2">Mobile Acessories</li>
          <li className="text-[12px] text-gray-500 px-2 ">
            Mechanical Keyboards
          </li>
          <li className="text-[12px] text-gray-500 px-2">Gaming Mouse</li>
          <li className="text-[12px] text-gray-500 px-2">Mobile Acessories</li>
          <li className="text-[12px] text-gray-500 px-2 ">Graphics Card</li>
          <li className="text-[12px] text-gray-500 px-2">Power Banks</li>
        </ul>
      </div>

      <div className="mt-4">
        <h1>Brands</h1>
        <ul className="mt-4">
          <li className="text-[12px] text-gray-500 px-2 flex items-center gap-x-2">
            <input type="checkbox" name="" id="" className="p-2" />
            Mobile Acessories
          </li>
          <li className="text-[12px] text-gray-500 px-2 flex items-center gap-x-2 ">
            <input type="checkbox" name="" id="" className="p-2" />
            Mechanical Keyboards
          </li>
          <li className="text-[12px] text-gray-500 px-2 flex items-center gap-x-2">
            <input type="checkbox" name="" id="" className="p-2" />
            Gaming Mouse
          </li>
          <li className="text-[12px] text-gray-500 px-2 flex items-center gap-x-2">
            <input type="checkbox" name="" id="" className="p-2" />
            Mobile Acessories
          </li>
          <li className="text-[12px] text-gray-500 px-2 flex items-center gap-x-2 ">
            <input type="checkbox" name="" id="" className="p-2" />
            Graphics Card
          </li>
          <li className="text-[12px] text-gray-500 px-2 flex items-center gap-x-2">
            <input type="checkbox" name="" id="" className="p-2" />
            Power Banks
          </li>
        </ul>
      </div>

      <div className="mt-4">
        <h1>Promotion & Services</h1>
        <ul className="mt-4">
          <li className="text-[12px] text-gray-500 px-2 flex items-center gap-x-2">
            <input type="checkbox" name="" id="" className="p-2" />
            Free Delivery
          </li>
          <li className="text-[12px] text-gray-500 px-2 flex items-center gap-x-2 ">
            <input type="checkbox" name="" id="" className="p-2" />
            Best Price Guarranted
          </li>
          <li className="text-[12px] text-gray-500 px-2 flex items-center gap-x-2">
            <input type="checkbox" name="" id="" className="p-2" />
            Authentic Brands
          </li>
          <li className="text-[12px] text-gray-500 px-2 flex items-center gap-x-2">
            <input type="checkbox" name="" id="" className="p-2" />
            Cash On Delivery
          </li> 
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
