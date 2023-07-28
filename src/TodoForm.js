export default function TodoForm() {
  const $div = document.createElement("div");
  const $input = document.createElement("input");
  const $button = document.createElement("button");
  const $text = document.createTextNode("입력");

  $button.appendChild($text);
  $div.appendChild($input);
  $div.appendChild($button);

  return $div;
}
