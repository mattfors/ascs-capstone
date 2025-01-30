const QRCode = require('qrcode');
const fs = require('fs');

const url = process.argv[2];
const outputPath = process.argv[3];

if (!url || !outputPath) {
    console.error('Please provide both a URL and an output file path as parameters.');
    process.exit(1);
}

QRCode.toFile(outputPath, url, (err) => {
    if (err) throw err;
    console.log('QR code generated and saved to', outputPath);
});
