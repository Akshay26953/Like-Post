const like_counter = document.querySelector(".like_counter");
const like = document.querySelector(".like");
const post = document.querySelector(".post");

let count = 0;

const countLikes = () => {
  count++;
  like_counter.innerHTML = count <= 1 ? `${count} Like` : `${count} Likes`;
};

const createHeart = () => {
  const heart = document.createElement("i");
  heart.classList.add("fas");
  heart.classList.add("fa-heart");

  post.appendChild(heart);

  heart.style.top = "50%";
  heart.style.left = "50%";
  countLikes();
  setTimeout(() => heart.remove(), 1000);
};
like.addEventListener("click", countLikes);
post.addEventListener("dblclick", createHeart);
