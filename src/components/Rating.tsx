import StarIcon from '../assets/icons/star.svg?react';

type RatingProps = {
  rate: number;
  count?: number;
};

type StarProps = {
  fillPercent: number;
};

function Star({ fillPercent }: StarProps) {
  return (
    <div className="relative w-4 h-4">
      <StarIcon className="absolute inset-0 w-4 h-4 text-gray-300" />

      <div
        className="absolute inset-0 overflow-hidden"
        style={{ width: `${fillPercent}%` }}
      >
        <StarIcon className="w-4 h-4 text-yellow-500" />
      </div>
    </div>
  );
}

function Rating({ rate, count }: RatingProps) {
  const stars = Array.from({ length: 5 }, (_, index) => {
    const rawFill = rate - index;
    const clampedFill = Math.max(0, Math.min(1, rawFill));
    return clampedFill * 100;
  });

  return (
    <div className="flex items-center gap-1">
  <div className="relative group cursor-pointer">
    <div className="flex items-center">
      {stars.map((fillPercent, index) => (
        <Star key={index} fillPercent={fillPercent} />
      ))}
    </div>

    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 hidden group-hover:block">
      <div className="relative bg-gray-800 text-white text-xs px-3 py-2 rounded-md shadow whitespace-nowrap">
        {rate.toFixed(1)} out of 5 stars
        <div className="absolute left-1/2 top-full -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-gray-800" />
      </div>
    </div>
  </div>

  <span className="text-sm text-gray-600 ml-2">
    {rate.toFixed(1)}
    {count !== undefined ? ` (${count})` : ''}
  </span>
</div>
  );
}

export default Rating;