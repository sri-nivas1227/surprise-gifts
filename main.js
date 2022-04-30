const giftBtn = document.querySelector(".get-gifts");
const displaygif = document.querySelector(".gif-img");
document.querySelector(".main").addEventListener("click", function () {
  giftBtn.style.display = "initial";
});

giftBtn.addEventListener("click", function () {
  let name = prompt("Name your gift: ");
  console.log(name);
  if (name == "girlfriend") {
    confirm("You sure you want a girlfriend?");
    displaygif.src = "laugh.gif";
  } else if (name == "puppy") {
    displaygif.src = "puppy.gif";
  } else if (name == "mobile") {
    displaygif.src = "mobile.gif";
  } else {
    alert("Oops, Out of stock");
    displaygif.src = "./oops.gif";
  }
});
