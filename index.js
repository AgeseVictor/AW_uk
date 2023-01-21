const xhr = new XMLHttpRequest();
let url = "https://camo.githubusercontent.com/727b46e1d3fa1dc9460d1f7a8c4f4fb8a5523029a3389abf818bc1f95430b4ac/68747470733a2f2f726561646d652d6a6f6b65732e76657263656c2e6170702f617069"
xhr.open("GET", url);
xhr.onload = () => {
  if (xhr.status === 200) {
    console.log(xhr.response);
  }
};
xhr.send();