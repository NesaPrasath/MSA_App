export function Regex(param){
    
    switch(param){
        case "Hi":
            return "Hello World";
        case "EmailId":
            return `^[^\s@]+@[^\s@]+\.[^\s@]+$`;
        default:
            return "default";

    }

}