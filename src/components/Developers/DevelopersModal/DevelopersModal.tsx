import { secFontFamily } from "@/app/fonts";

type DeveloperCardProps = {
  isOpen: boolean;
  children: React.ReactNode;
  setModalOpen: React.MouseEventHandler<HTMLButtonElement> | undefined;
};

export default function DeveloperCard({
  isOpen,
  children,
  setModalOpen,
}: DeveloperCardProps) {
  if (isOpen) {
    return (
      <div className="bg-white-9-opacity rounded-lg shadow-lg p-4">
        {children}
        <button
          className={`${secFontFamily.className} text-black mt-3 p-2 rounded-lg bg-main-color text-lg cursor-pointer transition duration-200 ease-in hover:text-white hover:bg-red-600`}
          onClick={setModalOpen}
        >
          Fechar
        </button>
      </div>
    );
  }

  return null;
}
