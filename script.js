function encryptMessage() {
  const messageInput = document.getElementById("messageInput");
  const keyInput = document.getElementById("keyInput");
  const encryptedMessage = document.getElementById("encryptedMessage");

  const m = messageInput.value.toUpperCase();
  let k = keyInput.value.toUpperCase();
  k = k.repeat(Math.ceil(m.length / k.length)).slice(0, m.length);
  let c = "";

  for (let i = 0; i < m.length; i++) {
    let gg = m.charCodeAt(i) + k.charCodeAt(i) - 2 * 65;
    c += String.fromCharCode((gg % 26) + 65);
  }

  encryptedMessage.textContent = c;
}

function decryptMessage() {
  const encryptedMessage = document.getElementById("encryptedMessage");
  const keyInput = document.getElementById("keyInput");
  const decryptedMessage = document.getElementById("decryptedMessage");

  const c = encryptedMessage.textContent.toUpperCase();
  let k = keyInput.value.toUpperCase();
  k = k.repeat(Math.ceil(c.length / k.length)).slice(0, c.length);
  let d = "";

  for (let i = 0; i < c.length; i++) {
    let gg = c.charCodeAt(i) - k.charCodeAt(i) + 2 * 65;
    d += String.fromCharCode((gg % 26) + 65);
  }

  decryptedMessage.textContent = d;
}
