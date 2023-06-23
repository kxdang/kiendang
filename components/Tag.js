import Link from 'next/link'
import kebabCase from '@/lib/utils/kebabCase'

const Tag = ({ text }) => {
  return (
    <Link href={`/tags/${kebabCase(text)} `}>
      <a className={`${text} mr-2 rounded px-2.5 py-0.5 font-medium`}>
        {text.split(' ').join('-')}
      </a>
    </Link>
  )
}

export default Tag
