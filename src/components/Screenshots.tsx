import {
  Bell, Star, Check, RefreshCw, Briefcase, MapPin, Clock, Moon,
  User, Phone, Navigation, X, Play, Calendar, Home,
  ChevronRight, Compass, Info
} from 'lucide-react';

function ScreenHome() {
  return (
    <div className="bg-[#FAF9F6] h-full w-full flex flex-col font-sans relative overflow-hidden select-none">
      {/* Top Header */}
      <div className="px-3 pt-2 pb-1.5 flex items-center justify-between border-b border-gray-100 bg-white">
        <span className="text-[12px] font-bold text-gray-900 tracking-tight">Shramico</span>
        <div className="relative">
          <Bell className="w-3.5 h-3.5 text-gray-700" />
          <span className="absolute top-0 right-0 w-1.5 h-1.5 bg-red-500 rounded-full border border-white" />
        </div>
      </div>

      {/* Content Area */}
      <div className="flex-1 overflow-hidden px-3 pt-2.5 pb-1 space-y-3">
        {/* Worker Card */}
        <div className="bg-white rounded-2xl p-2.5 border border-gray-100/80 shadow-[0_2px_8px_rgba(0,0,0,0.03)]">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-[#FDF2F4] text-[#800020] text-[11px] font-extrabold flex items-center justify-center border border-pink-100/50">
              T
            </div>
            <div>
              <h4 className="text-[10px] font-bold text-gray-800 leading-none">Hi Test Worker</h4>
              <p className="text-[7.5px] text-gray-400 font-semibold mt-1">Mason • Pune</p>
            </div>
          </div>

          <div className="flex items-center justify-between mt-2.5 pt-2 border-t border-gray-50">
            <div className="flex items-center gap-0.5">
              <Star className="w-2.5 h-2.5 text-yellow-500 fill-yellow-500" />
              <span className="text-[8px] font-bold text-gray-700">5.0</span>
            </div>
            <div className="flex items-center gap-0.5">
              <div className="relative w-3 h-3">
                <Check className="absolute left-0 top-0 w-2.5 h-2.5 text-green-600 stroke-[3px]" />
                <Check className="absolute left-1 top-0 w-2.5 h-2.5 text-green-600 stroke-[3px]" />
              </div>
              <span className="text-[8px] font-bold text-gray-700">5</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="bg-[#EAF5EC] text-[#1E8A44] px-1.5 py-0.5 rounded flex items-center gap-0.5 text-[7px] font-bold">
                <span className="w-1 h-1 rounded-full bg-[#1E8A44]" />
                <span>Online</span>
              </div>
              {/* Toggle switch active */}
              <div className="w-6 h-3.5 bg-burgundy rounded-full p-[1.5px] flex items-center justify-end">
                <div className="w-2.5 h-2.5 rounded-full bg-white shadow-sm" />
              </div>
            </div>
          </div>
        </div>

        {/* Nearby jobs heading */}
        <div className="flex items-center justify-between pt-1">
          <div>
            <h3 className="text-[11px] font-extrabold text-gray-900 leading-tight">Nearby jobs</h3>
            <p className="text-[7.5px] text-gray-400 font-medium mt-0.5">Fresh jobs matched near your location</p>
          </div>
          <button className="w-5 h-5 rounded-full bg-burgundy flex items-center justify-center text-white shadow-sm hover:scale-105 active:scale-95 transition-all">
            <RefreshCw className="w-2.5 h-2.5" />
          </button>
        </div>

        {/* Illustration & empty state */}
        <div className="flex flex-col items-center justify-center pt-2 pb-2 text-center">
          {/* Custom SVG worker illustration carrying a box */}
          <svg viewBox="0 0 100 100" className="w-18 h-18">
            <path d="M 25 50 Q 15 25 50 20 Q 85 15 80 50 Q 75 80 50 75 Q 25 70 25 50 Z" fill="#FDF0EC" />
            <path d="M 52 23 C 48 23 44 26 44 30 C 44 31.5 46 33 50 33 C 54 33 56 30 56 28 C 56 25 54 23 52 23 Z" fill="#D95D39" />
            <path d="M 40 31 L 49 29 L 50 31 L 41 33 Z" fill="#783F27" />
            <path d="M 50 28 C 54 28 57 32 55 35 C 53 38 51 36 51 34 Z" fill="#D95D39" />
            <circle cx="49" cy="30" r="4.5" fill="#FCE4D6" />
            <path d="M 44 38 L 52 38 C 53.5 44 54 48 54 52 L 42 52 C 42 48 42.5 44 44 38 Z" fill="#783F27" />
            <path d="M 43 52 L 53 52 L 54 75 L 49 75 L 48 61 L 47 75 L 42 75 Z" fill="#FFFFFF" stroke="#783F27" strokeWidth="0.75" />
            <ellipse cx="44.5" cy="75.5" rx="3.5" ry="1.5" fill="#783F27" />
            <ellipse cx="51.5" cy="75.5" rx="3.5" ry="1.5" fill="#783F27" />
            <path d="M 45 41 L 39 46 L 46 48" fill="none" stroke="#FCE4D6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M 51 41 L 54 46 L 48 48" fill="none" stroke="#FCE4D6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M 33 44 L 47 41 L 49 51 L 35 54 Z" fill="#E5A67C" stroke="#783F27" strokeWidth="0.75" />
            <path d="M 33 44 L 40 45.5 L 38 55.5 L 31 54 Z" fill="#D49469" stroke="#783F27" strokeWidth="0.75" />
            <line x1="40" y1="42.5" x2="40" y2="52.5" stroke="#783F27" strokeWidth="0.5" />
          </svg>

          <h5 className="text-[10px] font-extrabold text-gray-800 mt-1">No jobs found</h5>
          <p className="text-[7.5px] text-gray-400 font-semibold px-4 mt-0.5 leading-normal">
            Pull down to refresh nearby opportunities.
          </p>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="h-10 border-t border-gray-100 bg-white flex items-center justify-around pb-0.5">
        <div className="flex flex-col items-center text-burgundy font-bold text-[7.5px] relative pt-1">
          <Home className="w-3.5 h-3.5 text-burgundy" />
          <span className="mt-0.5">Home</span>
          <span className="absolute bottom-[-2px] w-4 h-0.5 bg-burgundy rounded-full" />
        </div>
        <div className="flex flex-col items-center text-gray-400 text-[7.5px] pt-1">
          <Compass className="w-3.5 h-3.5" />
          <span className="mt-0.5">Explore</span>
        </div>
        <div className="flex flex-col items-center text-gray-400 text-[7.5px] pt-1">
          <Clock className="w-3.5 h-3.5" />
          <span className="mt-0.5">My bookings</span>
        </div>
        <div className="flex flex-col items-center text-gray-400 text-[7.5px] pt-1">
          <User className="w-3.5 h-3.5" />
          <span className="mt-0.5">Profile</span>
        </div>
      </div>
    </div>
  );
}

function ScreenJobOffer() {
  return (
    <div className="h-full w-full flex flex-col font-sans relative overflow-hidden select-none bg-gray-50">
      {/* Background content (mocked behind the overlay) */}
      <div className="absolute inset-0 flex flex-col blur-[1.5px] opacity-40 pointer-events-none">
        <div className="px-3 pt-2 pb-1.5 flex items-center justify-between bg-white border-b">
          <span className="text-[12px] font-bold text-gray-400">Shramico</span>
          <Bell className="w-3.5 h-3.5 text-gray-300" />
        </div>
        <div className="p-3 space-y-3">
          <div className="bg-white border rounded-xl p-2.5 space-y-1">
            <div className="w-6 h-6 rounded-full bg-gray-200" />
            <div className="h-3 w-16 bg-gray-200 rounded" />
            <div className="h-2.5 w-24 bg-gray-100 rounded" />
          </div>
          <div className="h-3 w-20 bg-gray-300 rounded" />
          <div className="border rounded-xl p-3 bg-white space-y-2">
            <div className="h-3.5 w-16 bg-gray-200 rounded" />
            <div className="h-3 w-12 bg-gray-100 rounded" />
          </div>
        </div>
      </div>

      {/* Dark overlay backdrop */}
      <div className="absolute inset-0 bg-black/40 z-10" />

      {/* Popup Container */}
      <div className="relative z-20 mx-2 my-auto bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100/50 flex flex-col">
        {/* Popup Header */}
        <div className="bg-burgundy px-2.5 py-2 flex items-center justify-between text-white">
          <div className="flex items-center gap-1.5">
            <div className="w-6 h-6 rounded-lg bg-white/20 flex items-center justify-center">
              <Briefcase className="w-3.5 h-3.5 text-white" />
            </div>
            <div>
              <p className="text-[6px] text-white/70 font-bold uppercase tracking-wider leading-none">Nearby Job Found</p>
              <p className="text-[11px] font-bold text-white mt-0.5 leading-none">Mason</p>
            </div>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="bg-white/20 rounded-full px-1.5 py-0.5 text-white text-[6.5px] font-bold flex items-center gap-0.5">
              <Navigation className="w-2.5 h-2.5 fill-white rotate-45" />
              <span>1.7 km</span>
            </div>
            <X className="w-3 h-3 text-white/80 cursor-pointer hover:text-white" />
          </div>
        </div>

        {/* Popup Body */}
        <div className="p-2.5 space-y-2.5">
          <p className="text-[9.5px] font-bold text-gray-800">Need a worker</p>

          {/* Grid of tags */}
          <div className="grid grid-cols-2 gap-1.5">
            <div className="bg-[#EAF5EC] text-[#1E8A44] border border-[#D5EEDD] rounded px-1.5 py-1 text-[7px] font-bold flex items-center gap-1">
              <span className="text-[8px]">💵</span>
              <span className="truncate">Mason • ₹800</span>
            </div>
            <div className="bg-[#F5EDEA] text-[#A63A50] border border-[#EEDAD5] rounded px-1.5 py-1 text-[7px] font-bold flex items-center gap-1">
              <span className="text-[8px]">👥</span>
              <span className="truncate">1 Worker needed</span>
            </div>
            <div className="bg-[#F5F5F5] text-gray-600 border border-gray-200 rounded px-1.5 py-1 text-[7px] font-bold flex items-center gap-1">
              <Clock className="w-2.5 h-2.5 text-gray-500" />
              <span className="truncate">FULL DAY</span>
            </div>
            <div className="bg-[#FFF6E6] text-[#D97706] border border-[#FFE7BD] rounded px-1.5 py-1 text-[7px] font-bold flex items-center gap-1">
              <Moon className="w-2.5 h-2.5 text-[#D97706]" />
              <span className="truncate">Night shift</span>
            </div>
            <div className="bg-[#F5F5F5] text-gray-600 border border-gray-200 rounded px-1.5 py-1 text-[7px] font-bold flex items-center gap-1">
              <MapPin className="w-2.5 h-2.5 text-gray-500" />
              <span className="truncate">Pune</span>
            </div>
            <div className="bg-[#F5F5F5] text-gray-600 border border-gray-200 rounded px-1.5 py-1 text-[7px] font-bold flex items-center gap-1">
              <User className="w-2.5 h-2.5 text-gray-500" />
              <span className="truncate">Test Hirer</span>
            </div>
          </div>

          {/* Attached Box */}
          <div className="border border-burgundy/10 rounded-xl p-1.5 bg-[#FAF5F6] flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <div className="w-6 h-6 rounded bg-burgundy flex items-center justify-center text-white text-[7px] font-black">
                S
              </div>
              <span className="text-[7.5px] text-gray-600 font-bold">1 photo attached</span>
            </div>
            <button className="bg-burgundy text-white text-[7px] font-bold px-2 py-1 rounded flex items-center gap-0.5 hover:bg-burgundy-dark transition-colors">
              <Play className="w-2 h-2 text-white fill-white" />
              <span>Voice</span>
            </button>
          </div>

          {/* Accept / Reject Buttons */}
          <div className="flex gap-2 pt-0.5">
            <button className="flex-1 border border-red-200 text-red-500 text-[8px] font-bold py-1.5 rounded-lg text-center bg-white hover:bg-red-50/20 active:scale-95 transition-all">
              Reject
            </button>
            <button className="flex-1 bg-burgundy text-white text-[8px] font-bold py-1.5 rounded-lg text-center hover:bg-burgundy-dark active:scale-95 transition-all">
              Accept
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function ScreenMyJobs() {
  return (
    <div className="bg-[#FAF9F6] h-full w-full flex flex-col font-sans relative overflow-hidden select-none">
      {/* Header */}
      <div className="px-3 pt-2 pb-1.5 flex items-center justify-between border-b border-gray-100 bg-white">
        <span className="text-[12px] font-bold text-gray-900 tracking-tight">My Jobs</span>
        <button className="hover:scale-105 active:scale-95 transition-transform">
          <RefreshCw className="w-3.5 h-3.5 text-gray-700" />
        </button>
      </div>

      {/* Tabs */}
      <div className="flex border border-gray-100 rounded-full p-[2px] mx-3 mt-2.5 bg-white shadow-sm">
        <div className="flex-1 text-center bg-[#FDF2F4] text-burgundy text-[7px] font-bold py-1 rounded-full border border-burgundy/10">
          Current Jobs
        </div>
        <div className="flex-1 text-center text-gray-400 text-[7px] font-semibold py-1">
          Instant Hire
        </div>
        <div className="flex-1 text-center text-gray-400 text-[7px] font-semibold py-1">
          Completed
        </div>
      </div>

      {/* Card Content */}
      <div className="flex-1 overflow-hidden px-3 pt-2.5 pb-1">
        <div className="border border-gray-100/80 rounded-2xl p-2.5 bg-white shadow-sm space-y-2 flex flex-col">
          {/* Card Header */}
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-[#EAF5EC] text-[#1E8A44] flex items-center justify-center">
              <Briefcase className="w-3.5 h-3.5 text-[#1E8A44]" />
            </div>
            <div>
              <h4 className="text-[10px] font-bold text-gray-800 leading-tight">Mason</h4>
              <p className="text-[7px] text-gray-400 font-medium">Instant Job</p>
            </div>
            <div className="bg-[#EAF5EC] text-[#1E8A44] text-[7px] font-bold px-1.5 py-0.5 rounded ml-auto">
              active
            </div>
          </div>

          {/* Card Details */}
          <div className="space-y-1">
            <div className="text-[9.5px] font-bold text-gray-700">₹ 800</div>
            <div className="flex items-center gap-1 text-[8px] text-burgundy font-bold">
              <Moon className="w-2.5 h-2.5 text-burgundy" />
              <span>Night Shift</span>
            </div>
            <div className="flex items-center gap-1 text-[8px] text-gray-500 font-semibold">
              <MapPin className="w-2.5 h-2.5 text-gray-400" />
              <span>Pune</span>
            </div>
          </div>

          {/* Logo Attached */}
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded bg-burgundy flex items-center justify-center text-white text-[7.5px] font-black">
              S
            </div>
            <button className="border border-gray-200 text-gray-700 rounded-lg py-1 px-2.5 text-[7px] font-bold inline-flex items-center gap-1 bg-white hover:bg-gray-50 shadow-sm">
              <Play className="w-2 h-2 text-gray-700 fill-gray-700" />
              <span>Play Voice</span>
            </button>
          </div>

          {/* Action Buttons Stack */}
          <div className="space-y-1.5 pt-1.5 border-t border-gray-50">
            <button className="w-full bg-[#1e8a44] text-white text-[8px] font-bold py-1.5 rounded-lg text-center hover:bg-green-700 transition-colors shadow-sm">
              Start Work
            </button>
            <div className="flex gap-2">
              <button className="flex-1 bg-burgundy text-white text-[8px] font-bold py-1.5 rounded-lg flex items-center justify-center gap-1 hover:bg-burgundy-dark transition-colors shadow-sm">
                <Navigation className="w-2 h-2 fill-white rotate-45" />
                <span>Navigate</span>
              </button>
              <button className="flex-1 border border-gray-200 text-gray-700 text-[8px] font-bold py-1.5 rounded-lg flex items-center justify-center gap-1 bg-white hover:bg-gray-50 transition-colors shadow-sm">
                <Phone className="w-2.5 h-2.5 text-gray-500" />
                <span>Call</span>
              </button>
            </div>
            <button className="w-full border border-gray-150 text-red-500 text-[8px] font-bold py-1.5 rounded-lg flex items-center justify-center gap-1 bg-white hover:bg-red-50/10 transition-colors">
              <X className="w-2.5 h-2.5 text-red-500" />
              <span>Cancel job</span>
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="h-10 border-t border-gray-100 bg-white flex items-center justify-around pb-0.5">
        <div className="flex flex-col items-center text-gray-400 text-[7.5px] pt-1">
          <Home className="w-3.5 h-3.5" />
          <span className="mt-0.5">Home</span>
        </div>
        <div className="flex flex-col items-center text-gray-400 text-[7.5px] pt-1">
          <Compass className="w-3.5 h-3.5" />
          <span className="mt-0.5">Explore</span>
        </div>
        <div className="flex flex-col items-center text-burgundy font-bold text-[7.5px] relative pt-1">
          <Clock className="w-3.5 h-3.5 text-burgundy" />
          <span className="mt-0.5">My bookings</span>
          <span className="absolute bottom-[-2px] w-4 h-0.5 bg-burgundy rounded-full" />
        </div>
        <div className="flex flex-col items-center text-gray-400 text-[7.5px] pt-1">
          <User className="w-3.5 h-3.5" />
          <span className="mt-0.5">Profile</span>
        </div>
      </div>
    </div>
  );
}

function ScreenChooseRole() {
  return (
    <div className="bg-white h-full w-full flex flex-col font-sans relative overflow-hidden select-none">
      {/* Header */}
      <div className="px-3 pt-2.5 pb-1 flex items-center gap-2">
        <div className="w-7 h-7 rounded-lg bg-red-50 text-[#800020] flex items-center justify-center border border-pink-100/50">
          <User className="w-3.5 h-3.5 text-burgundy" />
        </div>
        <div>
          <h4 className="text-[10px] font-bold text-gray-900 leading-none">Choose your role</h4>
          <p className="text-[7px] text-burgundy font-bold mt-1">Step 1 of setup</p>
        </div>
      </div>

      {/* Main Container */}
      <div className="flex-1 flex flex-col px-3 pt-4 pb-2">
        <h3 className="text-[13px] font-extrabold text-gray-900 leading-tight">
          How do you want to use Shramico?
        </h3>

        {/* Option 1: I Want to Hire */}
        <div className="mt-4 border border-[#800020] rounded-2xl p-2.5 bg-[#FDF2F4]/40 flex items-center gap-3 relative shadow-sm">
          {/* Businessman SVG Avatar */}
          <svg viewBox="0 0 60 60" className="w-10 h-10 rounded-xl bg-[#F0F4FF] border border-blue-100 flex-shrink-0">
            <circle cx="30" cy="20" r="10" fill="#FCE4D6" />
            <path d="M30 10 C34 10 36 14 34 17 C32 20 28 20 26 17 C24 14 26 10 30 10 Z" fill="#2D3748" />
            <path d="M15 45 C15 35 20 30 30 30 C40 30 45 35 45 45 Z" fill="#1A365D" />
            <path d="M26 30 L30 38 L34 30 Z" fill="#FFFFFF" />
            <path d="M29 34 L31 34 L30 45 Z" fill="#C53030" />
            <rect x="36" y="24" width="8" height="14" rx="2" fill="#2D3748" stroke="#FFFFFF" strokeWidth="0.5" />
            <circle cx="40" cy="36" r="1" fill="#FFFFFF" />
          </svg>

          <div className="flex-1 min-w-0">
            <h4 className="text-[9.5px] font-bold text-burgundy">I Want to Hire</h4>
            <p className="text-[7.5px] text-gray-500 mt-0.5 leading-tight font-medium">Post requirements and hire verified workers.</p>
          </div>

          <div className="w-4.5 h-4.5 bg-[#800020] rounded-full flex items-center justify-center text-white flex-shrink-0 p-0.5">
            <Check className="w-2.5 h-2.5 text-white stroke-[3px]" />
          </div>
        </div>

        {/* Option 2: I Want Work */}
        <div className="mt-3 border border-gray-150 rounded-2xl p-2.5 bg-white flex items-center gap-3 relative shadow-sm">
          {/* Construction Worker SVG Avatar */}
          <svg viewBox="0 0 60 60" className="w-10 h-10 rounded-xl bg-[#FFF9E6] border border-yellow-100 flex-shrink-0">
            <circle cx="30" cy="24" r="9" fill="#FCE4D6" />
            <path d="M15 48 C15 38 20 33 30 33 C40 33 45 38 45 48 Z" fill="#F59E0B" />
            <path d="M22 33 L30 42 L38 33 Z" fill="#3B82F6" />
            <path d="M20 18 C20 12 40 12 40 18 Z" fill="#FBBF24" />
            <rect x="17" y="17" width="26" height="2.5" rx="1" fill="#F59E0B" />
          </svg>

          <div className="flex-1 min-w-0">
            <h4 className="text-[9.5px] font-bold text-gray-800">I Want Work</h4>
            <p className="text-[7.5px] text-gray-500 mt-0.5 leading-tight font-medium">Receive nearby jobs and manage active tasks.</p>
          </div>

          <div className="w-4.5 h-4.5 border border-gray-300 rounded-full bg-white flex-shrink-0" />
        </div>

        <button className="w-full bg-burgundy text-white text-[9px] font-bold py-2.5 rounded-xl flex items-center justify-center gap-1 shadow-md hover:bg-burgundy-dark transition-colors mt-auto mb-2">
          <span>Continue</span>
          <ChevronRight className="w-3.5 h-3.5 text-white" />
        </button>
      </div>
    </div>
  );
}

function ScreenEmployerHome() {
  return (
    <div className="bg-white h-full w-full flex flex-col font-sans relative overflow-hidden select-none">
      {/* Top Header */}
      <div className="px-3 pt-2 pb-1.5 flex items-center justify-between border-b border-gray-100 bg-white">
        <span className="text-[12px] font-bold text-gray-900 tracking-tight">Shramico</span>
        <div className="relative">
          <Bell className="w-3.5 h-3.5 text-gray-700" />
          <span className="absolute top-0 right-0 w-1.5 h-1.5 bg-red-500 rounded-full border border-white" />
        </div>
      </div>

      {/* Content Area */}
      <div className="flex-1 overflow-hidden px-3 pt-2 pb-1 space-y-3">
        {/* Welcome Stack */}
        <div className="flex justify-between items-end mt-1">
          <div>
            <h4 className="text-[11px] font-black text-gray-950 leading-none">वापस स्वागत है, Test</h4>
            <p className="text-[7.5px] text-gray-500 font-semibold mt-1 flex items-center gap-0.5">
              <MapPin className="w-2.5 h-2.5 text-burgundy" />
              <span>Pune</span>
            </p>
          </div>
          <span className="text-[7px] text-burgundy font-bold">0 professionals active ...</span>
        </div>

        {/* Pune Banner */}
        <div className="bg-gradient-to-br from-[#FCFAF8] to-[#F2EAE7] rounded-xl p-2.5 border border-gray-100/50 flex relative overflow-hidden shadow-sm h-24">
          {/* <div className="flex-1 flex flex-col justify-center min-w-0 pr-12 z-10">
            <p className="text-[5.5px] text-gray-500 font-bold uppercase tracking-wider">Real People. Real Skills.</p>
            <p className="text-[5.5px] text-burgundy font-bold uppercase tracking-wider mt-0.5">Right When You Need.</p>
            <h3 className="text-[18px] font-black text-burgundy/20 tracking-tight leading-none mt-0.5">PUNE</h3>
            <p className="text-[5px] text-gray-600 font-bold mt-0.5 leading-none">Trusted Local Workers. Just Around You.</p>
          </div>

          {/* Banner Illustration Person }
          <div className="absolute right-0 top-0 bottom-0 w-20 overflow-hidden pointer-events-none opacity-90">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <path d="M 0 80 Q 20 60 40 80 Q 60 70 80 85 L 100 85 L 100 100 L 0 100 Z" fill="#E8DCD8" />
              <circle cx="65" cy="40" r="12" fill="#FCE4D6" />
              <path d="M 58 35 C 65 30 72 32 70 42 C 65 42 62 38 58 35 Z" fill="#2D3748" />
              <path d="M 45 65 L 85 65 L 80 100 L 50 100 Z" fill="#800020" />
              <rect x="42" y="48" width="8" height="15" rx="1.5" fill="#2D3748" stroke="#FFF" strokeWidth="0.5" transform="rotate(-15 46 55)" />
            </svg>
          </div> */}
          <img
            src="/homepage_banner.png"
            alt="Homepage Banner"
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Dotted indicator */}
          <div className="absolute bottom-1.5 left-2.5 flex gap-1 z-10">
            <span className="w-1 h-1 bg-gray-300 rounded-full" />
            <span className="w-1 h-1 bg-gray-300 rounded-full" />
            <span className="w-2.5 h-1 bg-burgundy rounded-full" />
          </div>
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-3 gap-2">
          {/* Card 1: Construction */}
          <div className="border border-gray-100 rounded-xl p-1.5 bg-white shadow-sm flex flex-col justify-between">
            <svg viewBox="0 0 60 40" className="w-full h-10 rounded-t-lg bg-red-50/50 flex items-center justify-center text-burgundy">
              <rect x="15" y="10" width="14" height="7" rx="0.5" fill="#A63A50" />
              <rect x="31" y="10" width="14" height="7" rx="0.5" fill="#A63A50" />
              <rect x="8" y="19" width="14" height="7" rx="0.5" fill="#800020" />
              <rect x="24" y="19" width="14" height="7" rx="0.5" fill="#800020" />
              <rect x="40" y="19" width="14" height="7" rx="0.5" fill="#800020" />
            </svg>
            <h5 className="text-[7.5px] font-bold text-gray-800 text-center mt-1">Construction</h5>
            <p className="text-[5.5px] text-gray-400 text-center font-medium leading-none mt-0.5">All types of construction</p>
            <button className="w-full bg-burgundy text-white text-[6.5px] font-bold py-1 rounded-md mt-1.5">Book Now</button>
          </div>

          {/* Card 2: General */}
          <div className="border border-gray-100 rounded-xl p-1.5 bg-white shadow-sm flex flex-col justify-between">
            <svg viewBox="0 0 60 40" className="w-full h-10 rounded-t-lg bg-pink-50/50 flex items-center justify-center">
              <rect x="22" y="12" width="16" height="16" rx="1" fill="#E5A67C" stroke="#783F27" strokeWidth="1" />
              <line x1="22" y1="20" x2="38" y2="20" stroke="#783F27" strokeWidth="0.75" />
              <line x1="30" y1="12" x2="30" y2="28" stroke="#783F27" strokeWidth="0.75" />
            </svg>
            <h5 className="text-[7.5px] font-bold text-gray-800 text-center mt-1">General</h5>
            <p className="text-[5.5px] text-gray-400 text-center font-medium leading-none mt-0.5">Helpers, Packers, Mo...</p>
            <button className="w-full bg-burgundy text-white text-[6.5px] font-bold py-1 rounded-md mt-1.5">Book Now</button>
          </div>

          {/* Card 3: Schedule */}
          <div className="border border-gray-100 rounded-xl p-1.5 bg-white shadow-sm flex flex-col justify-between">
            <svg viewBox="0 0 60 40" className="w-full h-10 rounded-t-lg bg-blue-50/50 flex items-center justify-center text-blue-700">
              <rect x="20" y="10" width="20" height="20" rx="2" fill="none" stroke="currentColor" strokeWidth="1.5" />
              <line x1="20" y1="17" x2="40" y2="17" stroke="currentColor" strokeWidth="1.5" />
              <circle cx="25" cy="22" r="0.75" fill="currentColor" />
              <circle cx="30" cy="22" r="0.75" fill="currentColor" />
              <circle cx="35" cy="22" r="0.75" fill="currentColor" />
              <circle cx="25" cy="26" r="0.75" fill="currentColor" />
              <circle cx="30" cy="26" r="0.75" fill="currentColor" />
            </svg>
            <h5 className="text-[7.5px] font-bold text-gray-800 text-center mt-1">Schedule Booking</h5>
            <p className="text-[5.5px] text-gray-400 text-center font-medium leading-none mt-0.5">Book workers for a future</p>
            <button className="w-full bg-[#111827] text-white text-[6.5px] font-bold py-1 rounded-md mt-1.5">Schedule Now</button>
          </div>
        </div>

        {/* Features Row */}
        <div className="flex justify-between items-center bg-gray-50 border border-gray-100/80 rounded-xl p-1.5 text-center">
          {['On-Time Guarantee', 'Real-Time Matching', 'Live Location', 'Images & Voice'].map((f, idx) => (
            <div key={f} className="flex-1 flex flex-col items-center">
              <div className="w-4.5 h-4.5 bg-pink-50 text-burgundy rounded-full flex items-center justify-center text-[7px]">
                {idx === 0 ? '⏰' : idx === 1 ? '👥' : idx === 2 ? '📍' : '🖼️'}
              </div>
              <span className="text-[5px] font-bold text-gray-600 mt-1 max-w-[45px] leading-tight truncate">{f}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="h-10 border-t border-gray-100 bg-white flex items-center justify-around pb-0.5 flex-shrink-0">
        <div className="flex flex-col items-center text-burgundy font-bold text-[7.5px] relative pt-1">
          <Home className="w-3.5 h-3.5 text-burgundy" />
          <span className="mt-0.5">Home</span>
          <span className="absolute bottom-[-2px] w-4 h-0.5 bg-burgundy rounded-full" />
        </div>
        <div className="flex flex-col items-center text-gray-400 text-[7.5px] pt-1">
          <Compass className="w-3.5 h-3.5" />
          <span className="mt-0.5">Explore</span>
        </div>
        <div className="flex flex-col items-center text-gray-400 text-[7.5px] pt-1">
          <Clock className="w-3.5 h-3.5" />
          <span className="mt-0.5">My bookings</span>
        </div>
        <div className="flex flex-col items-center text-gray-400 text-[7.5px] pt-1">
          <User className="w-3.5 h-3.5" />
          <span className="mt-0.5">Profile</span>
        </div>
      </div>
    </div>
  );
}

function ScreenScheduleBooking() {
  return (
    <div className="bg-[#FAF9F6] h-full w-full flex flex-col font-sans relative overflow-hidden select-none">
      {/* Header */}
      <div className="px-3 pt-2 pb-1.5 flex items-center justify-between border-b border-gray-100 bg-white">
        <div className="flex items-center gap-1">
          <ChevronRight className="w-4 h-4 text-gray-700 rotate-180" />
          <span className="text-[11px] font-bold text-gray-900 tracking-tight">Schedule Booking</span>
        </div>
        <div className="w-4 h-4 rounded border border-gray-300 flex items-center justify-center p-[2px]">
          <div className="grid grid-cols-2 gap-[1px] w-full h-full">
            <span className="bg-gray-700 rounded-[0.25px]" />
            <span className="bg-gray-700 rounded-[0.25px]" />
            <span className="bg-gray-700 rounded-[0.25px]" />
            <span className="bg-gray-700 rounded-[0.25px]" />
          </div>
        </div>
      </div>

      {/* Content Area */}
      <div className="flex-1 overflow-hidden px-3 pt-2 pb-1 space-y-2.5">
        {/* Card 1: Shift timing */}
        <div className="border border-gray-100 rounded-xl p-2.5 bg-white shadow-sm space-y-2">
          <div className="flex items-center gap-1.5">
            <div className="w-6 h-6 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
              <Calendar className="w-3.5 h-3.5 text-blue-700" />
            </div>
            <h4 className="text-[9.5px] font-bold text-gray-950 leading-tight">Shift timing</h4>
          </div>

          <div className="flex justify-between items-center text-[7.5px] font-bold">
            <span className="text-gray-500">Job date</span>
            <button className="text-burgundy flex items-center gap-0.5">
              <span>📅 Calendar</span>
            </button>
          </div>

          {/* Date Row */}
          <div className="flex gap-1.5">
            <div className="flex-1 border border-gray-100 rounded-xl p-1.5 bg-gray-50/50 text-center">
              <p className="text-[6px] text-gray-400 font-semibold">Sat</p>
              <p className="text-[10px] font-bold text-gray-300 mt-0.5">20</p>
              <p className="text-[5.5px] text-gray-300 mt-1">• -</p>
            </div>
            <div className="flex-1 border-2 border-blue-600 rounded-xl p-1.5 bg-white text-center shadow-[0_2px_8px_rgba(37,99,235,0.08)]">
              <p className="text-[6px] text-blue-600 font-bold">Sun</p>
              <p className="text-[10px] font-black text-blue-900 mt-0.5">21</p>
              <p className="text-[5.5px] text-green-600 font-bold mt-1">• Open</p>
            </div>
            <div className="flex-1 border border-gray-150 rounded-xl p-1.5 bg-white text-center">
              <p className="text-[6px] text-gray-500 font-semibold">Mon</p>
              <p className="text-[10px] font-bold text-gray-800 mt-0.5">22</p>
              <p className="text-[5.5px] text-green-600 font-bold mt-1">• Open</p>
            </div>
          </div>

          {/* Time type selection */}
          <div className="space-y-1">
            <p className="text-[8px] font-bold text-gray-850">Time Type *</p>
            <div className="flex border border-gray-100 rounded-xl p-[2px] bg-gray-50/50">
              <div className="flex-1 text-center text-gray-600 text-[7.5px] font-bold py-1.5 rounded-lg">
                HALF DAY
              </div>
              <div className="flex-1 text-center bg-[#0F172A] text-white text-[7.5px] font-bold py-1.5 rounded-lg shadow-sm">
                FULL DAY
              </div>
            </div>
          </div>
        </div>

        {/* Card 2: Worker requirements */}
        <div className="border border-gray-100 rounded-xl p-2.5 bg-white shadow-sm space-y-2">
          <div className="flex items-center gap-1.5">
            <div className="w-6 h-6 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
              <User className="w-3.5 h-3.5 text-blue-700" />
            </div>
            <h4 className="text-[9.5px] font-bold text-gray-950 leading-tight">Worker requirements</h4>
          </div>

          <div className="bg-[#EFF6FF]/40 border border-blue-100/50 rounded-xl p-2 space-y-2">
            <div className="text-[7.5px] text-blue-700 font-bold flex items-center gap-1">
              <span>📋</span>
              <span>1 scheduled worker</span>
            </div>

            <div className="bg-white border border-blue-50 rounded-lg p-1.5 flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <div className="w-6 h-6 rounded bg-blue-50 text-blue-600 flex items-center justify-center text-[8px]">
                  ⚙️
                </div>
                <div>
                  <p className="text-[6px] text-gray-400 font-semibold leading-none">Service type</p>
                  <p className="text-[8px] font-bold text-blue-900 mt-0.5 leading-none">Mason</p>
                </div>
              </div>

              <div className="flex items-center gap-1">
                <div className="flex items-center gap-2 border border-gray-100 rounded-lg p-0.5 bg-gray-50/50">
                  <span className="w-4 h-4 bg-white rounded flex items-center justify-center text-[8px] text-gray-400 font-bold border border-gray-100">-</span>
                  <span className="text-[8.5px] font-bold text-gray-800">1</span>
                  <span className="w-4 h-4 bg-white rounded flex items-center justify-center text-[8px] text-gray-800 font-bold border border-gray-100">+</span>
                </div>
                <div className="border border-gray-200 rounded-lg px-1.5 py-1 text-[8px] font-bold text-gray-700 w-8 text-center">
                  Wage
                </div>
              </div>
            </div>
          </div>
        </div>

        <button className="w-full bg-[#0F172A] text-white text-[9px] font-bold py-2.5 rounded-xl flex items-center justify-center gap-1 shadow-md hover:bg-slate-800 transition-colors mt-auto mb-2">
          <span>Create Shift Booking</span>
        </button>
      </div>
    </div>
  );
}

function ScreenPostRequirement() {
  return (
    <div className="bg-[#FAF9F6] h-full w-full flex flex-col font-sans relative overflow-hidden select-none">
      {/* Content Area */}
      <div className="flex-1 overflow-hidden px-3 pt-3 pb-1 space-y-2.5 flex flex-col">

        {/* Requirements Card */}
        <div className="border border-gray-100 rounded-xl p-2.5 bg-white shadow-sm space-y-2.5">
          <div className="flex items-center gap-1.5">
            <div className="w-6 h-6 rounded-lg bg-red-50 text-red-600 flex items-center justify-center">
              <User className="w-3.5 h-3.5 text-[#800020]" />
            </div>
            <h4 className="text-[9.5px] font-bold text-gray-950 leading-tight">Requirements</h4>
          </div>

          <div className="bg-[#FAF5F6] border border-pink-100/50 rounded-xl p-2 space-y-2">
            <div className="text-[7.5px] text-burgundy font-bold flex items-center gap-1">
              <span>📋</span>
              <span>1 worker selected</span>
            </div>

            <div className="bg-white border border-pink-50 rounded-lg p-1.5 flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <div className="w-6 h-6 rounded-full bg-red-50 text-[#800020] flex items-center justify-center text-[8px]">
                  🛠️
                </div>
                <div>
                  <p className="text-[6px] text-gray-400 font-semibold leading-none">Service type</p>
                  <p className="text-[8.5px] font-bold text-burgundy mt-0.5 leading-none">Mason</p>
                </div>
              </div>

              <div className="flex items-center gap-1.5">
                <div className="flex items-center gap-2 border border-gray-150 rounded-lg p-0.5 bg-gray-50/50">
                  <span className="w-4 h-4 bg-white rounded flex items-center justify-center text-[8px] text-gray-400 font-bold border border-gray-100">-</span>
                  <span className="text-[8.5px] font-bold text-gray-800">1</span>
                  <span className="w-4 h-4 bg-white rounded flex items-center justify-center text-[8px] text-gray-800 font-bold border border-gray-100">+</span>
                </div>
                <div className="border-2 border-burgundy rounded-lg px-1.5 py-1 text-[8.5px] font-black text-gray-800 w-8 text-center bg-white flex items-center justify-center gap-0.5">
                  <span>₹</span>
                  <span>800</span>
                  <span className="w-[1.5px] h-3 bg-burgundy/80 animate-pulse ml-0.5" />
                </div>
              </div>
            </div>
          </div>

          {/* Time type selection */}
          <div className="space-y-1">
            <p className="text-[8px] font-bold text-gray-850">Time Type *</p>
            <div className="flex border border-gray-100 rounded-xl p-[2px] bg-gray-50/50">
              <div className="flex-1 text-center text-burgundy text-[7.5px] font-extrabold py-1.5 rounded-lg">
                HALF DAY
              </div>
              <div className="flex-1 text-center bg-burgundy text-white text-[7.5px] font-bold py-1.5 rounded-lg shadow-sm">
                FULL DAY
              </div>
            </div>
          </div>

          {/* Location input */}
          <div className="space-y-1">
            <p className="text-[8px] font-bold text-gray-850">Location *</p>
            <div className="border border-gray-200 rounded-xl px-2.5 py-1.5 flex items-center justify-between text-[8px] bg-white">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-burgundy" />
                <span className="font-bold text-gray-800">Pune</span>
              </div>
              <X className="w-3.5 h-3.5 text-gray-400" />
            </div>
          </div>
        </div>

        {/* Service Type Card */}
        <div className="border border-gray-100 rounded-xl p-2.5 bg-white shadow-sm space-y-2">
          <div className="flex items-center gap-1.5">
            <div className="w-6 h-6 rounded-lg bg-red-50 text-red-600 flex items-center justify-center">
              <span>🔒</span>
            </div>
            <h4 className="text-[9.5px] font-bold text-gray-950 leading-tight">Service Type</h4>
          </div>

          <div className="border border-gray-150 rounded-xl p-1.5 flex items-center justify-between bg-white">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-full overflow-hidden bg-gray-50 border border-gray-200 flex items-center justify-center">
                {/* Worker Avatar mini */}
                <svg viewBox="0 0 40 40" className="w-full h-full">
                  <circle cx="20" cy="16" r="6" fill="#FCE4D6" />
                  <path d="M 12 12 Q 20 6 28 12 Z" fill="#FBBF24" />
                  <path d="M 8 32 C 8 26 13 22 20 22 C 27 22 32 26 32 32 Z" fill="#D97706" />
                </svg>
              </div>
              <span className="text-[8.5px] font-bold text-gray-800">Mason</span>
            </div>
            <span className="text-[9px]">🔒</span>
          </div>
        </div>

        {/* Action Button */}
        <div className="space-y-1.5 mt-auto mb-2">
          <button className="w-full bg-burgundy text-white text-[9.5px] font-bold py-2.5 rounded-xl flex items-center justify-center gap-1 shadow-md hover:bg-burgundy-dark transition-colors">
            <span>Post Requirement</span>
          </button>
          <div className="flex items-center justify-center gap-1 text-[6.5px] text-gray-400 font-bold">
            <span className="text-[7.5px]">🛡️</span>
            <span>Your information is safe and secure</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function ScreenMyBookings() {
  return (
    <div className="bg-[#FAF9F6] h-full w-full flex flex-col font-sans relative overflow-hidden select-none">
      {/* Header */}
      <div className="px-3 pt-2 pb-1.5 flex items-center justify-between border-b border-gray-100 bg-white">
        <span className="text-[12px] font-bold text-gray-900 tracking-tight">My Bookings</span>
        <div className="relative">
          <Bell className="w-3.5 h-3.5 text-gray-700" />
          <span className="absolute top-0 right-0 w-3 h-3 bg-red-500 rounded-full border border-white text-[6px] font-black text-white flex items-center justify-center">2</span>
        </div>
      </div>

      {/* Content Area */}
      <div className="flex-1 overflow-hidden px-3 pt-2.5 pb-1 space-y-2.5">
        {/* Tabs */}
        <div className="flex border border-gray-100 rounded-full p-[2px] bg-white shadow-sm">
          <div className="flex-1 text-center bg-[#EFF6FF] text-blue-700 text-[7px] font-extrabold py-1 rounded-full border border-blue-100">
            All
          </div>
          <div className="flex-1 text-center text-gray-400 text-[7px] font-bold py-1">
            Ongoing
          </div>
          <div className="flex-1 text-center text-gray-400 text-[7px] font-bold py-1">
            Completed
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-3 border border-gray-100 rounded-xl p-2 bg-white text-center shadow-sm divide-x divide-gray-100">
          <div className="flex flex-col items-center justify-center">
            <div className="w-5 h-5 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center text-[7px]">
              ▶
            </div>
            <span className="text-[9px] font-black text-gray-950 mt-1">1</span>
            <span className="text-[5.5px] text-gray-400 font-semibold">Ongoing</span>
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="w-5 h-5 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center">
              <Clock className="w-2.5 h-2.5 text-blue-600" />
            </div>
            <span className="text-[9px] font-black text-gray-950 mt-1">0</span>
            <span className="text-[5.5px] text-gray-400 font-semibold">Upcoming</span>
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="w-5 h-5 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center text-[7.5px]">
              🛡️
            </div>
            <span className="text-[9px] font-black text-gray-950 mt-1">0</span>
            <span className="text-[5.5px] text-gray-400 font-semibold">Completed</span>
          </div>
        </div>

        {/* Recent bookings heading */}
        <div className="pt-0.5">
          <h4 className="text-[9.5px] font-extrabold text-gray-800">Recent Bookings</h4>

          {/* Booking Card */}
          <div className="border border-gray-100 rounded-2xl p-2.5 bg-white shadow-sm mt-1.5 space-y-2 flex flex-col">
            {/* Card Header */}
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-full overflow-hidden bg-gray-50 border border-gray-150 flex items-center justify-center flex-shrink-0">
                {/* Worker Avatar portrait */}
                <svg viewBox="0 0 40 40" className="w-full h-full">
                  <circle cx="20" cy="16" r="6.5" fill="#FCE4D6" />
                  <path d="M 12 12 Q 20 6 28 12 Z" fill="#FBBF24" />
                  <path d="M 8 32 C 8 26 13 22 20 22 C 27 22 32 26 32 32 Z" fill="#D97706" />
                </svg>
              </div>
              <div>
                <h4 className="text-[9.5px] font-bold text-gray-800 leading-tight">Mason</h4>
                <p className="text-[6.5px] text-gray-400 font-semibold mt-0.5">Standard Booking</p>
              </div>
              <div className="bg-blue-50 text-blue-700 text-[6.5px] font-bold px-1.5 py-0.5 rounded ml-auto">
                Ongoing
              </div>
            </div>

            {/* Grid details */}
            <div className="flex justify-between items-center text-[7.5px] text-gray-500 font-bold border-t border-b border-gray-50 py-1.5">
              <div className="space-y-1">
                <p className="flex items-center gap-0.5">👥 <span>1 worker</span></p>
                <p className="flex items-center gap-0.5">📍 <span>Pune</span></p>
                <p className="flex items-center gap-0.5">📅 <span>20 Jun 2026</span></p>
              </div>
              <span className="text-[11px] font-black text-green-600">₹800</span>
            </div>

            {/* Progress bar */}
            <div className="space-y-1">
              <div className="flex justify-between items-center text-[6.5px] font-extrabold text-gray-850">
                <span>Booking progress</span>
                <span className="text-green-600 bg-green-50 px-1 rounded">1 / 1 Accepted</span>
              </div>
              <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
                <div className="h-full w-full bg-[#16A34A] rounded-full" />
              </div>
            </div>

            {/* Accepted workers section */}
            <div className="space-y-1.5 pt-1.5 border-t border-gray-50">
              <div className="flex justify-between items-center text-[7px] font-bold">
                <span className="text-gray-800">Accepted workers (1)</span>
                <span className="text-blue-600">View All &gt;</span>
              </div>
              <div className="flex gap-2">
                <div className="relative">
                  <div className="w-8 h-8 rounded-full bg-[#FDF2F4] text-burgundy text-[11px] font-black flex items-center justify-center border border-pink-100">
                    T
                  </div>
                  {/* Cancel cross badge */}
                  <span className="absolute -top-0.5 -right-0.5 w-3 h-3 bg-red-100 text-red-600 border border-red-200 rounded-full flex items-center justify-center text-[6px] font-black">×</span>
                  {/* Phone icon badge */}
                  <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-blue-600 text-white rounded-full flex items-center justify-center p-[2.5px] shadow-sm">
                    <Phone className="w-full h-full fill-white" />
                  </span>
                  <span className="block text-[6px] font-bold text-gray-500 text-center mt-1 truncate max-w-[34px]">Test Worker</span>
                </div>

                {/* Notice Bubble */}
                <div className="bg-blue-50/20 border border-blue-100/50 rounded-lg p-1.5 flex items-start gap-1 flex-1">
                  <Info className="w-3.5 h-3.5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <p className="text-[6px] text-gray-500 leading-normal font-semibold">Call workers or remove them from this job.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="h-10 border-t border-gray-100 bg-white flex items-center justify-around pb-0.5 flex-shrink-0">
        <div className="flex flex-col items-center text-gray-400 text-[7.5px] pt-1">
          <Home className="w-3.5 h-3.5" />
          <span className="mt-0.5">Home</span>
        </div>
        <div className="flex flex-col items-center text-gray-400 text-[7.5px] pt-1">
          <Compass className="w-3.5 h-3.5" />
          <span className="mt-0.5">Explore</span>
        </div>
        <div className="flex flex-col items-center text-burgundy font-bold text-[7.5px] relative pt-1">
          <Clock className="w-3.5 h-3.5 text-burgundy animate-pulse" />
          <span className="mt-0.5">My bookings</span>
          <span className="absolute bottom-[-2px] w-4 h-0.5 bg-burgundy rounded-full" />
        </div>
        <div className="flex flex-col items-center text-gray-400 text-[7.5px] pt-1">
          <User className="w-3.5 h-3.5" />
          <span className="mt-0.5">Profile</span>
        </div>
      </div>
    </div>
  );
}

const screens = [
  { label: 'Choose Role', render: () => <ScreenChooseRole /> },
  { label: 'Employer Home', render: () => <ScreenEmployerHome /> },
  { label: 'Post Requirement', render: () => <ScreenPostRequirement /> },
  { label: 'Schedule Booking', render: () => <ScreenScheduleBooking /> },
  { label: 'My Bookings', render: () => <ScreenMyBookings /> },
  { label: 'Home', render: () => <ScreenHome /> },
  { label: 'Job Offer', render: () => <ScreenJobOffer /> },
  { label: 'My Jobs', render: () => <ScreenMyJobs /> },

];

function MockScreen({ label, render }: { label: string; render: () => React.ReactNode }) {
  return (
    <div className="flex flex-col items-center gap-3 group">
      {/* Phone frame */}
      <div
        className="relative w-56 h-[390px] rounded-[32px] overflow-hidden shadow-xl border-4 transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-2xl flex flex-col"
        style={{ borderColor: '#18181b', background: '#0f0f0f' }}
      >
        {/* Status bar */}
        <div className="h-6 flex items-center justify-between px-3 select-none flex-shrink-0" style={{ background: '#0f0f0f' }}>
          <span className="text-white text-[9px] font-bold">8:23</span>
          {/* Notch / Dynamic Island */}
          <div className="w-14 h-3.5 bg-black rounded-full" />
          {/* Icons */}
          <div className="flex items-center gap-1">
            <div className="flex items-end gap-[1px] h-2">
              <div className="w-[1.5px] h-1 bg-white rounded-[0.5px]" />
              <div className="w-[1.5px] h-1.5 bg-white rounded-[0.5px]" />
              <div className="w-[1.5px] h-2 bg-white rounded-[0.5px]" />
            </div>
            <svg className="w-2.5 h-2.5 text-white" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 21a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm-7.07-7.07a10 10 0 0 1 14.14 0l-1.42 1.42a8 8 0 0 0-11.3 0l-1.42-1.42zm-2.83-2.83a14 14 0 0 1 19.8 0l-1.42 1.42a12 12 0 0 0-16.96 0L2.1 11.1z" />
            </svg>
            <div className="w-5 h-2.5 rounded-[3px] border border-white/70 p-[1px] flex items-center">
              <div className="h-full w-[90%] bg-white rounded-[1px]" />
              <div className="w-[1px] h-1 bg-white/70 rounded-r-sm ml-[1px]" />
            </div>
          </div>
        </div>

        {/* Screen Content Wrapper */}
        <div className="flex-1 bg-white overflow-hidden relative">
          {render()}
        </div>
      </div>
      <span className="text-xs font-semibold text-gray-600">{label}</span>
    </div>
  );
}

export default function Screenshots() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="section-label mb-4">App Preview</div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight">
            A beautifully crafted{' '}
            <span className="text-burgundy">mobile experience</span>
          </h2>
          <p className="mt-4 text-gray-500 max-w-xl mx-auto">
            Every screen is designed with clarity and ease of use in mind, delivering a
            professional experience from the first tap.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6 lg:gap-8">
          {screens.map((s) => (
            <MockScreen key={s.label} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
}
