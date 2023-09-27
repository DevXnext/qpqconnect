'use client';

import useWindowSize from '@/app/providers/useWindowSize';
import { useState } from 'react';
import { BiSearch } from 'react-icons/bi';

const Search = () => {
  const [inputQuery, setInputQuery] = useState("");
  const size = useWindowSize();

  return (
    <div
      className="
        border-[1px] 
        w-full 
        md:w-auto 
        py-2 
        rounded-full 
        shadow-sm 
        hover:shadow-md 
        transition 
        cursor-pointer
      "
    >
      <div
        className="
          flex 
          flex-row 
          items-center 
          justify-between
        "
      >
        <div
          className="
            text-sm 
            pl-6 
            pr-2 
            text-gray-600 
            flex 
            flex-row 
            items-center 
            gap-3
          "
        >
          <input
            type='text'
            value={inputQuery}
            placeholder='Search...'
            onChange={(e) => setInputQuery(e.target.value)}
          />
          <div
            className="
              p-2 
              bg-rose-500 
              rounded-full 
              text-white
            "
          >
            <BiSearch size={18} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Search;