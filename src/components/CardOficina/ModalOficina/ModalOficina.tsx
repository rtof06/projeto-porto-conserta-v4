import { secFontFamily } from "@/app/fonts";
import { motion } from "framer-motion";

type ModalOficinaProps = {
  isOpen: boolean;
  children: React.ReactNode;
  setModalOpen: React.MouseEventHandler<HTMLButtonElement> | undefined;
};

export default function ModalOficina({
  isOpen,
  children,
  setModalOpen,
}: ModalOficinaProps) {
  if (isOpen) {
    return (
      <motion.div
        initial={{ y: 0, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 0.2 }}
        className="flex flex-col absolute bg-white rounded-lg border-t-2 border-blue-500 shadow-lg p-4 text-center w-1/2 gap-4"
      >
        {children}
        <button
          className={`${secFontFamily.className} border-0 bg-transparent text-xl cursor-pointer transition duration-200 ease-in hover:opacity-70 hover:text-red-500`}
          onClick={setModalOpen}
        >
          Fechar
        </button>
      </motion.div>
    );
  }

  return null;
}
