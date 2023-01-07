import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { PageInfo } from '../typings';
import { urlFor } from '../sanity';
type Props = { pageInfo: PageInfo };

function About({ pageInfo }: Props) {
	return (
		<div className='flex flex-col relative h-screen md:text-left  max-w-7xl px-10 justify-evenly p-20 mx-auto items-center xl:flex-row'>
			<h3 className='absolute pb-20 top-24 uppercase tracking-[20px] text-blue-200 text-2xl '>
				About
			</h3>

			<motion.div
				className='flex md:mb-0 flex-shrink-0 justify-center pt-10 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 '
				initial={{
					x: -200,
					opacity: 0,
				}}
				transition={{
					duration: 1.2,
				}}
				whileInView={{
					x: 0,
					opacity: 1,
				}}
				viewport={{
					once: true,
				}}>
				<Image
					className='flex-shrink-0 w-[150px] h-[150px] rounded-lg object-cover sm:w-[175px] sm:h-[175px] md:w-[175px] md:h-[175px] lg:h-[260px] lg:w-[260px] xl:w-[300px] xl:h-[300px] 2xl:w-[400px] 2xl:h-[400px]'
					src={urlFor(pageInfo?.profilePic).url()}
					width={500}
					height={500}
					alt='2ndme'
				/>
			</motion.div>
			<div className='flex text-center mx-2 justify-center flex-col space-y-1 xs:space-y-2 lg:space-y-5 px-0 md:px-5'>
				<h4 className='text-sm font-semibold md:text-base lg:text-4xl'>
					Here is a {''}
					<span className='underline decoration-blue-400/50'>little</span> {''}
					background
				</h4>
				<p className='text-[9.5px] xs:text-[11px] sm:text-[13px] md:text-base lg:text-xl xl:text-left'>
					{pageInfo?.backgroundInfo}{' '}
				</p>
			</div>
		</div>
	);
}

export default About;
