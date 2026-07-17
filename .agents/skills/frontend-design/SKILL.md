---
name: frontend-design
description: Guidance for distinctive, intentional visual design when building new UI or reshaping an existing one. Helps with aesthetic direction, typography, and making choices that don't read as templated defaults.
---

# Frontend Design

Approach this as the design lead at a small studio known for giving every client a visual identity that could not be mistaken for anyone else's. This client has already rejected proposals that felt templated, and is paying for a distinctive point of view: make deliberate, opinionated choices about palette, typography, and layout that are specific to this brief, and take one real aesthetic risk you can justify.

## Ground it in the subject

If the brief does not pin down what the product or subject is, pin it yourself before designing: name one concrete subject, its audience, and the page's single job, and state your choice. If there's any information in your memory about the human's preferences, context about what they're building, or designs you've made before – use that as a hint. The subject's own world, its materials, instruments, artifacts, and vernacular, is where distinctive choices come from. Build with the brief's real content and subject matter throughout.

## Design principles

For web designs, the hero is a thesis. Open with the most characteristic thing in the subject's world, in whatever form makes sense for it: a headline, an image, an animation, a live demo, an interactive moment. Be deliberate with your choice: a big number with a small label, supporting stats, and a gradient accent is the template answer, only use if that's truly the best option.

Typography carries the personality of the page. Pair the display and body faces deliberately, not the same families you would reach for on any other project, and set a clear type scale with intentional weights, widths, and spacing. Make the type treatment itself a memorable part of the design, not a neutral delivery vehicle for the content.

Structure is information. Structural devices, numbering, eyebrows, dividers, labels, should encode something true about the content, not decorate it. Many generic designs use numbered markers (01 / 02 / 03), but that's only appropriate if the content actually is a sequence - like a real process or a typed timeline where order carries information the reader needs. Question if choices like numbered markers actually make sense before incorporating them.

Leverage motion deliberately. Think about where and if animation can serve the subject: a page-load sequence, a scroll-triggered reveal, hover micro-interactions, ambient atmosphere. An orchestrated moment usually lands harder than scattered effects; choose what the direction calls for. However, sometimes less is more, and extra animation contributes to the feeling that the design is AI-generated.

Match complexity to the vision. Maximalist directions need elaborate execution; minimal directions need precision in spacing, type, and detail. Elegance is executing the chosen vision well.

Consider written content carefully. Often a design brief may not contain real content, and it's up to you to come up with copy. Copy can make a design feel as templated as the design itself. See the below section on writing for more guidance.

## Process: brainstorm, explore, plan, critique, build, critique again

For calibration: AI-generated design right now clusters around three looks: (1) a warm cream background (near #F4F1EA) with a high-contrast serif display and a terracotta accent; (2) a near-black background with a single bright acid-green or vermilion accent; (3) a broadsheet-style layout with hairline rules, zero border-radius, and dense newspaper-like columns. All three are legitimate for some briefs but none should be your default.

Before writing any code, brainstorm at least three distinct aesthetic directions appropriate to the subject. Describe each direction briefly: palette idea, type feel, one layout or motion concept. After listing them, select the most distinctive direction or synthesize a new one, justifying the choice.

When brainstorming, look for directions that feel specific to this subject. A café's site and a fintech dashboard should look nothing alike. The goal is that someone familiar with the subject would recognize the visual language as native to their world.

## Color system

Build a cohesive palette tied to the subject's world. Define all colors as CSS custom properties on `:root` and reference only those variables throughout the stylesheet - never use raw hex/rgb values inline after the initial definition.

Every palette needs:
- A dominant background color
- A contrasting text color
- An accent color that does real work (links, buttons, highlights)
- A secondary or muted tone for supporting elements

Test that your palette does not accidentally match one of the three cliché palettes described above. If it does, shift it until it is genuinely its own thing.

## Typography system

Select typefaces from Google Fonts. Pair a display face and a body face that are specific to this brief's tone. Set up a type scale with CSS custom properties:

```css
--font-display: 'chosen display face', fallback;
--font-body: 'chosen body face', fallback;
--text-xs through --text-6xl (or similar named scale)
```

Ensure appropriate `font-display: swap` declarations and correct Google Fonts `@import` or `<link>` tags.

## Spacing and layout

Define a spacing scale as CSS custom properties. Use CSS Grid and/or Flexbox for layout. Every spacing value should come from the scale, not arbitrary pixel values.

Responsive behavior: use `clamp()`, fluid type, or well-chosen breakpoints, but do not over-engineer responsiveness for a concept page.

## Component patterns

Build components using your design-system variables. Every component should reference the palette, type scale, and spacing scale rather than introducing ad-hoc values. This keeps the system cohesive and makes it easy to re-theme.

## Animation and motion

If the direction calls for motion, use CSS transitions and animations first. Reach for JS-driven animation only when CSS cannot achieve the effect. Keep motion purposeful: guide attention, reinforce hierarchy, or create atmosphere, don't animate for its own sake.

## Writing

If you need to write copy (headlines, descriptions, CTAs), write it as if a human who cares about the subject wrote it. Avoid:
- Generic filler ("Welcome to our platform", "Discover the future of...")
- Buzzword soup ("Seamless", "Innovative", "Next-generation")
- Overly formal or overly casual tone that doesn't match the subject

Write copy that sounds like it belongs to this specific product or subject, with a point of view.

## Code quality

Deliver clean, well-structured HTML with semantic elements. CSS should be organized by system (variables, resets, layout, components) and easy to read. If JS is needed, keep it minimal and focused.
