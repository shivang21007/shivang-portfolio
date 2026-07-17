import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="fixed top-6 right-6 z-50 h-10 w-32" />;
  }

  const isDark = theme === "dark";

  return (
    <div className="fixed top-6 right-6 z-50 flex items-center gap-3 select-none">
      <span className={`font-bold text-xl transition-colors ${!isDark ? 'text-slate-800' : 'text-slate-500'}`}>
        Light
      </span>
      
      <button
        onClick={() => setTheme(isDark ? "light" : "dark")}
        className={`relative inline-flex h-10 w-20 items-center rounded-full transition-colors duration-300 focus:outline-none shadow-inner ${
          isDark ? "bg-[#1e2029]" : "bg-[#7aa7ff]"
        }`}
      >
        {/* Dark mode stars */}
        <div className={`absolute top-0 left-0 w-full h-full transition-opacity duration-300 overflow-hidden rounded-full ${isDark ? 'opacity-100' : 'opacity-0'}`}>
           <div className="absolute top-[8px] left-[10px] w-1.5 h-1.5 bg-white rounded-full"></div>
           <div className="absolute top-[18px] left-[20px] w-1 h-1 bg-white rounded-full"></div>
           <div className="absolute bottom-[8px] left-[14px] w-1.5 h-1.5 bg-white rounded-full"></div>
        </div>

        {/* Light mode clouds/bubbles */}
        <div className={`absolute top-0 left-0 w-full h-full transition-opacity duration-300 overflow-hidden rounded-full ${!isDark ? 'opacity-100' : 'opacity-0'}`}>
           <div className="absolute top-[10px] right-[8px] w-2.5 h-2.5 bg-white rounded-full opacity-90"></div>
           <div className="absolute top-[22px] right-[18px] w-1.5 h-1.5 bg-white rounded-full opacity-80"></div>
        </div>

        {/* Toggle Thumb */}
        <span
          className={`inline-block h-8 w-8 transform rounded-full transition-transform duration-300 flex items-center justify-center shadow-md relative z-10 ${
            isDark ? "translate-x-11 bg-transparent" : "translate-x-1 bg-white"
          }`}
        >
          {isDark ? (
            <div className="w-6 h-6 rounded-full bg-white shadow-[inset_-6px_-2px_0_0_#1e2029]" style={{ boxShadow: 'inset -5px -2px 0 0 #fff', backgroundColor: 'transparent', transform: 'rotate(-20deg)' }} />
          ) : null}
        </span>
      </button>

      <span className={`font-bold text-xl transition-colors ${isDark ? 'text-white' : 'text-slate-400'}`}>
        Dark
      </span>
    </div>
  );
}
