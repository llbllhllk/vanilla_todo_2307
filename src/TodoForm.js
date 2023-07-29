export default function TodoForm() {
  const $div = document.createElement("div");
  const $input = document.createElement("input");
  const $button = document.createElement("button");
  const $text = document.createTextNode("저장");

  $button.appendChild($text);
  $div.appendChild($input);
  $div.appendChild($button);

  return $div;
}
