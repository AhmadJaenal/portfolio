import { Link } from "react-router-dom";

const sizes = {
  md: "px-5 py-2.5 text-sm",
  lg: "px-6 py-3 text-base",
};

const styles = {
  primary:
    "bg-accent text-white hover:bg-accent/90 border-2 border-transparent shadow-lg shadow-accent/20",
  outline:
    "border-2 border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-black",
  dark: "bg-[#121212] border border-[#262626] text-white hover:bg-[#1a1a1a] hover:border-gray-600",
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-medium text-center transition-all duration-300 focus-visible:ring-2 focus-visible:ring-accent/50 ring-offset-2 ring-offset-white dark:ring-offset-black";

export default function Button({
  as = "button",
  to,
  href,
  size = "lg",
  variant = "primary",
  block = false,
  className = "",
  children,
  ...rest
}) {
  const classes = `${base} ${sizes[size]} ${styles[variant]} ${
    block ? "w-full" : ""
  } ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes} {...rest}>
        {children}
      </Link>
    );
  }
  if (href || as === "a") {
    return (
      <a className={classes} href={href} {...rest}>
        {children}
      </a>
    );
  }
  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}
