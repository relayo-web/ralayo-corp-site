type Props = { children: React.ReactNode };

export default function SectionHeading({ children }: Props) {
  return (
    <h2 className="text-2xl font-bold mb-6 text-gray-900 text-center relative inline-block after:block after:w-16 after:h-1 after:bg-primary after:mx-auto after:mt-2">
      {children}
    </h2>
  );
}
