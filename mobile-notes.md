# MUDLINE Mobile (separate build)

Open `/mobile/` or `/mobile.html`. The normal `/` laptop version is unchanged; no device redirect is installed.

Left thumb moves; drag the open right side to look. Hold FIRE, tap AIM, JUMP, RELOAD, SPRINT or CROUCH. Hold USE for interactions; DRIVE enters/exits the car. The top toolbar provides menu, map, weapon, mobile quality and fullscreen. Landscape is recommended; portrait remains usable.

Only the mobile entry loads `mobile-config.json`, `mobile-start.js`, `mobile-profile.js` and `mobile.css`. Shared game code, models, gameplay, map collision and networking stay the same. The mobile bootstrap installs the adapter after script preload and before scene initialization.

Balanced: 0.85 pixel ratio ceiling, 75m forest streaming radius, one 512px directional shadow, up to 140 rain streaks. Battery: 0.65 pixel ratio, 55m forest radius, no dynamic shadows, up to 80 streaks. Slow frames lower the mobile render scale to a 0.55 floor. Texture maps are capped at 1024 pixels when safely resizable. Full desktop post processing is disabled; far corpse records remain persistent but rendering is culled at 65m. Maximum loading concurrency is 8.

These are rendering budgets, not an FPS guarantee. A real Android/iPhone hardware test is still needed. Large shared model downloads and some CPU scene-generation work remain; this release does not claim a tiny download or native-app performance.

Deployment uses the existing Netlify build. `_redirects` aliases only the two mobile URLs; the laptop route and original tracked files are unchanged. If Netlify credits remain paused, the files can be committed to GitHub but the public mobile route cannot go live yet.
