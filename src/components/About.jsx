import React from 'react'
import { TiSocialLinkedinCircular, TiSocialFacebookCircular, TiSocialGithubCircular } from 'react-icons/ti'
import Link from 'next/link'
function About() {
    return (
        <div id='about' className='w-[100%] h-[100vh] flex items-center'>
            <div id='text--box' className='flex flex-col'>
                <h1 className='text-[80px] font-saira text-pri'>MD. ALFAZ <span className='text-primaryText'>HOSAIN</span></h1>
                <p className='leading-8 pb-6 font-serif text-lg'>Rajshahi, Bangladesh · +8801304396916 · <span className='text-primaryText'><a href="#alfazsozib@gmail.com"> alfazsozib@gmail.com</a></span></p>
                <p className='w-[90%] text-[18px] text-grayText leading-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, consectetur ex? Vero doloremque possimus deleniti distinctio necessitatibus ad architecto temporibus facilis labore perferendis a eaque sapiente laboriosam laborum corrupti, hic doloribus cupiditate dignissimos assumenda ullam pariatur nam magnam. Sit, repellendus illum animi commodi facilis nemo non esse, itaque provident quibusdam sapiente error fugiat eos velit aliquid dolores cupiditate enim ipsam!</p>
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
    )
}

export default About
