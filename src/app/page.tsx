import Image from "next/image";

export default function Home() {
	return (
		<div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>XAZARNET - Your Crypto Hub</title>
    <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <style>
        :root {
            --orange-light: #FFB366;
            --orange-main: #FF9933;
            --orange-dark: #E68A00;
        }
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }
        .btn-orange {
            background: linear-gradient(135deg, #FFB366 0%, #FF9933 100%);
            transition: all 0.3s ease;
        }
        .btn-orange:hover {
            background: linear-gradient(135deg, #FF9933 0%, #E68A00 100%);
            transform: translateY(-2px);
            box-shadow: 0 4px 15px rgba(255, 153, 51, 0.4);
        }
        .sidebar-item {
            transition: all 0.3s ease;
        }
        .sidebar-item:hover, .sidebar-item.active {
            background: linear-gradient(90deg, rgba(255, 179, 102, 0.2) 0%, transparent 100%);
            border-left: 3px solid #FF9933;
        }
        .page { display: none; }
        .page.active { display: block; }
        .card-hover:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 30px rgba(0,0,0,0.1);
        }
        .wheel {
            transition: transform 4s cubic-bezier(0.17, 0.67, 0.12, 0.99);
        }
        .rocket {
            animation: float 2s ease-in-out infinite;
        }
        @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
        }
        @keyframes launch {
            0% { transform: translateY(0); }
            100% { transform: translateY(-500px) scale(0.5); opacity: 0; }
        }
        .launching {
            animation: launch 2s ease-in forwards;
        }
        .glow {
            box-shadow: 0 0 20px rgba(255, 153, 51, 0.3);
        }
    </style>
</head>
<body class="bg-gray-50 min-h-screen">
    <!-- Auth Pages (Homepage/Sign-in/Sign-up) -->
    <div id="auth-container" class="min-h-screen flex">
        <!-- Left Side - Branding -->
        <div class="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-orange-100 to-orange-50 items-center justify-center p-12">
            <div class="text-center">
                <div class="text-6xl mb-6">🚀</div>
                <h1 class="text-4xl font-bold text-gray-800 mb-4">XAZARNET</h1>
                <p class="text-gray-600 text-lg">Your Gateway to the Future of Finance</p>
                <div class="mt-8 grid grid-cols-3 gap-4">
                    <div class="bg-white/60 p-4 rounded-xl">
                        <i class="fas fa-shield-alt text-2xl text-orange-400"></i>
                        <p class="text-sm mt-2 text-gray-600">Secure</p>
                    </div>
                    <div class="bg-white/60 p-4 rounded-xl">
                        <i class="fas fa-bolt text-2xl text-orange-400"></i>
                        <p class="text-sm mt-2 text-gray-600">Fast</p>
                    </div>
                    <div class="bg-white/60 p-4 rounded-xl">
                        <i class="fas fa-coins text-2xl text-orange-400"></i>
                        <p class="text-sm mt-2 text-gray-600">Rewarding</p>
                    </div>
                </div>
            </div>
        </div>
        
        <!-- Right Side - Auth Forms -->
        <div class="w-full lg:w-1/2 flex items-center justify-center p-8">
            <div class="w-full max-w-md">
                <!-- Sign In Form -->
                <div id="signin-form" class="bg-white rounded-2xl shadow-xl p-8">
                    <div class="text-center mb-8">
                        <h2 class="text-3xl font-bold text-gray-800">Welcome Back</h2>
                        <p class="text-gray-500 mt-2">Sign in to your account</p>
                    </div>
                    <form onsubmit="login(event)">
                        <div class="mb-4">
                            <label class="block text-gray-700 text-sm font-medium mb-2">Email</label>
                            <input type="email" class="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-orange-300 focus:ring-2 focus:ring-orange-100 outline-none transition" placeholder="you@example.com">
                        </div>
                        <div class="mb-6">
                            <label class="block text-gray-700 text-sm font-medium mb-2">Password</label>
                            <input type="password" class="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-orange-300 focus:ring-2 focus:ring-orange-100 outline-none transition" placeholder="••••••••">
                        </div>
                        <div class="flex items-center justify-between mb-6">
                            <label class="flex items-center">
                                <input type="checkbox" class="w-4 h-4 accent-orange-400">
                                <span class="ml-2 text-sm text-gray-600">Remember me</span>
                            </label>
                            <a href="#" class="text-sm text-orange-500 hover:text-orange-600">Forgot password?</a>
                        </div>
                        <button type="submit" class="w-full btn-orange text-white py-3 rounded-lg font-semibold">Sign In</button>
                    </form>
                    <p class="text-center mt-6 text-gray-600">Don't have an account? <a href="#" onclick="toggleAuth()" class="text-orange-500 font-medium hover:text-orange-600">Sign Up</a></p>
                </div>

                <!-- Sign Up Form -->
                <div id="signup-form" class="bg-white rounded-2xl shadow-xl p-8 hidden">
                    <div class="text-center mb-8">
                        <h2 class="text-3xl font-bold text-gray-800">Create Account</h2>
                        <p class="text-gray-500 mt-2">Join XAZARNET today</p>
                    </div>
                    <form onsubmit="login(event)">
                        <div class="grid grid-cols-2 gap-4 mb-4">
                            <div>
                                <label class="block text-gray-700 text-sm font-medium mb-2">First Name</label>
                                <input type="text" class="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-orange-300 focus:ring-2 focus:ring-orange-100 outline-none transition" placeholder="John">
                            </div>
                            <div>
                                <label class="block text-gray-700 text-sm font-medium mb-2">Last Name</label>
                                <input type="text" class="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-orange-300 focus:ring-2 focus:ring-orange-100 outline-none transition" placeholder="Doe">
                            </div>
                        </div>
                        <div class="mb-4">
                            <label class="block text-gray-700 text-sm font-medium mb-2">Email</label>
                            <input type="email" class="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-orange-300 focus:ring-2 focus:ring-orange-100 outline-none transition" placeholder="you@example.com">
                        </div>
                        <div class="mb-4">
                            <label class="block text-gray-700 text-sm font-medium mb-2">Password</label>
                            <input type="password" class="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-orange-300 focus:ring-2 focus:ring-orange-100 outline-none transition" placeholder="••••••••">
                        </div>
                        <div class="mb-6">
                            <label class="flex items-center">
                                <input type="checkbox" class="w-4 h-4 accent-orange-400">
                                <span class="ml-2 text-sm text-gray-600">I agree to the <a href="#" class="text-orange-500">Terms of Service</a></span>
                            </label>
                        </div>
                        <button type="submit" class="w-full btn-orange text-white py-3 rounded-lg font-semibold">Create Account</button>
                    </form>
                    <p class="text-center mt-6 text-gray-600">Already have an account? <a href="#" onclick="toggleAuth()" class="text-orange-500 font-medium hover:text-orange-600">Sign In</a></p>
                </div>
            </div>
        </div>
    </div>

    <!-- Main App Container -->
    <div id="app-container" class="hidden flex min-h-screen">
        <!-- Sidebar -->
        <aside id="sidebar" class="w-64 bg-white shadow-lg fixed h-full overflow-y-auto z-40">
            <div class="p-6 border-b border-gray-100">
                <h1 class="text-2xl font-bold text-gray-800 flex items-center gap-2">
                    <span class="text-3xl">🌐</span> XAZARNET
                </h1>
            </div>
            <nav class="p-4">
                <p class="text-xs text-gray-400 uppercase tracking-wider mb-3 px-3">Main</p>
                <ul class="space-y-1">
                    <li><a href="#" onclick="showPage('dashboard')" class="sidebar-item active flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-700"><i class="fas fa-th-large w-5"></i> Dashboard</a></li>
                    <li><a href="#" onclick="showPage('wallet')" class="sidebar-item flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-700"><i class="fas fa-wallet w-5"></i> Wallet</a></li>
                    <li><a href="#" onclick="showPage('buysell')" class="sidebar-item flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-700"><i class="fas fa-exchange-alt w-5"></i> Buy/Sell</a></li>
                    <li><a href="#" onclick="showPage('swap')" class="sidebar-item flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-700"><i class="fas fa-sync-alt w-5"></i> Swap</a></li>
                    <li><a href="#" onclick="showPage('bridges')" class="sidebar-item flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-700"><i class="fas fa-bridge w-5"></i> Low-Fee Bridges</a></li>
                </ul>
                
                <p class="text-xs text-gray-400 uppercase tracking-wider mb-3 mt-6 px-3">Games & Earn</p>
                <ul class="space-y-1">
                    <li><a href="#" onclick="showPage('wheel')" class="sidebar-item flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-700"><i class="fas fa-circle-notch w-5"></i> Wheel of Fortune</a></li>
                    <li><a href="#" onclick="showPage('lottery')" class="sidebar-item flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-700"><i class="fas fa-ticket-alt w-5"></i> Lottery Ticket</a></li>
                    <li><a href="#" onclick="showPage('prediction')" class="sidebar-item flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-700"><i class="fas fa-chart-line w-5"></i> Crypto Prediction</a></li>
                    <li><a href="#" onclick="showPage('sports')" class="sidebar-item flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-700"><i class="fas fa-futbol w-5"></i> Sports Prediction</a></li>
                    <li><a href="#" onclick="showPage('rocket')" class="sidebar-item flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-700"><i class="fas fa-rocket w-5"></i> Rocket Launch</a></li>
                    <li><a href="#" onclick="showPage('staking')" class="sidebar-item flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-700"><i class="fas fa-gem w-5"></i> Staking Pool</a></li>
                </ul>

                <p class="text-xs text-gray-400 uppercase tracking-wider mb-3 mt-6 px-3">Rewards</p>
                <ul class="space-y-1">
                    <li><a href="#" onclick="showPage('referrals')" class="sidebar-item flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-700"><i class="fas fa-users w-5"></i> Referrals</a></li>
                    <li><a href="#" onclick="showPage('rewards')" class="sidebar-item flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-700"><i class="fas fa-gift w-5"></i> Reward Center</a></li>
                </ul>

                <p class="text-xs text-gray-400 uppercase tracking-wider mb-3 mt-6 px-3">Settings</p>
                <ul class="space-y-1">
                    <li><a href="#" onclick="showPage('account')" class="sidebar-item flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-700"><i class="fas fa-user w-5"></i> Account</a></li>
                    <li><a href="#" onclick="showPage('settings')" class="sidebar-item flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-700"><i class="fas fa-cog w-5"></i> Settings</a></li>
                    <li><a href="#" onclick="showPage('security')" class="sidebar-item flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-700"><i class="fas fa-shield-alt w-5"></i> Security</a></li>
                    <li><a href="#" onclick="showPage('support')" class="sidebar-item flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-700"><i class="fas fa-headset w-5"></i> Support</a></li>
                    <li><a href="#" onclick="showPage('privacy')" class="sidebar-item flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-700"><i class="fas fa-user-shield w-5"></i> Privacy Policy</a></li>
                    <li><a href="#" onclick="showPage('terms')" class="sidebar-item flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-700"><i class="fas fa-file-contract w-5"></i> Terms of Service</a></li>
                </ul>

                <div class="mt-6 pt-6 border-t border-gray-100">
                    <a href="#" onclick="logout()" class="flex items-center gap-3 px-3 py-2.5 rounded-lg text-red-500 hover:bg-red-50"><i class="fas fa-sign-out-alt w-5"></i> Logout</a>
                </div>
            </nav>
        </aside>

        <!-- Main Content -->
        <main class="flex-1 ml-64 p-8">
            <!-- Top Bar -->
            <div class="flex justify-between items-center mb-8">
                <button onclick="toggleSidebar()" class="lg:hidden p-2 rounded-lg bg-white shadow">
                    <i class="fas fa-bars"></i>
                </button>
                <div class="flex items-center gap-4 ml-auto">
                    <button class="relative p-2 text-gray-500 hover:text-orange-500">
                        <i class="fas fa-bell text-xl"></i>
                        <span class="absolute top-0 right-0 w-2 h-2 bg-orange-500 rounded-full"></span>
                    </button>
                    <div class="flex items-center gap-3 bg-white rounded-full pl-4 pr-2 py-1 shadow">
                        <span class="text-sm font-medium text-gray-700">John Doe</span>
                        <div class="w-8 h-8 bg-gradient-to-br from-orange-300 to-orange-400 rounded-full flex items-center justify-center text-white font-semibold">J</div>
                    </div>
                </div>
            </div>

            <!-- Dashboard Page -->
            <div id="dashboard" class="page active">
                <h2 class="text-2xl font-bold text-gray-800 mb-6">Dashboard</h2>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    <div class="bg-white rounded-xl p-6 shadow-sm card-hover transition">
                        <div class="flex items-center justify-between mb-4">
                            <span class="text-gray-500 text-sm">Total Balance</span>
                            <span class="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center"><i class="fas fa-wallet text-orange-500"></i></span>
                        </div>
                        <p class="text-2xl font-bold text-gray-800">$24,563.00</p>
                        <p class="text-green-500 text-sm mt-2"><i class="fas fa-arrow-up"></i> +12.5%</p>
                    </div>
                    <div class="bg-white rounded-xl p-6 shadow-sm card-hover transition">
                        <div class="flex items-center justify-between mb-4">
                            <span class="text-gray-500 text-sm">Staking Rewards</span>
                            <span class="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center"><i class="fas fa-coins text-green-500"></i></span>
                        </div>
                        <p class="text-2xl font-bold text-gray-800">$1,234.56</p>
                        <p class="text-green-500 text-sm mt-2"><i class="fas fa-arrow-up"></i> +8.2%</p>
                    </div>
                    <div class="bg-white rounded-xl p-6 shadow-sm card-hover transition">
                        <div class="flex items-center justify-between mb-4">
                            <span class="text-gray-500 text-sm">Games Won</span>
                            <span class="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center"><i class="fas fa-trophy text-purple-500"></i></span>
                        </div>
                        <p class="text-2xl font-bold text-gray-800">47</p>
                        <p class="text-gray-500 text-sm mt-2">This month</p>
                    </div>
                    <div class="bg-white rounded-xl p-6 shadow-sm card-hover transition">
                        <div class="flex items-center justify-between mb-4">
                            <span class="text-gray-500 text-sm">Referral Earnings</span>
                            <span class="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center"><i class="fas fa-users text-blue-500"></i></span>
                        </div>
                        <p class="text-2xl font-bold text-gray-800">$567.89</p>
                        <p class="text-gray-500 text-sm mt-2">23 referrals</p>
                    </div>
                </div>

                <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div class="lg:col-span-2 bg-white rounded-xl p-6 shadow-sm">
                        <h3 class="text-lg font-semibold text-gray-800 mb-4">Portfolio Overview</h3>
                        <div class="space-y-4">
                            <div class="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                                <div class="flex items-center gap-3">
                                    <div class="w-10 h-10 bg-orange-400 rounded-full flex items-center justify-center text-white font-bold">₿</div>
                                    <div>
                                        <p class="font-medium text-gray-800">Bitcoin</p>
                                        <p class="text-sm text-gray-500">BTC</p>
                                    </div>
                                </div>
                                <div class="text-right">
                                    <p class="font-medium text-gray-800">0.5432 BTC</p>
                                    <p class="text-sm text-green-500">+2.34%</p>
                                </div>
                            </div>
                            <div class="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                                <div class="flex items-center gap-3">
                                    <div class="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">Ξ</div>
                                    <div>
                                        <p class="font-medium text-gray-800">Ethereum</p>
                                        <p class="text-sm text-gray-500">ETH</p>
                                    </div>
                                </div>
                                <div class="text-right">
                                    <p class="font-medium text-gray-800">4.2156 ETH</p>
                                    <p class="text-sm text-green-500">+5.67%</p>
                                </div>
                            </div>
                            <div class="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                                <div class="flex items-center gap-3">
                                    <div class="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center text-white font-bold">◎</div>
                                    <div>
                                        <p class="font-medium text-gray-800">Solana</p>
                                        <p class="text-sm text-gray-500">SOL</p>
                                    </div>
                                </div>
                                <div class="text-right">
                                    <p class="font-medium text-gray-800">125.00 SOL</p>
                                    <p class="text-sm text-red-500">-1.23%</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="bg-white rounded-xl p-6 shadow-sm">
                        <h3 class="text-lg font-semibold text-gray-800 mb-4">Quick Actions</h3>
                        <div class="space-y-3">
                            <button onclick="showPage('buysell')" class="w-full btn-orange text-white py-3 rounded-lg font-medium flex items-center justify-center gap-2"><i class="fas fa-plus"></i> Buy Crypto</button>
                            <button onclick="showPage('swap')" class="w-full bg-gray-100 text-gray-700 py-3 rounded-lg font-medium flex items-center justify-center gap-2 hover:bg-gray-200 transition"><i class="fas fa-sync-alt"></i> Swap</button>
                            <button onclick="showPage('staking')" class="w-full bg-gray-100 text-gray-700 py-3 rounded-lg font-medium flex items-center justify-center gap-2 hover:bg-gray-200 transition"><i class="fas fa-gem"></i> Stake</button>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Wallet Page -->
            <div id="wallet" class="page">
                <h2 class="text-2xl font-bold text-gray-800 mb-6">Wallet</h2>
                <div class="bg-gradient-to-r from-orange-400 to-orange-300 rounded-2xl p-8 mb-8 text-white">
                    <p class="text-orange-100 mb-2">Total Balance</p>
                    <h3 class="text-4xl font-bold mb-4">$24,563.00</h3>
                    <div class="flex gap-4">
                        <button class="bg-white/20 hover:bg-white/30 px-6 py-2 rounded-lg transition"><i class="fas fa-arrow-down mr-2"></i>Deposit</button>
                        <button class="bg-white/20 hover:bg-white/30 px-6 py-2 rounded-lg transition"><i class="fas fa-arrow-up mr-2"></i>Withdraw</button>
                    </div>
                </div>
                <div class="bg-white rounded-xl shadow-sm overflow-hidden">
                    <div class="p-6 border-b border-gray-100">
                        <h3 class="text-lg font-semibold text-gray-800">Your Assets</h3>
                    </div>
                    <table class="w-full">
                        <thead class="bg-gray-50">
                            <tr>
                                <th class="text-left p-4 text-gray-600 font-medium">Asset</th>
                                <th class="text-left p-4 text-gray-600 font-medium">Balance</th>
                                <th class="text-left p-4 text-gray-600 font-medium">Value</th>
                                <th class="text-left p-4 text-gray-600 font-medium">24h Change</th>
                                <th class="text-right p-4 text-gray-600 font-medium">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="border-b border-gray-50 hover:bg-gray-50">
                                <td class="p-4"><div class="flex items-center gap-3"><div class="w-8 h-8 bg-orange-400 rounded-full flex items-center justify-center text-white text-sm font-bold">₿</div><span class="font-medium">Bitcoin</span></div></td>
                                <td class="p-4">0.5432 BTC</td>
                                <td class="p-4">$18,234.00</td>
                                <td class="p-4 text-green-500">+2.34%</td>
                                <td class="p-4 text-right"><button class="btn-orange text-white px-4 py-1.5 rounded text-sm">Trade</button></td>
                            </tr>
                            <tr class="border-b border-gray-50 hover:bg-gray-50">
                                <td class="p-4"><div class="flex items-center gap-3"><div class="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold">Ξ</div><span class="font-medium">Ethereum</span></div></td>
                                <td class="p-4">4.2156 ETH</td>
                                <td class="p-4">$5,129.00</td>
                                <td class="p-4 text-green-500">+5.67%</td>
                                <td class="p-4 text-right"><button class="btn-orange text-white px-4 py-1.5 rounded text-sm">Trade</button></td>
                            </tr>
                            <tr class="border-b border-gray-50 hover:bg-gray-50">
                                <td class="p-4"><div class="flex items-center gap-3"><div class="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center text-white text-sm font-bold">◎</div><span class="font-medium">Solana</span></div></td>
                                <td class="p-4">125.00 SOL</td>
                                <td class="p-4">$1,200.00</td>
                                <td class="p-4 text-red-500">-1.23%</td>
                                <td class="p-4 text-right"><button class="btn-orange text-white px-4 py-1.5 rounded text-sm">Trade</button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <!-- Buy/Sell Page -->
            <div id="buysell" class="page">
                <h2 class="text-2xl font-bold text-gray-800 mb-6">Buy / Sell Crypto</h2>
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div class="bg-white rounded-xl p-6 shadow-sm">
                        <div class="flex gap-2 mb-6">
                            <button id="buyBtn" onclick="toggleBuySell('buy')" class="flex-1 btn-orange text-white py-3 rounded-lg font-semibold">Buy</button>
                            <button id="sellBtn" onclick="toggleBuySell('sell')" class="flex-1 bg-gray-100 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-200">Sell</button>
                        </div>
                        <div class="space-y-4">
                            <div>
                                <label class="block text-gray-700 text-sm font-medium mb-2">Select Crypto</label>
                                <select class="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-orange-300 focus:ring-2 focus:ring-orange-100 outline-none">
                                    <option>Bitcoin (BTC)</option>
                                    <option>Ethereum (ETH)</option>
                                    <option>Solana (SOL)</option>
                                    <option>Cardano (ADA)</option>
                                </select>
                            </div>
                            <div>
                                <label class="block text-gray-700 text-sm font-medium mb-2">Amount (USD)</label>
                                <input type="number" class="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-orange-300 focus:ring-2 focus:ring-orange-100 outline-none" placeholder="0.00">
                            </div>
                            <div class="bg-gray-50 p-4 rounded-lg">
                                <div class="flex justify-between text-sm mb-2">
                                    <span class="text-gray-500">You'll receive</span>
                                    <span class="font-medium">0.00 BTC</span>
                                </div>
                                <div class="flex justify-between text-sm">
                                    <span class="text-gray-500">Fee</span>
                                    <span class="font-medium">$0.00</span>
                                </div>
                            </div>
                            <button class="w-full btn-orange text-white py-3 rounded-lg font-semibold">Buy Now</button>
                        </div>
                    </div>
                    <div class="bg-white rounded-xl p-6 shadow-sm">
                        <h3 class="text-lg font-semibold text-gray-800 mb-4">Market Prices</h3>
                        <div class="space-y-3">
                            <div class="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                                <div class="flex items-center gap-3">
                                    <div class="w-8 h-8 bg-orange-400 rounded-full flex items-center justify-center text-white font-bold text-sm">₿</div>
                                    <span class="font-medium">BTC</span>
                                </div>
                                <span class="font-semibold">$43,256.78</span>
                            </div>
                            <div class="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                                <div class="flex items-center gap-3">
                                    <div class="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">Ξ</div>
                                    <span class="font-medium">ETH</span>
                                </div>
                                <span class="font-semibold">$2,456.12</span>
                            </div>
                            <div class="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                                <div class="flex items-center gap-3">
                                    <div class="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center text-white font-bold text-sm">◎</div>
                                    <span class="font-medium">SOL</span>
                                </div>
                                <span class="font-semibold">$98.45</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Swap Page -->
            <div id="swap" class="page">
                <h2 class="text-2xl font-bold text-gray-800 mb-6">Swap Crypto</h2>
                <div class="max-w-lg mx-auto">
                    <div class="bg-white rounded-xl p-6 shadow-sm">
                        <div class="space-y-4">
                            <div class="bg-gray-50 p-4 rounded-xl">
                                <label class="block text-gray-500 text-sm mb-2">From</label>
                                <div class="flex items-center gap-3">
                                    <select class="bg-white px-3 py-2 rounded-lg border border-gray-200">
                                        <option>ETH</option>
                                        <option>BTC</option>
                                        <option>SOL</option>
                                    </select>
                                    <input type="number" class="flex-1 text-right text-2xl font-semibold bg-transparent outline-none" placeholder="0.00">
                                </div>
                                <p class="text-sm text-gray-400 mt-2">Balance: 4.2156 ETH</p>
                            </div>
                            <div class="flex justify-center">
                                <button class="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center text-orange-500 hover:bg-orange-200 transition">
                                    <i class="fas fa-arrow-down"></i>
                                </button>
                            </div>
                            <div class="bg-gray-50 p-4 rounded-xl">
                                <label class="block text-gray-500 text-sm mb-2">To</label>
                                <div class="flex items-center gap-3">
                                    <select class="bg-white px-3 py-2 rounded-lg border border-gray-200">
                                        <option>BTC</option>
                                        <option>ETH</option>
                                        <option>SOL</option>
                                    </select>
                                    <input type="number" class="flex-1 text-right text-2xl font-semibold bg-transparent outline-none" placeholder="0.00" readonly>
                                </div>
                            </div>
                            <div class="bg-orange-50 p-4 rounded-lg">
                                <div class="flex justify-between text-sm">
                                    <span class="text-gray-600">Exchange Rate</span>
                                    <span class="font-medium">1 ETH = 0.057 BTC</span>
                                </div>
                            </div>
                            <button class="w-full btn-orange text-white py-3 rounded-lg font-semibold">Swap Now</button>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Low-Fee Bridges Page -->
            <div id="bridges" class="page">
                <h2 class="text-2xl font-bold text-gray-800 mb-6">Low-Fee Bridges</h2>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div class="bg-white rounded-xl p-6 shadow-sm card-hover transition cursor-pointer">
                        <div class="flex items-center justify-between mb-4">
                            <div class="flex items-center gap-3">
                                <div class="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center text-white text-xl">Ξ</div>
                                <i class="fas fa-arrow-right text-gray-300"></i>
                                <div class="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center text-white text-xl">P</div>
                            </div>
                            <span class="bg-green-100 text-green-600 text-xs px-2 py-1 rounded-full">Low Fee</span>
                        </div>
                        <h3 class="font-semibold text-gray-800 mb-2">Ethereum → Polygon</h3>
                        <p class="text-sm text-gray-500 mb-4">Bridge assets from Ethereum to Polygon network</p>
                        <div class="flex justify-between text-sm">
                            <span class="text-gray-500">Fee: ~$0.50</span>
                            <span class="text-gray-500">~5 min</span>
                        </div>
                    </div>
                    <div class="bg-white rounded-xl p-6 shadow-sm card-hover transition cursor-pointer">
                        <div class="flex items-center justify-between mb-4">
                            <div class="flex items-center gap-3">
                                <div class="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center text-white text-xl">Ξ</div>
                                <i class="fas fa-arrow-right text-gray-300"></i>
                                <div class="w-12 h-12 bg-red-500 rounded-xl flex items-center justify-center text-white text-xl">A</div>
                            </div>
                            <span class="bg-green-100 text-green-600 text-xs px-2 py-1 rounded-full">Low Fee</span>
                        </div>
                        <h3 class="font-semibold text-gray-800 mb-2">Ethereum → Arbitrum</h3>
                        <p class="text-sm text-gray-500 mb-4">Bridge assets from Ethereum to Arbitrum</p>
                        <div class="flex justify-between text-sm">
                            <span class="text-gray-500">Fee: ~$0.80</span>
                            <span class="text-gray-500">~10 min</span>
                        </div>
                    </div>
                    <div class="bg-white rounded-xl p-6 shadow-sm card-hover transition cursor-pointer">
                        <div class="flex items-center justify-between mb-4">
                            <div class="flex items-center gap-3">
                                <div class="w-12 h-12 bg-yellow-400 rounded-xl flex items-center justify-center text-white text-xl">◎</div>
                                <i class="fas fa-arrow-right text-gray-300"></i>
                                <div class="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center text-white text-xl">Ξ</div>
                            </div>
                            <span class="bg-yellow-100 text-yellow-600 text-xs px-2 py-1 rounded-full">Medium</span>
                        </div>
                        <h3 class="font-semibold text-gray-800 mb-2">Solana → Ethereum</h3>
                        <p class="text-sm text-gray-500 mb-4">Bridge assets from Solana to Ethereum</p>
                        <div class="flex justify-between text-sm">
                            <span class="text-gray-500">Fee: ~$2.00</span>
                            <span class="text-gray-500">~15 min</span>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Wheel of Fortune Page -->
            <div id="wheel" class="page">
                <h2 class="text-2xl font-bold text-gray-800 mb-6">Wheel of Fortune</h2>
                <div class="flex flex-col items-center">
                    <div class="relative mb-8">
                        <div class="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-2 z-10">
                            <div class="w-0 h-0 border-l-8 border-r-8 border-t-16 border-l-transparent border-r-transparent border-t-orange-500"></div>
                        </div>
                        <svg id="fortune-wheel" class="wheel w-72 h-72" viewBox="0 0 200 200">
                            <circle cx="100" cy="100" r="95" fill="#FFB366" stroke="#FF9933" stroke-width="4"/>
                            <path d="M100,100 L100,5 A95,95 0 0,1 182,55 Z" fill="#FF9933"/>
                            <path d="M100,100 L182,55 A95,95 0 0,1 182,145 Z" fill="#FFE0B3"/>
                            <path d="M100,100 L182,145 A95,95 0 0,1 100,195 Z" fill="#FF9933"/>
                            <path d="M100,100 L100,195 A95,95 0 0,1 18,145 Z" fill="#FFE0B3"/>
                            <path d="M100,100 L18,145 A95,95 0 0,1 18,55 Z" fill="#FF9933"/>
                            <path d="M100,100 L18,55 A95,95 0 0,1 100,5 Z" fill="#FFE0B3"/>
                            <text x="130" y="45" fill="#fff" font-size="10" font-weight="bold">$100</text>
                            <text x="160" y="105" fill="#333" font-size="10" font-weight="bold">$50</text>
                            <text x="130" y="165" fill="#fff" font-size="10" font-weight="bold">$25</text>
                            <text x="60" y="165" fill="#333" font-size="10" font-weight="bold">$10</text>
                            <text x="30" y="105" fill="#fff" font-size="10" font-weight="bold">$5</text>
                            <text x="60" y="45" fill="#333" font-size="10" font-weight="bold">$1</text>
                            <circle cx="100" cy="100" r="20" fill="#fff"/>
                            <text x="100" y="105" text-anchor="middle" fill="#FF9933" font-size="12" font-weight="bold">SPIN</text>
                        </svg>
                    </div>
                    <button onclick="spinWheel()" class="btn-orange text-white px-8 py-3 rounded-lg font-semibold text-lg mb-4">Spin the Wheel - 10 Credits</button>
                    <p class="text-gray-500">Your Credits: <span class="font-semibold text-orange-500">150</span></p>
                    <div id="wheel-result" class="mt-4 text-xl font-bold text-gray-800 hidden"></div>
                </div>
            </div>

            <!-- Lottery Page -->
            <div id="lottery" class="page">
                <h2 class="text-2xl font-bold text-gray-800 mb-6">Lottery Tickets</h2>
                <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div class="lg:col-span-2 bg-white rounded-xl p-6 shadow-sm">
                        <h3 class="text-lg font-semibold text-gray-800 mb-4">Pick Your Numbers</h3>
                        <div id="lottery-numbers" class="grid grid-cols-7 gap-2 mb-6">
                        </div>
                        <div class="mb-6">
                            <p class="text-gray-600 mb-2">Selected Numbers: <span id="selected-numbers" class="font-semibold text-orange-500">None</span></p>
                            <button onclick="quickPick()" class="text-orange-500 hover:text-orange-600 text-sm"><i class="fas fa-random mr-1"></i> Quick Pick</button>
                        </div>
                        <button onclick="buyTicket()" class="btn-orange text-white px-6 py-3 rounded-lg font-semibold">Buy Ticket - $5</button>
                    </div>
                    <div class="bg-gradient-to-br from-orange-400 to-orange-300 rounded-xl p-6 text-white">
                        <h3 class="text-lg font-semibold mb-4">Current Jackpot</h3>
                        <p class="text-4xl font-bold mb-4">$125,000</p>
                        <div class="bg-white/20 rounded-lg p-4 mb-4">
                            <p class="text-sm text-orange-100">Next Draw</p>
                            <p class="text-xl font-semibold">24:00:00</p>
                        </div>
                        <p class="text-sm text-orange-100">Tickets Sold: 2,456</p>
                    </div>
                </div>
            </div>

            <!-- Crypto Prediction Page -->
            <div id="prediction" class="page">
                <h2 class="text-2xl font-bold text-gray-800 mb-6">Cryptocurrency Price Prediction</h2>
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div class="bg-white rounded-xl p-6 shadow-sm">
                        <h3 class="text-lg font-semibold text-gray-800 mb-4">Make Your Prediction</h3>
                        <div class="flex items-center gap-4 mb-6 p-4 bg-gray-50 rounded-xl">
                            <div class="w-12 h-12 bg-orange-400 rounded-full flex items-center justify-center text-white font-bold text-xl">₿</div>
                            <div>
                                <p class="font-semibold text-gray-800">Bitcoin</p>
                                <p class="text-2xl font-bold text-gray-800">$43,256.78</p>
                            </div>
                        </div>
                        <p class="text-gray-600 mb-4">Will BTC be higher or lower in 1 hour?</p>
                        <div class="grid grid-cols-2 gap-4 mb-6">
                            <button onclick="makePrediction('up')" class="bg-green-500 hover:bg-green-600 text-white py-4 rounded-xl font-semibold transition flex items-center justify-center gap-2"><i class="fas fa-arrow-up"></i> UP</button>
                            <button onclick="makePrediction('down')" class="bg-red-500 hover:bg-red-600 text-white py-4 rounded-xl font-semibold transition flex items-center justify-center gap-2"><i class="fas fa-arrow-down"></i> DOWN</button>
                        </div>
                        <div>
                            <label class="block text-gray-700 text-sm font-medium mb-2">Bet Amount</label>
                            <input type="number" class="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-orange-300 focus:ring-2 focus:ring-orange-100 outline-none" placeholder="Enter amount">
                        </div>
                    </div>
                    <div class="bg-white rounded-xl p-6 shadow-sm">
                        <h3 class="text-lg font-semibold text-gray-800 mb-4">Active Predictions</h3>
                        <div class="space-y-3">
                            <div class="p-4 bg-green-50 border border-green-200 rounded-lg">
                                <div class="flex justify-between items-center">
                                    <span class="font-medium">BTC UP</span>
                                    <span class="text-green-600 font-semibold">$50</span>
                                </div>
                                <p class="text-sm text-gray-500 mt-1">Ends in 45:23</p>
                            </div>
                            <div class="p-4 bg-red-50 border border-red-200 rounded-lg">
                                <div class="flex justify-between items-center">
                                    <span class="font-medium">ETH DOWN</span>
                                    <span class="text-red-600 font-semibold">$25</span>
                                </div>
                                <p class="text-sm text-gray-500 mt-1">Ends in 32:10</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Sports Prediction Page -->
            <div id="sports" class="page">
                <h2 class="text-2xl font-bold text-gray-800 mb-6">Sports Prediction</h2>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div class="bg-white rounded-xl p-6 shadow-sm">
                        <div class="flex items-center gap-2 mb-4">
                            <i class="fas fa-futbol text-green-500"></i>
                            <span class="text-sm text-gray-500">Football</span>
                            <span class="ml-auto bg-red-100 text-red-600 text-xs px-2 py-1 rounded-full">LIVE</span>
                        </div>
                        <div class="flex items-center justify-between mb-4">
                            <div class="text-center">
                                <div class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-2 mx-auto">🦁</div>
                                <p class="font-medium text-sm">Chelsea</p>
                            </div>
                            <div class="text-center">
                                <p class="text-2xl font-bold">2 - 1</p>
                                <p class="text-xs text-gray-500">75'</p>
                            </div>
                            <div class="text-center">
                                <div class="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-2 mx-auto">😈</div>
                                <p class="font-medium text-sm">Man Utd</p>
                            </div>
                        </div>
                        <div class="grid grid-cols-3 gap-2">
                            <button class="bg-gray-100 hover:bg-orange-100 p-2 rounded text-sm font-medium transition">1 <span class="block text-orange-500">1.85</span></button>
                            <button class="bg-gray-100 hover:bg-orange-100 p-2 rounded text-sm font-medium transition">X <span class="block text-orange-500">3.40</span></button>
                            <button class="bg-gray-100 hover:bg-orange-100 p-2 rounded text-sm font-medium transition">2 <span class="block text-orange-500">4.20</span></button>
                        </div>
                    </div>
                    <div class="bg-white rounded-xl p-6 shadow-sm">
                        <div class="flex items-center gap-2 mb-4">
                            <i class="fas fa-basketball-ball text-orange-500"></i>
                            <span class="text-sm text-gray-500">Basketball</span>
                            <span class="ml-auto bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full">Today 20:00</span>
                        </div>
                        <div class="flex items-center justify-between mb-4">
                            <div class="text-center">
                                <div class="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mb-2 mx-auto">🏀</div>
                                <p class="font-medium text-sm">Lakers</p>
                            </div>
                            <div class="text-center">
                                <p class="text-xl font-bold text-gray-400">VS</p>
                            </div>
                            <div class="text-center">
                                <div class="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-2 mx-auto">☘️</div>
                                <p class="font-medium text-sm">Celtics</p>
                            </div>
                        </div>
                        <div class="grid grid-cols-2 gap-2">
                            <button class="bg-gray-100 hover:bg-orange-100 p-2 rounded text-sm font-medium transition">Lakers <span class="block text-orange-500">1.95</span></button>
                            <button class="bg-gray-100 hover:bg-orange-100 p-2 rounded text-sm font-medium transition">Celtics <span class="block text-orange-500">1.85</span></button>
                        </div>
                    </div>
                    <div class="bg-white rounded-xl p-6 shadow-sm">
                        <div class="flex items-center gap-2 mb-4">
                            <i class="fas fa-football-ball text-amber-700"></i>
                            <span class="text-sm text-gray-500">American Football</span>
                            <span class="ml-auto bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full">Sun 18:00</span>
                        </div>
                        <div class="flex items-center justify-between mb-4">
                            <div class="text-center">
                                <div class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-2 mx-auto">⭐</div>
                                <p class="font-medium text-sm">Cowboys</p>
                            </div>
                            <div class="text-center">
                                <p class="text-xl font-bold text-gray-400">VS</p>
                            </div>
                            <div class="text-center">
                                <div class="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-2 mx-auto">🦅</div>
                                <p class="font-medium text-sm">Eagles</p>
                            </div>
                        </div>
                        <div class="grid grid-cols-2 gap-2">
                            <button class="bg-gray-100 hover:bg-orange-100 p-2 rounded text-sm font-medium transition">Cowboys <span class="block text-orange-500">2.10</span></button>
                            <button class="bg-gray-100 hover:bg-orange-100 p-2 rounded text-sm font-medium transition">Eagles <span class="block text-orange-500">1.75</span></button>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Rocket Launch Page -->
            <div id="rocket" class="page">
                <h2 class="text-2xl font-bold text-gray-800 mb-6">Rocket Launch 🚀</h2>
                <div class="max-w-2xl mx-auto text-center">
                    <div class="bg-gradient-to-b from-indigo-900 to-indigo-700 rounded-2xl p-8 mb-6 min-h-64 relative overflow-hidden">
                        <div class="absolute inset-0 opacity-50">
                            <div class="absolute w-1 h-1 bg-white rounded-full top-10 left-20"></div>
                            <div class="absolute w-1 h-1 bg-white rounded-full top-20 left-40"></div>
                            <div class="absolute w-1 h-1 bg-white rounded-full top-5 right-30"></div>
                            <div class="absolute w-2 h-2 bg-white rounded-full top-30 right-20"></div>
                        </div>
                        <div id="rocket-ship" class="rocket text-6xl">🚀</div>
                        <div id="multiplier" class="text-4xl font-bold text-white mt-4">1.00x</div>
                    </div>
                    <div class="bg-white rounded-xl p-6 shadow-sm">
                        <div class="grid grid-cols-2 gap-4 mb-4">
                            <div>
                                <label class="block text-gray-700 text-sm font-medium mb-2">Bet Amount</label>
                                <input type="number" id="rocket-bet" class="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-orange-300 focus:ring-2 focus:ring-orange-100 outline-none" placeholder="10" value="10">
                            </div>
                            <div>
                                <label class="block text-gray-700 text-sm font-medium mb-2">Auto Cashout</label>
                                <input type="number" id="auto-cashout" class="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-orange-300 focus:ring-2 focus:ring-orange-100 outline-none" placeholder="2.00" step="0.1">
                            </div>
                        </div>
                        <button id="rocket-btn" onclick="launchRocket()" class="w-full btn-orange text-white py-3 rounded-lg font-semibold">Launch!</button>
                        <p class="text-gray-500 text-sm mt-4">Cash out before the rocket crashes to win!</p>
                    </div>
                </div>
            </div>

            <!-- Staking Pool Page -->
            <div id="staking" class="page">
                <h2 class="text-2xl font-bold text-gray-800 mb-6">Staking Prize Pool</h2>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div class="bg-white rounded-xl p-6 shadow-sm border-2 border-orange-200 glow">
                        <div class="flex items-center justify-between mb-4">
                            <span class="bg-orange-100 text-orange-600 text-xs font-semibold px-2 py-1 rounded-full">POPULAR</span>
                            <span class="text-2xl">🔥</span>
                        </div>
                        <h3 class="text-xl font-bold text-gray-800 mb-2">Bronze Pool</h3>
                        <p class="text-3xl font-bold text-orange-500 mb-4">12% <span class="text-sm text-gray-500">APY</span></p>
                        <ul class="space-y-2 mb-6 text-sm text-gray-600">
                            <li class="flex items-center gap-2"><i class="fas fa-check text-green-500"></i> Min: $100</li>
                            <li class="flex items-center gap-2"><i class="fas fa-check text-green-500"></i> Lock: 30 days</li>
                            <li class="flex items-center gap-2"><i class="fas fa-check text-green-500"></i> Daily rewards</li>
                        </ul>
                        <button class="w-full btn-orange text-white py-3 rounded-lg font-semibold">Stake Now</button>
                    </div>
                    <div class="bg-white rounded-xl p-6 shadow-sm">
                        <div class="flex items-center justify-between mb-4">
                            <span class="bg-gray-100 text-gray-600 text-xs font-semibold px-2 py-1 rounded-full">BEST VALUE</span>
                            <span class="text-2xl">⚡</span>
                        </div>
                        <h3 class="text-xl font-bold text-gray-800 mb-2">Silver Pool</h3>
                        <p class="text-3xl font-bold text-gray-400 mb-4">18% <span class="text-sm text-gray-500">APY</span></p>
                        <ul class="space-y-2 mb-6 text-sm text-gray-600">
                            <li class="flex items-center gap-2"><i class="fas fa-check text-green-500"></i> Min: $500</li>
                            <li class="flex items-center gap-2"><i class="fas fa-check text-green-500"></i> Lock: 60 days</li>
                            <li class="flex items-center gap-2"><i class="fas fa-check text-green-500"></i> Daily rewards</li>
                        </ul>
                        <button class="w-full btn-orange text-white py-3 rounded-lg font-semibold">Stake Now</button>
                    </div>
                    <div class="bg-white rounded-xl p-6 shadow-sm">
                        <div class="flex items-center justify-between mb-4">
                            <span class="bg-yellow-100 text-yellow-600 text-xs font-semibold px-2 py-1 rounded-full">PREMIUM</span>
                            <span class="text-2xl">👑</span>
                        </div>
                        <h3 class="text-xl font-bold text-gray-800 mb-2">Gold Pool</h3>
                        <p class="text-3xl font-bold text-yellow-500 mb-4">25% <span class="text-sm text-gray-500">APY</span></p>
                        <ul class="space-y-2 mb-6 text-sm text-gray-600">
                            <li class="flex items-center gap-2"><i class="fas fa-check text-green-500"></i> Min: $1,000</li>
                            <li class="flex items-center gap-2"><i class="fas fa-check text-green-500"></i> Lock: 90 days</li>
                            <li class="flex items-center gap-2"><i class="fas fa-check text-green-500"></i> Daily rewards</li>
                        </ul>
                        <button class="w-full btn-orange text-white py-3 rounded-lg font-semibold">Stake Now</button>
                    </div>
                </div>
                <div class="mt-8 bg-white rounded-xl p-6 shadow-sm">
                    <h3 class="text-lg font-semibold text-gray-800 mb-4">Your Active Stakes</h3>
                    <div class="overflow-x-auto">
                        <table class="w-full">
                            <thead class="bg-gray-50">
                                <tr>
                                    <th class="text-left p-4 text-gray-600 font-medium">Pool</th>
                                    <th class="text-left p-4 text-gray-600 font-medium">Amount</th>
                                    <th class="text-left p-4 text-gray-600 font-medium">Rewards</th>
                                    <th class="text-left p-4 text-gray-600 font-medium">Unlock Date</th>
                                    <th class="text-right p-4 text-gray-600 font-medium">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="border-b border-gray-50">
                                    <td class="p-4"><span class="font-medium">Bronze Pool</span></td>
                                    <td class="p-4">$500.00</td>
                                    <td class="p-4 text-green-500">+$12.50</td>
                                    <td class="p-4">Jan 15, 2025</td>
                                    <td class="p-4 text-right"><button class="text-orange-500 hover:text-orange-600">Claim</button></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <!-- Referrals Page -->
            <div id="referrals" class="page">
                <h2 class="text-2xl font-bold text-gray-800 mb-6">Referrals</h2>
                <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
                    <div class="bg-gradient-to-br from-orange-400 to-orange-300 rounded-xl p-6 text-white">
                        <p class="text-orange-100 mb-2">Total Earnings</p>
                        <p class="text-3xl font-bold">$567.89</p>
                    </div>
                    <div class="bg-white rounded-xl p-6 shadow-sm">
                        <p class="text-gray-500 mb-2">Total Referrals</p>
                        <p class="text-3xl font-bold text-gray-800">23</p>
                    </div>
                    <div class="bg-white rounded-xl p-6 shadow-sm">
                        <p class="text-gray-500 mb-2">Active This Month</p>
                        <p class="text-3xl font-bold text-gray-800">8</p>
                    </div>
                </div>
                <div class="bg-white rounded-xl p-6 shadow-sm mb-6">
                    <h3 class="text-lg font-semibold text-gray-800 mb-4">Your Referral Link</h3>
                    <div class="flex gap-2">
                        <input type="text" readonly value="https://xazarnet.club/ref/JOHN2024" class="flex-1 px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 text-gray-600">
                        <button onclick="copyReferral()" class="btn-orange text-white px-6 rounded-lg font-medium"><i class="fas fa-copy mr-2"></i>Copy</button>
                    </div>
                    <p class="text-sm text-gray-500 mt-3">Earn 10% of your referrals' trading fees!</p>
                </div>
                <div class="bg-white rounded-xl p-6 shadow-sm">
                    <h3 class="text-lg font-semibold text-gray-800 mb-4">Recent Referrals</h3>
                    <div class="space-y-3">
                        <div class="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                            <div class="flex items-center gap-3">
                                <div class="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center text-orange-500 font-semibold">A</div>
                                <div>
                                    <p class="font-medium">Alex M.</p>
                                    <p class="text-sm text-gray-500">Joined 2 days ago</p>
                                </div>
                            </div>
                            <span class="text-green-500 font-medium">+$15.00</span>
                        </div>
                        <div class="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                            <div class="flex items-center gap-3">
                                <div class="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-500 font-semibold">S</div>
                                <div>
                                    <p class="font-medium">Sarah K.</p>
                                    <p class="text-sm text-gray-500">Joined 5 days ago</p>
                                </div>
                            </div>
                            <span class="text-green-500 font-medium">+$23.50</span>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Reward Center Page -->
            <div id="rewards" class="page">
                <h2 class="text-2xl font-bold text-gray-800 mb-6">Reward Center</h2>
                <div class="bg-gradient-to-r from-orange-400 to-orange-300 rounded-xl p-6 mb-8 text-white">
                    <div class="flex items-center justify-between">
                        <div>
                            <p class="text-orange-100">Your Points</p>
                            <p class="text-4xl font-bold">12,450</p>
                        </div>
                        <div class="text-6xl">🎁</div>
                    </div>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    <div class="bg-white rounded-xl p-6 shadow-sm text-center card-hover transition">
                        <div class="text-4xl mb-4">📅</div>
                        <h3 class="font-semibold text-gray-800 mb-2">Daily Check-in</h3>
                        <p class="text-sm text-gray-500 mb-4">+50 points daily</p>
                        <button class="w-full btn-orange text-white py-2 rounded-lg font-medium">Claim</button>
                    </div>
                    <div class="bg-white rounded-xl p-6 shadow-sm text-center card-hover transition">
                        <div class="text-4xl mb-4">💰</div>
                        <h3 class="font-semibold text-gray-800 mb-2">First Trade</h3>
                        <p class="text-sm text-gray-500 mb-4">+500 points</p>
                        <button class="w-full bg-gray-200 text-gray-500 py-2 rounded-lg font-medium" disabled>Completed</button>
                    </div>
                    <div class="bg-white rounded-xl p-6 shadow-sm text-center card-hover transition">
                        <div class="text-4xl mb-4">👥</div>
                        <h3 class="font-semibold text-gray-800 mb-2">Invite Friends</h3>
                        <p class="text-sm text-gray-500 mb-4">+200 per friend</p>
                        <button class="w-full btn-orange text-white py-2 rounded-lg font-medium">Invite</button>
                    </div>
                    <div class="bg-white rounded-xl p-6 shadow-sm text-center card-hover transition">
                        <div class="text-4xl mb-4">🎮</div>
                        <h3 class="font-semibold text-gray-800 mb-2">Play Games</h3>
                        <p class="text-sm text-gray-500 mb-4">+10-100 points</p>
                        <button onclick="showPage('wheel')" class="w-full btn-orange text-white py-2 rounded-lg font-medium">Play</button>
                    </div>
                </div>
                <div class="bg-white rounded-xl p-6 shadow-sm">
                    <h3 class="text-lg font-semibold text-gray-800 mb-4">Redeem Rewards</h3>
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div class="border border-gray-200 rounded-xl p-4 text-center hover:border-orange-300 transition cursor-pointer">
                            <div class="text-3xl mb-2">💵</div>
                            <p class="font-medium">$10 Credit</p>
                            <p class="text-sm text-orange-500">5,000 pts</p>
                        </div>
                        <div class="border border-gray-200 rounded-xl p-4 text-center hover:border-orange-300 transition cursor-pointer">
                            <div class="text-3xl mb-2">🎟️</div>
                            <p class="font-medium">Free Spin</p>
                            <p class="text-sm text-orange-500">1,000 pts</p>
                        </div>
                        <div class="border border-gray-200 rounded-xl p-4 text-center hover:border-orange-300 transition cursor-pointer">
                            <div class="text-3xl mb-2">⭐</div>
                            <p class="font-medium">VIP Status</p>
                            <p class="text-sm text-orange-500">50,000 pts</p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Account Page -->
            <div id="account" class="page">
                <h2 class="text-2xl font-bold text-gray-800 mb-6">Account</h2>
                <div class="bg-white rounded-xl p-6 shadow-sm mb-6">
                    <div class="flex items-center gap-6 mb-6">
                        <div class="w-24 h-24 bg-gradient-to-br from-orange-300 to-orange-400 rounded-full flex items-center justify-center text-white text-3xl font-bold">JD</div>
                        <div>
                            <h3 class="text-xl font-bold text-gray-800">John Doe</h3>
                            <p class="text-gray-500">john.doe@email.com</p>
                            <span class="inline-block mt-2 bg-orange-100 text-orange-600 text-xs font-semibold px-3 py-1 rounded-full">Verified ✓</span>
                        </div>
                    </div>
                    <button class="btn-orange text-white px-6 py-2 rounded-lg font-medium">Change Avatar</button>
                </div>
                <div class="bg-white rounded-xl p-6 shadow-sm">
                    <h3 class="text-lg font-semibold text-gray-800 mb-4">Personal Information</h3>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label class="block text-gray-700 text-sm font-medium mb-2">First Name</label>
                            <input type="text" value="John" class="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-orange-300 focus:ring-2 focus:ring-orange-100 outline-none">
                        </div>
                        <div>
                            <label class="block text-gray-700 text-sm font-medium mb-2">Last Name</label>
                            <input type="text" value="Doe" class="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-orange-300 focus:ring-2 focus:ring-orange-100 outline-none">
                        </div>
                        <div>
                            <label class="block text-gray-700 text-sm font-medium mb-2">Email</label>
                            <input type="email" value="john.doe@email.com" class="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-orange-300 focus:ring-2 focus:ring-orange-100 outline-none">
                        </div>
                        <div>
                            <label class="block text-gray-700 text-sm font-medium mb-2">Phone</label>
                            <input type="tel" value="+1 234 567 890" class="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-orange-300 focus:ring-2 focus:ring-orange-100 outline-none">
                        </div>
                    </div>
                    <button class="mt-6 btn-orange text-white px-6 py-3 rounded-lg font-semibold">Save Changes</button>
                </div>
            </div>

            <!-- Settings Page -->
            <div id="settings" class="page">
                <h2 class="text-2xl font-bold text-gray-800 mb-6">Settings</h2>
                <div class="space-y-6">
                    <div class="bg-white rounded-xl p-6 shadow-sm">
                        <h3 class="text-lg font-semibold text-gray-800 mb-4">Preferences</h3>
                        <div class="space-y-4">
                            <div class="flex items-center justify-between">
                                <div>
                                    <p class="font-medium text-gray-800">Email Notifications</p>
                                    <p class="text-sm text-gray-500">Receive email updates about your account</p>
                                </div>
                                <label class="relative inline-flex items-center cursor-pointer">
                                    <input type="checkbox" checked class="sr-only peer">
                                    <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-orange-400"></div>
                                </label>
                            </div>
                            <div class="flex items-center justify-between">
                                <div>
                                    <p class="font-medium text-gray-800">Push Notifications</p>
                                    <p class="text-sm text-gray-500">Receive push notifications on your device</p>
                                </div>
                                <label class="relative inline-flex items-center cursor-pointer">
                                    <input type="checkbox" class="sr-only peer">
                                    <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-orange-400"></div>
                                </label>
                            </div>
                            <div class="flex items-center justify-between">
                                <div>
                                    <p class="font-medium text-gray-800">Price Alerts</p>
                                    <p class="text-sm text-gray-500">Get notified about price changes</p>
                                </div>
                                <label class="relative inline-flex items-center cursor-pointer">
                                    <input type="checkbox" checked class="sr-only peer">
                                    <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-orange-400"></div>
                                </label>
                            </div>
                        </div>
                    </div>
                    <div class="bg-white rounded-xl p-6 shadow-sm">
                        <h3 class="text-lg font-semibold text-gray-800 mb-4">Display</h3>
                        <div class="space-y-4">
                            <div>
                                <label class="block text-gray-700 text-sm font-medium mb-2">Currency</label>
                                <select class="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-orange-300 focus:ring-2 focus:ring-orange-100 outline-none">
                                    <option>USD - US Dollar</option>
                                    <option>EUR - Euro</option>
                                    <option>GBP - British Pound</option>
                                </select>
                            </div>
                            <div>
                                <label class="block text-gray-700 text-sm font-medium mb-2">Language</label>
                                <select class="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-orange-300 focus:ring-2 focus:ring-orange-100 outline-none">
                                    <option>English</option>
                                    <option>Spanish</option>
                                    <option>French</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Security Page -->
            <div id="security" class="page">
                <h2 class="text-2xl font-bold text-gray-800 mb-6">Security</h2>
                <div class="space-y-6">
                    <div class="bg-white rounded-xl p-6 shadow-sm">
                        <h3 class="text-lg font-semibold text-gray-800 mb-4">Two-Factor Authentication</h3>
                        <div class="flex items-center justify-between mb-4">
                            <div class="flex items-center gap-3">
                                <div class="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                                    <i class="fas fa-shield-alt text-green-500 text-xl"></i>
                                </div>
                                <div>
                                    <p class="font-medium text-gray-800">2FA is Enabled</p>
                                    <p class="text-sm text-gray-500">Your account is protected</p>
                                </div>
                            </div>
                            <button class="text-orange-500 hover:text-orange-600 font-medium">Manage</button>
                        </div>
                    </div>
                    <div class="bg-white rounded-xl p-6 shadow-sm">
                        <h3 class="text-lg font-semibold text-gray-800 mb-4">Change Password</h3>
                        <div class="space-y-4">
                            <div>
                                <label class="block text-gray-700 text-sm font-medium mb-2">Current Password</label>
                                <input type="password" class="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-orange-300 focus:ring-2 focus:ring-orange-100 outline-none" placeholder="••••••••">
                            </div>
                            <div>
                                <label class="block text-gray-700 text-sm font-medium mb-2">New Password</label>
                                <input type="password" class="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-orange-300 focus:ring-2 focus:ring-orange-100 outline-none" placeholder="••••••••">
                            </div>
                            <div>
                                <label class="block text-gray-700 text-sm font-medium mb-2">Confirm New Password</label>
                                <input type="password" class="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-orange-300 focus:ring-2 focus:ring-orange-100 outline-none" placeholder="••••••••">
                            </div>
                            <button class="btn-orange text-white px-6 py-3 rounded-lg font-semibold">Update Password</button>
                        </div>
                    </div>
                    <div class="bg-white rounded-xl p-6 shadow-sm">
                        <h3 class="text-lg font-semibold text-gray-800 mb-4">Login History</h3>
                        <div class="space-y-3">
                            <div class="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                                <div>
                                    <p class="font-medium text-gray-800">Chrome on Windows</p>
                                    <p class="text-sm text-gray-500">New York, USA</p>
                                </div>
                                <span class="text-sm text-gray-500">2 hours ago</span>
                            </div>
                            <div class="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                                <div>
                                    <p class="font-medium text-gray-800">Safari on iPhone</p>
                                    <p class="text-sm text-gray-500">New York, USA</p>
                                </div>
                                <span class="text-sm text-gray-500">1 day ago</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Support Page -->
            <div id="support" class="page">
                <h2 class="text-2xl font-bold text-gray-800 mb-6">Support</h2>
                <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
                    <div class="bg-white rounded-xl p-6 shadow-sm text-center card-hover transition">
                        <div class="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <i class="fas fa-comments text-orange-500 text-2xl"></i>
                        </div>
                        <h3 class="font-semibold text-gray-800 mb-2">Live Chat</h3>
                        <p class="text-sm text-gray-500 mb-4">Chat with our support team</p>
                        <button class="btn-orange text-white px-6 py-2 rounded-lg font-medium">Start Chat</button>
                    </div>
                    <div class="bg-white rounded-xl p-6 shadow-sm text-center card-hover transition">
                        <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <i class="fas fa-envelope text-blue-500 text-2xl"></i>
                        </div>
                        <h3 class="font-semibold text-gray-800 mb-2">Email Support</h3>
                        <p class="text-sm text-gray-500 mb-4">support@xazarnet.club</p>
                        <button class="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg font-medium transition">Send Email</button>
                    </div>
                    <div class="bg-white rounded-xl p-6 shadow-sm text-center card-hover transition">
                        <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <i class="fas fa-book text-green-500 text-2xl"></i>
                        </div>
                        <h3 class="font-semibold text-gray-800 mb-2">Help Center</h3>
                        <p class="text-sm text-gray-500 mb-4">Browse FAQs and guides</p>
                        <button class="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg font-medium transition">View Docs</button>
                    </div>
                </div>
                <div class="bg-white rounded-xl p-6 shadow-sm">
                    <h3 class="text-lg font-semibold text-gray-800 mb-4">Submit a Ticket</h3>
                    <form class="space-y-4">
                        <div>
                            <label class="block text-gray-700 text-sm font-medium mb-2">Subject</label>
                            <input type="text" class="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-orange-300 focus:ring-2 focus:ring-orange-100 outline-none" placeholder="What do you need help with?">
                        </div>
                        <div>
                            <label class="block text-gray-700 text-sm font-medium mb-2">Category</label>
                            <select class="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-orange-300 focus:ring-2 focus:ring-orange-100 outline-none">
                                <option>Account Issues</option>
                                <option>Trading</option>
                                <option>Deposits/Withdrawals</option>
                                <option>Technical Issues</option>
                                <option>Other</option>
                            </select>
                        </div>
                        <div>
                            <label class="block text-gray-700 text-sm font-medium mb-2">Message</label>
                            <textarea rows="4" class="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-orange-300 focus:ring-2 focus:ring-orange-100 outline-none resize-none" placeholder="Describe your issue..."></textarea>
                        </div>
                        <button type="submit" class="btn-orange text-white px-6 py-3 rounded-lg font-semibold">Submit Ticket</button>
                    </form>
                </div>
            </div>

            <!-- Privacy Policy Page -->
            <div id="privacy" class="page">
                <h2 class="text-2xl font-bold text-gray-800 mb-6">Privacy Policy</h2>
                <div class="bg-white rounded-xl p-8 shadow-sm prose max-w-none">
                    <p class="text-gray-500 mb-4">Last updated: January 1, 2025</p>
                    <h3 class="text-lg font-semibold text-gray-800 mt-6 mb-3">1. Information We Collect</h3>
                    <p class="text-gray-600 mb-4">We collect information you provide directly to us, including your name, email address, phone number, and payment information when you create an account, make transactions, or contact us for support.</p>
                    <h3 class="text-lg font-semibold text-gray-800 mt-6 mb-3">2. How We Use Your Information</h3>
                    <p class="text-gray-600 mb-4">We use the information we collect to provide, maintain, and improve our services, process transactions, send you technical notices and support messages, and respond to your comments and questions.</p>
                    <h3 class="text-lg font-semibold text-gray-800 mt-6 mb-3">3. Information Sharing</h3>
                    <p class="text-gray-600 mb-4">We do not share your personal information with third parties except as described in this policy. We may share information with vendors, consultants, and other service providers who need access to such information to carry out work on our behalf.</p>
                    <h3 class="text-lg font-semibold text-gray-800 mt-6 mb-3">4. Security</h3>
                    <p class="text-gray-600 mb-4">We take reasonable measures to help protect your personal information from loss, theft, misuse, unauthorized access, disclosure, alteration, and destruction.</p>
                    <h3 class="text-lg font-semibold text-gray-800 mt-6 mb-3">5. Contact Us</h3>
                    <p class="text-gray-600">If you have any questions about this Privacy Policy, please contact us at privacy@xazarnet.club.</p>
                </div>
            </div>

            <!-- Terms of Service Page -->
            <div id="terms" class="page">
                <h2 class="text-2xl font-bold text-gray-800 mb-6">Terms of Service</h2>
                <div class="bg-white rounded-xl p-8 shadow-sm prose max-w-none">
                    <p class="text-gray-500 mb-4">Last updated: January 1, 2025</p>
                    <h3 class="text-lg font-semibold text-gray-800 mt-6 mb-3">1. Acceptance of Terms</h3>
                    <p class="text-gray-600 mb-4">By accessing or using XAZARNET, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using this service.</p>
                    <h3 class="text-lg font-semibold text-gray-800 mt-6 mb-3">2. Use License</h3>
                    <p class="text-gray-600 mb-4">Permission is granted to temporarily use XAZARNET for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title.</p>
                    <h3 class="text-lg font-semibold text-gray-800 mt-6 mb-3">3. Account Responsibilities</h3>
                    <p class="text-gray-600 mb-4">You are responsible for maintaining the confidentiality of your account and password. You agree to accept responsibility for all activities that occur under your account.</p>
                    <h3 class="text-lg font-semibold text-gray-800 mt-6 mb-3">4. Risk Disclosure</h3>
                    <p class="text-gray-600 mb-4">Cryptocurrency trading involves substantial risk of loss and is not suitable for every investor. You should carefully consider whether trading is suitable for you in light of your circumstances, knowledge, and financial resources.</p>
                    <h3 class="text-lg font-semibold text-gray-800 mt-6 mb-3">5. Limitation of Liability</h3>
                    <p class="text-gray-600">In no event shall XAZARNET be liable for any damages arising out of the use or inability to use our services.</p>
                </div>
            </div>
        </main>
    </div>

    <script>
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
            event.target.closest('.sidebar-item')?.classList.add('active');
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
        const lotteryContainer = document.getElementById('lottery-numbers');
        let selectedNumbers = [];
        for (let i = 1; i <= 49; i++) {
            const btn = document.createElement('button');
            btn.className = 'w-10 h-10 rounded-full border-2 border-gray-200 hover:border-orange-400 font-medium text-sm transition';
            btn.textContent = i;
            btn.onclick = () => selectNumber(btn, i);
            lotteryContainer?.appendChild(btn);
        }

        function selectNumber(btn, num) {
            if (selectedNumbers.includes(num)) {
                selectedNumbers = selectedNumbers.filter(n => n !== num);
                btn.className = 'w-10 h-10 rounded-full border-2 border-gray-200 hover:border-orange-400 font-medium text-sm transition';
            } else if (selectedNumbers.length < 6) {
                selectedNumbers.push(num);
                btn.className = 'w-10 h-10 rounded-full border-2 border-orange-400 bg-orange-400 text-white font-medium text-sm transition';
            }
            document.getElementById('selected-numbers').textContent = selectedNumbers.length > 0 ? selectedNumbers.sort((a,b) => a-b).join(', ') : 'None';
        }

        function quickPick() {
            selectedNumbers = [];
            document.querySelectorAll('#lottery-numbers button').forEach(btn => {
                btn.className = 'w-10 h-10 rounded-full border-2 border-gray-200 hover:border-orange-400 font-medium text-sm transition';
            });
            while (selectedNumbers.length < 6) {
                const num = Math.floor(Math.random() * 49) + 1;
                if (!selectedNumbers.includes(num)) {
                    selectedNumbers.push(num);
                    document.querySelectorAll('#lottery-numbers button')[num-1].className = 'w-10 h-10 rounded-full border-2 border-orange-400 bg-orange-400 text-white font-medium text-sm transition';
                }
            }
            document.getElementById('selected-numbers').textContent = selectedNumbers.sort((a,b) => a-b).join(', ');
        }

        function buyTicket() {
            if (selectedNumbers.length === 6) {
                alert('Ticket purchased! Numbers: ' + selectedNumbers.sort((a,b) => a-b).join(', '));
            } else {
                alert('Please select 6 numbers');
            }
        }

        // Crypto prediction
        function makePrediction(direction) {
            alert(`Prediction placed: BTC will go ${direction.toUpperCase()}`);
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
            btn.textContent = 'Cash Out!';
            btn.classList.remove('btn-orange');
            btn.classList.add('bg-green-500', 'hover:bg-green-600');
            
            rocketInterval = setInterval(() => {
                multiplier += 0.01;
                document.getElementById('multiplier').textContent = multiplier.toFixed(2) + 'x';
                if (Math.random() < 0.02) {
                    crash();
                }
            }, 100);
        }

        function cashOut() {
            clearInterval(rocketInterval);
            const bet = parseFloat(document.getElementById('rocket-bet').value) || 10;
            alert(`You cashed out at ${multiplier.toFixed(2)}x! Won $${(bet * multiplier).toFixed(2)}`);
            resetRocket();
        }

        function crash() {
            clearInterval(rocketInterval);
            const rocket = document.getElementById('rocket-ship');
            rocket.classList.add('launching');
            document.getElementById('multiplier').textContent = '💥 CRASHED!';
            setTimeout(() => {
                rocket.classList.remove('launching');
                resetRocket();
            }, 2000);
        }

        function resetRocket() {
            isLaunched = false;
            multiplier = 1.00;
            document.getElementById('multiplier').textContent = '1.00x';
            const btn = document.getElementById('rocket-btn');
            btn.textContent = 'Launch!';
            btn.classList.add('btn-orange');
            btn.classList.remove('bg-green-500', 'hover:bg-green-600');
        }

        // Copy referral link
        function copyReferral() {
            navigator.clipboard.writeText('https://xazarnet.club/ref/JOHN2024');
            alert('Referral link copied!');
        }
    </script>
</body>
		</div>
	);
}
