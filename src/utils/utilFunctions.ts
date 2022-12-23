export function drag(ev: any) {
  ev.dataTransfer.setData("text",ev.target.id);
}
export function allowDrop(ev: any) {
  ev.preventDefault();
}
export function drop(ev: any) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
}
