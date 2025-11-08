# Jana Gana Mana — Animated National Anthem Tribute (1st Year Repo) 🇮🇳

## Overview

This is a **single-page animated “National Anthem Tribute” website**, created as a **creative patriotic project** to combine **music, tricolor gradients, and animated text effects** in harmony with the Indian National Anthem — _Jana Gana Mana_.  
It synchronizes text animations with background music while displaying dynamic gradients inspired by the Indian flag. The design reflects unity, rhythm, and pride in a modern digital form.

---

<br>

## Screenshot of the web page

![Screenshot](webPage-screenshot.png)

<br><br>

---

## Features

- **Background Music Sync** — National Anthem plays (with autoplay notification for browsers that block sound).
- **Tricolor Gradient Text** — animated gradient text inspired by the Indian flag.
- **Shiny Glow Effect** — shimmering metallic gradient animation across each letter.
- **Typewriter Animation** — anthem text appears letter-by-letter, synchronized with the music.
- **Smooth Transitions** — letters fade in and out dynamically using JavaScript timing.
- **Responsive Design** — works well across different screen sizes using Tailwind CSS.

---

## Technologies Used

- **HTML5** – for structure and audio integration
- **CSS3 / Tailwind CSS** – for gradients, layout, and animation effects
- **JavaScript (Vanilla)** – for timing, dynamic text rendering, and autoplay handling

---

## Folder Structure

```
Jana Gana Mana - Animated
│
├── css
│ ├── global.css
│ ├── lettersAnimation.css
│ ├── snowOverlay.css
│ └── curveFrame.css
│
├── js
│ ├── index.js
│ └── snowOverlay.js
│
├── img
│ └── image.png
│
├── music
│ └── national-anthem.mp3
├── index.html
└── README.md
└── screenshot.png
```

---

## How It Works

1. The page loads and checks for autoplay permission.
   - If autoplay is blocked, a smooth notification appears asking the user to click anywhere to start the music.
2. Once started, the National Anthem music begins to play in the background.
3. Simultaneously, the anthem lyrics appear one letter at a time using timed JavaScript loops.
4. Each letter is animated with a glowing tricolor gradient effect.
5. After completion, the full text remains visible in its full gradient glory.

---

## Learning Outcome

- Synchronizing animations with background audio
- Controlling timing and DOM updates in JavaScript
- Creating smooth gradient transitions using Tailwind CSS
- Understanding autoplay restrictions and event-based audio triggers
- Designing patriotic themes with animation and color blending

---

## Future Enhancements

- Add flag-wave animation in background
- Enable karaoke-style lyrics (highlighting line-by-line with music)
- Integrate background particles resembling sparkles or rays
- Add replay / pause buttons with smooth transitions

---

## Credits

Developed by **[Abhisek Dash]**  
Project Type: _Academic / Fun Experiment_
