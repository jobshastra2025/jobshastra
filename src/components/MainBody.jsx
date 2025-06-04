export default function MainBody({ children }) {
  return (
    <>
<<<<<<< HEAD
      <div className=" relative flex flex-row justify-center items-center py-12 px-36">
=======
      <div className=" relative flex-row justify-center items-center p-5 sm:p-7 lg:py-24 lg:px-36">
>>>>>>> vivek
        <div className="absolute left-0 top-6">
          <img src="../images/ellipse.png" />
          
        </div>
        {children}
        <div className="absolute bottom-4 right-0">
          <img src="../images/ellipse3.png" />
        </div>
      </div>
    </>
  );
}
