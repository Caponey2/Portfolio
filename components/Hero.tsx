/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { Typewriter, Cursor, useTypewriter } from 'react-simple-typewriter';
import BackgroundCircles from './BackgroundCircles';

import Image from 'next/image';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { PageInfo } from '../typings';
import pageInfo from '../sanity/schemas/pageInfo';
import { urlFor } from '../sanity';

type Props = { pageInfo: PageInfo };

function Hero({ pageInfo }: Props) {
	const [text, count] = useTypewriter({
		words: [
			`Howdy, name's ${pageInfo?.name}`,
			'Developer',
			'Jiujiteiro',
			'Problem Solver',
			'Small Business Owner',
			'Lover of books',
			'Dungeon Master',
			'Teller of stories',
		],
		loop: true,
		delaySpeed: 2000,
	});

	return (
		<div
			id='HeroTop'
			className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
			<BackgroundCircles />
			<motion.div
				initial={{
					opacity: 0,
				}}
				animate={{
					opacity: [0, 1],
				}}
				transition={{
					delay: 2.5,
					duration: 3,
				}}
				id='Motion1'>
				<Image
					// loader={() => src}
					src={urlFor(pageInfo.heroImage).url()}
					width={150}
					height={150}
					alt=''
					id='Selfie'
					className='relative rounded-lg h-[150px] w-[150px] mx-auto object-cover'
				/>
			</motion.div>

			<motion.div
				initial={{
					opacity: 0,
				}}
				animate={{
					opacity: [0, 1],
				}}
				transition={{
					delay: 2,
					duration: 3,
				}}
				id='Motion2'>
				<h2 className='text-small uppercase text-blue-200 pb-2 mx-10 tracking-[15px] z-3 pt-[40px]'>
					{pageInfo?.role}
				</h2>
				<h1 className='text-3xl md:text-5xl lg:text-6xl font-semibold px-10 z-3 h-[48px]'>
					<span className='mr-3 max-w-4/5 max-h-[96px] min-h-[96px]'>
						{text}
					</span>
					<Cursor cursorColor='#3b82f6' />
				</h1>
				<div className='pt-5'>
					<Link href='#about'>
						<button className='heroButton'>About</button>
					</Link>
					<Link href='#experience'>
						<button className='heroButton'>Experience</button>
					</Link>
					<Link href='#skills'>
						<button className='heroButton'>Skills</button>
					</Link>
					<Link href='#projects'>
						<button className='heroButton'>Projects</button>
					</Link>
				</div>
			</motion.div>
		</div>
	);
}

export default Hero;
