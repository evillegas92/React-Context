'use client';

import { ReactElement } from "react";
import { LevelContext } from "./contexts";

export default function Section({ level, children }: { level: number, children: ReactElement[] }) {
    return (
        <section className="section">
            <LevelContext.Provider value={level}>
                {children}
            </LevelContext.Provider>
        </section>
    );
}