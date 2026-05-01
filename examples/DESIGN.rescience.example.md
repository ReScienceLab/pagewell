---
version: alpha
name: ReScience Lab
description: Minimal technical lab aesthetic for tools built for one person companies.
colors:
  primary: "#0047AB"
  primary-dark: "#003D91"
  black: "#000000"
  white: "#FFFFFF"
  gray-50: "#FAFAF9"
  gray-100: "#F3F4F6"
  gray-600: "#5C5855"
  border: "#E0DDD4"
typography:
  h1:
    fontFamily: JetBrains Mono
    fontSize: 36px
    fontWeight: 700
    lineHeight: "1.1"
    letterSpacing: "-1px"
  body:
    fontFamily: JetBrains Mono
    fontSize: 13px
    fontWeight: 400
    lineHeight: "1.6"
  label:
    fontFamily: JetBrains Mono
    fontSize: 11px
    fontWeight: 500
rounded:
  none: 0px
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 48px
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.white}"
    rounded: "{rounded.none}"
    padding: 14px 32px
  product-card:
    backgroundColor: "{colors.white}"
    textColor: "{colors.black}"
    rounded: "{rounded.none}"
    padding: 24px
---

## Overview

ReScience Lab uses a minimal, technical, command-line-adjacent visual system. The site should feel like a precise lab notebook for independent builders: clear, sparse, and practical.

## Colors

Use blue as the only strong accent. Most surfaces are white or very light gray. Borders should be visible and square.

## Typography

Use JetBrains Mono throughout. Headlines are compact and bold. Body copy should remain concise and readable.

## Layout

Prefer narrow centered layouts around 720px for text-heavy pages. Use simple grids only when they improve scanning.

## Components

Buttons are square, blue, and direct. Cards use hard borders, white backgrounds, and minimal shadows. Command blocks should look terminal-like.

## Do's and Don'ts

Do keep pages direct, technical, and sparse. Do use command snippets when relevant. Do not introduce gradients, playful illustrations, rounded SaaS cards, or decorative visual noise.
