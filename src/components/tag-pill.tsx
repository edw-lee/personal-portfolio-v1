export default function TagPill({children, className}:{children:any, className?:string}) {
    return (
        <div className={`rounded-full bg-primaryContainer text-onPrimaryContainer px-5 py-1 group-hover:bg-primary group-hover:text-onPrimary ${className}`}>
            {children}
        </div>
    );
}