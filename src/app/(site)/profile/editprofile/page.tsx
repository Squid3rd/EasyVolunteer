import Link from "next/link";
import React from "react";
import { FaPencil } from "react-icons/fa6";

function Editprofile() {
  return (
    <main className=" min-h-screen bg-[#094067]">
      <div className=" p-32">
        <div className=" flex justify-center items-center">
          <div className=" p-8 bg-[#FEFEFE] rounded-md">
            <div className="grid grid-cols-2">
              <div className="p-3">
                <div className="flex justify-center">
                  <img
                    className="rounded-xl w-[13rem] h-[13rem] m-10"
                    src="https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg"
                    alt="image description"
                  />
                </div>
                <div className=" flex justify-center">
                  <button className="w-2/4 p-3 bg-green-300 hover:bg-green-600 rounded-md">Change</button>
                </div>
              </div>
              <div className="p-2">
                <form className="shadow-md rounded px-8 pt-6 pb-8 mb-4">
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
                      placeholder="First Name"
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
                      placeholder="Last Name"
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
                      placeholder="092-XXX-XXXX"
                    />
                  </div>
                  <div className="flex justify-end">
                    <Link href="/profile">
                      <button
                        // onClick={openModal}
                        className="bg-green-300 hover:bg-green-600 p-3 rounded-md"
                      >
                        Save Change
                      </button>
                      {/* <ModalConfirm isOpen={isModalOpen} onClose={closeModal} onConfirm={handleConfirm} /> */}
                    </Link>
                    <Link href="/profile">
                      <button className="bg-red-300 hover:bg-red-600 p-3 ml-5 rounded-md">
                        Cancel
                      </button>
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Editprofile;
