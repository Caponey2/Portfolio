import React from 'react';
import { motion } from 'framer-motion';
import Skill from './Skill';
import { Skill as SkillType } from '../typings';

type Props = { skills: SkillType[] };

function Skills({ skills }: Props) {
	return (
		<motion.div
			initial={{
				opacity: 0,
			}}
			transition={{
				duration: 1.5,
			}}
			whileInView={{
				opacity: 1,
			}}
			className='flex relative flex-col md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto overflow-x-hidden items-center'
			id='SkillsContainer
			'>
			<h3 className='absolute top-24 uppercase tracking-[20px] text-blue-200 text-2xl'>
				Skills
			</h3>
			<h3 className='absolute top-36 uppercase tracking-[3x] text-gray-500 text-sm'>
				Hover over a skill for current proficieny
			</h3>
			<div className='grid grid-cols-4 gap-4' id='SkillGrid'>
				{skills?.slice(0, skills.length / 2).map((skill) => (
					<Skill key={skill._id} skill={skill} />
				))}
				{skills?.slice(skills.length / 2, skills.length).map((skill) => (
					<Skill key={skill._id} skill={skill} directionLeft />
				))}
			</div>
		</motion.div>
	);
}

export default Skills;
