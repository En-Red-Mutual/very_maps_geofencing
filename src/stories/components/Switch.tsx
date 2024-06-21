import  { useEffect, useState } from 'react';

const Switch = ({initialOn}:{initialOn:boolean}) => {
  const [isChecked, setIsChecked] = useState(initialOn);

  const toggleSwitch = () => {
    setIsChecked(prev => !prev);
  };

  useEffect(() => {
  }, [initialOn]);

  return (
    <div className="flex items-center justify-center">
      <label htmlFor="toggle" className="flex items-center cursor-pointer">
        <div className="relative">
          <input
            id="toggle"
            type="checkbox"
            className="hidden"
            checked={isChecked}
            onChange={toggleSwitch}
          />
          <div className={`toggle-line w-10 h-5 ${isChecked ? 'bg-orange-400' : 'bg-gray-400'} rounded-full shadow-inner`}></div>
          <div className={`toggle-dot absolute w-4 h-4 bg-white rounded-full shadow inset-y-0 left-1 top-[2px] ${isChecked ? 'translate-x-full bg-white' : 'bg-gray-400'}`}></div>
        </div>
      </label>
    </div>
  );
};

export default Switch;
