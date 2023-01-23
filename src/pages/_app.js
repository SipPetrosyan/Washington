import '@/styles/globals.scss';
import '@/styles/layout.scss';
import '@/styles/home.scss';
import '@/styles/quote.scss';
import '@/styles/blogs.scss';
import '@/styles/post.scss';
import '@/styles/contact.scss';
import '@/styles/aboutCompany.scss';
import '@/styles/termsAndConditions.scss';
import '@/styles/privacyPolicy.scss';
import '../../public/icons/icomoon/style.css'
import 'react-phone-number-input/style.css'
import {Provider} from "react-redux";
import store from "@/store";
import Layout from "@/components/layout";

export default function App({Component, pageProps}) {

    return (
        <Provider store={store}>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </Provider>
    )
}
