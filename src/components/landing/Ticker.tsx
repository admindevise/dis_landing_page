interface TickerProps {
  items: string[];
}

/** Decorative keyword ribbon; content is duplicated for a seamless loop. */
export default function Ticker({ items }: TickerProps) {
  const track = [...items, ...items];
  return (
    <div className="lp-ticker" aria-hidden="true">
      <div className="lp-ticker__track">
        {track.map((item, index) => (
          <span key={`${item}-${index}`} className="lp-ticker__item">{item}</span>
        ))}
      </div>
    </div>
  );
}
