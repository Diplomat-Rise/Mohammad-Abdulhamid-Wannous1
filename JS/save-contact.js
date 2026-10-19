function downloadVCard() {
  const vCardData = `
BEGIN:VCARD
VERSION:3.0
FN:Mohammad Abdulhamid Wannous
TITLE:Sales Manager
ORG:RISE Properties
TEL;TYPE=WORK,VOICE:+971505408910‬
EMAIL:abdulhamidwannousbranch@riseproperties.ae
URL:http://www.riseproperties.ae
ADR;TYPE=WORK:;;PO Box No 181702, Office NO.1604, Opal Tower, Business Bay;Dubai;;UAE
END:VCARD
  `.trim();

  const blob = new Blob([vCardData], { type: 'text/vcard' });
  const url = URL.createObjectURL(blob);

  const a = document.createElement('a');
  a.href = url;
  a.download = 'Mohammad Abdulhamid Wannous.vcf';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

document.querySelector('.save-contact-button').addEventListener('click', function (e) {
  e.preventDefault();
  downloadVCard();
});


