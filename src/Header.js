export default function Header() {
  const $header = document.createElement("header");
  const $h1 = document.createElement("h1");
  const $text = document.createTextNode("Todo-app 만들기");
  
  $h1.appendChild($text);
  $header.appendChild($h1);

  return $header;
}
