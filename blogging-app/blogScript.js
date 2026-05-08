const titleInput = document.getElementById("title");
const contentInput = document.getElementById("content");
const addBtn = document.getElementById("addBtn");
const blogList = document.getElementById("blogList");

let blogs = [];

// creat blog object

const createBlog = (title, content) => {
  const blog = {
    id: Date.now(),
    title,
    content,
  };

  blogs.push(blog);
  saveBlogs();
  renderBlogs();
};

// render blogs

const renderBlogs = () => {
  blogList.innerHTML = "";

  blogs.forEach((blog) => {
    const blogDiv = document.createElement("div");

    blogDiv.classList.add("blog");

    blogDiv.innerHTML = `<h2>${blog.title}</h2>
        <p>${blog.content}</p>
        <div class= "btn-group">
        <button class="editBtn">Edit</button>
        <button class="deleteBtn">Delete</button>
        </div>`;

    // delete btn in blog
    const deleteBtn = blogDiv
      .querySelector(".deleteBtn")
      .addEventListener("click", () => {
        deleteBlog(blog.id);
      });
    // edit btn in blog
    const editBtn = blogDiv
      .querySelector(".editBtn")
      .addEventListener("click", () => {
        editBlog(blog.id);
      });

    // set blogDiv in bloglist
    blogList.appendChild(blogDiv);
  });
};

// delete btn funtion

const deleteBlog = (id) => {
  blogs = blogs.filter((blog) => {
    return blog.id !== id;
  });
  saveBlogs();
  renderBlogs();
};

// edit btn function

const editBlog = (id) => {
  const blog = blogs.find((blog) => {
    return blog.id === id;
  });

  if (!blog) return;
  titleInput.value = blog.title;
  contentInput.value = blog.content;

  // delete current blog
  deleteBlog(id);
};

// save blogs in localStorage

const saveBlogs = () => {
  localStorage.setItem("blogs", JSON.stringify(blogs));
};

// get from localstorage

const loadBlogs = () => {
  const storedBlogs = localStorage.getItem("blogs");

  if (storedBlogs) {
    blogs = JSON.parse(storedBlogs);

    renderBlogs();
  }
};

// add btn trigger

addBtn.addEventListener("click", () => {
  const title = titleInput.value.trim();

  const content = contentInput.value.trim();

  if (!title || !content) {
    alert("Fill all details");
    return;
  }

  createBlog(title, content);
  titleInput.value = "";
  contentInput.value = "";
});

// initial load

loadBlogs();
