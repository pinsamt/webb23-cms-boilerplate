//Uses config set global components for the
import Header from "../nestable/Header";
export default function Layout({ config, children }) {
  //Create at least a header and footer component
  //Use console.log to determine blok object structure if unsure...

  // console.log(config);
  return (
    <>
      <Header config={config}></Header>
      <main>{children}</main>
      <footer></footer>
    </>
  );
}
