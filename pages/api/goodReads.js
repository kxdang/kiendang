import axios from 'axios'
import * as cheerio from 'cheerio'

export default async function handler(req, res) {
  try {
    const url = 'https://www.goodreads.com/review/list/63733680-kien-dang?shelf=currently-reading'
    const headers = {
      'User-Agent':
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.36',
      Accept:
        'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
      'Accept-Language': 'en-US,en;q=0.9',
      'Accept-Encoding': 'gzip, deflate, br',
      Connection: 'keep-alive',
    }
    const response = await axios.get(url, { headers })
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
      const originalUrl = $element.find('td.field.cover img').attr('src')
      const imageUrl = originalUrl.replace(/_S[XY]\d+_/i, '_SY275_')

      currentlyReading.push({ title, author, url, imageUrl })
    })

    res.status(200).json({ numOfReadBooks: scrapedNumber, currentlyReading })
  } catch (error) {
    console.error('Error scraping data:', error)
    res.status(500).json({ error: 'An error occurred while scraping data.' })
  }
}
