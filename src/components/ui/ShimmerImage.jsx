import { useState } from "react";

/**
 * <img> with a skeleton shimmer shown until the image finishes loading.
 * The nearest positioned ancestor must be `relative` / `absolute` so the
 * shimmer overlay (`absolute inset-0`) can fill the image box.
 */
export default function ShimmerImage({
  className = "",
  skeletonClassName = "",
  onLoad,
  onError,
  ...rest
}) {
  const [ready, setReady] = useState(false);

  const done = () => setReady(true);

  return (
    <>
      <span
        aria-hidden="true"
        className={`shimmer pointer-events-none absolute inset-0 z-10 transition-opacity duration-500 ${
          ready ? "opacity-0" : "opacity-100"
        } ${skeletonClassName}`}
      />
      <img
        {...rest}
        onLoad={(e) => {
          done();
          onLoad?.(e);
        }}
        onError={(e) => {
          done();
          onError?.(e);
        }}
        className={`${className} transition duration-500 ${
          ready ? "opacity-100" : "opacity-0"
        }`}
      />
    </>
  );
}
