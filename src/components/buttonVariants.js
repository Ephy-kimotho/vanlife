import { tv } from "tailwind-variants";

const getButtonVariants = tv({
  base: "text-gray-200 text-base py-2 px-3 font-inter font-medium rounded-md bg-softCream",
  variants: {
    type: {
      simple: "hover:bg-darkOrange hover:text-softCream",
      rugged: "hover:bg-darkGreen hover:text-softCream",
      luxury: "hover:bg-night hover:text-softCream",
      clear: "hover:bg-appleRed hover:text-softCream",
    },
    active: {
      true: {
        simple: "bg-darkOrange text-white",
        luxury: "bg-night text-white",
        rugged: "bg-darkGreen text-white",
        clear: "bg-appleRed text-white",
      },
    },
    false: "",
  },

  defaultVariants: {
    active: false,
  },
});

export { getButtonVariants };
