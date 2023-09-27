'use client';

import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

// import useFavorite from "@/app/hooks/useFavorite";
// import { SafeUser } from "@/app/types";

import ClientOnly from "./ClientOnly";

interface HeartButtonProps {
  listingId: string
  currentUser?: null
}

const HeartButton: React.FC<HeartButtonProps> = ({
  listingId,
  currentUser
}) => {
  // const { hasFavorited, toggleFavorite } = useFavorite({
  //   listingId,
  //   currentUser
  // });

  return (
    <div
      className="
        relative
        hover:opacity-80
        transition
        cursor-pointer
      "
    >
      <AiOutlineHeart
        size={28}
        className="
          fill-white
          absolute
          -top-[2px]
          -right-[2px]
        "
      />
      <AiFillHeart
        size={24}
        className='fill-rose-500'
      />
    </div>
  );
}

export default HeartButton;