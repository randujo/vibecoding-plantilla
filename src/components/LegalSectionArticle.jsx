export default function LegalSectionArticle({ sectionRoman, children }) {
  return (
    <article className="group relative overflow-hidden rounded-3xl border border-[#dbe4ef] bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:shadow-xl md:p-10">
      <div
        aria-hidden
        className="absolute right-0 top-0 size-40 rounded-bl-[100%] bg-gradient-to-br from-[#4c83cf]/12 to-transparent transition group-hover:from-[#4c83cf]/20"
      />
      <div className="relative flex flex-col gap-6 md:flex-row md:gap-10">
        <div className="flex shrink-0 items-center md:flex-col md:items-start">
          <span className="flex min-h-14 min-w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#1f5fae] to-[#2d5b88] px-3 text-lg font-black text-white shadow-lg shadow-[#1f5fae]/35">
            {sectionRoman}
          </span>
        </div>
        <div className="min-w-0 flex-1">{children}</div>
      </div>
    </article>
  );
}
