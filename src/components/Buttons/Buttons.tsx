import { secFontFamily } from "@/app/fonts";

type ButtonsProps = {
  type?: 'submit' | 'reset' | 'button';
  id: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  title?: string;
  children: React.ReactNode;
};

export default function Buttons({
  type,
  id,
  onClick,
  disabled,
  title,
  children,
}: ButtonsProps) {
  return (
    <button
      type={type}
      id={id}
      onClick={onClick}
      className={`${secFontFamily.className} border-0 rounded-full text-gray-400 bg-gray-200 text-xl shadow-md cursor-pointer transition duration-200 ease-in p-2 mt-4 hover:bg-blue-500 hover:text-gray-200 enabled:bg-main-color enabled:text-white disabled:cursor-not-allowed`}
      title={title}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
