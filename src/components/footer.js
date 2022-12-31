export const FooterComponent = () => {
  return (
    <div className="min-h-96 bg-gray-800 p-8 py-11 ">

      <div className="container flex justify-around items-center  mx-auto">
        <div className="flex flex-col w-60 h-40 gap-4">
          <p className="text-gray-200 font-bold text-2xl"> Oaklands Consortium</p>

        </div>
        <div className="flex flex-col w-60 h-40 gap-4">
          <p className="text-gray-200 font-bold text-xl text-center">Address</p>
          <p className="text-gray-400 font-serif text-center text-sm">
            5600 N BEACH ST, 1012
            HALTOM CITY,
            TX 76137
          </p>
        </div>
        <div className="flex flex-col w-60 h-40 gap-4">
          <p className="text-gray-200 font-bold text-xl text-center">Contact</p>
          <p className="text-gray-400 font-serif text-center text-sm">
            5600 N BEACH ST, 1012
            HALTOM CITY,
            TX 76137
          </p>
        </div>
        <div className="flex flex-col w-60 h-40 gap-4">
          <p className="text-gray-200 font-bold text-xl text-center">Follow us</p>
          <p className="text-gray-400 font-serif text-center text-sm">
            5600 N BEACH ST, 1012
            HALTOM CITY,
            TX 76137
          </p>
        </div>
      </div>

      <p className="text-gray-400 mt-8 text-md font-normal text-center">&copy; Oaklands Consortium</p>
    </div>
  );
};
