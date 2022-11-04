interface GreetProps {
    name?: string
}

const Greet = (props: GreetProps) => {
    return (  
        <div>Hello {props.name ? props.name : "Guest"}</div>
    );
}
 
export default Greet;