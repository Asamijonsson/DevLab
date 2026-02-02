export default function Engapp() {
  return (
    <div className=" p-3  flex flex-col items-center justify-center">
      <h1 className="pb-7  text-white font-bold">
        I built an English practice app using Google AI Studio.
        <iframe
          src="https://english-lesson-app-rose.vercel.app/"
          allow="microphone"
          width="100%"
          height="800"
          style={{ border: "none" }}
          title="English Practice App"
        />
      </h1>
    </div>
  );
}
