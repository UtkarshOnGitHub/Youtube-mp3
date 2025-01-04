"use client";

import { useState } from "react";
import { PlaceholdersAndVanishInput } from "../Ui/placeholders-and-vanish-input";
import FileCard from "../Ui/FileCard";
import { Loader, MultiStepLoader } from "../Ui/MultiStepLoader";

export function InputWithTag() {
  const placeholders = [
    "Gorbi Kr le Download Video Download",
    "Biku Tu Bhi  kr le",
    "Maze kro bina Ads k download kro",
    "Subscribe to Noxious Beats",
    "Follow On Instagram"
  ];


  const Loadingstate = [
    {value:0,text:'Loading'},
    {value:1,text:'Extracting ID'},
    {value:2,text:'Downloading Video'},
  ]
  const [value, setValue] = useState(null);
  const [link , setLink] = useState('')
  const [loader , setIsLoader] = useState(false)

  const handleChange = (e) => {
    let id = extractYouTubeID(e.target.value);
    setLink(id)
  };

  const extractYouTubeID = (url) => {
    try {
      const shortPattern = /youtu\.be\/([^?&]+)/; // Matches youtu.be format
      const longPattern = /[?&]v=([^?&]+)/; // Matches youtube.com/watch?v= format
  
      const shortMatch = url.match(shortPattern);
      if (shortMatch) return shortMatch[1];
  
      const longMatch = url.match(longPattern);
      if (longMatch) return longMatch[1];

    } catch (error) {
      return null;
    }
  };

  const onSubmit = async(e) => {
    setIsLoader(true)
    const apiKey = process.env.NEXT_PUBLIC_API_SECRET_KEY;
    e.preventDefault();
    const options = {
        method: "GET",
        headers: {
          "x-rapidapi-key": apiKey,
          "x-rapidapi-host": "youtube-mp36.p.rapidapi.com",
        },
      };
      const url = "https://youtube-mp36.p.rapidapi.com/dl?id=" + link;
      try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);
        setValue(result)
        setIsLoader(false)
      } catch (error) {
        console.error(error);
        setIsLoader(false)
      }
  };

  if(loader){
    return<>
        <Loader isLoading={loader}/>
    </>
  }
  return (
    <div className="h-[40rem] flex flex-col justify-center  items-center px-4">
      <h2 className="mb-10 sm:mb-10 text-xl text-center sm:text-5xl text-white">
        Paste your Link Here
      </h2>
      <PlaceholdersAndVanishInput
        placeholders={placeholders}
        onChange={handleChange}
        onSubmit={onSubmit}
      />
      {value ? <FileCard file={value} /> : null}
    </div>
  );
}
