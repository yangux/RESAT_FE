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
    ul.classList.add("hasList");

    memoArr.forEach((memo) => {
      const list = document.createElement("li");
      list.innerText = memo;
      ul.append(list);
    });
  } else {
    ul.classList.remove("hasList");
  }
}

function addMemo(year, month, day) {
  const textarea = document.querySelector(".textareaContainer textarea");

  let memo = textarea.value;

  `${year}-${month}-${day}` in memoList
    ? memoList[`${year}-${month}-${day}`].push(memo)
    : (memoList[`${year}-${month}-${day}`] = [memo]);
}

export { generateMemo, toggleMemo, getMemo, addMemo };
