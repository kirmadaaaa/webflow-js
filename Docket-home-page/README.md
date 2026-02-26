# Hero Design: Docket-Style Background

### Objective

The goal of this project is to integrate custom CSS and JavaScript into a Webflow-style project to create a high-end SaaS hero background.
This avoids the limitations of native Webflow background images and interactions for complex patterns.

### Technical Solutions

1. **Performance-First Grid:** Used a `radial-gradient` in CSS to generate a 1px dot grid. This is more performant and sharper than using a tiled PNG/SVG image.
2. **Organic Background Movement:** Leveraged CSS Keyframe animations for "breathing" blobs. By animating `scale` and `transform` instead of width/height, the animation is handled by the GPU, ensuring 60FPS smoothness.
3. **Layered Depth:** - **Layer 1 (Back):** Blurred CSS Blobs.
   - **Layer 2 (Middle):** Math-generated Dot Grid.
   - **Layer 3 (Front):** Hero Typography.
4. **Subtle Parallax:** Added a lightweight JavaScript mouse-listener to move the background container slightly, creating a sense of 3D depth.

### Why Custom Code?

While Webflow can do "Mouse Move" interactions, writing this in raw CSS/JS allows for easier global updates (e.g., changing grid density by changing one variable) and keeps the site's "interaction overhead" low.

my notes-
