const HeroDescription = ({
  description,
  className = 'text-center',
}: {
  description: string;
  className?: string;
}) => {
  return (
    <section>
      <p
        className={`${className} font-semibold text-[17px] leading-6 sm:text-xl mt-[10px] mb-8`}
      >
        {description}
      </p>
    </section>
  );
};

export default HeroDescription;
