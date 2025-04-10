# Music Mobile

A web-based MusicXML player with mobile support and PDF conversion capabilities. This application allows you to view and play MusicXML files, convert PDFs to MusicXML, and provides both web and mobile interfaces.

## Features

- MusicXML file viewing and playback
- PDF to MusicXML conversion
- Mobile-friendly interface
- Real-time music notation rendering
- MIDI playback support
- Responsive design for both desktop and mobile

## Prerequisites

- Node.js (v16 or higher)
- npm (v8 or higher)

## Installation

1. Clone the repository:
```bash
git clone https://github.com/mageh21/music_mobile.git
cd music_mobile
```

2. Install dependencies:
```bash
npm install
```

## Running the Application

The application consists of two parts: the web version and the mobile version. Both can be run simultaneously using the following commands:

### Build the Application
```bash
npm run build
```

### Create Symbolic Link for MJS File
After building, create a symbolic link from musicxml-player.js to musicxml-player.mjs:
```bash
cd build
ln -sf musicxml-player.js musicxml-player.mjs
cd ..
```

### Copy Manifest File to Root Directory
Ensure the manifest.json file is accessible from the root:
```bash
cp public/manifest.json .
```

### Start Both Web and Mobile Servers
```bash
npm start
```

This will start:
- Web version at http://localhost:8080
- Mobile version at http://localhost:8081

### Running Separately

To run only the web version:
```bash
npm run demo:develop
```

To run only the mobile version:
```bash
npm run mobile
```

## Troubleshooting

If you encounter 404 errors for resources like `musicxml-player.css`, `musicxml-player.mjs`, or `manifest.json`, follow these steps:

1. Check if the build process created the correct files:
   - The application expects `musicxml-player.css` and `musicxml-player.mjs` in the `/build` directory
   - Verify files exist in the build directory with `ls -la build/`

2. If you see files named `index.js` and `player.css` instead of the expected names:
   - Update the `esbuild.mjs` file to use correct output filenames:
     - Change `entryNames: '[name]'` to `entryNames: 'musicxml-player'`
     - Change `assetNames: '[name]'` to `assetNames: 'musicxml-player'`

3. For the `.mjs` extension requirement:
   - Create a symbolic link: `ln -sf musicxml-player.js musicxml-player.mjs` in the build directory

4. For manifest.json errors:
   - Copy the file from public directory: `cp public/manifest.json .`

5. After making these changes, run the build and start commands again:
   ```bash
   npm run build
   npm start
   ```

## Development

### Directory Structure
- `/src` - Source code
  - `/mobile` - Mobile interface code
  - `/js` - JavaScript/TypeScript source files
- `/demo` - Web interface demo
- `/build` - Built files
- `/data` - Sample music files and assets

### Testing
Run the test suite:
```bash
npm test
```

Run linting:
```bash
npm run test:lint
```

## Usage

1. Web Version (http://localhost:8080):
   - Upload MusicXML files directly
   - Convert PDF files to MusicXML
   - Play and view music notation
   - Adjust playback settings

2. Mobile Version (http://localhost:8081):
   - Touch-optimized interface
   - Responsive music notation display
   - Mobile-friendly controls
   - Gesture support for navigation

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For support, please open an issue in the GitHub repository or contact the maintainers.
