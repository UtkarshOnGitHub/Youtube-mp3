"use client";
import React from "react";
import { InputWithTag } from "./InputWithTag";
import { BackgroundWithInput } from "../Ui/BackgroundWithInput";

export function BackgroundBeamsDemo() {
  return (
    (<div
      className="h-[40rem] w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <div className="w-full mx-auto p-4">
        <InputWithTag/>
      </div>
      {/* <BackgroundWithInput/> */}
    </div>)
  );
}
