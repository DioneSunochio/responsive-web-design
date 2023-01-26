const IMG_DB = [
  "https://images.unsplash.com/photo-1529778873920-4da4926a72c2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bGl0dGxlJTIwY2F0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1566847438217-76e82d383f84?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bGl0dGxlJTIwY2F0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1533743983669-94fa5c4338ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bGl0dGxlJTIwY2F0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1619912947529-b52b11ed92a9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8bGl0dGxlJTIwY2F0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1615789591457-74a63395c990?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGxpdHRsZSUyMGNhdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  "https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg",
];

function nextImg() {
  const random = IMG_DB[Math.floor(Math.random() * 5)];
  console.log(random);
  document.getElementById("srcImage").src =
    IMG_DB[Math.round(Math.random() * 5)];
}
