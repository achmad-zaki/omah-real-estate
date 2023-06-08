import { MdNavigateBefore } from "react-icons/md";

import { Menu, Transition } from "@headlessui/react";
import { Fragment, useContext, useState } from "react";
import { HouseContext } from "../context/HouseContext";

const PriceDropdown = () => {
  const { price, setPrice } = useContext(HouseContext);
  const [isOpen, setIsOpen] = useState(false);
  const handleSelect = (price) => {
    setPrice(price);
    setIsOpen(false);
  };
  const priceList = [
    {
      value: "Select",
    },
    {
      value: "100000 - 150000",
    },
    {
      value: "150000 - 200000",
    },
    {
      value: "200000 - 300000",
    },
    {
      value: "300000 - 400000",
    },
  ];
  return (
    <Menu
      as="div"
      className="relative flex flex-col gap-y-2 min-w-[160px] w-full"
    >
      <Menu.Button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full"
      >
        <div className="text-[16px] font-medium text-secondary cursor-pointer">
          Price
        </div>
        <MdNavigateBefore
          size={20}
          className={`${isOpen ? "rotate-90" : "-rotate-90"}`}
        />
      </Menu.Button>
      <div className="text-[16px] text-[#828282] capitalize">{price}</div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="menu-dropdown">
          {priceList.map((item, index) => {
            return (
              <Menu.Item
                onClick={() => handleSelect(item.value)}
                as="li"
                className="list-dropdown"
                key={index}
              >
                {item.value}
              </Menu.Item>
            );
          })}
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default PriceDropdown;
