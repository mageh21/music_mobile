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
