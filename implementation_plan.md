# MedGuide AI - Implementation Plan

## 1. Project Setup & Architecture
- **Stack**: React (Vite) + Vanilla CSS (for maximum design control).
- **Structure**:
  - `src/components`: Reusable UI components.
  - `src/pages`: Main views.
  - `src/styles`: CSS variables and global styles.

## 2. Design System (Aesthetics)
- **Theme**: Premium medical aesthetic.
  - **Colors**:
    - Primary: `#008080` (Teal) or `#0F766E` (Deep Teal) - Trust & calmness.
    - Accent: `#0EA5E9` (Sky Blue) - Technology & clarity.
    - Background: Dark mode by default (`#0F172A`) with glassmorphism overlays.
  - **Typography**: `Inter` or `Plus Jakarta Sans`.
- **UI Elements**:
  - Glassmorphic cards (`backdrop-filter: blur`).
  - Soft shadows and glow effects.
  - rounded corners (`border-radius: 12px` or `16px`).

## 3. Phase 1: Core Chatbot UI (MVP)
- **Shared Layout**: Navigation bar (Logo: MedGuide AI), Sidebar (History), Main Content Area.
- **Views**:
  - **Landing**: Introduction, "Get Started" call to action, Feature highlights.
  - **Chat Interface**: 
    - Message history list.
    - Input area with "Attach" (clip icon), "Voice" (mic icon), and "Send".
    - Bot thinking animation.
  - **Dashboard**: Simple health summary (mocked).

## 4. Implementation Steps
1.  **Configure CSS Variables**: Set up `index.css` with the color palette.
2.  **Scaffold Components**: Create basic file structure.
3.  **Build Landing Page**: Implement the visual "Wow" factor.
4.  **Build Chat Interface**: The core functionality.
5.  **Refine**: Add animations and responsive touches.

## 5. Future Phases (Not in MVP)
- Backend RAG integration.
- Real file parsing (OCR).
- User authentication.
