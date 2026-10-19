function downloadVCard() {
  const vCardData = `
BEGIN:VCARD
VERSION:3.0
FN:Moualla Suliman Dayoub
TITLE:Sales Manager
ORG:RISE Properties
TEL;TYPE=WORK,VOICE:+971526405097‬
EMAIL:sulimandayoub@riseproperties.ae
URL:http://www.riseproperties.ae
ADR;TYPE=WORK:;;PO Box No 181702, Office NO.1604, Opal Tower, Business Bay;Dubai;;UAE
END:VCARD
  `.trim();

  const blob = new Blob([vCardData], { type: 'text/vcard' });
  const url = URL.createObjectURL(blob);

  const a = document.createElement('a');
  a.href = url;
  a.download = 'Moualla Suliman Dayoub.vcf';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

document.querySelector('.save-contact-button').addEventListener('click', function (e) {
  e.preventDefault();
  downloadVCard();
});


