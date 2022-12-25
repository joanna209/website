export default function Navbar() {
  return (
    <div className="justify-center text-center font-sans top-0 z-40 w-full backdrop-blur flex-none lg:z-50 lg:border-b lg:border-slate-900/10 bg-white supports-backdrop-blur:bg-white/95">
        <div className="space-x-8 py-8 font-semibold text-slate-600">
          <a href="/" className="hover:text-indigo-400">Home</a>
          <a href="/about" className="hover:text-indigo-400">About</a>
          <a href="/projects" className="hover:text-indigo-400">Projects</a>
        </div>
      </div>
  )
}