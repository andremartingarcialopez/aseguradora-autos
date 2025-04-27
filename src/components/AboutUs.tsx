
export default function AboutUs() {
    return (
        <>
            <div className="md:my-10">

                <h2 className="text-center text-2xl md:text-4xl text-blue-600 font-bold uppercase">Sobre Nosotros</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 items-center">

                    <div>
                        <img src="/public/aboutUs.png" alt="" />
                    </div>

                    <div>
                        <h3 className="text-2xl md:text-3xl text-red-500 font-bold my-3 text-center md:text-start">¿Quienes Somos?</h3>
                        <p className="text-center md:text-start md:text-xl">Somos una empresa 100% mexicana, inaugurada el 10 de marzo de 2005, especializada en el mercado de seguros para autos. <br /> <br />
                            Trabajamos cada día con dedicación para ofrecer el mejor servicio a nuestros clientes, con el objetivo de seguir creciendo y consolidarnos como la opción número uno en el sector. <br />
                            Contamos con un modelo de cotización de estilo alemán, enfocado en la eficiencia y simplicidad. Solo necesitamos tres datos para ofrecerte una cotización personalizada: <br /> <br />
                            <span className="font-semibold">1. Nacionalidad del auto</span> <br />
                            <span className="font-semibold">2. Año del vehículo</span><br />
                            <span className="font-semibold">3. Tipo de seguro que deseas contratar</span> <br /> <br />
                            Con esta información, te damos de forma inmediata una estimación clara y precisa del costo de asegurar tu auto.</p>

                    </div>

                </div>

            </div>
        </>
    )
}
