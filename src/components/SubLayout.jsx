import Footer from "./Footer";
import Header2 from "./Header2";
import Header1 from "./Header1";

export default function SubLayout({ children }) {
  return (
    <>
      {/* <Header1 />
      <Header2 /> */}
      <main className="#FAFAFF">{children}</main>
      <Footer />
    </>
  );
}
