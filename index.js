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















