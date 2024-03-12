const mBtn = document.querySelectorAll(".m_btn");
const hLogo = document.querySelector(".h_logo");
const myInfo = document.querySelector(".userinfo");
const logoutBtn = document.querySelector(".logout");
const walletBtn = document.querySelector(".move_wallet");
const modifyBtn = document.querySelector(".move_modify");

const moveLink = (el) => {
  const linkValue = el.dataset.link;
  location.href = linkValue;
};

mBtn.forEach((btn) => {
  btn.addEventListener("click", () => moveLink(btn));
});

hLogo.addEventListener("click", () => moveLink(hLogo));
myInfo.addEventListener("click", () => moveLink(myInfo));
logoutBtn.addEventListener("click", () => moveLink(logoutBtn));
walletBtn.addEventListener("click", () => moveLink(walletBtn));
modifyBtn.addEventListener("click", () => moveLink(modifyBtn));
