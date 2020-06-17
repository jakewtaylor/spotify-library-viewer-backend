import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import FavoriteBorderRoundedIcon from '@material-ui/icons/FavoriteBorderRounded';
import { Image } from '../../../../types/spotify/Image';
import { useRecoilState, useRecoilValue } from 'recoil';
import { favouriteAlbumsQuery } from '../../../../recoil/user/albums';

type Props = {
  image: Image;
};

export const AlbumArt: React.FC<Props> = ({ image }) => {
  const [hovered, setHovered] = useState(false);
  const { opacity, fullOpacity } = useSpring({
    opacity: hovered ? 0.75 : 0,
    fullOpacity: hovered ? 1 : 0,
    config: { duration: 50 },
  });

  const favAlbums = useRecoilValue(favouriteAlbumsQuery);

  console.log(favAlbums);

  const handleFavourite = () => {
    //
  };

  return (
    <div
      className="w-48 h-48 bg-gray-800 mb-2 relative"
      onMouseOver={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img src={image.url} />

      <div className="absolute inset-0">
        <animated.div
          className="absolute inset-0 bg-gray-900"
          style={{ opacity }}
        />

        <animated.div
          className="absolute inset-0 flex items-center justify-center"
          style={{ opacity: fullOpacity }}
        >
          <button className="cursor-pointer focus:outline-none">
            <FavoriteBorderRoundedIcon
              fontSize="large"
              className="text-white"
            />
          </button>
        </animated.div>
      </div>
    </div>
  );
};
