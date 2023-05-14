import IMask from 'imask';

export default function mask() {
  console.log(inputMask);
  
  const inputMask= document.querySelector('.card__input-masked');
  const mask = new IMask(inputMask,{
    mask: "00.00.0000",
  });
}

