import singleSpaReact from "single-spa-react";

export default function Root(props) {

  return <section>{props.name} is mounted!
    <a href="/POs" onClick={(e) => (window as any).singleSpaNavigate(e)}>POs</a></section>;
}
