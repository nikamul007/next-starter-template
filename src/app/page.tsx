"use client";
import React, { useEffect, useRef, useState } from "react";
import { createRoot, Root } from "react-dom/client";

function Rocket(): React.ReactElement {
  const [multiplier, setMultiplier] = useState(1.0);
  const [isLaunched, setIsLaunched] = useState(false);
  const intervalRef = useRef<number | null>(null);
  const [bet, setBet] = useState<number>(10);
  const [autoCashout, setAutoCashout] = useState<number | undefined>(undefined);

  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, []);

  function resetRocket() {
    setIsLaunched(false);
    setMultiplier(1.0);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }

  function crash() {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    setMultiplier(NaN); // signal crash
    setTimeout(() => {
      resetRocket();
    }, 2000);
  }

  function cashOut() {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    const won = bet * multiplier;
    // eslint-disable-next-line no-alert
    alert(`You cashed out at ${multiplier.toFixed(2)}x! Won $${won.toFixed(2)}`);
    resetRocket();
  }

  function launchRocket() {
    if (isLaunched) {
      cashOut();
      return;
    }
    setIsLaunched(true);
    setMultiplier(1.0);
    intervalRef.current = window.setInterval(() => {
      setMultiplier((m) => {
        const next = +(m + 0.01).toFixed(2);
        if (Math.random() < 0.02) {
          crash();
        }
        if (autoCashout && next >= autoCashout) {
          cashOut();
        }
        return next;
      });
    }, 100) as unknown as number;
  }

  return (
    <div id="rocket" className="page">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Rocket Launch 🚀</h2>
      <div className="max-w-2xl mx-auto text-center">
        <div className="bg-gradient-to-b from-indigo-900 to-indigo-700 rounded-2xl p-8 mb-6 min-h-64 relative overflow-hidden">
          <div id="rocket-ship" className={`rocket text-6xl ${isLaunched ? 'launching' : ''}`}>🚀</div>
          <div id="multiplier" className="text-4xl font-bold text-white mt-4">{isNaN(multiplier) ? '💥 CRASHED!' : multiplier.toFixed(2) + 'x'}</div>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-2">Bet Amount</label>
              <input
                type="number"
                id="rocket-bet"
                className="w-full px-4 py-3 rounded-lg border border-gray-200"
                placeholder="10"
                value={bet}
                onChange={(e) => setBet(parseFloat(e.target.value || '10'))}
              />
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-2">Auto Cashout</label>
              <input
                type="number"
                id="auto-cashout"
                className="w-full px-4 py-3 rounded-lg border border-gray-200"
                placeholder="2.00"
                step="0.1"
                value={autoCashout ?? ''}
                onChange={(e) => setAutoCashout(e.target.value ? parseFloat(e.target.value) : undefined)}
              />
            </div>
          </div>
          <button id="rocket-btn" onClick={launchRocket} className="w-full btn-orange text-white py-3 rounded-lg font-semibold">
            {isLaunched ? 'Cash Out!' : 'Launch!'}
          </button>
          <p className="text-gray-500 text-sm mt-4">Cash out before the rocket crashes to win!</p>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const html = `
<div id="auth-container" class="min-h-screen flex">
  <div class="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-orange-100 to-orange-50 items-center justify-center p-12">
    <div class="text-center">
      <div class="text-6xl mb-6">🚀</div>
      <h1 class="text-4xl font-bold text-gray-800 mb-4">XAZARNET</h1>
      <p class="text-gray-600 text-lg">Your Gateway to the Future of Finance</p>
    </div>
  </div>
  <div class="w-full lg:w-1/2 flex items-center justify-center p-8">
    <div class="w-full max-w-md">
      <div id="signin-form" class="bg-white rounded-2xl shadow-xl p-8">
        <div class="text-center mb-8">
          <h2 class="text-3xl font-bold text-gray-800">Welcome Back</h2>
          <p class="text-gray-500 mt-2">Sign in to your account</p>
        </div>
        <form onsubmit="login(event)">
          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-medium mb-2">Email</label>
            <input type="email" class="w-full px-4 py-3 rounded-lg border border-gray-200" placeholder="you@example.com">
          </div>
          <div class="mb-6">
            <label class="block text-gray-700 text-sm font-medium mb-2">Password</label>
            <input type="password" class="w-full px-4 py-3 rounded-lg border border-gray-200" placeholder="••••••••">
          </div>
          <button type="submit" class="w-full btn-orange text-white py-3 rounded-lg font-semibold">Sign In</button>
        </form>
      </div>
    </div>
  </div>
</div>

<!-- Minimal dashboard + placeholders for interactive widgets -->
<div id="app-container" class="hidden flex min-h-screen">
  <aside id="sidebar" class="w-64 bg-white shadow-lg fixed h-full overflow-y-auto z-40">
    <div class="p-6 border-b border-gray-100">
      <h1 class="text-2xl font-bold text-gray-800 flex items-center gap-2"><span class="text-3xl">🌐</span> XAZARNET</h1>
    </div>
  </aside>
  <main class="flex-1 ml-64 p-8">
    <div class="flex justify-between items-center mb-8">
      <button onclick="toggleSidebar()" class="lg:hidden p-2 rounded-lg bg-white shadow"><i class="fas fa-bars"></i></button>
      <div class="flex items-center gap-4 ml-auto">
        <button class="relative p-2 text-gray-500 hover:text-orange-500"><i class="fas fa-bell text-xl"></i></button>
      </div>
    </div>

    <div id="dashboard" class="page active">
      <h2 class="text-2xl font-bold text-gray-800 mb-6">Dashboard</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div class="bg-white rounded-xl p-6 shadow-sm card-hover transition">
          <p class="text-2xl font-bold text-gray-800">$24,563.00</p>
        </div>
      </div>

      <!-- Rocket widget placeholder (React will mount here) -->
      <div id="rocket-root-placeholder"></div>

    </div>
  </main>
</div>
`;

    el.innerHTML = html;

    // Load the behavior script from public for other global behaviors.
    const script = document.createElement('script');
    script.src = '/xazarnet.js';
    script.async = false;
    document.body.appendChild(script);

    // Mount the React Rocket component into the placeholder
    let rocketRoot: Root | null = null;
    const placeholder = el.querySelector('#rocket-root-placeholder');
    if (placeholder) {
      rocketRoot = createRoot(placeholder as HTMLElement);
      rocketRoot.render(<Rocket />);
    }

    return () => {
      // cleanup
      // cleanup
      el.innerHTML = '';
      if (rocketRoot) {
        try {
          rocketRoot.unmount();
        } catch (e) {
          // ignore
        }
        rocketRoot = null;
      }
      if (script && script.parentNode) script.parentNode.removeChild(script);
    };
  }, []);

  return <div ref={containerRef} />;
}
