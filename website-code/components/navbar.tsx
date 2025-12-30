// components/navbar.tsx
export default function Navbar() {
  return (
    <header className="flex justify-between items-center">
      <span>My portfolio</span>
      <span className="flex gap-2">

        <a
          href="https://github.com/amj28"
          target="_blank"
          rel="noopener noreferrer"
          title="GitHub"
        >
          <img src="/github.png" alt="GitHub" className="w-[1.25em] h-[1.25em]" />
        </a>

        <a
          href="https://www.linkedin.com/in/abdullahimohamed28/"
          target="_blank"
          rel="noopener noreferrer"
          title="LinkedIn"
        >
          <img src="/linkedin.png" alt="LinkedIn" className="w-[1.25em] h-[1.25em]" />

        </a>
      </span>
    </header>
  );
}


