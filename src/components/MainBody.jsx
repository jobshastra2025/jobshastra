export default function MainBody({ children }) {
  return (
    <>
      <div className=" relative flex flex-row justify-center items-center py-24 px-36">
        <div className="absolute left-0 top-6">
          <img src="./images/ellipse.png" />
        </div>
        {children}
        <div className="absolute bottom-4 right-0">
          <img src="./images/ellipse3.png" />
        </div>
      </div>
    </>
  );
}
