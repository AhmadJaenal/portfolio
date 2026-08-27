export default function Container({ className = "", children }) {
  return (
    <div className={`mx-auto w-full max-w-screen-xl px-5 ${className}`}>
      {children}
    </div>
  );
}
