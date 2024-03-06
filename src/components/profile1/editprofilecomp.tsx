"use client";
import React, { useRef, useState } from "react";

function Editprofilecomp({ id, exdata }: any) {

  return (
    <>
      <main className=" min-h-screen bg-[#094067]">
        <div className=" p-32">
          <div className=" flex justify-center items-center">
            <div className=" p-8 bg-[#FEFEFE] rounded-md">
              <div className="grid grid-cols-2">
                <div className="p-3">
                  <div className="flex justify-center">
                    {/* <Image
                      className="rounded-xl w-[13rem] h-[13rem] m-10"
                      src="https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg"
                      alt="image description"
                    /> */}
                  </div>
                  <div className=" flex justify-center">
                    <input
                      accept=".jpg, .png, .jpeg"
                      type="file"
                      // ref={fileInputRef}
                      // style={{ display: "none" }} // Hide the actual file input
                      // onChange={handleFileChange}
                    />
                    <button
                      className="w-2/4 p-3 bg-green-300 hover:bg-green-600 rounded-md"
                      // onClick={handleButtonClick}
                    >
                      Change
                    </button>
                  </div>
                </div>
                <div className="p-2">
                  <form
                    // onSubmit={handleSubmit}
                    className="shadow-md rounded px-8 pt-6 pb-8 mb-4"
                  >
                    <div className="w-full apx-3 mb-6 ">
                      <label
                        className="block uppercase tracking-wide text-gray-700 text-1xl font-bold mb-2"
                        htmlFor="grid-first-name"
                      >
                        First Name
                      </label>
                      <input
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-black rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                        id="grid-first-name"
                        type="text"
                        // value={newFirst}
                        // onChange={(e) => setNewFirst(e.target.value)}
                        placeholder={exdata.topic.first_name}
                      />
                    </div>
                    <div className="w-full apx-3 mb-6 ">
                      <label
                        className="block uppercase tracking-wide text-gray-700 text-1xl font-bold mb-2"
                        htmlFor="grid-first-name"
                      >
                        Last Name
                      </label>
                      <input
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-black rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                        id="grid-first-name"
                        type="text"
                        // value={newLast}
                        // onChange={(e) => setNewlast(e.target.value)}
                        placeholder={exdata.topic.last_name}
                      />
                    </div>

                    <div className="w-full apx-3 mb-6 ">
                      <label
                        className="block uppercase tracking-wide text-gray-700 text-1xl font-bold mb-2"
                        htmlFor="grid-first-name"
                      >
                        Phone
                      </label>
                      <input
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-black rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                        id="grid-first-name"
                        type="text"
                        // value={newPhone}
                        // onChange={(e) => setNewphone(e.target.value)}
                        placeholder={exdata.topic.phone}
                      />
                    </div>
                    <div className="flex justify-end">
                      {/* <Link href={routeto}> */}
                        <button
                          // onClick={openModal}
                          className="bg-green-300 hover:bg-green-600 p-3 rounded-md"
                        >
                          Save Change
                        </button>
                        {/* <ModalConfirm isOpen={isModalOpen} onClose={closeModal} onConfirm={handleConfirm} /> */}
                      {/* </Link> */}
                      {/* <Link href={routeto}> */}
                        <button className="bg-red-300 hover:bg-red-600 p-3 ml-5 rounded-md">
                          Cancel
                        </button>
                      {/* </Link> */}
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Editprofilecomp;
