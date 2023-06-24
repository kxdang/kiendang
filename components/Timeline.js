import Link from 'next/link'
export default function Timeline() {
  return (
    <div className="xl:col-span-2 xl:col-start-2">
      <ol className="relative border-l border-gray-200 dark:border-gray-700">
        <li className="mb-10 ml-6">
          <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-blue-100  text-3xl ring-8 ring-white dark:bg-blue-900 dark:ring-gray-900">
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
            <Link href="/blog/biochemistry-story">
              <a className="font-medium text-blue-600 hover:underline dark:text-blue-400">
                My Biochemistry Story
              </a>
            </Link>{' '}
            <br />
            Graduated a 5 year co-op program with a Bachelors of Science in Honours Biochemistry
            (B.Sc.)
          </p>
        </li>
        <li className="mb-10 ml-6">
          <span className=" absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full  bg-blue-100 text-3xl ring-8 ring-white dark:bg-blue-900 dark:ring-gray-900">
            🏢
          </span>
          <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">First Job</h3>
          <time className="mb-2 block text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            2017-2019
          </time>
          <p className="text-base font-normal text-gray-500 dark:text-gray-400">
            💻 Costing Technologist <br /> <br /> After graduating, I worked at a chemical company
            specializing in polyurethane for the automotive industry for over 2 years. I{' '}
            <Link href="/blog/automated-job-process">
              <a className="font-medium text-blue-600 hover:underline dark:text-blue-400">
                {' '}
                automated
              </a>
            </Link>{' '}
            a portion of my work using VBA which sparked my interest in programming. Thus, I decided
            to{' '}
            <Link href="/blog/new-chapter-2019">
              <a className="font-medium text-blue-600 hover:underline dark:text-blue-400">resign</a>
            </Link>{' '}
            to pursue my passion and start my programming journey.
          </p>
        </li>
        <li className="mb-10 ml-6">
          <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 text-3xl ring-8 ring-white dark:bg-blue-900 dark:ring-gray-900">
            🚀
          </span>
          <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
            The Leap of Faith
          </h3>
          <time className="mb-2 block text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            May 3rd 2019
          </time>
          <p className="text-base font-normal text-gray-500 dark:text-gray-400">
            🌿{' '}
            <Link href="/blog/the-jump">
              <a className="font-medium text-blue-600 hover:underline dark:text-blue-400">
                Begins the self-taught journey
              </a>
            </Link>{' '}
            <br /> <br /> I had plans to dedicate 100% of my time studying and learning HTML, CSS,
            JS and React as my framework of choice for web development.
          </p>
        </li>
        <li className="mb-10 ml-6">
          <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full text-3xl ring-8 ring-white dark:bg-blue-900 dark:ring-gray-900">
            🏥
          </span>
          <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">The Fall</h3>
          <time className="mb-2 block text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            June 2019 - October 2019
          </time>
          <p className="text-base font-normal text-gray-500 dark:text-gray-400">
            💊{' '}
            <Link href="/tags/biochemistry">
              <a className="font-medium text-blue-600 hover:underline dark:text-blue-400">
                Antibiotics galore
              </a>
            </Link>{' '}
            <br />
            <br />A month later, I encountered a health issue that required several
            hospitalizations. I was unable to focus due to my long recovery. <br />
            <br /> Through this difficult period, I began writing a blog and decided to embrace the
            opportunity to document my journey, finding solace in the activity.
            <br />
            <br /> I started to change my perspective and draw inspiration from my negative
            experience and wrote about my prescribed medications.
          </p>
        </li>
        <li className="mb-10 ml-6">
          <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 text-2xl ring-8 ring-white dark:bg-blue-900 dark:ring-gray-900">
            🧗
          </span>
          <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">The Recovery</h3>
          <time className="mb-2 block text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            December 2019
          </time>
          <p className="text-base font-normal text-gray-500 dark:text-gray-400">
            💉{' '}
            <Link href="/blog/propofol">
              <a className="font-medium text-blue-600 hover:underline dark:text-blue-400">
                2 surgeries,
              </a>
            </Link>{' '}
            <br />
            💊{' '}
            <Link href="/tags/biochemistry">
              <a className="font-medium text-blue-600 hover:underline dark:text-blue-400">
                9 antibiotics,
              </a>
            </Link>{' '}
            <br />
            🌺{' '}
            <Link href="/blog/opioids">
              <a className="font-medium text-blue-600 hover:underline dark:text-blue-400">
                4 painkillers later
              </a>
            </Link>{' '}
            <br />
            <br />
            Nearing the end of 2019, I had slowly worked my way back on my feet, using the momentum
            I built from creating this blog and writing about my journey. <br /> <br />
            <Link href="/blog/year-end-summary-2019">
              <a className="font-medium text-blue-600 hover:underline dark:text-blue-400">
                My 2019 year end Pomodoro blog post
              </a>
            </Link>
          </p>
        </li>
        <li className="mb-10 ml-6">
          <span className=" absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full text-3xl">
            🥳
          </span>
          <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
            Employment Found
          </h3>
          <time className="mb-2 block text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            May 2020
          </time>
          <p className="text-base font-normal text-gray-500 dark:text-gray-400">
            🎉{' '}
            <Link href="/blog/new-chapter">
              <a className="font-medium text-blue-600 hover:underline dark:text-blue-400">
                Software Developer at Coveo
              </a>
            </Link>{' '}
            <br />
            <br />
            Honestly, 2019 hasn't been a kind year, but neither was 2020. After a year of studying,
            I accomplished my goal in becoming a developer after 🍅
            <Link href="/blog/year-journey-summary">
              <a className="font-medium text-blue-600 hover:underline dark:text-blue-400">
                1031 Pomdoro's
              </a>
            </Link>
          </p>
        </li>
        <li className="mb-10 ml-6">
          <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 text-2xl ring-8 ring-white dark:bg-blue-900 dark:ring-gray-900">
            🙌
          </span>
          <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">New Chapter</h3>
          <time className="mb-2 block text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            January 2022
          </time>
          <p className="text-base font-normal text-gray-500 dark:text-gray-400">
            🎯
            <Link href="https://thescore.bet/">
              <a className="font-medium text-blue-600 hover:underline dark:text-blue-400">
                Software Developer at theScore
              </a>
            </Link>{' '}
            <br />
            <br />
          </p>
        </li>
      </ol>
    </div>
  )
}
