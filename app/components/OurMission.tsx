const OurMission = () => {

    return (
      <div className="flex flex-col justify-center items-center">
        <h3 className="text-center my-5 text-gray-900 font-bold text-3xl">
          Our Mission
        </h3>

        <iframe
          width="560"
          height="315"
          className="rounded-md w-screen lg:w-[560px]"
          src="https://www.youtube.com/embed/WJWW_t9BdkA?autoplay=1&loop=1&playlist=WJWW_t9BdkA"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
    );
}

export default OurMission