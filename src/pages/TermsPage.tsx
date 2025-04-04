import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function TermsPage() {
  const [expanded, setExpanded] = useState(false);
  const { t } = useTranslation();

  return (
    <div className="min-h-screen pb-12 lg:h-auto text-white pt-24 lg:pt-36 w-full flex justify-center lg:px-36 flex-wrap">
      <h1 className="w-auto text-center font-bold text-4xl">
        <p className="light-blue w-auto py-8 px-12 mb-12">
          {t("terms.title")}
        </p>
      </h1>
      <div className="w-[80vw] flex justify-center flex-wrap">
        <p className="w-full text-2xl text-center">{t("terms.summary")}</p>
        <button
          className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? t("terms.hide") : t("terms.read")}
        </button>
        {expanded && (
          <div className="mt-4 border-t pt-4">
            <p>{t("terms.full")}</p>
          </div>
        )}
      </div>
    </div>
  );
}
