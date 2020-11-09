export const splitTextIntoParagraphs = (textToSplit, className, style={}) => {
  const splitted = textToSplit.split("  ");
  return splitted.map((paragraph) => (
    <p className={className} style={style}>
      {paragraph}
    </p>
  ));
}