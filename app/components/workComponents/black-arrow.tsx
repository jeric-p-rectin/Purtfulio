type ArrowProps = {
  arrowStroke: string;
};

export default function Arrow({ arrowStroke }: ArrowProps) {
  return (
    <svg
      className="w-4"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      stroke={arrowStroke}
    >
      <path
        d="M12 4.5L17 9.5M12 4.5L7 9.5M12 4.5L12 11M12 14.5C12 16.1667 11 19.5 7 19.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
