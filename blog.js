const BLOGS = [
  {
    title: "Coursework",
    image: "/images/1200x500.png",
    body: "hello im andrei",
    date: "20/10/2020",
  },
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
            <div class="row">
              <div class="col-md-6">
                <div class = "title">${blog.title}</div>
              </div>
              <div class="col-md-6">
                <div class = "date"> ${blog.date}</div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-12">
                <div class = "image-container">
                  <img src = "${blog.image}"/>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-10 offset-md-1">
                <div class = "body">
                  ${blog.body}
                </div>
              </div>
            </div>
          </div>
    `;
     blogcontainer.innerHTML += b;
  });
});
