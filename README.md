# MusicXML Player

A web-based MusicXML player with mobile support and PDF conversion capabilities.

## Features

- MusicXML file playback
- PDF to MusicXML conversion
- Mobile-responsive design
- Multiple instrument support
- Tempo and pitch control
- PWA support for offline use

## Mobile Screen Customization

To customize the mobile screen layout and appearance, you can modify the following CSS variables and media queries in the `demo/index.html` file:

### CSS Variables

```css
:root {
  --primary-color: #4a90e2;
  --secondary-color: #f8f9fa;
  --text-color: #2c3e50;
  --border-radius: 8px;
  --player-height: 120px;
  --player-height-mobile: 160px;
}
```

### Mobile-Specific Styles

The following media queries can be adjusted for different screen sizes:

```css
@media (max-width: 768px) {
  body {
    padding: 10px;
    padding-bottom: calc(var(--player-height-mobile) + 40px);
  }

  h1 {
    font-size: 1.8em !important;
    margin-bottom: 20px !important;
  }

  .main-container {
    padding: 10px;
  }

  .controls-grid {
    grid-template-columns: 1fr;
    gap: 15px;
  }

  #sheet-container {
    height: calc(100vh - var(--player-height-mobile) - 180px);
    padding: 10px;
    margin: 5px 0;
  }

  #player {
    height: var(--player-height-mobile);
    padding: 8px;
  }
}
```

### Landscape Mode

For landscape orientation on mobile devices:

```css
@media screen and (orientation: landscape) and (max-height: 600px) {
  #sheet-container {
    height: calc(100vh - var(--player-height) - 100px);
  }

  .player-controls {
    flex-direction: row;
    align-items: center;
  }

  .playback-controls {
    flex-direction: row;
    flex: 1;
  }

  #instrumentSelector {
    width: 160px;
  }
}
```

### Music Notation Scaling

To adjust the size of music notation on mobile:

```css
@media (max-width: 768px) {
  #sheet-container svg {
    width: 100% !important;
    height: auto !important;
  }

  .system {
    transform-origin: left top;
    transform: scale(0.9);
  }
}
```

## Installation

1. Clone the repository:
```bash
git clone https://github.com/mageh21/music_mobile.git
```

2. Navigate to the project directory:
```bash
cd music_mobile
```

3. Install dependencies:
```bash
npm install
```

4. Start the development servers:
```bash
npx concurrently "npm run demo:develop" "npm run mobile"
```

This will start two servers:
- Demo server at http://localhost:8080
- Mobile server at http://localhost:8081

## Project Structure

```
music_mobile/
├── demo/
│   ├── index.html
│   └── data/
│       └── (sample music files)
├── src/
│   └── mobile/
│       └── js/
│           └── (JavaScript files)
├── build/
│   └── (compiled files)
└── README.md
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
