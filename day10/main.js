const userList = [{ id: "suyeon", pw: "2222" }];

const userIdInput = document.querySelector("#userId");
const userPwInput = document.querySelector("#userPw");

const toast = document.querySelector(".toast");
const text = toast.querySelector("p");

const loginForm = document.querySelector("#loginForm");
loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  login();
  userIdInput.value = "";
  userPwInput.value = "";
});

function login() {
  const userId = userIdInput.value;
  const userPw = userPwInput.value;

  const user = userList.find(
    (user) => user.id === userId && user.pw === userPw
  );

  if (user) {
    showToast("로그인이 되었습니다!");
  } else {
    showToast("아이디 혹은 비밀번호가\n 잘못되었습니다.");
  }
}

function showToast(message) {
  text.innerText = message;

  toast.classList.add("visible");
  setTimeout(() => {
    toast.classList.remove("visible");
  }, 2000);
}
