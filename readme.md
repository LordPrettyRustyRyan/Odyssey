# Odyssey: Imagine's Travels
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
[![Kaplay](https://img.shields.io/badge/Kaplay-orange?style=for-the-badge)](https://kaplayjs.com)

> A browser-based side-scrolling platformer built with JavaScript and Kaplay.

**Odyssey** is a fast-paced 2D platformer where players controls *Imagine*, collecting rings, avoiding enemies, and surviving increasingly challenging platform sections.

Built as an exploration into browser-based game development, the project focuses on player movement, collision systems, sprite animation, collectibles, enemy interactions, and scene management while maintaining a pixel-driven lightweight architecture powered entirely by JavaScript.

<img width="1900" height="1079" alt="Odyssey" src="https://github.com/user-attachments/assets/274d83b4-7cb3-4419-a2f2-a1b6365f71dc" />

## Features

- Side-scrolling platform gameplay
- Character movement and jumping physics
- Collision detection
- Ring collection mechanics
- Health and damage system
- Animated sprites
- Multiple game scenes
- Main Menu
- Game Over screen
- Background music
- Sound effects
- Responsive browser gameplay

---

# Architecture

```mermaid
flowchart TD

A[Launch Game]

A --> B[Main Menu]

B --> C[Start Game]

C --> D[Load Assets]

D --> E[Spawn Player]

E --> F[Gameplay Loop]

F --> G[Movement]

F --> H[Enemy Collision]

F --> I[Collect Rings]

F --> J[Platform Physics]

G --> K[Update Camera]

H --> L[Take Damage]

I --> M[Increase Score]

L --> N{Player Alive?}

N -->|Yes| F

N -->|No| O[Game Over]

O --> B
```

---

# Installation
```bash
git clone https://github.com/LordPrettyRustyRyan/Odyssey.git

cd Odyssey

npm install

npm run dev
```

---

## Roadmap

- [x] Mobile controls
- [ ] Multiple levels
- [ ] Shoot
- [ ] Save system
- [ ] New enemies
- [ ] Power-ups
- [ ] Add rings distant above platforms - jump to get them.
- [ ] Multiple Platforms

---

## Contributions

Suggestions and improvements are always welcome.
