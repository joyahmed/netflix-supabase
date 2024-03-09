'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Link from 'next/link';
import GithubIcon from '@/public/github.svg';
import GoogleIcon from '@/public/google.svg';
import Image from 'next/image';

interface LoginProps {}

const Login = ({}: LoginProps) => {
	return (
		<div className='mt-24 rounded bg-black/80 py-10 px-6 md:mt-0 md:max-w-sm md:px-14'>
			<form>
				<h1 className='text-3xl font-semibold text-white'>Log in</h1>
				<div className='space-y-4 mt-5'>
					<Input
						type='email'
						name='email'
						placeholder='Email'
						className='bg-[#333] placeholder:text-xs placeholder:tet-gray-400 w-full inline-block'
					/>
					<Button
						type='submit'
						variant='destructive'
						className='w-full bg-[#e50914]'
					>
						Log in
					</Button>
				</div>
			</form>
			<div className='text-gray-500 text-sm mt-2'>
				New to Netflix?{' '}
				<Link href='/sign-up' className='text-whtie hover:underline'>
					Sign up now!
				</Link>
			</div>

			<div className='flex w-full justify-center items-center gap-x-3 mt-6'>
				<Button variant='outline' size='icon'>
					<Image
						src={GithubIcon}
						alt='github-icon'
						className='w-6 h-6 brightness-200'
					/>
				</Button>
				<Button variant='outline' size='icon'>
					<Image
						src={GoogleIcon}
						alt='google-icon'
						className='w-6 h-6'
					/>
				</Button>
			</div>
		</div>
	);
};

export default Login;
