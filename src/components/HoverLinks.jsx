const HoverLinks = ({ text, cursor }) => {
  return (
    <div className="hover-link" data-cursor={!cursor && `disable`}>
      <div className="hover-in">
        {text} <div>{text}</div>
      </div>
    </div>
  );
};

export default HoverLinks;
