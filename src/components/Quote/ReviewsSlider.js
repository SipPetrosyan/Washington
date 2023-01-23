import {sliderSettings} from "@/utils/helper";
import Slider from "react-slick";
import {Rating} from "@mui/material";

export default function ReviewsSlider() {

    return (
        <div className="m-padding reviewsItemsWithSlider">
            <h1 className="blue font-32 bolder m-60">You can trust your auto shipping to Us</h1>
            <Slider className="reviewsSlider" {...sliderSettings}>
                {Array.from(Array(5).keys()).map((item, idx) => (
                    <div className="reviewItem" key={idx}>
                        <h2 className="parentheses">“</h2>
                        <h2 className="authorName blue font-24">William N.</h2>
                        <p className="text m-60">We are very satisfied with this company service. Our Lexus RX 350 was
                            delivered
                            on Monday in a good condition. The price was reasonable. Philip was very helpful. Will use
                            again.</p>
                        <Rating
                            name="text-feedback"
                            value={Math.round(Math.random() * 4) + 1}
                            readOnly
                            precision={0.5}
                        />
                        <div className="mediaIcon">
                            <span className="icon-Google-Icon"><span className="path1"></span><span
                            className="path2"></span><span className="path3"></span><span className="path4"></span></span>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    )
}