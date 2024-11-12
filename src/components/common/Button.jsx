/* eslint-disable react/prop-types */

function Button({ children, moreStyles }) {
  return (
    <button
      className={`text-cream text-base sm:text-xl font-inter rounded-md py-2 px-3 border-none ${moreStyles}`}
    >
      {children}
    </button>
  );
}

export default Button;
