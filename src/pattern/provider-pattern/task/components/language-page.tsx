import { useLanguage } from "../hook/useLanguage";

export const LanguagePage = () => {
  const { language, toggleLanguage } = useLanguage();
  return (
    <div className="flex flex-col items-center space-y-2">
      <h1 className="text-3xl">
        {language === "es" ? "Hola Mundo" : "Hello World"}
      </h1>
      <p className="text-sm text-slate-700">
        {language === "es"
          ? "Esta pagina esta en español"
          : "This page is in English"}
      </p>
      <button
        className="bg-blue-900 hover:bg-blue-800 rounded-2xl py-2 px-2 text-white"
        onClick={toggleLanguage}
      >
        Change language
      </button>
    </div>
  );
};
