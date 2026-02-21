// Auth toggle
function toggleAuth() {
    document.getElementById('signin-form').classList.toggle('hidden');
    document.getElementById('signup-form').classList.toggle('hidden');
}

// Login function
function login(e) {
    e.preventDefault();
    document.getElementById('auth-container').classList.add('hidden');
    document.getElementById('app-container').classList.remove('hidden');
}

// Logout function
function logout() {
    document.getElementById('app-container').classList.add('hidden');
    document.getElementById('auth-container').classList.remove('hidden');
}

// Page navigation
function showPage(pageId) {
    document.querySelectorAll('.page').forEach(page => page.classList.remove('active'));
    document.getElementById(pageId).classList.add('active');
    document.querySelectorAll('.sidebar-item').forEach(item => item.classList.remove('active'));
    try {
        // event may be undefined when called programmatically
        const el = (event && event.target) ? event.target.closest('.sidebar-item') : null;
        if (el) el.classList.add('active');
    } catch (e) {}
}

// Toggle sidebar on mobile
function toggleSidebar() {
    document.getElementById('sidebar').classList.toggle('-translate-x-full');
}

// Buy/Sell toggle
function toggleBuySell(type) {
    const buyBtn = document.getElementById('buyBtn');
    const sellBtn = document.getElementById('sellBtn');
    if (type === 'buy') {
        buyBtn.className = 'flex-1 btn-orange text-white py-3 rounded-lg font-semibold';
        sellBtn.className = 'flex-1 bg-gray-100 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-200';
    } else {
        sellBtn.className = 'flex-1 btn-orange text-white py-3 rounded-lg font-semibold';
        buyBtn.className = 'flex-1 bg-gray-100 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-200';
    }
}

// Spin the wheel
let isSpinning = false;
function spinWheel() {
    if (isSpinning) return;
    isSpinning = true;
    const wheel = document.getElementById('fortune-wheel');
    const result = document.getElementById('wheel-result');
    const prizes = ['$1', '$5', '$10', '$25', '$50', '$100'];
    const randomPrize = Math.floor(Math.random() * 6);
    const rotation = 1440 + (randomPrize * 60) + Math.random() * 30;
    wheel.style.transform = `rotate(${rotation}deg)`;
    result.classList.add('hidden');
    setTimeout(() => {
        result.textContent = `🎉 You won ${prizes[randomPrize]}!`;
        result.classList.remove('hidden');
        isSpinning = false;
    }, 4000);
}

// Lottery numbers
(function initLottery(){
    const lotteryContainer = document.getElementById('lottery-numbers');
    if (!lotteryContainer) return;
    window.selectedNumbers = window.selectedNumbers || [];
    for (let i = 1; i <= 49; i++) {
        const btn = document.createElement('button');
        btn.className = 'w-10 h-10 rounded-full border-2 border-gray-200 hover:border-orange-400 font-medium text-sm transition';
        btn.textContent = i;
        btn.onclick = () => selectNumber(btn, i);
        lotteryContainer.appendChild(btn);
    }
})();

function selectNumber(btn, num) {
    window.selectedNumbers = window.selectedNumbers || [];
    if (window.selectedNumbers.includes(num)) {
        window.selectedNumbers = window.selectedNumbers.filter(n => n !== num);
        btn.className = 'w-10 h-10 rounded-full border-2 border-gray-200 hover:border-orange-400 font-medium text-sm transition';
    } else if (window.selectedNumbers.length < 6) {
        window.selectedNumbers.push(num);
        btn.className = 'w-10 h-10 rounded-full border-2 border-orange-400 bg-orange-400 text-white font-medium text-sm transition';
    }
    document.getElementById('selected-numbers').textContent = window.selectedNumbers.length > 0 ? window.selectedNumbers.sort((a,b) => a-b).join(', ') : 'None';
}

function quickPick() {
    window.selectedNumbers = [];
    const buttons = document.querySelectorAll('#lottery-numbers button');
    buttons.forEach(btn => {
        btn.className = 'w-10 h-10 rounded-full border-2 border-gray-200 hover:border-orange-400 font-medium text-sm transition';
    });
    while (window.selectedNumbers.length < 6) {
        const num = Math.floor(Math.random() * 49) + 1;
        if (!window.selectedNumbers.includes(num)) {
            window.selectedNumbers.push(num);
            buttons[num-1].className = 'w-10 h-10 rounded-full border-2 border-orange-400 bg-orange-400 text-white font-medium text-sm transition';
        }
    }
    document.getElementById('selected-numbers').textContent = window.selectedNumbers.sort((a,b) => a-b).join(', ');
}

function buyTicket() {
    if ((window.selectedNumbers || []).length === 6) {
        alert('Ticket purchased! Numbers: ' + (window.selectedNumbers || []).sort((a,b) => a-b).join(', '));
    } else {
        alert('Please select 6 numbers');
    }
}

// Crypto prediction
function makePrediction(direction) {
    alert('Prediction placed: BTC will go ' + String(direction).toUpperCase());
}

// Rocket launch game
let rocketInterval;
let multiplier = 1.00;
let isLaunched = false;

function launchRocket() {
    if (isLaunched) {
        cashOut();
        return;
    }
    isLaunched = true;
    multiplier = 1.00;
    const rocket = document.getElementById('rocket-ship');
    const btn = document.getElementById('rocket-btn');
    if (btn) {
        btn.textContent = 'Cash Out!';
        btn.classList.remove('btn-orange');
        btn.classList.add('bg-green-500', 'hover:bg-green-600');
    }
    rocketInterval = setInterval(() => {
        multiplier += 0.01;
        const mEl = document.getElementById('multiplier');
        if (mEl) mEl.textContent = multiplier.toFixed(2) + 'x';
        if (Math.random() < 0.02) {
            crash();
        }
    }, 100);
}

function cashOut() {
    clearInterval(rocketInterval);
    const betEl = document.getElementById('rocket-bet');
    const bet = betEl ? (parseFloat(betEl.value) || 10) : 10;
    alert('You cashed out at ' + multiplier.toFixed(2) + 'x! Won $' + (bet * multiplier).toFixed(2));
    resetRocket();
}

function crash() {
    clearInterval(rocketInterval);
    const rocket = document.getElementById('rocket-ship');
    if (rocket) rocket.classList.add('launching');
    const mEl = document.getElementById('multiplier');
    if (mEl) mEl.textContent = '💥 CRASHED!';
    setTimeout(() => {
        if (rocket) rocket.classList.remove('launching');
        resetRocket();
    }, 2000);
}

function resetRocket() {
    isLaunched = false;
    multiplier = 1.00;
    const mEl = document.getElementById('multiplier');
    if (mEl) mEl.textContent = '1.00x';
    const btn = document.getElementById('rocket-btn');
    if (btn) {
        btn.textContent = 'Launch!';
        btn.classList.add('btn-orange');
        btn.classList.remove('bg-green-500', 'hover:bg-green-600');
    }
}

// Copy referral link
function copyReferral() {
    if (navigator.clipboard) navigator.clipboard.writeText('https://xazarnet.club/ref/JOHN2024');
    alert('Referral link copied!');
}
