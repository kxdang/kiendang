import Link from 'next/link'
export default function Timeline() {
  return (
    <div className="xl:col-span-2 xl:col-start-2">
      <ol className="relative border-l border-gray-200 dark:border-gray-700">
        <li className="mb-10 ml-6">
          <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full">
            🏫
          </span>
          <h3 className="mb-1 flex items-center text-lg font-semibold text-gray-900 dark:text-white">
            University of Waterloo{' '}
            <span className="mr-2 ml-3 rounded bg-blue-100 px-2.5 py-0.5 text-sm font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-300">
              Latest
            </span>
          </h3>
          <time className="mb-2 block text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            2011-2016
          </time>
          <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
            🧪{' '}
            <Link
              href="/blog/biochemistry-story"
              className="font-medium text-blue-600 hover:underline dark:text-blue-500"
            >
              My Biochemistry Story
            </Link>{' '}
            <br />
            Graduated a 5 year co-op program with a Bachelors of Science in Honours Biochemistry
            (B.Sc.)
          </p>
        </li>
        <li className="mb-10 ml-6">
          <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full">
            🏢
          </span>
          <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
            My first job out of school
          </h3>
          <time className="mb-2 block text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            2017-2019
          </time>
          <p className="text-base font-normal text-gray-500 dark:text-gray-400">
            💻 Costing Technologist <br /> <br /> After graduating, I worked at a chemical company
            specializing in polyurethane for the automotive industry for over 2 years. I{' '}
            <Link
              href="/blog/automated-job-process"
              className="font-medium text-blue-600 hover:underline dark:text-blue-500"
            >
              automated
            </Link>{' '}
            a portion of my work using VBA which sparked my interest in programming. Thus, I decided
            to resign to pursue my passion and start my programming journey.
          </p>
        </li>
        <li className="mb-10 ml-6">
          <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 ring-8 ring-white dark:bg-blue-900 dark:ring-gray-900">
            <svg
              aria-hidden="true"
              className="h-3 w-3 text-blue-800 dark:text-blue-300"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                clipRule="evenodd"
              ></path>
            </svg>
          </span>
          <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
            Flowbite Library v1.2.2
          </h3>
          <time className="mb-2 block text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            Released on December 2nd, 2021
          </time>
          <p className="text-base font-normal text-gray-500 dark:text-gray-400">
            Get started with dozens of web components and interactive elements built on top of
            Tailwind CSS.
          </p>
        </li>
        <li className="mb-10 ml-6">
          <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 ring-8 ring-white dark:bg-blue-900 dark:ring-gray-900">
            <svg
              aria-hidden="true"
              className="h-3 w-3 text-blue-800 dark:text-blue-300"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                clipRule="evenodd"
              ></path>
            </svg>
          </span>
          <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
            Flowbite Library v1.2.2
          </h3>
          <time className="mb-2 block text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            Released on December 2nd, 2021
          </time>
          <p className="text-base font-normal text-gray-500 dark:text-gray-400">
            Get started with dozens of web components and interactive elements built on top of
            Tailwind CSS.
          </p>
        </li>
      </ol>
    </div>
  )
}
