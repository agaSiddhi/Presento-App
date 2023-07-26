export default function FooterInput() {


  // useEffect(() => {
  //   if (responseUrl){
  //     console.log("from use effect");

  //   }

  // }, [responseUrl]);

  return (
    <div className="mt-22 flex flex-col align-center">
      
      <section id="copy-right">
        <div>
          <footer className="mt-auto bg-gray-800 text-gray-50 text-center font-bold p-3">
            Made with <span className="heart">❤</span>
          </footer>
        </div>
      </section>
    </div>
  );
}
