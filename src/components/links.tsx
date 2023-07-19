import { links } from "@/lib/links";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function Links({ className, showDeco }: { className?: string, showDeco?: boolean }) {
    return (
        <div className={`flex items-center gap-8 text-tertiary ${className}`}>
            {showDeco && <div className="border w-[100px]"></div>}
            {
                links.map((link, idx) => (
                    <Link key={idx} href={link.href} className="hover:text-secondary">
                        <FontAwesomeIcon icon={link.icon} fontSize={link.size ?? 30} />
                    </Link>
                ))
            }
            {showDeco && <div className="border w-[100px]"></div>}
        </div>
    );
}