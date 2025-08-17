
export function Card({ className="", children }){
  return <div className={`border border-zinc-200 bg-white shadow-sm ${className}`}>{children}</div>;
}
export function CardHeader({ className="", children }){
  return <div className={`px-5 pt-5 ${className}`}>{children}</div>;
}
export function CardTitle({ className="", children }){
  return <h3 className={`font-semibold text-zinc-900 ${className}`}>{children}</h3>;
}
export function CardContent({ className="", children }){
  return <div className={`px-5 pb-5 ${className}`}>{children}</div>;
}
