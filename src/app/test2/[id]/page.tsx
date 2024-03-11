import ProfileComponent from '@/components/profile1/profilecomp';
import { useSession } from 'next-auth/react';
import React, { useEffect } from 'react'


// function Test2(){
//     const { data: session, status } = useSession();
//     console.log(session);
//     return { data: session, status }
// }

function Testpage({ params }: any) {

    // const { data: session, status } = useSession();

//   useEffect(() => {
//     // Your code that depends on the session context
//     console.log(session);
//   }, [session]);

  return (
    <div>
        <ProfileComponent id={undefined} exdata={undefined} />
    </div>
  )
}

export default Testpage;