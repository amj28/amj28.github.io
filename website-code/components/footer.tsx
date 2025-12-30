export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="flex justify-between items-center text-neutral-600 pt-5">
      <span>© {year} Abdullahi Mohamed.</span>
      <span className="flex gap-2">
        <a href="https://github.com/amj28" target="_blank" rel="noopener noreferrer">
          <img src="/github.png" alt="GitHub" className="w-[1.25rem] h-[1.25rem]" />
        </a>
        <a href="https://www.linkedin.com/in/abdullahimohamed28/" target="_blank" rel="noopener noreferrer">
          <img src="/linkedin.png" alt="LinkedIn" className="w-[1.25rem] h-[1.25rem]" />
        </a>
      </span>
    </footer>
  );
}
