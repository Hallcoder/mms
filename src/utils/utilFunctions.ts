import { RefObject , Dispatch, SetStateAction} from "react";
export function drag(ev: any) {
  ev.dataTransfer.setData("text", ev.target.id);
}
export function allowDrop(ev: any) {
  ev.preventDefault();
}
export function drop(dropArea: any,setFile:any , setFileType:any){

  ["dragenter", "dragover", "dragleave", "drop"].forEach(eventName => {
    dropArea.current.addEventListener(eventName, preventDefaults, false);
  });

  function preventDefaults(e: {
    preventDefault: () => void;
    stopPropagation: () => void;
  }) {
    e.preventDefault();
    e.stopPropagation();
  }
  ["dragenter", "dragover"].forEach(eventName => {
    dropArea.current.addEventListener(eventName, highlight, false);
  });
  ["dragleave", "drop"].forEach(eventName => {
    dropArea.current.addEventListener(eventName, unhighlight, false);
  });

  function highlight(e: any) {
    dropArea.current.classList.add("highlight");
  }

  function unhighlight(e: any) {
    dropArea.current.classList.remove("highlight");
  }
  dropArea.current.addEventListener("drop", handleDrop, false);
  function handleDrop(e: { dataTransfer: any }) {
    let dt = e.dataTransfer;
    let files = dt.files;
    console.log(files);
    handleFile(files);
  }
  function handleFile(files: any) {
    console.log(files[0].name);
    files[0].type.includes("video") ? setFileType("video") : setFileType("image");
   const reader = new FileReader();
   reader.readAsDataURL(files[0]);
   reader.onloadend = () => {
    setFile(reader.result);
   };
  }
}
