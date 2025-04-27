import { CalendarDateRangeIcon, ChevronUpDownIcon, FlagIcon } from "@heroicons/react/16/solid";

export default function CarInsuranceDisplay() {
    return (
        <>
            <div className="text-center my-10">
                <h1 className="text-3xl md:text-5xl font-bold text-blue-600">Seguros<span className="text-red-600">Rapido</span>.mx</h1>
                <p className="font-semibold ">La forma mas rapida de cotizar el seguro de tu auto</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2  justify-center items-center md:space-x-5 px-2">
                <div className="flex flex-col justify-center items-center space-y-5  text-center">

                    <h2 className="text-blue-600 font-bold text-2xl md:text-3xl">Cotiza de forma rapida y facil el seguro de tu auto</h2>
                    <p className="-mt-5">Solo necesitas saber la siguiente informacion y listo.</p>
                    <div className="flex justify-between items-center w-full mt-5">
                        
                        <div className="flex flex-col justify-center items-center">
                            <FlagIcon className="text-blue-600 w-8 h-8" />
                            <p>Nacionalidad</p>
                        </div>

                        <div className="flex flex-col justify-center items-center">
                            <CalendarDateRangeIcon className="text-blue-600 w-8 h-8" />
                            <p>Año</p>
                        </div>

                        <div className="flex flex-col justify-center items-center">
                            <ChevronUpDownIcon className="text-blue-600 w-8 h-8" />
                            <p>Tipo de seguro</p>
                        </div>
                    </div>

                    <button className="w-full uppercase bg-blue-600 p-2 rounded-xl text-white font-bold cursor-pointer hover:bg-blue-400 mt-5">
                        Cotizar Seguro
                    </button>

                </div>

                
                <div>
                    <img className="w-full" src="/public/car1.svg" alt="" />
                </div>

            </div>
        </>
    )
}
