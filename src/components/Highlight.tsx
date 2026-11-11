// Teks di antara **dua bintang** pada resume.ts ditampilkan sebagai sorotan:
// lebih terang, dan berubah teal saat di-hover.
// Contoh: "across **38 provinces** in Indonesia"
type HighlightProps = {
    text: string;
};

const Highlight = ({ text }: HighlightProps) => (
    <>
        {text.split(/\*\*(.+?)\*\*/g).map((part, i) =>
            // split dengan grup tangkap: indeks ganjil = teks di dalam **...**
            i % 2 === 1 ? (
                <span
                    key={i}
                    className="font-medium text-slate-200 transition-colors duration-200 hover:text-teal-300"
                >
                    {part}
                </span>
            ) : (
                part
            )
        )}
    </>
);

export default Highlight;
