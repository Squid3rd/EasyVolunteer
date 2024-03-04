import ImageSlider from "./ImageSlider"

const VolunteerList = () =>{
    return(
        <>
        <div className='flex flex-col w-full'>
          <ImageSlider urls={["/volunteer_day.jpg"]}/>
          <h3 className='mt-4 font-medium text-sm text-gray-700'>
            VolunteerName
          </h3>
          <p className='mt-1 text-sm text-gray-500'>
            detail
          </p>
        </div>
        </>
    )

}
export default VolunteerList