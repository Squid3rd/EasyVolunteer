import React from 'react'
import "../globals.css"


function Detail() {
  return (
    <div className="3xl:container 3xl:mx-auto h-screen">
      <div className=" h-96 w-full bg-zinc-900 mb-24">
        <img
          className="w-full h-full object-contain brightness-50"
          src="https://cdn.discordapp.com/attachments/986617972544139337/1212741636086435940/2.png?ex=65f2f0a9&is=65e07ba9&hm=1e86c98f5f2ec33b58b9d77933199e2765a246884a23957c45c31d0d8ec22483&"
        ></img>
        <p className="flex justify-center mt-5 font-semibold text-4xl transition-all hover:scale-125 hover:-translate-y-2">
          Task Name{ }
          {/* ต่อ database */}
        </p>
      </div>
      <div className="md:mx-36 2xl:mx-96 mb-20 indent-16 hover:text-xl transition-all duration-500 hover:-translate-y-1">
        <p className='mx-12'>
          {/* รายละเอียดงานคร่าวๆ */}
          Ea culpa et quis minim dolore dolor labore duis incididunt magna
          aliqua sunt. Sit eiusmod amet minim laboris eu nisi aliqua nisi. Dolor
          fugiat cupidatat sit officia ut incididunt. Nulla ad ad ex et velit
          veniam id dolor quis. Anim reprehenderit et adipisicing ea est ea
          enim. Eu sit qui ea nulla dolor eu officia dolore dolor ipsum eiusmod
          amet aliquip aute. Aute ipsum adipisicing qui voluptate laboris.
          Mollit sint irure nulla sunt dolore ad ut quis anim ad sit. Incididunt
          amet elit ut amet. Qui eu nostrud est non ipsum ad irure eu esse.
          Aliquip ut voluptate dolor magna dolor magna duis sint. Veniam esse ut
          sunt ea tempor sint et ipsum voluptate id sint anim. Aliqua sunt
          pariatur eiusmod incididunt elit reprehenderit cupidatat exercitation
          velit nostrud. Dolor nisi nisi irure eiusmod excepteur et. Enim veniam
          amet consequat ad minim voluptate cillum.{ }
        </p>
      </div>
      <div className='md:h-40 2xl:h-64 h-28 transition-all  mb-20 flex justify-center'>

        <img
          className="h-full object-contain mx-2"
          src="https://cdn.discordapp.com/attachments/986617972544139337/1212741636086435940/2.png?ex=65f2f0a9&is=65e07ba9&hm=1e86c98f5f2ec33b58b9d77933199e2765a246884a23957c45c31d0d8ec22483&"
        ></img>
        <img
          className="h-full object-contain mx-2"
          src="https://cdn.discordapp.com/attachments/986617972544139337/1212741636086435940/2.png?ex=65f2f0a9&is=65e07ba9&hm=1e86c98f5f2ec33b58b9d77933199e2765a246884a23957c45c31d0d8ec22483&"
        ></img>

      </div>
      <div className="md:mx-36 2xl:mx-96">
        <p className="font-semibold text-xl mb-5">Requirement </p>
        <div className="mx-12">
          <p className="font-medium text-lg">เปิดรับสมัคร : { }</p>
          <p className="font-medium text-lg">ปิดรับสมัคร : { }</p>
          <p className="font-medium text-lg">จำนวน : { }</p>
          <p className="font-medium text-lg">คุณสมบัติ : { }</p>
          <p className="font-medium text-lg">ชั่วโมงจิตอาสา : { }</p>
          {/* <p className="font-medium text-lg">เปิดรับสมัคร : {}</p> */}
        </div>
      </div>
      <div className="flex justify-center">
        <button className="btn btn-blue drop-shadow-lg transition-all hover:-translate-y-1 hover:scale-110">
          เข้าร่วม
        </button>
      </div>
    </div>
  )
}
export default Detail