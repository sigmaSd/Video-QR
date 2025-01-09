importScripts("https://cdn.jsdelivr.net/npm/qrcode-generator");

self.onmessage = function (e) {
  const { chunks, type, index } = e.data;

  if (type === "TOTAL") {
    const qr = generateQR(`VIDEO QR TOTAL PARTS = ${chunks}`);
    self.postMessage({ type: "TOTAL", qr: qr.createImgTag() });
    return;
  }

  const prefixedChunk = new Uint8Array([index, ...chunks]);
  const qr = generateQR(arrayBufferToBase64(prefixedChunk));
  self.postMessage({
    type: "CHUNK",
    index: index,
    qr: qr.createImgTag(),
  });
};

function generateQR(data) {
  const qr = qrcode(0, "L");
  qr.addData(data);
  qr.make();
  return qr;
}

function arrayBufferToBase64(buffer) {
  const bytes = new Uint8Array(buffer);
  return btoa(String.fromCharCode.apply(null, bytes));
}
