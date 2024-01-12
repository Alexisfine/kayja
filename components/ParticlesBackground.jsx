'use client'
import Particles from "react-tsparticles";
import {particlesConfig} from "@/config/particles-config";
import { loadFull } from "tsparticles";


export default function ParticleBackground() {
	const particlesInit = async (main) => {
		await loadFull(main);
	};
	const particlesLoaded = (container) => {
	};

	return (
		<>
            <Particles init={particlesInit} options={particlesConfig}/>
        </>
	);
}