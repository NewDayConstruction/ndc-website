
export function Textarea({ className="", ...props }){
  return <textarea className={`w-full rounded-xl border border-zinc-300 px-3 py-2 focus:outline-none focus:ring focus:ring-zinc-200 ${className}`} {...props} />;
}
