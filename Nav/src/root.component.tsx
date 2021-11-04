export default function Root(props) {
  return <section style={{ border: "1px solid black" }}>
    <a href="/" onClick={(e) => (window as any).singleSpaNavigate(e)}>Home</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <a href="/POs" onClick={(e) => (window as any).singleSpaNavigate(e)}>POs</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <a href="/COs" onClick={(e) => (window as any).singleSpaNavigate(e)}>COs</a>
  </section>;
}
