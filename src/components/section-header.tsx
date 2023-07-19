import { RouteContext } from "@/pages";
import { useContext, useRef } from "react";
import ReactVisibilitySensor from "react-visibility-sensor";

export default function SectionHeader({ id, className, children }: { id?: string, className?: string, children: string }) {
    const { setCurrRoute } = useContext(RouteContext);
    return (
        <ReactVisibilitySensor onChange={(isVisible: boolean) => {
            if (id && isVisible) {
                setCurrRoute(id)
            }
        }}>
            <div id={id} className={`text-primary text-center font-bold text-3xl mb-16 pt-20 ${className}`}>
                {children}
            </div>
        </ReactVisibilitySensor>
    );
}