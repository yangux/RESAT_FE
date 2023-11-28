const memoList = {};

function generateMemo() {
  const container = document.querySelector(".container");
  const textareaContainer = document.createElement("div");
  const div = document.createElement("div");
  const memoDate = document.createElement("span");
  const submitBtn = document.createElement("button");
  const textArea = document.createElement("textarea");
  const ul = document.createElement("ul");

  textareaContainer.classList.add("textareaContainer");
  textareaContainer.classList.add("hide");
  memoDate.classList.add("memoDate");
  textArea.placeholder = "메모를 입력할 수 있습니다.";
  submitBtn.innerText = "+";
  submitBtn.classList.add("submitBtn");

  div.append(memoDate, submitBtn);

  textareaContainer.append(div, textArea, ul);
  container.append(textareaContainer);
}

function toggleMemo() {
  const textareaContainer = document.querySelector(".textareaContainer");
  textareaContainer.classList.toggle("hide");
}

function getMemo(year, month, day) {
  const textareaContainer = document.querySelector(".textareaContainer");
  const ul = textareaContainer.querySelector("ul");
  ul.replaceChildren();

  const memoArr = memoList[`${year}-${month}-${day}`];

  if (memoArr) {
    ul.style.borderTop = "1px solid #eee";
    ul.style.paddingTop = "1rem";

    memoArr.forEach((memo) => {
      const list = document.createElement("li");
      list.innerText = memo;
      ul.append(list);
    });
  }
}

function addMemo(year, month, day) {
  // 어디서 호출해야 하는지 모르겠음
  const submitBtn = document.querySelector(".submitBtn");
  const textarea = document.querySelector(".textareaContainer textarea");

  let memo;
  textarea.addEventListener("input", (e) => {
    memo = e.target.value;
  });

  submitBtn.addEventListener("click", () => {
    console.log(day);
    memoList[`${year}-${month}-${day}`] = [memo];
    textarea.value = "";
    getMemo(year, month, day);
  });
}

export { generateMemo, toggleMemo, getMemo, addMemo };
