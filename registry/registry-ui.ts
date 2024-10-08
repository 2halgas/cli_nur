import { Registry } from "@/registry/schema";

export const ui: Registry = [
  {
    name: "accordion",
    type: "registry:ui",
    dependencies: ["@radix-ui/react-accordion"],
    files: ["ui/accordion.tsx"],
    tailwind: {
      config: {
        theme: {
          extend: {
            keyframes: {
              "spin": {
                "0%": { transform: "rotate(0deg)" },
                "100%": { transform: "rotate(360deg)" },
              },
              "accordion-down": {
                from: { height: "0" },
                to: { height: "var(--radix-accordion-content-height)" },
              },
              "accordion-up": {
                from: { height: "var(--radix-accordion-content-height)" },
                to: { height: "0" },
              },
            },
            animation: {
              "accordion-down": "accordion-down 0.2s ease-out",
              "accordion-up": "accordion-up 0.2s ease-out",
              "spin-slow": "spin 3s linear infinite",
              "spin-fast": "spin 1s linear infinite",
            },
          },
        },
      },
    },
  },
  {
    name: "button",
    type: "registry:ui",
    dependencies: [ "@radix-ui/react-slot"],
    files: ["ui/button.tsx"],
    
  },
];
