"use client"

import { useRouter } from "next/navigation"
import React, { useState } from "react"

const Page = () => {
  const router = useRouter();
  const [clearModal, setModal] = useState(false)
  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    console.log("!");
    //router.back();
    console.log("!!")
    setModal(true);
  }
  return (
    <div>
      {!clearModal?(<div className="fixed top-0 right-0 bottom-0 left-0 z-50">
      <div className="border h-full">
        <div className="flex justify-center items-center h-full bg-[rgba(0,0,0,0.6)] backdrop-blur">
          <form className="space-y-4" onSubmit={handleSubmit}>
            {/* Email */}
            <div>
              <label htmlFor="email" className="text-2xl capitalize font-bold">email</label>
              <input type="text" id="email" className="py-2 pl-2 w-full rounded-md focus:outline focus:outline-green-300" />
            </div>
            {/* Password */}
            <div>
              <label htmlFor="pass" className="text-2xl capitalize font-bold">password</label>
              <input type="password" id="pass" className="py-2 pl-2 w-full rounded-md focus:outline focus:outline-green-300" />
            </div>
            <div className="flex justify-end"><button type="submit" className="py-2 px-4 bg-slate-900 text-white">Submit</button></div>
          </form>
        </div>
      </div>
    </div>):null}
    </div>
  )
}

export default Page