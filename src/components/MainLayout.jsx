import Footer from "./Footer";
import Header2 from "./Header2";
import Header1 from "./Header1";

export default function MainLayout({ children }) {
  return (
    <>
      <Header1 />
      <Header2 />
      <main className="bg-[#FAFAFF]">{children}</main>
      <Footer />
    </>
  );
}
