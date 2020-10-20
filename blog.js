const BLOGS = [
  {
    title: "Coursework",
    image: "/images/1200x500.png",
    body: "hello im andrei",
    date: "20/10/2020",
  },
  
];
$(function () {
  var blogcontainer = document.getElementById("blogs");
    BLOGS.forEach((blog) => {
     var b = `
         <div class = "blog">
            <div class = "title">${blog.title} </div>
            <div class = "date"> ${blog.date} </div>
            <div class = "image-container">
                <img src = "${blog.image}"/>
            </div>
            <div class = "body">
              ${blog.body}
            </div>
        </div>
    `;
     blogcontainer.innerHTML += b;
  });
});
