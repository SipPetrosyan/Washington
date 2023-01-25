import VehicleAdvertising from "@/components/quote/VehicleAdvertising";
import CalculationInfo from "@/components/quote/CalculationInfo";
import SendMessage from "@/components/quote/SendMessage";

export  default function CommercialVehicleTransport () {
    return(
        <div className="page-main commercialVehicleTransportPage">
            <VehicleAdvertising/>
            <div className="content flex-between m-padding">
                <div>
                    <p className="blue font-24 mb-30">For this reason, many companies use commercial transport services to ship their vehicles. Therefore, it’s critical to choose a reliable auto shipping company. You’ll also need a company that transports the type of car your shipping. </p>
                    <p className="blue font-24 mb-60">For this reason, many companies use commercial transport services to ship their vehicles. Therefore, it’s critical to choose a reliable auto shipping company. You’ll also need a company that transports the type of car your shipping. </p>
                    <h2 className="blue bolder font-32 mb-30">Professional Commercial Vehicle Transport</h2>
                    <p className="blue font-24">Washington DC Auto Transport reliable and a trusted provider of commercial transport. Plus, we ship any kind of commercial vehicle. There are no restrictions. Even better, we’ll set you up to ship multiple cars at the same time.</p>
                </div>
                <div>
                    <p className="blue font-24 mb-30">Also, at Washington DC Auto Transport we aren’t limited to typical commercial vehicles. We happily ship your trucks, vans, trailers, buses, and any other kind of commercial transport.</p>
                    <p className="blue font-24 mb-30">Our standard auto shipping method is door - to door. However, we also arrange pick-up and drop-off at terminals in major cities. This process, while not as convenient as door-to-door, is still hassle-free.</p>
                    <p className="blue font-24 mb-30">Washington DC Auto Transport’s team of expert professionals is first-rate. We arrange auto-transport for you so you don’t have to bother. Furthermore, we employ highly-trained and experienced drivers to ship your vehicle. They know the best routes. Plus, they look out for your car’s safety.</p>
                    <p className="blue font-24 mb-30">Washington DC Auto Transport knows you’re looking for the best deal. We want to help. Consequently, we offer reasonable shipping rates.</p>
                </div>
            </div>
            <CalculationInfo/>
            <SendMessage/>
        </div>
    )
}