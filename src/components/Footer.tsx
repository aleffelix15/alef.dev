export function Footer() {
  return (
    <footer className="bg-[#050505] border-t border-[#1C1C20] py-8">
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-2 text-center sm:text-left">
        <p className="font-body text-[0.8125rem] font-medium text-[#71717A]">
          Feito com dedicação por Alef Felix
        </p>
        <p className="font-body text-[0.8125rem] font-medium text-[#71717A]">
          &copy; {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  )
}
