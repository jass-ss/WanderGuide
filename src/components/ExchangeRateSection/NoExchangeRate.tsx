const NoExchangeRate = () => {
  return (
    <div className="h-full flex justify-center items-center">
      <img
        className="w-[24px] h-[24px]"
        src="/images/plane-blue.svg"
        alt="plane-icon"
      />
      <span className="text-cool-gray text-sm">환율 정보가 없습니다</span>
    </div>
  );
};

export default NoExchangeRate;
