import Link from "next/link"
import ImageSlider from "./ImageSlider"

const VolunteerList = ({data1}: any) =>{
  // const pa1 = "/detail/" + param1
  const  data  = data1;
  // console.log("Mocl", data)
    return(
        <>
        {data.map((item: any, index: any) => (
          <div key={index}>
        <Link href={"/detail/"+item.id}>
          <div className='flex flex-col w-full'>
            <ImageSlider urls={["/volunteer_day.jpg"]}/>
            <h3 className='mt-4 font-medium text-sm text-gray-700'>
              {item.vol_name}
            </h3>
            <p className='mt-1 text-sm text-gray-500'>
            {item.vol_detail}
            </p>
          </div>
        </Link>
          </div>
        ))}
        </>
    )

}
export default VolunteerList
