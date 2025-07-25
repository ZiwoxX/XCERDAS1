const Jumat = () => {
	return (
		<>
			<div
				className="border-t-2 border-b-2 border-white flex justify-between py-[0.50rem] w-72 px-3"
				data-aos="fade-up"
				data-aos-duration="700">
				<div className="w-[50%] text-base  font-medium">Sejarah</div>
				<div className="flex justify-center items-center text-sm">9:40-11:00</div>
			</div>
			<div
				className="border-b-2 flex justify-between py-[0.50rem] w-72 px-3 opacity-60"
				data-aos="fade-up"
				data-aos-duration="600">
				<div className="w-[50%] text-base  font-medium">Ekonomi</div>
				<div className="flex justify-center items-center text-sm">9:45-11:45</div>
			</div>
		</>
	)
}

export default Jumat;
