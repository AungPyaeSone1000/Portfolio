const ToolboxIcon = ({ icon }: { icon: React.ElementType }) => {
  const Icon = icon;
  return (
    <>
      <Icon className="size-10 fill-[url(#icon-gradient)] "/>
      <svg className="size-0 absolute">
        <linearGradient id="icon-gradient">
          <stop offset="0%" stopColor="rgb(253 224 71)" />
          <stop offset="100%" stopColor="rgb(110 231 183)"/>
        </linearGradient>
      </svg>
    </>
  );
};
export default ToolboxIcon;
