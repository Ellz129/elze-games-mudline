# MUDLINE - ELZE games

Browser FPS set in Sambisa Forest, with OBA Mountain Story Mode and human PvP rooms.

Version 0.37 includes four uploaded-model security guards patrolling the exterior corners of the OBA residence, procedural walking, and persistent Story casualties.

## Run locally

First run `tar -xzf assets-01.tar.gz && tar -xzf assets-02.tar.gz` to restore the exported asset tree. Serve this folder over HTTP, for example `python -m http.server 8080`, then open `http://localhost:8080/`. Opening index.html directly as a file will not load the game assets correctly.

## Publish

The game is a static PlayCanvas export. `assets-01.tar.gz` and `assets-02.tar.gz` contain the original exported `files/assets/` tree; Netlify restores it with `tar -xzf assets-01.tar.gz && tar -xzf assets-02.tar.gz`, then publishes the repository root. The included netlify.toml supports Netlify. GitHub stores the source; the game is hosted on Netlify.

## Controls

WASD move; Space jump; Shift sprint; C crouch; mouse aim/fire; Q sights; R reload; F interact; E vehicle; M map. Use the menu to host or join a PvP room. The host must remain connected.

## Source and assets

`__game-scripts.js` is the cumulative runtime source; JSON, GLB and texture files are required by the exported game. The uploaded guard model was given a 15-joint procedural movement skin. Story guard state and corpses reset on page reload.

Original and third-party game assets retain their respective ownership and licensing terms. No new open-source license is granted by this repository.
