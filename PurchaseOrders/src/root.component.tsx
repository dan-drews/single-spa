export default function Root(props) {
  return <section>{props.name} is mounted! <a href="/COs" onClick={(e) => (window as any).singleSpaNavigate(e)}>COs</a></section>;
}
