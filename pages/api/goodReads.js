import axios from 'axios'
import * as cheerio from 'cheerio'

export default async function handler(req, res) {
  try {
    const url = 'https://www.goodreads.com/review/list/63733680-kien-dang?shelf=currently-reading'
    const response = await axios.get(url)
    const html = response.data
    const $ = cheerio.load(html)

    const numOfBooksRead = 'a.actionLinkLite[href*="/review/list/"][href*="?shelf=read"]'

    const scrapedNumber = $(numOfBooksRead).text()
    const currentlyReading = []

    $('tr.bookalike.review').each((index, element) => {
      const $element = $(element)

      const title = $element.find('td.field.title a').text().replace(/\n/g, '').trim()
      const author = $element.find('td.field.author a').text().trim()
      const url = $element.find('td.field.title a').attr('href')

      currentlyReading.push({ title, author, url })
    })

    res.status(200).json({ numOfReadBooks: scrapedNumber, currentlyReading })
  } catch (error) {
    console.error('Error scraping data:', error)
    res.status(500).json({ error: 'An error occurred while scraping data.' })
  }
}
