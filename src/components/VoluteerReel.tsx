import VolunteerList from "./VolunteerList"

const VolunteerReel = () =>{

    const mockdata1 = {
      vol_name: "Volunteer",
      vol_detail: "sdddddddd"
    }
    const mockdata2 = [
      {
        id: '1',
        vol_name: "สอนหนังสือเด็กด้อยโอกาส",
        vol_detail: "สอนหนังสือพื้นฐาน ..."
      },
      {
        id: '2',
        vol_name: "ทำความสะอาดชายหาด",
        vol_detail: "เก็บขยะ พลาสติก ..."
      },
      {
        id: '3',
        vol_name: "ปลูกป่า",
        vol_detail: "ปลูกต้นไม้ในพื้นที่ป่า..."
      },
      {
        id: '4',
        vol_name: "ดูแลผู้สูงอายุ",
        vol_detail: "ผู้สูงอายุ พูดคุย เล่น..."
      }
    ];

    return(
        <section className='py-12'>
        <div className='md:flex md:items-center md:justify-between mb-4'>
          <div className='max-w-2xl px-4 lg:max-w-4xl lg:px-0'>
            <h1 className='text-2xl font-bold text-gray-900 sm:text-3xl'>
              Volunteers
            </h1>
          </div>
        </div>
  
        <div className='relative'>
          <div className='mt-6 flex items-center w-full'>
            <div className='w-full grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 md:grid-cols-4 md:gap-y-10 lg:gap-x-8'>
           
              <VolunteerList data1={mockdata2} />
              {/* {map.map((product, i) => (
                <ProductListing
                  key={`product-${i}`}
                  product={product}
                  index={i}
                />
              ))} */}
            </div>
          </div>
        </div>
      </section>
    )
}
export default VolunteerReel
