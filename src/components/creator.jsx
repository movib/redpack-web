import React from 'react'

import { BsYoutube, BsTwitch } from 'react-icons/bs';
const Creator = (props) => {
  return (
    <a href={props.link} target="_blank">
      <div className="bg-red-700 rounded-xl p-6
                      grid grid-cols-2 gap-4 h-full">
        <div className="my-auto">
          <h1 className="text-lg font-black text-left
                         xs:text-2xl
                         sm:text-lg
                         md:text-2xl">
            {props.name}
          </h1>
          <p className="text-base text-black font-bold text-left
                        xs:text-xl
                        sm:text-base
                        md:text-xl">
            {props.game}
          </p>
        </div>
        <div className="my-auto flex gap-3">
          {props.platform === "YouTube" ? 
            <BsYoutube className="text-5xl md:text-6xl" /> :
            <BsTwitch className="text-5xl md:text-6xl" />
          }
          <p className="my-auto text-xl font-black md:text-2xl">{props.audience}</p>
        </div>
      </div>
    </a>
  );
}

export default Creator