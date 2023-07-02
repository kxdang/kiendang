import siteMetadata from '@/data/siteMetadata'

const formatDate = (date) => {
  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }
  const formattedDate = new Date(
    date
      .replace('T', ' ')
      .replace(/-/g, '/')
      .replace(/\.\d+Z$/, '')
  ).toLocaleDateString(siteMetadata.locale, options)
  return formattedDate
}

export default formatDate
