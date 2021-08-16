 fetch("https://apis.scrimba.com/jsonplaceholder/posts")
 .then(res => res.json())
 .then(data => {
const postsFive = data.slice(0,5)
let html = " "
for (let post of postsFive) {
  html += `
  <h3>${post.title}</h3>
  <p>${post.body}</p>
  <hr />`
}
document.getElementById("posts").innerHTML = html
 })

document.getElementById("new-post").addEventListener("submit", function(e) {
  e.preventDefault()
  const postTitle = document.getElementById("post-title").value
  const postBody = document.getElementById("bodyInput").value
  const data = {
    title: postTitle,
    body: postBody
  }

const postMethod = {
  method: "POST",
  body: JSON.stringify(data),
  headers: {
    "Content-Type": "application/json"
  }
}

    fetch("https://apis.scrimba.com/jsonplaceholder/posts", postMethod)
        .then(res => res.json())
        .then(post => {
          document.getElementById("posts").innerHTML = `
  <h3>${post.title}</h3>
  <p>${post.body}</p>
  <hr />
  ${document.getElementById("posts").innerHTML}`
        })
})



