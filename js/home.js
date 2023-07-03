function SR(tag) {
  ScrollReveal().reveal(tag, {
    distance: "50px",
    origin: "bottom",
    easing: "ease-in-out",
    delay: 500,
  });
}

SR($(".collection .items .item"));
SR($(".trendingTag .tags"));
SR($(".bookReview .reviewBox"));
SR($(".Ucollection .Ucollections"));
