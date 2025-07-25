# Didit/ui

Accessible and customizable components that you can copy and paste into your apps. Free. Open Source. **Use this to build your own component library**.

![cover](https://github.com/user-attachments/assets/2ded346b-2427-4b04-82d9-d40de8a6c9b4)

## Installation

### Add Tailwind CSS 4

Components are styled using Tailwind CSS. You need to install Tailwind CSS in your project.

[Follow the Tailwind CSS installation instructions to get started.](https://tailwindcss.com/docs/installation)

### Add dependencies

Add the following dependencies to your project:

```bash
pnpm add  @diditui/icons-react @diditui/core tw-animate-css
```

### Add `Inter` font

#### Next js

Use [next/font](https://nextjs.org/docs/app/getting-started/fonts) module to add the font in your nextjs app

```tsx showLineNumbers title="app/layout.tsx"
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.className}>
      <body>{children}</body>
    </html>
  );
}
```

#### Google Font `css @import`

```css showLineNumbers title="src/styles/globals.css"
@import url("https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap");
@import "tailwindcss";
@import "tw-animate-css";
@import "@diditui/core/theme.css";
...
```

### Configure styles

Add the following to your styles/globals.css file.

<CodeCollapsibleWrapper>

```css showLineNumbers title="src/styles/globals.css"
@import "tailwindcss";
@import "tw-animate-css";
@import "@diditui/core/theme.css";

@custom-variant dark (&:is(.dark *));

@layer base {
  body {
    @apply font-inter bg-neutral-white text-neutral-black;
  }
}

@layer components {
  .gradient-gray-100-900 {
    background: var(--gradient-gray-100-900);
  }

  .gradient-gray-100-300 {
    background: var(--gradient-gray-100-300);
  }

  .gradient-gray-600-500 {
    background: var(--gradient-gray-600-500);
  }

  .gradient-gray-700-500 {
    background: var(--gradient-gray-700-500);
  }

  .gradient-gray-900-800 {
    background: var(--gradient-gray-900-800);
  }

  .gradient-brand-custom {
    background: var(--gradient-brand-custom);
  }
  .gradient-brand-custom-2 {
    background: var(--gradient-brand-custom-2);
  }

  .gradient-brand-100-300 {
    background: var(--gradient-brand-100-300);
  }

  .gradient-brand-600-500 {
    background: var(--gradient-brand-600-500);
  }

  .gradient-brand-700-500 {
    background: var(--gradient-brand-700-500);
  }

  .gradient-brand-900-800 {
    background: var(--gradient-brand-900-800);
  }
}
```

</CodeCollapsibleWrapper>

### That's it

You can now start adding components to your project.

```tsx showLineNumbers title="app/index.tsx"
import { Button } from "diditui/core";

export default function Page() {
  return (
    <div>
      <Button variant="primary" size="md"> Create App </Buttom>
    </div>
  );
}
```

<!-- ## Documentation

Visit https://ui.shadcn.com/docs/cli to view the documentation. -->
