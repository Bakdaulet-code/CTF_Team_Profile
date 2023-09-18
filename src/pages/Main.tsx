import { FC } from 'react';
// @ts-ignore
import { useGlitch } from 'react-powerglitch';

export const Main: FC = () => {
    const glitch = useGlitch();

    return (
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100%" }}>
            <span ref={glitch.ref} style={{ fontSize: 150, color: "white" }}>JusTraininGroup</span>
        </div>
    );
}