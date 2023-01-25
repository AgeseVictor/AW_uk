const xhr = new XMLHttpRequest();
let url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist";
xhr.open("GET", url);
xhr.onload = () => {
  if (xhr.status === 200) {
    console.log(xhr.response);
  }
};
xhr.send();