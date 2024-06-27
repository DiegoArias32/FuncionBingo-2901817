const qrInput = document.getElementById('qr-input');
const qrInput2 = document.getElementById('qr-input2');
const generateQrButton = document.getElementById('generate-qr');
const qrCodeDiv = document.getElementById('qr-code');
const qrCodeDiv2 = document.getElementById('qr-code2');

generateQrButton.addEventListener('click', () => {
  const qrCodeText = qrInput.value.trim();
  const qrCodeText2 = qrInput2.value.trim();
  
  if (qrCodeText && qrCodeText2) {
    const qrCodeUrl = `https://qrcode.tec-it.com/API/QRCode?data=${encodeURIComponent(qrCodeText)}`;
    const qrCodeUrl2 = `https://qrcode.tec-it.com/API/QRCode?data=${encodeURIComponent(qrCodeText2)}`;
    
    const qrCodeImg = document.createElement('img');
    qrCodeImg.src = qrCodeUrl;
    qrCodeImg.width = 200;
    qrCodeImg.height = 200;
    qrCodeDiv.innerHTML = '';
    qrCodeDiv.appendChild(qrCodeImg);
    
    const qrCodeImg2 = document.createElement('img');
    qrCodeImg2.src = qrCodeUrl2;
    qrCodeImg2.width = 200;
    qrCodeImg2.height = 200;
    qrCodeDiv2.innerHTML = '';
    qrCodeDiv2.appendChild(qrCodeImg2);
  } else {
    alert('Please enter both codes');
  }
});