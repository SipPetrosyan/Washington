export const quoteInitialValues = {
    from: "",
    to: "",
    time: "",
    year: "",
    make: "",
    model: "",
    method: "",
    operable: "",
    name: "",
    email: "",
    phone: ""
}

export const sliderSettings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
};