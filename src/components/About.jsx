import React, { useState } from 'react'
import { TiSocialLinkedinCircular, TiSocialFacebookCircular, TiSocialGithubCircular } from 'react-icons/ti'
import { CgMenuOreos } from 'react-icons/cg'
import Link from 'next/link'
import MobileNav from './MobileNav'


function About() {
    const [menuPrev,setMenuPrev] = useState(false)
    const showMobileMenu =()=>{
        setMenuPrev(true)
    }
    return (
        <>
        <div className=' lg:hidden z-10 md:hidden absolute right-0 p-4'>
            {menuPrev?<CgMenuOreos size={40} onClick={()=>setMenuPrev(false)} />
            :<CgMenuOreos onClick={showMobileMenu} size={40} />}
        </div>
        {menuPrev?<MobileNav />:null}
        <div id='about' className='max-sm:pr-0 w-[100%] h-[100vh] pl-80 max-md:p-12 flex items-center'>
            <div id='text--box' className='flex flex-col'>
                <h1 className='text-6xl max-md:text-4xl font-saira font-bold max-sm:text-6xl text-[#343a40]'>ALFAZ <span className='text-[#36107d]'>HOSAIN</span></h1>
                <p className='leading-6 max-md:leading-8 max-md:text-sm max-sm:text-[16px] pb-8 font-serif text-grayText font-medium text-xl'>Rajshahi, Bangladesh · +8801304396916 · <span className='text-[#36107d] underline'><a href="#alfazsozib@gmail.com"> alfazsozib@gmail.com</a></span></p>
                <p className='w-[90%] text-[18px] text-grayText font-openSans leading-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, consectetur ex? Vero doloremque possimus deleniti distinctio necessitatibus ad architecto temporibus facilis labore perferendis a eaque sapiente laboriosam laborum corrupti, hic doloribus cupiditate dignissimos assumenda ullam pariatur nam magnam. Sit, repellendus illum animi commodi facilis nemo non esse, itaque provident quibusdam sapiente error fugiat eos velit aliquid dolores cupiditate enim ipsam!</p>
                <div id='icons' className='flex gap-4 pt-8'>
                    <Link href={"https://www.facebook.com/Alfazsozib/"}>
                    <TiSocialFacebookCircular  size={70} />
                    </Link>
                    <Link href={"https://www.linkedin.com/in/md-alfaz-hosain-b20260164/"}>
                    <TiSocialLinkedinCircular size={70} />
                    </Link>
                    <Link href={"https://www.github.com/alfazsozib"}>
                    <TiSocialGithubCircular size={70} />
                    </Link>
                </div>
            </div>

        </div>
        </>
    )
}

export default About
