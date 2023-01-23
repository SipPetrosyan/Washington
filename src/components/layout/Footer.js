import Link from "next/link";

export default function Footer() {

    return (
        <footer className="m-padding white">
            <div className="topContent flex-between">
                <div className="contentItem">
                    <h2>Quick Links</h2>
                    <Link href="">Get Quote</Link>
                    <Link href="">Get Quote</Link>
                    <Link href="">Get Quote</Link>
                    <Link href="">Get Quote</Link>
                    <Link href="">Get Quote</Link>
                    <Link href="">Get Quote</Link>
                </div>
                <div className="contentItem">
                    <h2>Service Options</h2>
                    <Link href="">Door to Door Shipping</Link>
                    <Link href="">Door to Door Shipping</Link>
                    <Link href="">Door to Door Shipping</Link>
                    <Link href="">Door to Door Shipping</Link>
                    <Link href="">Door to Door Shipping</Link>
                    <Link href="">Door to Door Shipping</Link>
                </div>
                <div className="contentItem">
                    <h2></h2>
                    <Link href="">Snowbird Auto Moving</Link>
                    <Link href="">Snowbird Auto Moving</Link>
                    <Link href="">Snowbird Auto Moving</Link>
                    <Link href="">Snowbird Auto Moving</Link>
                    <Link href="">Snowbird Auto Moving</Link>
                    <Link href="">Snowbird Auto Moving</Link>
                </div>
                <div className="contentItem info">
                    <img src="/images/footer-logo.png" alt="footer-logo" />
                    <h2>WASHINGTON DC AUTO TRANSPORT</h2>
                    <p><a href="tel:( 202 ) 930 8005">( 202 ) 930 - 8005</a></p>
                    <p><a href="mailto:info@washingtondcautotransport.com">info@washingtondcautotransport.com</a></p>
                </div>
            </div>
            <div className="bottomContent flex-between">
                <div className="contentItem">
                    <h2>Our Popular Routes</h2>
                    <Link href="">Washington, DC to San Diego</Link>
                    <Link href="">Washington, DC to San Diego</Link>
                    <Link href="">Washington, DC to San Diego</Link>
                    <Link href="">Washington, DC to San Diego</Link>
                    <Link href="">Washington, DC to San Diego</Link>
                    <Link href="">Washington, DC to San Diego</Link>
                </div>
                <div className="contentItem">
                    <h2></h2>
                    <Link href="">Washington, DC to San Diego</Link>
                    <Link href="">Washington, DC to San Diego</Link>
                    <Link href="">Washington, DC to San Diego</Link>
                    <Link href="">Washington, DC to San Diego</Link>
                    <Link href="">Washington, DC to San Diego</Link>
                    <Link href="">Washington, DC to San Diego</Link>
                </div>
                <div className="contentItem">
                    <h2></h2>
                    <Link href="">Washington, DC to San Diego</Link>
                    <Link href="">Washington, DC to San Diego</Link>
                    <Link href="">Washington, DC to San Diego</Link>
                    <Link href="">Washington, DC to San Diego</Link>
                    <Link href="">Washington, DC to San Diego</Link>
                    <Link href="">Washington, DC to San Diego</Link>
                </div>
                <div className="contentItem">
                    <h2></h2>
                    <Link href="">Washington, DC to San Diego</Link>
                    <Link href="">Washington, DC to San Diego</Link>
                    <Link href="">Washington, DC to San Diego</Link>
                    <Link href="">Washington, DC to San Diego</Link>
                    <Link href="">Washington, DC to San Diego</Link>
                    <Link href="">Washington, DC to San Diego</Link>
                </div>

            </div>
            <div className="ending">
                <p className="rights">© 2023 - Washington DC Auto Transport. All Rights Reserved.</p>
                <div className="flex-between links">
                    <Link href="/terms-and-conditions"> Terms And Conditions</Link>
                    <Link href="/privacy-policy">Privacy Policy</Link>
                </div>
            </div>
        </footer>
    )
}