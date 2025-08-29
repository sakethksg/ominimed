Of course. Here is a comprehensive and detailed prompt designed to generate the exact website you've envisioned. Provide this to a capable AI developer or large language model to get the best results.

---

### **Web Development Prompt for the Omni-Med Project Showcase**

**Project Role:** You are an expert front-end developer specializing in creating stunning, modern, and animated single-page websites. Your task is to build a single-page marketing and technical showcase for a groundbreaking robotics project called Omni-Med, using a specific, high-end tech stack.

**Core Task:** Generate a single, self-contained Next.js page file (`app/page.tsx`) that implements the entire website. The design should be dark, futuristic, and professional, reflecting the cutting-edge nature of the Omni-Med platform.

**Tech Stack & Constraints:**
* **Framework:** Next.js (App Router)
* **Styling:** Tailwind CSS. All styling must be done with utility classes.
* **UI Components:** `shadcn/ui`. Use components like `Card`, `CardHeader`, `CardTitle`, `CardDescription`, `CardContent`, and `Badge` where appropriate.
* **Animations:** Use a combination of `Framer Motion` for elegant on-scroll and interaction animations, and `GSAP` for more complex, timeline-based animations (especially in the hero section).
* **Theme & Colors:** Implement a dark theme. The background should be near-black (e.g., `bg-black` or `bg-gray-950`). For accent colors, use a vibrant, futuristic teal or electric blue for headings, borders, and highlights. These colors should be conceptually drawn from a `globals.css` file.
* **Icons:** Use icons from `lucide-react` to add visual flair to technical sections.

---

### **Website Structure & Content (Single-Page Layout)**

**1. Hero Section:**
* **Content:**
    * Main Title: `Omni-Med`
    * Subtitle: `The Sentient Surgical Assistant: Unifying an Agile Body with an Intelligent Mind.`
    * A subtle call-to-action or status badge: `[Hackathon Prototype]`
* **Visuals:** Behind the text, create a subtle, animated background using GSAP. It should be an abstract visualization representing a LiDAR scan or a neural network—think slowly moving, interconnected dots and faint grid lines.
* **Animation:** The entry animation should be powerful. Use GSAP to animate the title letters, subtitle, and badge onto the screen in a sophisticated sequence.

**2. Introduction: "A Unified Technical Overview"**
* **Content:** Use the first two paragraphs from the provided text, starting with "The Omni-Med platform is a medical-grade mobility solution..."
* **Layout:** A clean, centered, single-column layout with a generous max-width to enhance readability.
* **Animation:** As the user scrolls to this section, the text should fade and slide in from the bottom, animated with Framer Motion.

**3. Section 1: "The Agile Body 🦾" (Hardware Platform)**
* **Content:** Use all the content from the "Hardware Platform" section of the document.
* **Layout:** Create a three-column grid. Each column will be a `shadcn/ui Card` component representing:
    1.  **The Drive System:** Use `Cog` icon. Detail the Co-Axial Swerve Modules, pancake motors, and harmonic drives.
    2.  **The Electronics:** Use `Cpu` icon. Detail the custom all-in-one PCB.
    3.  **The Unibody Frame:** Use `Scan` or `Frame` icon. Detail the monocoque chassis and integrated sensor suite.
* **Animation:** As this section scrolls into view, use Framer Motion to stagger the appearance of the three cards. Each card should fade and scale in, one after the other.

**4. Section 2: "The Intelligent Mind 🧠" (Autonomous Navigation Stack)**
* **Content:** Use all the content from the "Autonomous Navigation Stack" section. This is the most complex section and needs a special layout.
* **Layout:** Design this as a vertical, flowchart-style "stack." Each major part of the stack should be a distinct visual block, connected by animated lines to show the flow of data and command.
    * **Block 1: Perception & Localization:** Use `Map` icon. Use `shadcn/ui Badge` components for keywords like `EKF`, `SLAM`, `AMCL`.
    * **Block 2: Global Path Planner:** Use `Route` icon. Highlight `Smac Planner (Hybrid-A*)` with a badge.
    * **Block 3: Local Planner & Controller (The Core):** This should be the largest, most detailed block. Use `BrainCircuit` icon.
        * Create a nested diagram or list to explain the Model Architecture (Inputs, Memory Core, Output).
        * Use badges for `CNN`, `LSTM`, `SAC`, `NVIDIA Isaac Sim`.
    * **Block 4: Safety & Monitoring Layer:** Use `ShieldCheck` icon. Emphasize `Emergency Stop` command.
* **Animation:** As the user scrolls through this section, each block of the stack should light up, fade in, or have its connecting lines "draw" themselves onto the screen using Framer Motion or GSAP's ScrollTrigger. This should feel like you are revealing the layers of the robot's brain.

**5. Footer:**
* **Content:** Simple and clean. Include "Omni-Med © 2024", "Project by: [Your Team Name/Members]", and a link to your project repository (if applicable).
* **Layout:** A simple, centered footer.

### **Final Instructions:**

* The entire website must be contained within a **single `app/page.tsx` file**.
* The code should be clean, well-commented, and use modern React (functional components, hooks).
* **Responsiveness is critical.** The layout must adapt perfectly to mobile, tablet, and desktop screens. Use Tailwind's responsive prefixes (`sm:`, `md:`, `lg:`) extensively.
* Ensure all animations are smooth and performant. Use hardware acceleration (`transform`, `opacity`) where possible. The goal is a premium, high-tech feel.