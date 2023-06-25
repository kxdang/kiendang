const readingTimeMax = (readingTime) => {
  const number = readingTime.split(' ')[0]

  return Number(number) >= 7 ? '7 min read' : readingTime
}

export default readingTimeMax
