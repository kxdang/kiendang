import React from 'react'
import Image from '@/components/Image'
import Link from '@/components/Link'
import { HiLocationMarker } from 'react-icons/hi'
import SocialIcon from '@/components/social-icons'

export default function Profile() {
  return (
    <div>
      <h1 className="text-center text-3xl font-bold sm:hidden">Kien Dang</h1>
      <div className="flex flex-col-reverse pt-8 pb-2 md:flex-row">
        <div className="mr-auto">
          <h2 className=" pb-6 text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            👋 Hello
          </h2>
          <h2 className="sm:text-md  pb-1 text-gray-500 dark:text-gray-400">
            Welcome to my blog, my name is Kien.
          </h2>
          <p className="sm:text-md  text-gray-500 dark:text-gray-400">
            I am a lifelong learner with a passion for solving problems via code.
          </p>
          <p className="pt-4 text-gray-500 dark:text-gray-400 md:text-sm">
            Technology stack I use:
          </p>
          <span className="mr-2 rounded bg-yellow-100 px-2.5 py-0.5 text-xs font-medium text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300">
            JavaScript
          </span>
          <span className="mr-2 rounded bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-300">
            TypeScript
          </span>
          <span className="mr-2 rounded bg-sky-100 px-2.5 py-0.5 text-xs font-medium text-sky-800 dark:bg-sky-900 dark:text-sky-300">
            Reactjs
          </span>
          <span className="mr-2 rounded bg-purple-100 px-2.5 py-0.5 text-xs font-medium text-purple-800 dark:bg-purple-900 dark:text-purple-300">
            GraphQL
          </span>
          <span className="mr-2 rounded bg-pink-100 px-2.5 py-0.5 text-xs font-medium text-pink-800 dark:bg-pink-900 dark:text-pink-300">
            Apollo
          </span>
        </div>
        <div className="pb-8 text-center md:pt-0">
          <Image
            src="/static/images/avatar.jpg"
            alt="avatar"
            width="150px"
            height="150px"
            className="h-48 w-48 rounded-full"
          />
          <div className="flex flex-col justify-center text-gray-500  dark:text-gray-400">
            <div className="flex items-center justify-center pt-2">
              <HiLocationMarker className="h-18 w-18" />{' '}
              <span className="pl-1">Toronto, Canada 🍁 </span>
            </div>
            <div className="flex justify-center space-x-1 pt-2 ">
              <SocialIcon kind="mail" href={`mailto:hello@kien.dev`} size="6" />
              <SocialIcon kind="linkedin" href="https://www.linkedin.com/in/kien-dang/" size="6" />
              <SocialIcon kind="github" href="https://github.com/kxdang" size="6" />
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="flex justify-between pb-6 text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-3xl sm:leading-10 md:text-4xl md:leading-14">
          <h1>Currently Reading</h1>
          <hr className="mx-3 mt-6 flex-grow border-gray-300 pb-2 dark:border-gray-700 sm:mt-6 md:mt-8" />

          <div className="flex items-end pb-1 text-sm text-gray-500 dark:text-gray-400 sm:pb-1 md:pb-4">
            <Link
              href="https://www.goodreads.com/review/list/63733680-kien-dang?shelf=read"
              target="_blank"
            >
              <p className="hover:underline">Read (62 books)</p>
            </Link>
          </div>
        </div>
        <div className="flex justify-center pb-2">
          <Image
            alt="lies lock lamaora"
            height="140px"
            width="90px"
            src="/static/images/books/scott.jpg"
          />
          <span className="mr-3"></span>
          <Image
            alt="dune 2 messiah"
            height="140px"
            width="90px"
            src="/static/images/books/dune2.jpg"
          />
        </div>
        <p className="text-center text-gray-500 dark:text-gray-400">
          The Lies of Locke Lamora - Scott Lynch <br /> Dune Messiah - Frank Herbert
        </p>
      </div>
    </div>
  )
}
