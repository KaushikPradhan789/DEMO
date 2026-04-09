import { ReactNode } from 'react';
import { Navigation, Footer, EmergencyPulse, PulseBackground } from './UI';

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="relative min-h-screen flex flex-col">
      <PulseBackground />
      <Navigation />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
      <EmergencyPulse />
    </div>
  );
};