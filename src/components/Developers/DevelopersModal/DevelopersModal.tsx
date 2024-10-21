import { secFontFamily } from "@/app/fonts";

type DeveloperCardProps = {
    isOpen: boolean;
    children: React.ReactNode;
    setModalOpen: React.MouseEventHandler<HTMLButtonElement> | undefined;
  };
  
  export default function DeveloperCard({
    isOpen,
    children,
    setModalOpen
  }: DeveloperCardProps) {
    if (isOpen) {
      return (
        <div className="bg-white rounded-lg shadow-lg p-4 relative">
          {children}
          <button
            className={`${secFontFamily.className} absolute top-4 right-4 border-0 bg-transparent text-lg text-white cursor-pointer transition duration-200 ease-in hover:text-red-600`}
            onClick={setModalOpen}
          >
            Fechar
          </button>
        </div>
      );
    }
  
    return null;
  }
  
  