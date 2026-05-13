interface AccordionProps extends React.PropsWithChildren {
  title: string;
}

export function Accordion({ title, children }: AccordionProps) {
  return (
    <div className="ui:group ui:relative">
      <input type="checkbox" className="ui:absolute ui:opacity-0 ui:inset-0 ui:max-h-11 ui:peer ui:cursor-pointer" />
      <label className="ui:flex ui:w-full ui:justify-between ui:items-center ui:select-none ui:text-lg ui:py-2 ui:cursor-pointer ui:transition-all ui:duration-300 ui:group-hover:text-white">{title}</label>
      <i className="ui:absolute ui:top-0 ui:right-0 ui:-z-10 ui:cursor-pointer ui:inline-block ui:not-italic ui:text-3xl ui:select-none ui:transition-all ui:duration-300 ui:peer-checked:rotate-45 ui:group-hover:text-white">&#43;</i>
      <div className="ui:grid ui:grid-rows-[0fr] ui:transition-all ui:ease-in-out ui:duration-500 ui:peer-checked:grid-rows-[1fr] ui:peer-checked:pb-2">
        <p className="ui:overflow-hidden ui:transition-all ui:duration-300 ui:group-hover:text-white">{children}</p>
      </div>
    </div>
  );
}
