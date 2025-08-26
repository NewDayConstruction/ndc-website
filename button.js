
export function Button({ className="", variant="default", size="md", ...props }){
  const base="inline-flex items-center justify-center font-medium transition rounded-xl focus:outline-none focus:ring disabled:opacity-50 disabled:pointer-events-none";
  const variants={default:"bg-zinc-900 text-white hover:bg-zinc-800",outline:"border border-zinc-300 hover:bg-zinc-50",secondary:"bg-zinc-100 text-zinc-900 hover:bg-zinc-200"};
  const sizes={sm:"h-9 px-3 text-sm",md:"h-10 px-4",lg:"h-11 px-6 text-lg"};
  return <button className={`${base} ${variants[variant]} ${sizes[size]} ${className}`} {...props} />;
}
