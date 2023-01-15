import { StringSchemaType } from '@sanity/types';
import { CLIENT_STATIC_FILES_RUNTIME_POLYFILLS_SYMBOL } from 'next/dist/shared/lib/constants';
import Image from 'next/image';

interface SanityBody {
	_createdAt: string;
	_id: string;
	_rev: string;
	_updatedAt: string;
}

interface Image {
	_type: 'image';
	asset: {
		_ref: string;
		_type: 'reference';
	};
}

export interface Skill extends SanityBody {
	_type: 'skill';
	image: Image;
	progress: number;
	title: string;
}

export interface PageInfo extends SanityBody {
	_type: 'pageInfo';
	address: string;
	backgroundInfo: string;
	email: string;
	role: string;
	heroImage: Image;
	name: string;
	phoneNumber: string;
	profilePic: Image;
}
// THIS MIGHT BE MEANT TO BE TYPED AS TECHNOLOGY
export interface Technology extends SanityBody {
	_type: 'skill';
	image: Image;
	progress: number;
	title: string;
}

export interface Project extends SanityBody {
	_type: 'project';
	image: Image;
	title: string;
	linkToBuild: string;
	summary: string;
	technologies: Technology[];
}

export interface Experience extends SanityBody {
	_type: 'experience';
	company: string;
	companyImage: Image;
	dateStarted: Date;
	dateEnded: Date;
	isCurrentlyWorkingHere: boolean;
	jobTitle: string;
	points: string[];
	technologies: Technology[];
	order: Number;
}

export interface Social extends SanityBody {
	_type: 'social';
	title: string;
	url: string;
}
