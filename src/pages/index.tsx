import Image from "next/image";
import { Inter } from "next/font/google";
import { useEffect } from "react";

const inter = Inter({ subsets: ["latin"], weight: ["400", "700"] });

export default function Component() {
  useEffect(() => {
    document.body.style.fontFamily = "'Inter', sans-serif";
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center text-white bg-cover bg-center" style={{ backgroundImage: "url('/bg.jpg')" }}>
      <header className="absolute top-0 left-0 w-full px-6 py-4 flex justify-between items-center bg-black bg-opacity-50">
        <div className="flex items-center gap-2">
          <PuzzleIcon className="h-8 w-8" />
          <span className="text-2xl font-bold">Shah maat</span>
        </div>
      </header>
      <main className="flex-1 flex flex-col items-center justify-center text-center px-6 py-12">
        <div className="bg-black bg-opacity-50 rounded-lg p-4 mb-8">
          <h2 className="text-2xl font-bold">Coming Soon!</h2>
        </div>
        <h1 className="text-4xl font-bold mb-4">Find chess tournaments, clubs, coaches, and players</h1>
        <p className="text-lg text-gray-300 mb-8">
          Shah maat is a comprehensive platform that helps you discover and connect with the chess community. Whether
          you're a seasoned player, a budding enthusiast, or a coach looking to share your expertise, Shah maat has
          got you covered.
        </p>
        <div className="grid grid-cols-2 gap-4 mb-8">
          <div className="bg-black bg-opacity-50 rounded-lg p-4 flex flex-col items-center gap-2 transform transition-transform hover:scale-105">
            <TrophyIcon className="h-8 w-8" />
            <h3 className="text-xl font-semibold">Tournaments</h3>
            <p className="text-gray-300 text-center">
              Explore a wide range of chess tournaments, from local events to international competitions.
            </p>
          </div>
          <div className="bg-black bg-opacity-50 rounded-lg p-4 flex flex-col items-center gap-2 transform transition-transform hover:scale-105">
            <GroupIcon className="h-8 w-8" />
            <h3 className="text-xl font-semibold">Clubs</h3>
            <p className="text-gray-300 text-center">
              Connect with chess enthusiasts in your local community and join clubs that cater to your skill level.
            </p>
          </div>
          <div className="bg-black bg-opacity-50 rounded-lg p-4 flex flex-col items-center gap-2 transform transition-transform hover:scale-105">
            <SchoolIcon className="h-8 w-8" />
            <h3 className="text-xl font-semibold">Coaches</h3>
            <p className="text-gray-300 text-center">
              Find experienced chess coaches who can help you improve your game and reach new heights.
            </p>
          </div>
          <div className="bg-black bg-opacity-50 rounded-lg p-4 flex flex-col items-center gap-2 transform transition-transform hover:scale-105">
            <UsersIcon className="h-8 w-8" />
            <h3 className="text-xl font-semibold">Players</h3>
            <p className="text-gray-300 text-center">
              Connect with fellow chess enthusiasts, find opponents, and build a network within the chess community.
            </p>
          </div>
        </div>
      </main>
      <footer className="absolute bottom-0 left-0 w-full px-6 py-4 bg-black bg-opacity-50 text-center text-sm text-gray-300">
        &copy; 2024 Shah maat. All rights reserved.
      </footer>
    </div>
  );
}

function GroupIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 7V5c0-1.1.9-2 2-2h2" />
      <path d="M17 3h2c1.1 0 2 .9 2 2v2" />
      <path d="M21 17v2c0 1.1-.9 2-2 2h-2" />
      <path d="M7 21H5c-1.1 0-2-.9-2-2v-2" />
      <rect width="7" height="5" x="7" y="7" rx="1" />
      <rect width="7" height="5" x="10" y="12" rx="1" />
    </svg>
  );
}

function PuzzleIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19.439 7.85c-.049.322.059.648.289.878l1.568 1.568c.47.47.706 1.087.706 1.704s-.235 1.233-.706 1.704l-1.611 1.611a.98.98 0 0 1-.837.276c-.47-.07-.802-.48-.968-.925a2.501 2.501 0 1 0-3.214 3.214c.446.166.855.497.925.968a.979.979 0 0 1-.276.837l-1.61 1.61a2.404 2.404 0 0 1-1.705.707 2.402 2.402 0 0 1-1.704-.706l-1.568-1.568a1.026 1.026 0 0 0-.877-.29c-.493.074-.84.504-1.02.968a2.5 2.5 0 1 1-3.237-3.237c.464-.18.894-.527.967-1.02a1.026 1.026 0 0 0-.289-.877l-1.568-1.568A2.402 2.402 0 0 1 1.998 12c0-.617.236-1.234.706-1.704L4.23 8.77c.24-.24.581-.353.917-.303.515.077.877.528 1.073 1.01a2.5 2.5 0 1 0 3.259-3.259c-.482-.196-.933-.558-1.01-1.073-.05-.336.062-.676.303-.917l1.525-1.525A2.402 2.402 0 0 1 12 1.998c.617 0 1.234.236 1.704.706l1.568 1.568c.23.23.556.338.877.29.493-.074.84-.504 1.02-.968a2.5 2.5 0 1 1 3.237 3.237c-.464.18-.894.527-.967 1.02Z" />
    </svg>
  );
}

function SchoolIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14 22v-4a2 2 0 1 0-4 0v4" />
      <path d="m18 10 4 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-8l4-2" />
      <path d="M18 5v17" />
      <path d="m4 6 8-4 8 4" />
      <path d="M6 5v17" />
      <circle cx="12" cy="9" r="2" />
    </svg>
  );
}

function TrophyIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
      <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
      <path d="M4 22h16" />
      <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
      <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
      <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
    </svg>
  );
}

function UsersIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}
