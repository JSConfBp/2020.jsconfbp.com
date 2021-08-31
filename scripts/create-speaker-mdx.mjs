import parse from 'csv-parse'
import { promisify } from 'util'
import { readFile, writeFile } from "fs/promises"

const parser = promisify(parse)

const input = await readFile('./SPEAKERS_2022.csv', 'utf-8')

const data = await parser(input, {
  columns: true
})





for (let talk of data) {
  let {
    name,
    title,
    picture,
    twitter = "",
    github = "",
    web = "",
    company = "",
    location,
    bio,
    abstract,
  } = talk

  twitter = twitter.replace('https://twitter.com/', '@')

  const file = name.replace(/ /g, '-').toLowerCase()

  const mdx = `---
name: "${name}"
title: "${title}"
picture: "${picture}"
twitter: "${twitter == "n/a" ? "" : twitter}"
github: "${github == "n/a" ? "" : github}"
web: "${web == "n/a" ? "" : web}"
company: "${company == "n/a" ? "" : company}"
location: "${location == "n/a" ? "" : location}"
socialCard: social_${file}.png
---

<p>
  ${abstract}
</p>

<p>
  ${bio}
</p>`

await writeFile(`./speakers/${file}.mdx`, mdx)

}
