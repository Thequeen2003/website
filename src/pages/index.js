import AnimatedText from '@/components/AnimatedText';
import HireMe from '@/components/HireMe';
import { LinkArrow } from '@/components/Icons';
import Layout from '@/components/Layout'
import TransitionEffect from '@/components/TransitionEffect';
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';
//import profilePic from "/Users/alantisgreen/Downloads/20220601_170937.jpg";
import lightBulb from "../../public/images/svgs/miscellaneous_icons_1.svg";
import profilePic from "/Users/alantisgreen/Downloads/AG/src/pages/assets/20220601_170937.jpg";

export default function Home() {
  return (
    <>
      <Head>
      <title>Alantis Green Portfolio</title>
        <meta
          name="description"
          content="Explore CodeBucks's Next.js developer portfolio and 
        discover the latest webapp projects and software engineering articles. 
        Showcase your skills as a full-stack developer and software engineer."
        />
      </Head>
      <TransitionEffect />
      <main className='flex items-center text-dark w-full min-h-screen dark:text-light sm:items-start'>
        <Layout className='pt-0 md:pt-16 sm:pt-16'>
           <div className="flex items-center justify-between w-full lg:flex-col">
               <div className='w-1/2 md:w-full'>
                <Image src={profilePic} alt="CodeBucks" className='w-full h-auto lg:hidden md:inline-block md:w-full'
                priority
                sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              50vw"
                 />
               </div> 
               <div className='w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center'>
                <AnimatedText text="Turning Vision Into Reality With Code And Design." className='!text-6xl !text-left 
                xl:!text-5xl lg:!text-center lg:!text=6xl md:!text-5xl sm:!text-3xl
                '/>
                <p className='my-4 text-base font-medium md:text-sm sm:text-xs'>
                As a computer scientist student who is planning to concrete in AI and building web applications. 
                Explore my latest projects and articles, as I showcase my expertise in the intersection of AI and problem-solving. 
                </p>
                <div className='flex items-center self-start mt-2 lg:self-center'>
                  <Link href="//Users/alantisgreen/Downloads/AG/public/Resume (5).pdf" target={"_blank"}
                  className="flex items-center bg-dark text-light p-2.5 px-6
                  rounded-lg text-lg font-semibold hover:bg-light hover:text-dark
                  border-2 border-solid border-transparent hover:border-dark
                  
                  dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light
                  hover:dark:border-light md:p-2 md:px-4 md:text-base
                  "
                  download={true}
                  >Resume <LinkArrow className={"w-6 ml-1"}/>
                  
                  </Link>
                  <Link href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=new" target={"_blank"}
                  className="ml-4 text-lg font-medium capitalize text-dark underline dark:text-light md:text-base"
                  >Contact</Link>
                </div>
               </div>
           </div>
        </Layout>

        <HireMe />
        <div className='absolute right-8 bottom-8 inline-block w-24 md:hidden'>
          <Image src={lightBulb} alt="Codebucks" className='w-full h-auto' />
        </div>
      </main>
    </>
  )
}
