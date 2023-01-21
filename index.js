const xhr = new XMLHttpRequest();
let url = "";
xhr.open("GET", url);
xhr.onload = () => {
  if (xhr.status === 200) {
    console.log(xhr.response);
  }
};
xhr.send();