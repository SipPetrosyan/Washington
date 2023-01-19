// import Cookies from "js-cookie";

const api = ({ method, url, body, additionalHeaders }) => {
    if (!method) {
        throw Error("Please specify method for this api call");
    }

    if (!url) {
        throw Error("Please specify url for this api call");
    }

    const modifiedBody = { ...body, ...{ lang: "en", country: "ARM" } };

    const config = {
        method,
        cache: "no-cache",
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            // Authorization: `Bearer ${Cookies.get("authorized")}`,
            ...(additionalHeaders ? additionalHeaders : {}),
        },
        body: JSON.stringify(body ? modifiedBody : body), // body data type must match "Content-Type" header
    };

    return new Promise(async (resolve, reject) => {

        const response = await fetch(url, config);

        if (response.ok) {
            try {
                const result = await response.json();
                resolve(result);
            } catch (error) {
                const result = await response.text();
                resolve(result);
            }
        } else {
            const result = await response.json();
            reject({ result, status: response.status });
        }
    });
};

export default api;