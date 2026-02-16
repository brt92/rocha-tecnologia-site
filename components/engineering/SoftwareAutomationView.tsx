import React from 'react';
import { Button } from '../ui/Button';

export const SoftwareAutomationView = ({ setView }: { setView: (v: string) => void }) => (
    <div className="pt-32 pb-24 px-6 text-center">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">Software & Engineering Page</h1>
        <p>If you see this, the route is working.</p>
        <Button onClick={() => setView('home')}>Go Home</Button>
    </div>
);
