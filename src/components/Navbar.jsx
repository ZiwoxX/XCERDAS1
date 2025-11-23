import React, { useState } from "react"

const Navbar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false)

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen)
	}

	return (
		<>
			{/* Mobile */}
			<div className="flex justify-between relative top-3 lg:hidden items-start"> {/* items-start agar align rapi */}
				<div className="w-10 h-10 rounded-full flex justify-center items-center" id="UserButton">
					<img src="/NavIcon.png" alt="" className="w-6 h-6" onClick={toggleMenu} />
				</div>
				
				{/* BAGIAN TENGAH HEADER MOBILE */}
				<div className={`text-center text-white flex flex-col items-center ${isMenuOpen ? "hidden" : ""}`}>
					<div className="text-[0.7rem]">Hi, visitor!</div>
					<div className="font-bold text-[1rem]">WELCOME</div>
					
					{/* --- Tambahan Tombol Pintas "About" --- */}
					<a 
						href="https://unclairone.vercel.app/" 
						className="mt-1 text-[0.65rem] border border-white/50 px-3 py-1 rounded-full bg-white/10 hover:bg-white/30 transition-all animate-pulse"
					>
						Check About Us ✨
					</a>
					{/* ------------------------------------- */}
				</div>

				<div
					className={`w-10 h-10 rounded-full flex justify-center items-center `}
					id="UserButton">
					<img src="/user.svg" alt="" className="" />
				</div>

				{isMenuOpen && (
					<div className="fixed inset-0 bg-black opacity-50 z-10" onClick={toggleMenu}></div>
				)}

				<div
					className={`fixed top-0 left-0 h-full w-64  shadow-lg transform transition-transform duration-300 ease-in-out ${
						isMenuOpen ? "translate-x-0" : "-translate-x-full"
					}`}
					id="IsiNavbar">
					<ul className="mt-8 pl-6">
						<li className="mb-4">
							<a href="#" className="text-white opacity-80 text-lg font-bold">
								Home
							</a>
						</li>
						
						<li className="mb-4">
							<a href="https://unclairone.vercel.app/" className="text-white opacity-80 text-lg font-bold">
								About
							</a>
						</li>

						<li className="mb-4">
							<a href="#Gallery" className="text-white opacity-80 text-lg font-bold">
								Gallery
							</a>
						</li>
						<li>
							<a href="#Tabs" className="text-white opacity-80 text-lg font-bold">
								Structure & Schedule
							</a>
						</li>
					</ul>
				</div>
			</div>

			{/* Desktop */}
			<div className="flex justify-between relative top-3 hidden lg:flex">
				<div>
					<img src="/LOGO SMANSAA.png" className="w-24 h-24 rounded-full" alt="" />
				</div>
				<ul className="mt-2 flex gap-5">
					<li className="mb-4">
						<a href="#" className="text-white opacity-80 text-[1rem] font-semibold">
							Home
						</a>
					</li>
					<li className="mb-4">
						<a href="https://unclairone.vercel.app/" className="text-white opacity-80 text-[1rem] font-semibold">
							About
						</a>
					</li>
					<li className="mb-4">
						<a href="#Gallery" className="text-white opacity-80 text-[1rem] font-semibold">
							Gallery
						</a>
					</li>
					<li>
						<a href="#Tabs" className="text-white opacity-80 text-[1rem] font-semibold">
							Structure & Schedule
						</a>
					</li>
				</ul>
			</div>
		</>
	)
}

export default Navbar