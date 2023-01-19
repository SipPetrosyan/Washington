import CommercialCard from "@/components/Home/CommercialCard";

export default function CommercialServices() {

    return (
        <div className="commercialServices m-padding">
            <hr className="hr"/>
            <h1 className="font-32 blue">Commercial Services</h1>
            <div className="flex-between container">
                <div className="part">
                    <CommercialCard
                        title="Automobile Auctions Shipping"
                        text="We know that the car you want or the best deal to be had could be at an auction halfway across the
                        country. Luckily, we offer auction auto shipping and can assist you no matter the distance."
                        link=""
                    />
                    <CommercialCard
                        className="transformed"
                        title="Automobile Auctions Shipping"
                        text="We know that the car you want or the best deal to be had could be at an auction halfway across the
                        country. Luckily, we offer auction auto shipping and can assist you no matter the distance."
                        link=""
                    />
                    <div className="content">
                        <p>We have a wide variety of car moving services. Our two main methods of transportation are
                            Open Car Transport and Enclosed Auto Shipping. The difference between the two is based on
                            the trailer type used to transport your vehicle. When using Open Car Transport, an open
                            trailer picks up your vehicle.</p>
                        <p>The Enclosed Auto Shipping service uses an enclosed trailer which is much safer and
                            protected. In any case, your vehicle is in the most reliable hands when it is with
                            Washington DC Auto Transport.</p>
                    </div>
                </div>
                <div className="part">
                    <div className="content">
                        <p>We have a wide variety of car moving services. Our two main methods of transportation are
                            Open Car Transport and Enclosed Auto Shipping. The difference between the two is based on
                            the trailer type used to transport your vehicle. When using Open Car Transport, an open
                            trailer picks up your vehicle.</p>
                        <p>The Enclosed Auto Shipping service uses an enclosed trailer which is much safer and
                            protected. In any case, your vehicle is in the most reliable hands when it is with
                            Washington DC Auto Transport.</p>
                    </div>
                    <CommercialCard
                        title="Automobile Auctions Shipping"
                        text="We know that the car you want or the best deal to be had could be at an auction halfway across the
                        country. Luckily, we offer auction auto shipping and can assist you no matter the distance."
                        link=""
                    />
                    <CommercialCard
                        className="transformed"
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