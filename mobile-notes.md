# MUDLINE Mobile v2

Separate mobile entry `/mobile/` or `/mobile.html`. Desktop game files are unchanged.

Balanced rendering: up to 1.5 physical pixels per CSS pixel, 1024px filtered directional shadows, 90m forest draw radius, half-resolution four-sample contact shading, ACES tone mapping, subtle bloom and neutral overcast lighting. Battery retains lighter shadows and 55m radius. Slow frames reduce render scale to a 0.65 floor; hardware FPS is not guaranteed. Nearby uploaded rifle/glove texture detail is retained up to 2048px, world maps up to 1024px.

The mobile script is extracted from the shared source with embedded resources moved to mobile-assets. The original 10.06MB script becomes 0.57MB. Unique configured preload files total 19.44MB instead of 39.01MB (uncompressed manifest sizes; actual network transfer differs). Obsolete overwritten soldier resources remain packaged but are lazy thenables and are not fetched. Current soldier/HDR/grip payloads load when used. Vehicle and OBA uploaded models load within 170m of their area, one at a time; player arms load immediately. All game mechanics and map collisions remain.

Mobile GLBs have preserved geometry/rigs, resized image payloads and HTTP gzip transport. `_headers` MUST deploy with these files; it tells browsers to decompress the mobile GLBs. Desktop model URLs are unchanged. The mobile build includes an explicit static netlify.toml in the deployment archive; the GitHub build extracts both original asset packs and the two mobile asset packs. The build command is the only changed original desktop file; all 27 original game files are byte-identical.

Verification: desktop SHA256 isolation, mobile input/streaming tests, JS syntax, GLB buffer/accessor integrity, live mobile rendering and supplied-arm loading. Local browser boot telemetry is recorded for diagnosis; it is not a phone or network speed guarantee.


## Customizable icon HUD
Mobile controls use original line icons and a larger fire target. Tap the sliders icon in the top-right corner, or CUSTOMIZE HUD in the menu. Drag controls or HUD panels; select an item to adjust size (65-160%), opacity (25-100%) or hide optional items. Movement and fire stay available. Save persists in localStorage on this browser/device; Cancel restores the previous layout; Reset resets the current orientation. Portrait and landscape layouts are stored separately. Gameplay pauses while editing. Graphics and fullscreen are available in the editor. The Drive button appears near the car.
