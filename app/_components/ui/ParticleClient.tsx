'use client';

import Particles from '@/app/_components/ui/Particles';

export default function ParticleClient() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 h-screen w-screen">
      <div className="relative h-full w-full">
        <Particles
          particleColors={['#ffffff', '#ffffff', '#ffffff']}
          particleCount={150}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={40}
          moveParticlesOnHover={false}
          alphaParticles={false}
          disableRotation={true}
          className="pointer-events-auto"
        />
      </div>
    </div>

  );
}
