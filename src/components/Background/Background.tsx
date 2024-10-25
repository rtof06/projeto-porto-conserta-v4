import { mainFontFamily } from "@/app/fonts";

type BackgroundProps = {
  title: string;
  children: React.ReactNode;
};

export default function Background({ title, children }: BackgroundProps) {
  return (
    <section className="bg-main-color-low-opacity w-4/5 text-center rounded-lg p-4">
      <h1 className={`${mainFontFamily.className} text-2xl`}>{title}</h1>
      {children}
    </section>
  );
}
