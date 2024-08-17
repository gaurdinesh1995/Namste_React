const heading = React.createElement("h1",{
    id:"heading"
},"Hello from JS");
// we can give attributes to our element in the above blank object
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading )