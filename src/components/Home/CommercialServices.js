import CommercialCard from "@/components/home/CommercialCard";

export default function CommercialServices() {

    return (
        <div className="commercialServices m-padding">
            <hr className="hr"/>
            <h1 className="font-24 blue bolder">Commercial Services</h1>
            <div className="flex-center container">
                <div className="part">
                    <CommercialCard
                        title="Automobile Auctions Shipping"
                        text="We know that the car you want or the best deal to be had could be at an auction halfway across the
                        country. Luckily, we offer auction auto shipping and can assist you no matter the distance."
                        link=""
                    />
                    <CommercialCard
                        title="Automobile Auctions Shipping"
                        text="We know that the car you want or the best deal to be had could be at an auction halfway across the
                        country. Luckily, we offer auction auto shipping and can assist you no matter the distance."
                        link=""
                    />
                </div>
                <div className="part">
                    <CommercialCard
                        title="Automobile Auctions Shipping"
                        text="We know that the car you want or the best deal to be had could be at an auction halfway across the
                        country. Luckily, we offer auction auto shipping and can assist you no matter the distance."
                        link=""
                    />
                    <CommercialCard
                        title="Automobile Auctions Shipping"
                        text="We know that the car you want or the best deal to be had could be at an auction halfway across the
                        country. Luckily, we offer auction auto shipping and can assist you no matter the distance."
                        link=""
                    />
                </div>
            </div>
        </div>
    )
}