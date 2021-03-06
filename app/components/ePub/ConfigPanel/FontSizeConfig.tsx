import { useRecoilState } from "recoil";
import { bookConfigState } from "~/utils/state/book.config";

export const FontSizeConfig = () => {
  const [
    { config: { fontSize }, },
    setConfig,
  ] = useRecoilState(bookConfigState);

  return (
    <div
      className="mx-6 my-2 grid items-center justify-center border-b-2 border-gray-200"
      style={{ gridTemplateColumns: "max-content 1fr max-content" }}
    >
      <div
        className="cursor-pointer select-none"
        style={{ fontSize: fontSize > 8 ? fontSize - 2 : 8 }}
        onClick={() => {
          if (fontSize > 8) {
            setConfig((prev) => ({
              ...prev,
              config: { ...prev.config, fontSize: fontSize - 2 },
            }));
          }
        }}
      >
        a
      </div>
      <div style={{ fontSize }} className="text-center">
        {fontSize}
        <span className="text-base">px</span>
      </div>
      <div
        className="cursor-pointer select-none"
        style={{ fontSize: fontSize < 72 ? fontSize + 2 : 72 }}
        onClick={() => {
          if (fontSize < 72) {
            setConfig((prev) => ({
              ...prev,
              config: { ...prev.config, fontSize: fontSize + 2 },
            }));
          }
        }}
      >
        A
      </div>
    </div>
  );
};
