import ImageSlider from "@/components/ImageSlider";
import MaxwidthWrapper from "@/components/MaxWidthWrapper";
import VolunteerReel from "@/components/VoluteerReel";
import Image from "next/image";
export default function Home() {
  return (
    <div>
      <MaxwidthWrapper>
        <div className="mt-2 flex flex-col h-">
          <ImageSlider urls={["/main.jpg"]}/>
        </div>
        <VolunteerReel />
        <div className='py-20 mx-auto text-center flex flex-col items-center max-w-3xl'>
          <h1 className='text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl' id="about-me">
            About {' '}
            <span className='text-blue-600'>
              me
            </span>
            .
          </h1 >
          <div className=" lg:h-40 text-center mt-10" >
              <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>

          </div>
        </div>
        <div className=" lg:h-40 flex justify-between">
              <div className="flex flex-col">
                  <p className='text-xl font-bold tracking-tight text-gray-900 sm:text-xl'>
                         จำนวนสมาชิก {' '}
                  </p>
                  <p className='text-xl font-bold tracking-tigh sm:text-2xl text-center text-blue-600'>
                          100 คน
                  </p>
              </div>
              <div className="flex flex-col">
                  <p className='text-xl font-bold tracking-tight text-gray-900 sm:text-2xl'>
                         จำนวนกิจกรรม {' '}

                  </p>
                  <p className='text-xl font-bold tracking-tight text-blue-600 sm:text-xl text-center'>
                          100 กิจกรรม
                  </p>
              </div>
          </div>
      </MaxwidthWrapper>
      <section className='border-t border-gray-200 bg-gray-50 mt-10'>
        <MaxwidthWrapper className="py-20">
          <div className="flex justify-center">
            <h1 className="font-bold ">footer</h1>
          </div>
        </MaxwidthWrapper>
      </section>
    </div>
  );
}
