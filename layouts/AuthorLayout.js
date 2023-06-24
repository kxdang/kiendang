import SocialIcon from '@/components/social-icons'
import Image from '@/components/Image'
import { PageSEO } from '@/components/SEO'
import Timeline from '@/components/Timeline'
import { useState, useEffect } from 'react'

export default function AuthorLayout({ children, frontMatter }) {
  const { name, avatar, occupation, company, email, twitter, linkedin, github } = frontMatter

  const [expanded, setExpanded] = useState(false)

  const handleButtonClick = () => {
    setExpanded(!expanded)
  }
  useEffect(() => {
    const isLocalStorageAvailable =
      typeof window !== 'undefined' && typeof window.localStorage !== 'undefined'

    if (isLocalStorageAvailable) {
      const storedExpanded = localStorage.getItem('expanded')
      if (storedExpanded !== null) {
        setExpanded(storedExpanded === 'true')
      }
    }
  }, [])
  useEffect(() => {
    const isLocalStorageAvailable =
      typeof window !== 'undefined' && typeof window.localStorage !== 'undefined'

    if (isLocalStorageAvailable) {
      localStorage.setItem('expanded', expanded)
    }
  }, [expanded])

  return (
    <>
      <PageSEO title={`About - ${name}`} description={`About me - ${name}`} />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            About
          </h1>
        </div>
        <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
          <div className="flex flex-col items-center pt-8">
            <Image
              src={avatar}
              alt="avatar"
              width="192px"
              height="192px"
              className="h-48 w-48 rounded-full"
            />
            <h3 className="pt-4 pb-2 text-2xl font-bold leading-8 tracking-tight">{name}</h3>
            <div className="text-gray-500 dark:text-gray-400">{occupation}</div>
            <div className="text-gray-500 dark:text-gray-400">{company}</div>
            <div className="flex space-x-3 pt-6">
              <SocialIcon kind="mail" href={`mailto:${email}`} />
              <SocialIcon kind="github" href={github} />
              <SocialIcon kind="linkedin" href={linkedin} />
              <SocialIcon kind="twitter" href={twitter} />
            </div>
          </div>
          <div className="prose max-w-none pt-8 pb-8 dark:prose-dark xl:col-span-2">{children}</div>
          <div className="pb-10 text-gray-700 dark:text-gray-400 xl:col-span-2 xl:col-start-2">
            If you're interested in my timeline for my career change into programming, click more
            <div className="flex justify-center">
              <button
                className="group relative mt-10 mb-2 mr-2 inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-cyan-500 to-blue-500 p-0.5 text-sm font-medium text-gray-900 hover:text-white focus:outline-none focus:ring-4 focus:ring-cyan-200 group-hover:from-cyan-500 group-hover:to-blue-500 dark:text-white dark:focus:ring-cyan-800"
                onClick={handleButtonClick}
              >
                <span className="relative rounded-md bg-white px-5 py-2.5 transition-all duration-75 ease-in group-hover:bg-opacity-0 dark:bg-gray-900">
                  more
                </span>
              </button>
            </div>
          </div>

          {expanded && <Timeline />}
        </div>
      </div>
    </>
  )
}
