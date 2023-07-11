import { ReactElement } from "react";

export default function Section({ children }: { children: ReactElement[] }) {
    return (
        <section className="section">
            {children}
        </section>
    );
}