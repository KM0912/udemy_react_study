import "./styles.css";

const onClickAdd = () => {
  // テキストボックスの値を取得し、初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  // divの生成
  const div = document.createElement("div");
  div.className = "list-row";

  // liタグ
  const li = document.createElement("li");
  li.innerText = inputText;

  // button(完了)タグ生成
  const completeButtom = document.createElement("button");
  completeButtom.innerText = "完了";
  completeButtom.addEventListener("click", () => {
    alert("完了");
  });
  // button(削除)タグ生成
  const deleteButtom = document.createElement("button");
  deleteButtom.innerText = "削除";
  deleteButtom.addEventListener("click", () => {
    alert("削除");
  });
  // divタグの小要素に各要素を設定
  div.appendChild(li);
  div.appendChild(completeButtom);
  div.appendChild(deleteButtom);

  // 未完了リストに追加
  document.getElementById("incomplete-list").appendChild(div);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
