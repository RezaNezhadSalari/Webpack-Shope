import Button from "../../components/Button";
import TextField from "../../components/TextField";
import Box from "../../components/Box";

 export default function auth() {
    return Box({
        className: "flex flex-col shrink w-64 h-14 mt-6 ml-10",
        children:[
            TextField(),
            Button('Go on')
        ]
    })
    
    
}