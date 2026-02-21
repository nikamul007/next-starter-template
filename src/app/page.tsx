"use client";
import React, { useEffect, useRef } from "react";

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

      <!-- Rocket widget placeholder (if present in full UI) -->
      <div id="rocket" class="page">
        <h2 class="text-2xl font-bold text-gray-800 mb-6">Rocket Launch 🚀</h2>
        <div class="max-w-2xl mx-auto text-center">
          <div class="bg-gradient-to-b from-indigo-900 to-indigo-700 rounded-2xl p-8 mb-6 min-h-64 relative overflow-hidden">
            <div id="rocket-ship" class="rocket text-6xl">🚀</div>
            <div id="multiplier" class="text-4xl font-bold text-white mt-4">1.00x</div>
          </div>
          <div class="bg-white rounded-xl p-6 shadow-sm">
            <div class="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label class="block text-gray-700 text-sm font-medium mb-2">Bet Amount</label>
                <input type="number" id="rocket-bet" class="w-full px-4 py-3 rounded-lg border border-gray-200" placeholder="10" value="10">
              </div>
              <div>
                <label class="block text-gray-700 text-sm font-medium mb-2">Auto Cashout</label>
                <input type="number" id="auto-cashout" class="w-full px-4 py-3 rounded-lg border border-gray-200" placeholder="2.00" step="0.1">
              </div>
            </div>
            <button id="rocket-btn" class="w-full btn-orange text-white py-3 rounded-lg font-semibold">Launch!</button>
            <p class="text-gray-500 text-sm mt-4">Cash out before the rocket crashes to win!</p>
          </div>
        </div>
      </div>

    </div>
  </main>
</div>
`;

    el.innerHTML = html;

    // Load the behavior script from public but attach our own rocket handler afterwards
    const script = document.createElement('script');
    script.src = '/xazarnet.js';
    script.async = false;

    script.onload = () => {
      // Setup a React-controlled rocket behavior to replace inline onclick when the elements exist
      const rocketBtn = document.getElementById('rocket-btn');
      const rocketShip = document.getElementById('rocket-ship');
      const multiplierEl = document.getElementById('multiplier');
      if (!rocketBtn || !rocketShip || !multiplierEl) return;

      // Remove inline onclick to avoid calling global handlers
      rocketBtn.removeAttribute('onclick');

      let rocketInterval: number | null = null;
      let multiplier = 1.0;
      let isLaunched = false;

      function resetRocket() {
        isLaunched = false;
        multiplier = 1.0;
        multiplierEl.textContent = '1.00x';
        rocketBtn.textContent = 'Launch!';
        rocketBtn.classList.add('btn-orange');
        rocketShip.classList.remove('launching');
        if (rocketInterval) {
          clearInterval(rocketInterval);
          rocketInterval = null;
        }
      }

      function crash() {
        if (rocketInterval) {
          clearInterval(rocketInterval);
          rocketInterval = null;
        }
        rocketShip.classList.add('launching');
        multiplierEl.textContent = '💥 CRASHED!';
        setTimeout(() => {
          rocketShip.classList.remove('launching');
          resetRocket();
        }, 2000);
      }

      function cashOut() {
        if (rocketInterval) {
          clearInterval(rocketInterval);
          rocketInterval = null;
        }
        const betEl = document.getElementById('rocket-bet') as HTMLInputElement | null;
        const bet = betEl ? (parseFloat(betEl.value) || 10) : 10;
        // eslint-disable-next-line no-alert
        alert(`You cashed out at ${multiplier.toFixed(2)}x! Won $${(bet * multiplier).toFixed(2)}`);
        resetRocket();
      }

      function launchRocket() {
        if (isLaunched) {
          cashOut();
          return;
        }
        isLaunched = true;
        multiplier = 1.0;
        rocketBtn.textContent = 'Cash Out!';
        rocketBtn.classList.remove('btn-orange');
        rocketInterval = window.setInterval(() => {
          multiplier += 0.01;
          multiplierEl.textContent = multiplier.toFixed(2) + 'x';
          if (Math.random() < 0.02) {
            crash();
          }
        }, 100);
      }

      rocketBtn.addEventListener('click', launchRocket);

      // Cleanup when script removed
      (script as any).__reactRocketCleanup = () => {
        rocketBtn.removeEventListener('click', launchRocket);
        if (rocketInterval) clearInterval(rocketInterval);
      };
    };

    document.body.appendChild(script);

    return () => {
      // cleanup
      el.innerHTML = '';
      if (script) {
        const cleanup = (script as any).__reactRocketCleanup as (() => void) | undefined;
        if (cleanup) cleanup();
        if (script.parentNode) script.parentNode.removeChild(script);
      }
    };
  }, []);

  return <div ref={containerRef} />;
}
