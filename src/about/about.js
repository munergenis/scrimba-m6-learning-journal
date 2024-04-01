import { blogData } from "/modules/data";

renderBlogs()


function renderBlogs() {
  let blogsHtml = getBlogsHtmlArray().join("")
  document.querySelector("#articles").innerHTML = blogsHtml
}

function getBlogsHtmlArray() {
  let blogHtmlArray = []
  const blogPostsQuantity = 3
  const lastPostsIndex = blogData.length - 1
  let counter = 0

  for (let i = lastPostsIndex; counter < blogPostsQuantity; i--) {
    const entry = blogData[i]
    const dateObject = formatDate(entry.date)
    const entryHtml = `
      <a href="#">
        <article class="article">
          <img class="article-img" src="${entry.img}" alt="${entry.title} image">
          <time datetime="${dateObject.year}-${dateObject.monthNumber}-${dateObject.dayNumber}">${dateObject.monthName} ${dateObject.dayNumber}, ${dateObject.year}</time>
          <h2>${entry.title}</h2>
          <p>${entry.text}</p>
        </article>
      </a>
    `
    blogHtmlArray.push(entryHtml)
    counter++
  }
  
  return blogHtmlArray
}

function formatDate(date) {
  let monthNum = date.getMonth() + 1
  monthNum = monthNum < 10 ? "0" + monthNum : monthNum
  const dateObject = {
    dayNumber: date.getDay(),
    monthName: date.toLocaleString("default", {month: "long"}),
    monthNumber: monthNum,
    year: date.getFullYear(),
  }
  return dateObject
}