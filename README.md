# VideoQr

Transfer files via QR code sequences by splitting them into multiple QR codes that cycle on screen.

## How it Works
- Sender splits file into QR chunks
- Each chunk has an index prefix (0,1,2...)
- Extra QR shows total parts count
- Receiver scans and reconstructs file

## Usage

### Send
1. Open sender app
2. Upload file
3. QR codes will cycle automatically

### Receive
1. Open receiver app
2. Point camera at cycling QRs
3. File downloads when complete

## Notes
- Requires camera permissions
- Transfer speed depends on:
  - Camera quality
  - Lighting
  - Screen brightness
- Large files = more QR codes

## License
MIT
