# MedGuide AI - Design System Specification

## 1. Core Philosophy
**Professional Minimalism & Trust**: The interface must convey specific medical authority. It should be clean, calm, and uncluttered.
**Accessibility First**: High contrast, clear focus states, and readable typography (WCAG 2.1 AA).

## 2. Color Palette
We are moving away from the "Cyberpunk/Neon" aesthetic to a "Clinical Trust" aesthetic.

### Primary Colors (Trust & Calm)
- **Medical Blue**: `#0284C7` (Sky 600) - Primary actions, links.
- **Deep Navy**: `#0C4A6E` (Sky 900) - Headings, strong brand elements.
- **Soft Teal**: `#14B8A6` (Teal 500) - Success states, health indicators.

### Neutrals (Structure & Readability)
- **Background**: `#F8FAFC` (Slate 50) - Reduces glare compared to pure white.
- **Surface**: `#FFFFFF` (White) - Cards, inputs.
- **Text Main**: `#0F172A` (Slate 900) - High contrast for readability.
- **Text Body**: `#334155` (Slate 700) - Softer for long reading.
- **Border**: `#E2E8F0` (Slate 200) - Subtle separation.

### Functional
- **Error**: `#EF4444` (Red 500)
- **Warning**: `#F59E0B` (Amber 500)
- **Focus Ring**: `#38BDF8` (Sky 400) - clear visibility for keyboard nav.

## 3. Typography
- **Family**: 'Inter', sans-serif. Chosen for legibility at small sizes and clean geometry.
- **Scale**:
  - H1: 2.5rem (Bold)
  - H2: 2rem (SemiBold)
  - H3: 1.5rem (SemiBold)
  - Body: 1rem (Regular)
  - Small: 0.875rem (Medium for UI labels)

## 4. Components
- **Cards**: Solid white background, 1px border (`slate-200`), soft shadow (`shadow-sm`). No glassmorphism.
- **Buttons**:
  - Primary: Solid Medical Blue, rounded-md (`8px`).
  - Secondary: White with border, text Medical Blue.
- **Inputs**: High contrast borders, large touch targets (min 44px for mobile).

## 5. Layout
- **Container**: Max-width 1200px.
- **Spacing**: 8pt grid system. Generous white space to reduce cognitive load.
