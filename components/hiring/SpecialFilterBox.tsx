import { Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import { Dispatch, SetStateAction, useState } from "react";

interface Category {
  [key: string]: string[] | undefined;
}

type SpecialFilterProp = {
  boxname: Dispatch<SetStateAction<string>>;
  boxVal: string;
  option: Category;
  state: Dispatch<SetStateAction<string>>;
  width: string;
};

const SpecialFilterBox = ({
  boxname,
  option,
  state,
  boxVal,
  width,
}: SpecialFilterProp) => {
  const [dropDown, setDropDown] = useState(false);
  const clickHandle = () => {
    dropDown === true ? setDropDown(false) : setDropDown(true);
  };
  const ChangeState = (value: string) => {
    boxname(value);
    state(value);
    setDropDown(false);
  };
  return (
    <div className="relative">
      <button
        type="button"
        key={`filter${boxVal}`}
        className={" bg-transparent py-1 px-2 text-originalBlue border border-[#C5C5C5] rounded-md inline-flex items-center truncate "+ width}
        onClick={clickHandle}
      >
        {boxVal}
        <ChevronDownIcon className="w-5 h-5" />
      </button>
      <Transition
				show={dropDown}
        enter="transition duration-500 ease-out"
        enterFrom="transform scale-50 opacity-0"
        enterTo="transform scale-100 opacity-100"
        leave="transition duration-75 ease-out"
        leaveFrom="transform scale-500 opacity-100"
        leaveTo="transform scale-50 opacity-0"
      >

      <div
        className={`${
          dropDown ? "visible" : "hidden"
        } absolute w-max text-originalBlue bg-white  top-2 border border-[#C5C5C5] rounded-md px-2 py-1 flex flex-row gap-2`}
      >
        {Object.keys(option).map((e) => (
					<div key={e+"key"}>
						<div>{e}</div>
						<div className="ml-4 flex flex-col">{option[e]?.map((element) => (
							<button className="text-left" onClick={(e) => ChangeState(e.currentTarget.innerHTML)} key={e + "option"} onFocus={(e) => ChangeState(e.currentTarget.innerHTML)}>{element}</button>
						))}
						</div>
					</div>
        ))}
      </div>
			</Transition>
    </div>
  );
};

export default SpecialFilterBox;
