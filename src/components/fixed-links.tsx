import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import classNames from "classnames";
import { links } from "@/lib/links";

export default function FixedLinks({ className }: { className?: string }) {    
    return (
        <div className={classNames(
            `flex flex-col items-center gap-8 fixed bottom-5 left-10 text-tertiary ${className}`
        )}>
            {
                links.map((link, idx) => (
                    <Link key={idx} href={link.href} className="hover:text-secondary">
                        <FontAwesomeIcon icon={link.icon} fontSize={link.size ?? 30} />
                    </Link>
                ))
            }
            <div className="border h-12"></div>
        </div>
    );
}