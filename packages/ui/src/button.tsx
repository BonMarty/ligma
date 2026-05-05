interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  variant?: 'primary' | 'secondary';
}

const buttonVariants = {
  primary: 'ui:bg-purple-500 ui:border-purple-500 ui:hover:bg-violet-500 ui:hover:border-violet-500',
  secondary: 'ui:bg-transparent ui:border-white ui:hover:bg-white ui:hover:border-white ui:hover:text-black',
} as const;

export function Button(props: ButtonProps) {
  const { children, variant, className, ...rest } = props;

  return (
    <button className={`ui:px-4 ui:py-1.5 ui:rounded ui:border ui:cursor-pointer ui:transition-all ui:duration-300 ${variant ? buttonVariants[variant] : buttonVariants['primary']} ${className ?? ''}`} {...rest}>
      {children}
    </button>
  );
}
