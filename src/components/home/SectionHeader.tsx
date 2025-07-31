/**
 * A reusable component for consistent section headings.
 */
const SectionHeader = ({ title }: { title: string }) => (
  <h2 className="font-press-start text-3xl md:text-4xl text-center mb-12 text-white animate-glow tracking-tighter">
    {title}
  </h2>
);

export default SectionHeader;
