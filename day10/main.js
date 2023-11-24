const userList = [{ id: "suyeon", pw: "2222" }];

const userIdInput = document.querySelector("#userId");
const userPwInput = document.querySelector("#userPw");

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
    console.log("로그인 성공");
  } else {
    console.log("아이디 혹은 비밀번호가 잘못되었습니다.");
  }
}
