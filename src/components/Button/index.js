 import Box from "../Box";

 export default function Button(params) {
    const objectCondition = (
    typeof params === 'object' &&
    !Array.isArray(params) &&
    params !== null
    )
    return Box({
        element: 'button',
        children: objectCondition ? params.children : params,
        className: "shadow bg-purple-500 hover: bg-purpule-400 focus:shadow-outline focus:outline-none text-white font-bold py-5 px-20 rounded"
    
    })
}