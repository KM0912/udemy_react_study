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
    // 押された(完了)ボタンの親タグ(div)を未完了リストから削除
    deleteFromIncompleteList(completeButtom.parentNode);

    // 完了リストに追加する要素
    const addTarget = completeButtom.parentNode;

    // TODO内容のテキストを取得
    const text = addTarget.firstElementChild.innerText;

    // div以下を初期化
    addTarget.textContent = null;

    // liタグ生成
    const li = document.createElement("li");
    li.innerText = text;

    // buttonタグ生成
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";

    // divタグの小要素の各要素を設定
    addTarget.appendChild(li);
    addTarget.appendChild(backButton);

    // 完了リストに追加
    document.getElementById("complete-list").appendChild(addTarget);
  });
  // button(削除)タグ生成
  const deleteButtom = document.createElement("button");
  deleteButtom.innerText = "削除";
  deleteButtom.addEventListener("click", () => {
    // 押された(削除)ボタンの親タグ(div)を未完了リストから削除
    deleteFromIncompleteList(deleteButtom.parentNode);
  });
  // divタグの小要素に各要素を設定
  div.appendChild(li);
  div.appendChild(completeButtom);
  div.appendChild(deleteButtom);

  // 未完了リストに追加
  document.getElementById("incomplete-list").appendChild(div);
};

// 未完了リストから指定の要素を削除
const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
